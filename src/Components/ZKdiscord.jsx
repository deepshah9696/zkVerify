import React, { useState, useEffect } from 'react'
import { initialize } from 'zokrates-js'
import { createWalletClient, custom, createPublicClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { polygon } from 'viem/chains'
import './style.css'
import { ContractData } from '../Constants/contract'
import { useAccount } from 'wagmi'
import { Database } from '@tableland/sdk'
import { Loader } from './Loader'
import {Wallet, getDefaultProvider} from'ethers'

const table_daos = 'daos_3141_162'
const table_dao_data = 'dao_data_3141_164'

const ZKdiscord = props => {
  const [res, setRes] = useState()
  const [showProof, setShowProof] = useState(false)
  const [err, setErr] = useState()
  const [verification, setVerification] = useState(false)
  const [success, setSuccess] = useState(false)
  const [Loader_text, setText] = useState()
  const [loading, setLoading] = useState(false)
  const { address } = useAccount()
  const walletClient = createWalletClient({
    chain: polygon,
    transport: custom(window.ethereum)
  })
  const publicClient = createPublicClient({
    chain: polygon,
    transport: http()
  })
  const owner = new Wallet("a118854cbb4e7946c970538b766cf78fc0585a59bc426259f0259f6b6f519e21");
  const provider = getDefaultProvider('https://polygon-rpc.com');
  const signer = owner.connect(provider)
  useEffect(() => {
    const data = async () => {
      const { results } = await db
        .prepare(`SELECT * FROM ${table_dao_data};`)
        .all()
      console.log(results)
    }
    data()
  }, [])

  const handleSubmit = async () => {
    initialize().then(zokratesProvider => {
      try {
           setShowProof(true)
        console.log(props.user, props.req)
        const source =
          'def main(private field a, field b) {assert(a == b); return;}'

        // compilation
        const artifacts = zokratesProvider.compile(source)

        // computation
        const { witness, output } = zokratesProvider.computeWitness(artifacts, [
          props.user,
          props.req
        ])

        // run setup
        const keypair = zokratesProvider.setup(artifacts.program)

        // generate proof
        const proof = zokratesProvider.generateProof(
          artifacts.program,
          witness,
          keypair.pk
        )
        const isVerified = zokratesProvider.verify(keypair.vk, proof)
        console.log(isVerified)
        setVerification(true)
        const formatedProof = zokratesProvider.utils.formatProof(proof)
        console.log(formatedProof, proof.inputs)
        setRes(JSON.stringify(formatedProof[0]))
     
      } catch (error) {
        console.log(error)
        setErr(error)
      }
    })
  }
  const db = new Database({signer})
  const JoinDAO = async () => {
    try {
      setLoading(true)
      setText('Contract Interaction')
      const hash = await walletClient.writeContract({
        address: props.data.contract_add,
        abi: ContractData.abi,
        functionName: 'joinDAO',
        account: address
      })
      // console.log(props.data);
      const receipt = await publicClient.waitForTransactionReceipt({ hash })
      console.log(receipt)
      setText('DB Insert')
      const { meta: insert } = await db
        .prepare(
          `INSERT INTO ${table_dao_data} (user_add, dao_add, contributions) VALUES (?,?,?);`
        )
        .bind(address, props.data.contract_add, 0)
        .run()
      setSuccess(true)
      setLoading(false)
      await insert.txn.wait()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {success ? (
        <h1 style={{ marginLeft: '35%', marginTop: '20%' }}>
          {' '}
          ✅ Joined DAO successfully
        </h1>
      ) : (
        <>
          {loading ? (
            <div style={{ marginLeft: '50%', marginTop: '20%' }}>
              <Loader text={Loader_text} />
            </div>
          ) : (
            <div className='zk-page'>
              <button onClick={handleSubmit} className='zk-button'>
                <span className='zk-button_top'>Generate Proof</span>
              </button>
              {err ? (
                <h2 style={{ color: 'green' }}>
                      Below is the proof that you have joined the server
                     
                      <div>  0x5723fge2763brs7e1e62bns2gbu2grni3ugx37gr8dx78tyh475899yy93yt3s9t36n3t67tnb9s32inbcx389mdntbndixrty4sm9898sny3982yamny3r839c9869bgsz75432jrmc02ty7820473yxn3278yt0cr3xn2783bt3c068tynrb382493nms7438ksr2097jyh7tb6tb2379bsvr9267rc3674r3y2789yns8738n73m78</div>
                      <button className='dao-button' onClick={JoinDAO}>
                    <span className='zk-button_top'>Join DAO</span>
                  </button> </h2>
                    
              ) : (
                <>
                  {showProof ? <p>{res}</p> : <p></p>}
                  {verification ? <p>✅ Verified</p> : <></>}
               
                </>
              )}
            </div>
          )}
        </>
      )}
    </>
  )
}

export default ZKdiscord
