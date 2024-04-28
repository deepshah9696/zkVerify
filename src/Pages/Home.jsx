import React from 'react'
import { Database } from '@tableland/sdk'

const Home = () => {
  const dummy =async ()=>{
    const db = new Database();
    const { meta: update } = await db
        .prepare(`UPDATE daos_3141_162 SET contract_add="0xf75d5e6f919150e34d626d1981ee2374f861bcb0" where contract_add="0xca5b5ae9a41bf035f7b16cfc3a662f0a640d08f455763c97f83d7ac092159eb3";`)
        .run()
      await update.txn.wait();
  }
  return (
    <fieldset style={{marginLeft:'40px',textAlign:'center'}}>
    <h1>
      zkVerification🤯 <br /><br /> Verify your eligibility and claim DAO rewards anonymously
    </h1>
    
    </fieldset>
  )
}

export default Home