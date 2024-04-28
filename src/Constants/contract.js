export const ContractData = {
  abi: [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "CID",
          "type": "string"
        }
      ],
      "name": "contribute",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "joinDAO",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable[]",
          "name": "eligibleMembers",
          "type": "address[]"
        }
      ],
      "name": "sendReward",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_rewardAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_capacity",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "cid",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getContribution",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "members",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "rewardAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalContributors",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  bytecode: "60806040526040516200133d3803806200133d8339818101604052810190620000299190620000cd565b8134146200003657600080fd5b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160038190555080600481905550505062000114565b600080fd5b6000819050919050565b620000a78162000092565b8114620000b357600080fd5b50565b600081519050620000c7816200009c565b92915050565b60008060408385031215620000e757620000e66200008d565b5b6000620000f785828601620000b6565b92505060206200010a85828601620000b6565b9150509250929050565b61121980620001246000396000f3fe6080604052600436106100865760003560e01c8063bc9c249311610059578063bc9c24931461014c578063f251fc8c14610189578063f43957ae146101b4578063f63d13d7146101d0578063f7b2a7be146101e757610086565b806321eff7fc1461008b5780635c43217b146100c85780635daf08ca146100e45780638da5cb5b14610121575b600080fd5b34801561009757600080fd5b506100b260048036038101906100ad9190610752565b610212565b6040516100bf9190610798565b60405180910390f35b6100e260048036038101906100dd91906108f9565b61025b565b005b3480156100f057600080fd5b5061010b6004803603810190610106919061096e565b61039c565b60405161011891906109aa565b60405180910390f35b34801561012d57600080fd5b506101366103db565b60405161014391906109aa565b60405180910390f35b34801561015857600080fd5b50610173600480360381019061016e91906109c5565b610401565b6040516101809190610a84565b60405180910390f35b34801561019557600080fd5b5061019e6104ae565b6040516101ab9190610798565b60405180910390f35b6101ce60048036038101906101c99190610bac565b6104bb565b005b3480156101dc57600080fd5b506101e561062c565b005b3480156101f357600080fd5b506101fc6106da565b6040516102099190610798565b60405180910390f35b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b67016345785d8a000034146102a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029c90610c41565b60405180910390fd5b6001600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102f59190610c90565b9250508190555080600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002090816103989190610ed0565b5050565b600281815481106103ac57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600660205281600052604060002060205280600052604060002060009150915050805461042d90610cf3565b80601f016020809104026020016040519081016040528092919081815260200182805461045990610cf3565b80156104a65780601f1061047b576101008083540402835291602001916104a6565b820191906000526020600020905b81548152906001019060200180831161048957829003601f168201915b505050505081565b6000600280549050905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461054b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054290610fee565b60405180910390fd5b60028054905081511115610594576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058b90611080565b60405180910390fd5b600081516003546105a591906110cf565b905060005b8251811015610627578281815181106105c6576105c5611100565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610613573d6000803e3d6000fd5b50808061061f9061112f565b9150506105aa565b505050565b60045460028054905010610675576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066c906111c3565b60405180910390fd5b6002339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60035481565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061071f826106f4565b9050919050565b61072f81610714565b811461073a57600080fd5b50565b60008135905061074c81610726565b92915050565b600060208284031215610768576107676106ea565b5b60006107768482850161073d565b91505092915050565b6000819050919050565b6107928161077f565b82525050565b60006020820190506107ad6000830184610789565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610806826107bd565b810181811067ffffffffffffffff82111715610825576108246107ce565b5b80604052505050565b60006108386106e0565b905061084482826107fd565b919050565b600067ffffffffffffffff821115610864576108636107ce565b5b61086d826107bd565b9050602081019050919050565b82818337600083830152505050565b600061089c61089784610849565b61082e565b9050828152602081018484840111156108b8576108b76107b8565b5b6108c384828561087a565b509392505050565b600082601f8301126108e0576108df6107b3565b5b81356108f0848260208601610889565b91505092915050565b60006020828403121561090f5761090e6106ea565b5b600082013567ffffffffffffffff81111561092d5761092c6106ef565b5b610939848285016108cb565b91505092915050565b61094b8161077f565b811461095657600080fd5b50565b60008135905061096881610942565b92915050565b600060208284031215610984576109836106ea565b5b600061099284828501610959565b91505092915050565b6109a481610714565b82525050565b60006020820190506109bf600083018461099b565b92915050565b600080604083850312156109dc576109db6106ea565b5b60006109ea8582860161073d565b92505060206109fb85828601610959565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610a3f578082015181840152602081019050610a24565b60008484015250505050565b6000610a5682610a05565b610a608185610a10565b9350610a70818560208601610a21565b610a79816107bd565b840191505092915050565b60006020820190508181036000830152610a9e8184610a4b565b905092915050565b600067ffffffffffffffff821115610ac157610ac06107ce565b5b602082029050602081019050919050565b600080fd5b6000610ae2826106f4565b9050919050565b610af281610ad7565b8114610afd57600080fd5b50565b600081359050610b0f81610ae9565b92915050565b6000610b28610b2384610aa6565b61082e565b90508083825260208201905060208402830185811115610b4b57610b4a610ad2565b5b835b81811015610b745780610b608882610b00565b845260208401935050602081019050610b4d565b5050509392505050565b600082601f830112610b9357610b926107b3565b5b8135610ba3848260208601610b15565b91505092915050565b600060208284031215610bc257610bc16106ea565b5b600082013567ffffffffffffffff811115610be057610bdf6106ef565b5b610bec84828501610b7e565b91505092915050565b7f696e76616c696420616d6f756e742073656e7400000000000000000000000000600082015250565b6000610c2b601383610a10565b9150610c3682610bf5565b602082019050919050565b60006020820190508181036000830152610c5a81610c1e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610c9b8261077f565b9150610ca68361077f565b9250828201905080821115610cbe57610cbd610c61565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610d0b57607f821691505b602082108103610d1e57610d1d610cc4565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610d867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610d49565b610d908683610d49565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610dcd610dc8610dc38461077f565b610da8565b61077f565b9050919050565b6000819050919050565b610de783610db2565b610dfb610df382610dd4565b848454610d56565b825550505050565b600090565b610e10610e03565b610e1b818484610dde565b505050565b5b81811015610e3f57610e34600082610e08565b600181019050610e21565b5050565b601f821115610e8457610e5581610d24565b610e5e84610d39565b81016020851015610e6d578190505b610e81610e7985610d39565b830182610e20565b50505b505050565b600082821c905092915050565b6000610ea760001984600802610e89565b1980831691505092915050565b6000610ec08383610e96565b9150826002028217905092915050565b610ed982610a05565b67ffffffffffffffff811115610ef257610ef16107ce565b5b610efc8254610cf3565b610f07828285610e43565b600060209050601f831160018114610f3a5760008415610f28578287015190505b610f328582610eb4565b865550610f9a565b601f198416610f4886610d24565b60005b82811015610f7057848901518255600182019150602085019450602081019050610f4b565b86831015610f8d5784890151610f89601f891682610e96565b8355505b6001600288020188555050505b505050505050565b7f4f6e6c79206f776e65722063616e206469736275727365207265776172647300600082015250565b6000610fd8601f83610a10565b9150610fe382610fa2565b602082019050919050565b6000602082019050818103600083015261100781610fcb565b9050919050565b7f456c696769626c652073686f756c64206265206c657373207468616e20636f6e60008201527f7472696275746572730000000000000000000000000000000000000000000000602082015250565b600061106a602983610a10565b91506110758261100e565b604082019050919050565b600060208201905081810360008301526110998161105d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006110da8261077f565b91506110e58361077f565b9250826110f5576110f46110a0565b5b828204905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061113a8261077f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361116c5761116b610c61565b5b600182019050919050565b7f44414f2069732066756c6c000000000000000000000000000000000000000000600082015250565b60006111ad600b83610a10565b91506111b882611177565b602082019050919050565b600060208201905081810360008301526111dc816111a0565b905091905056fea26469706673582212209449e7acf5ba34dee5e0371b73214f171d194cc1620a0c7f912431d1c07f66b664736f6c63430008120033"
} 


export const dealClient = {
    address: '0xdA78c0562570A2680cD95B93fFd17d611f3d7aF4',
    abi: [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "int256",
            "name": "errorCode",
            "type": "int256"
          }
        ],
        "name": "ActorError",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "FailToCallActor",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint64",
            "name": "",
            "type": "uint64"
          }
        ],
        "name": "InvalidCodec",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "InvalidResponseLength",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "NotEnoughBalance",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "id",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "uint64",
            "name": "size",
            "type": "uint64"
          },
          {
            "indexed": true,
            "internalType": "bool",
            "name": "verified",
            "type": "bool"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          }
        ],
        "name": "DealProposalCreate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "string",
            "name": "received",
            "type": "string"
          }
        ],
        "name": "ReceivedDataCap",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "AUTHENTICATE_MESSAGE_METHOD_NUM",
        "outputs": [
          {
            "internalType": "uint64",
            "name": "",
            "type": "uint64"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "DATACAP_RECEIVER_HOOK_METHOD_NUM",
        "outputs": [
          {
            "internalType": "uint64",
            "name": "",
            "type": "uint64"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "MARKET_ACTOR_ETH_ADDRESS",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "MARKET_NOTIFY_DEAL_METHOD_NUM",
        "outputs": [
          {
            "internalType": "uint64",
            "name": "",
            "type": "uint64"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "VERIFREG_ACTOR_ETH_ADDRESS",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "addBalance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "dealProposals",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "idx",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "valid",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "deals",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "piece_cid",
            "type": "bytes"
          },
          {
            "internalType": "uint64",
            "name": "piece_size",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "verified_deal",
            "type": "bool"
          },
          {
            "internalType": "string",
            "name": "label",
            "type": "string"
          },
          {
            "internalType": "int64",
            "name": "start_epoch",
            "type": "int64"
          },
          {
            "internalType": "int64",
            "name": "end_epoch",
            "type": "int64"
          },
          {
            "internalType": "uint256",
            "name": "storage_price_per_epoch",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "provider_collateral",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "client_collateral",
            "type": "uint256"
          },
          {
            "internalType": "uint64",
            "name": "extra_params_version",
            "type": "uint64"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "location_ref",
                "type": "string"
              },
              {
                "internalType": "uint64",
                "name": "car_size",
                "type": "uint64"
              },
              {
                "internalType": "bool",
                "name": "skip_ipni_announce",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "remove_unsealed_copy",
                "type": "bool"
              }
            ],
            "internalType": "struct ExtraParamsV1",
            "name": "extra_params",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "dealsLength",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "getDealByIndex",
        "outputs": [
          {
            "components": [
              {
                "internalType": "bytes",
                "name": "piece_cid",
                "type": "bytes"
              },
              {
                "internalType": "uint64",
                "name": "piece_size",
                "type": "uint64"
              },
              {
                "internalType": "bool",
                "name": "verified_deal",
                "type": "bool"
              },
              {
                "internalType": "string",
                "name": "label",
                "type": "string"
              },
              {
                "internalType": "int64",
                "name": "start_epoch",
                "type": "int64"
              },
              {
                "internalType": "int64",
                "name": "end_epoch",
                "type": "int64"
              },
              {
                "internalType": "uint256",
                "name": "storage_price_per_epoch",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "provider_collateral",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "client_collateral",
                "type": "uint256"
              },
              {
                "internalType": "uint64",
                "name": "extra_params_version",
                "type": "uint64"
              },
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "location_ref",
                    "type": "string"
                  },
                  {
                    "internalType": "uint64",
                    "name": "car_size",
                    "type": "uint64"
                  },
                  {
                    "internalType": "bool",
                    "name": "skip_ipni_announce",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "remove_unsealed_copy",
                    "type": "bool"
                  }
                ],
                "internalType": "struct ExtraParamsV1",
                "name": "extra_params",
                "type": "tuple"
              }
            ],
            "internalType": "struct DealRequest",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "proposalId",
            "type": "bytes32"
          }
        ],
        "name": "getDealProposal",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "proposalId",
            "type": "bytes32"
          }
        ],
        "name": "getExtraParams",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "extra_params",
            "type": "bytes"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes",
            "name": "cid",
            "type": "bytes"
          }
        ],
        "name": "getProposalIdSet",
        "outputs": [
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "proposalId",
                "type": "bytes32"
              },
              {
                "internalType": "bool",
                "name": "valid",
                "type": "bool"
              }
            ],
            "internalType": "struct ProposalIdSet",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes",
            "name": "cid",
            "type": "bytes"
          }
        ],
        "name": "getProviderSet",
        "outputs": [
          {
            "components": [
              {
                "internalType": "bytes",
                "name": "provider",
                "type": "bytes"
              },
              {
                "internalType": "bool",
                "name": "valid",
                "type": "bool"
              }
            ],
            "internalType": "struct ProviderSet",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint64",
            "name": "method",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "",
            "type": "uint64"
          },
          {
            "internalType": "bytes",
            "name": "params",
            "type": "bytes"
          }
        ],
        "name": "handle_filecoin_method",
        "outputs": [
          {
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
          },
          {
            "internalType": "uint64",
            "name": "",
            "type": "uint64"
          },
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "bytes",
                "name": "piece_cid",
                "type": "bytes"
              },
              {
                "internalType": "uint64",
                "name": "piece_size",
                "type": "uint64"
              },
              {
                "internalType": "bool",
                "name": "verified_deal",
                "type": "bool"
              },
              {
                "internalType": "string",
                "name": "label",
                "type": "string"
              },
              {
                "internalType": "int64",
                "name": "start_epoch",
                "type": "int64"
              },
              {
                "internalType": "int64",
                "name": "end_epoch",
                "type": "int64"
              },
              {
                "internalType": "uint256",
                "name": "storage_price_per_epoch",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "provider_collateral",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "client_collateral",
                "type": "uint256"
              },
              {
                "internalType": "uint64",
                "name": "extra_params_version",
                "type": "uint64"
              },
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "location_ref",
                    "type": "string"
                  },
                  {
                    "internalType": "uint64",
                    "name": "car_size",
                    "type": "uint64"
                  },
                  {
                    "internalType": "bool",
                    "name": "skip_ipni_announce",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "remove_unsealed_copy",
                    "type": "bool"
                  }
                ],
                "internalType": "struct ExtraParamsV1",
                "name": "extra_params",
                "type": "tuple"
              }
            ],
            "internalType": "struct DealRequest",
            "name": "deal",
            "type": "tuple"
          }
        ],
        "name": "makeDealProposal",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "name": "pieceDeals",
        "outputs": [
          {
            "internalType": "uint64",
            "name": "",
            "type": "uint64"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "name": "pieceProviders",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "provider",
            "type": "bytes"
          },
          {
            "internalType": "bool",
            "name": "valid",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "name": "pieceToProposal",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "proposalId",
            "type": "bytes32"
          },
          {
            "internalType": "bool",
            "name": "valid",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "client",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "withdrawBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    bytecode: {
      "object": "0x608060405234801561001057600080fd5b50600580546001600160a01b03191633179055614a54806100326000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c806378133bb2116100b8578063d91921ed1161007c578063d91921ed146102f9578063dd08881c1461030e578063dd27fe901461034d578063f44a890314610360578063f4b2e4d814610380578063f82704f01461039357600080fd5b806378133bb214610279578063868e10c4146102995780638da5cb5b146102bb57806396925ae6146102ce578063b34ba252146102ee57600080fd5b8063297ab486116100ff578063297ab486146101fd57806329aa3d2a146102055780634634aed5146102135780636067f4541461023357806374112d661461023e57600080fd5b80627067901461013b57806303988f841461015c5780630a0e0c91146101865780630cf20cc9146101c25780632522f2b7146101e2575b600080fd5b610146639d8b067881565b604051610153919061316f565b60405180910390f35b61016f61016a366004613195565b6103b4565b6040516101539b9a99989796959493929190613284565b61014661019436600461342f565b600381805160208101820180518482526020830160208501209152546001600160401b031693508492505050565b6101d56101d036600461348e565b610627565b60405161015391906134cb565b6101f0600660ff60981b0181565b60405161015391906134e2565b6004546101d5565b6101f0600560ff60981b0181565b610226610221366004613195565b61068a565b60405161015391906134f0565b61014663f98c996681565b61026b61024c366004613195565b6000602052806000526040600020805460019091015490915060ff1682565b604051610153929190613501565b61028c610287366004613566565b6106ae565b60405161015391906135d9565b6102ac6102a7366004613604565b61079e565b6040516101539392919061367a565b6005546101f0906001600160a01b031681565b6102e16102dc366004613195565b610863565b604051610153919061379a565b61014663de180de381565b61030c610307366004613195565b610b1d565b005b61026b61031c36600461342f565b600181805160208101820180518482526020830160208501209152805460019091015490945060ff16925084915050565b6101d561035b3660046137c1565b610b49565b61037361036e366004613566565b610cbe565b604051610153919061381e565b61022661038e366004613195565b610d1d565b6103a66103a136600461342f565b610df0565b60405161015392919061382c565b600481815481106103c457600080fd5b906000526020600020600a90910201805490915081906103e390613862565b80601f016020809104026020016040519081016040528092919081815260200182805461040f90613862565b801561045c5780601f106104315761010080835404028352916020019161045c565b820191906000526020600020905b81548152906001019060200180831161043f57829003601f168201915b50505050600183015460028401805493946001600160401b03831694600160401b90930460ff1693509161048f90613862565b80601f01602080910402602001604051908101604052809291908181526020018280546104bb90613862565b80156105085780601f106104dd57610100808354040283529160200191610508565b820191906000526020600020905b8154815290600101906020018083116104eb57829003601f168201915b505050506003830154600484015460058501546006860154600780880154969785820b97600160401b90960490910b95509293919290916001600160401b0316906008810160405180608001604052908160008201805461056890613862565b80601f016020809104026020016040519081016040528092919081815260200182805461059490613862565b80156105e15780601f106105b6576101008083540402835291602001916105e1565b820191906000526020600020905b8154815290600101906020018083116105c457829003601f168201915b5050509183525050600191909101546001600160401b038116602083015260ff600160401b8204811615156040840152600160481b90910416151560609091015290508b565b6005546000906001600160a01b0316331461064157600080fd5b6000604051806040016040528061065786610eab565b815260200161066585610ef4565b90529050600061067482610f43565b905061067f81610f8d565b925050505b92915050565b6060600061069783610fae565b90506106a78161014001516112b8565b9392505050565b6106c960405160408082019052606081526000602082015290565b600283836040516106db92919061389b565b908152602001604051809103902060405180604001604052908160008201805461070490613862565b80601f016020809104026020016040519081016040528092919081815260200182805461073090613862565b801561077d5780601f106107525761010080835404028352916020019161077d565b820191906000526020600020905b81548152906001019060200180831161076057829003601f168201915b50505091835250506001919091015460ff1615156020909101529392505050565b60008060608082639d8b0677196001600160401b038916016107f1576107c386611315565b60006107cf60016114a2565b90506107dc8160016114c2565b6107e5816114dd565b92506051915050610853565b63f98c9965196001600160401b038916016108145761080f8661150a565b610853565b63de180de2196001600160401b038916016108325761080f86611680565b60405162461bcd60e51b815260040161084a906138fa565b60405180910390fd5b6000989097509095509350505050565b61086b612fab565b6004828154811061087e5761087e61390a565b90600052602060002090600a0201604051806101600160405290816000820180546108a890613862565b80601f01602080910402602001604051908101604052809291908181526020018280546108d490613862565b80156109215780601f106108f657610100808354040283529160200191610921565b820191906000526020600020905b81548152906001019060200180831161090457829003601f168201915b505050918352505060018201546001600160401b0381166020830152600160401b900460ff161515604082015260028201805460609092019161096390613862565b80601f016020809104026020016040519081016040528092919081815260200182805461098f90613862565b80156109dc5780601f106109b1576101008083540402835291602001916109dc565b820191906000526020600020905b8154815290600101906020018083116109bf57829003601f168201915b50505091835250506003820154600781810b6020840152600160401b909104810b6040808401919091526004840154606084015260058401546080840152600684015460a0840152908301546001600160401b031660c083015260e090910190600883019051806080016040529081600082018054610a5a90613862565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8690613862565b8015610ad35780601f10610aa857610100808354040283529160200191610ad3565b820191906000526020600020905b815481529060010190602001808311610ab657829003601f168201915b5050509183525050600191909101546001600160401b038116602083015260ff600160401b8204811615156040840152600160481b90910416151560609091015290525092915050565b6005546001600160a01b03163314610b3457600080fd5b610b46610b4030610eab565b826116de565b50565b6005546000906001600160a01b03163314610b6357600080fd5b600480546001810182556000918252908390829060209020600a90910201610b8b8282613e6a565b50506000423383604051602001610ba493929190613e9c565b60405160208183030381529060405280519060200120905060405160408082018152838252600160208084019190915260008481529081905220815181556020820151600191909101805460ff19169115159190911790555060405160408082019052818152600160208201819052610c1d8680613920565b604051610c2b92919061389b565b9081526020016040518091039020815181556020820151600191909101805460ff191691151591909117905550610c686060850160408601613ede565b1515817ffd6419d07e4c269e58d0c63969756c2124155b4a8d6dd08b8cd46e3a9acbf625610c9c6040880160208901613eff565b8760c00135604051610caf929190613f20565b60405180910390a39392505050565b610cd8604051604080820190526000808252602082015290565b60018383604051610cea92919061389b565b9081526020016040518091039020604051604081810190528154815260019091015460ff16151560208201529392505050565b60606000610d2a83610fae565b9050610d34613045565b604051602081016040528083519052815260208201516001600160401b03166020820152604082015115156040820152610d6d30610eab565b6060820152610d7c600061172a565b6080820152606082015160a0820152608082015160070b60c082015260a082015160070b60e0820152610db260c0830151610ef4565b610100820152610dc560e0830151610ef4565b610120820152610dd9610100830151610ef4565b610140820152610de881611782565b949350505050565b6002818051602081018201805184825260208301602085012091528054909450849350610e1f92509050613862565b80601f0160208091040260200160405190810160405280929190818152602001828054610e4b90613862565b8015610e985780601f10610e6d57610100808354040283529160200191610e98565b820191906000526020600020905b815481529060010190602001808311610e7b57829003601f168201915b5050506001909301549192505060ff1682565b610ebf604051602081016040526060815290565b604051806020016040528083604051602001610edb9190613f3b565b6040516020818303038152906040528152509050919050565b610f0f60405160408082019052606081526000602082015290565b6000610f1c836000611876565b90506000604051604080820190528083518152602001836020015115159052949350505050565b610f5e60405160408082019052606081526000602082015290565b6000610f69836118c7565b90506000610f8260056387ed0a646051856000806118ff565b9050610de8816119f1565b600080610f9f83518460200151611a85565b905060008151610de890613f65565b610fb6612fab565b6000828152602081905260408120604051604080820190528154815260019091015460ff16151560208201908152909150516110045760405162461bcd60e51b815260040161084a90613fe1565b60048151815481106110185761101861390a565b90600052602060002090600a02016040518061016001604052908160008201805461104290613862565b80601f016020809104026020016040519081016040528092919081815260200182805461106e90613862565b80156110bb5780601f10611090576101008083540402835291602001916110bb565b820191906000526020600020905b81548152906001019060200180831161109e57829003601f168201915b505050918352505060018201546001600160401b0381166020830152600160401b900460ff16151560408201526002820180546060909201916110fd90613862565b80601f016020809104026020016040519081016040528092919081815260200182805461112990613862565b80156111765780601f1061114b57610100808354040283529160200191611176565b820191906000526020600020905b81548152906001019060200180831161115957829003601f168201915b50505091835250506003820154600781810b6020840152600160401b909104810b6040808401919091526004840154606084015260058401546080840152600684015460a0840152908301546001600160401b031660c083015260e0909101906008830190518060800160405290816000820180546111f490613862565b80601f016020809104026020016040519081016040528092919081815260200182805461122090613862565b801561126d5780601f106112425761010080835404028352916020019161126d565b820191906000526020600020905b81548152906001019060200180831161125057829003601f168201915b5050509183525050600191909101546001600160401b038116602083015260ff600160401b8204811615156040840152600160481b9091041615156060909101529052509392505050565b606060006112c660406114a2565b90506112d3816004611ab7565b6112df83518290611ac3565b6112ee83602001518290611ae1565b6112fd836040015182906114c2565b61130c836060015182906114c2565b6106a7816114dd565b33600560ff60981b011461133b5760405162461bcd60e51b815260040161084a90614035565b600061134682611aed565b905060006113578260200151611b4f565b905060008151519050600181604051611370919061406d565b90815260200160405180910390206001015460ff166113a15760405162461bcd60e51b815260040161084a906140c0565b6002816040516113b1919061406d565b90815260200160405180910390206001015460ff16156113e35760405162461bcd60e51b815260040161084a9061412a565b600061140c6001836040516113f8919061406d565b908152602001604051809103902054610fae565b90508060400151151583604001511515146114395760405162461bcd60e51b815260040161084a9061416e565b8060c0015161144c846101000151610f8d565b111561146a5760405162461bcd60e51b815260040161084a906141c4565b80610100015161147e846101400151610f8d565b1061149b5760405162461bcd60e51b815260040161084a9061421e565b5050505050565b6114aa61312b565b6114b5815183611d84565b5060006020820152919050565b6114d982826114d2576014611e01565b6015611e01565b5050565b60608160200151156115015760405162461bcd60e51b815260040161084a90614251565b81515192915050565b33600560ff60981b01146115305760405162461bcd60e51b815260040161084a90614035565b600061153b82611e10565b905060006115498251611b4f565b9050600181515160405161155d919061406d565b90815260200160405180910390206001015460ff1661158e5760405162461bcd60e51b815260040161084a906140c0565b60028151516040516115a0919061406d565b90815260200160405180910390206001015460ff16156115d25760405162461bcd60e51b815260040161084a9061412a565b60405180604001604052808260800151518152600160209091015260028251516040516115ff919061406d565b90815260200160405180910390208151819061161b9082614261565b506020820151600191909101805460ff1916911515919091179055506020820151600382515160405161164e919061406d565b9081526020016040518091039020805467ffffffffffffffff19166001600160401b0392909216919091179055505050565b33600660ff60981b01146116a65760405162461bcd60e51b815260040161084a90614384565b7f10aa319ed8cad9bceb033c0c2788c4ae17469ac844e4c6e2c2e20e74ca8a7be86040516116d3906143bc565b60405180910390a150565b60006116e983611e7c565b905060006117026005633105f1a66051858760006118ff565b905080511561172457604051630e74990760e01b815260040160405180910390fd5b50505050565b61173e604051602081016040526060815290565b600061174983611e98565b90506040516020810160405280825160405160200161176891906143d9565b604051602081830303815290604052815250915050919050565b6060600061179060406114a2565b905061179d81600b611ab7565b6117d18351516040516020016117b391906143f0565b60405160208183030381529060405282611f1790919063ffffffff16565b6117e083602001518290611ae1565b6117ef836040015182906114c2565b6117ff8360600151518290611f39565b61180f8360800151518290611f39565b61181e8360a001518290611ac3565b61182d8360c001518290611f46565b61183c8360e001518290611f46565b61185461184d846101000151611f74565b8290611f39565b61186561184d846101200151611f74565b61130c61184d846101400151611f74565b61189c604051806060016040528060608152602001600015158152602001600081525090565b6106a7836040516020016118b09190614405565b604051602081830303815290604052836000612089565b606060006118d560406114a2565b90506118e2816002611ab7565b6118ef8351518290611f39565b61130c61184d8460200151611f74565b60604783811015611927578084604051634787a10360e11b815260040161084a92919061441a565b6000806005607f60991b01898787611940576000611943565b60015b8b8b8f60405160200161195b96959493929190614431565b604051602081830303815290604052604051611977919061406d565b600060405180830381855af49150503d80600081146119b2576040513d603f01601f191681016040523d815291503d6000602084013e6119b7565b606091505b5091509150816119da57604051638a7db5bf60e01b815260040160405180910390fd5b6119e38161215e565b9a9950505050505050505050565b611a0c60405160408082019052606081526000602082015290565b606060008084511115611a3b57611a238482612235565b9092509050600082511115611a3b57610de8826123a8565b60405160408082019052806000604051818152601f19601f8301168101602001604052908015611a72576020820181803683370190505b5081526000602090910152949350505050565b611aab604051806060016040528060608152602001600015158152602001600081525090565b6106a783836000612089565b6114d98260048361250e565b611ad08260038351612515565b611adc81835190612632565b505050565b6114d982600083612515565b611b07604051604080820190526060808252602082015290565b600080611b148482612659565b9250905060028114611b2857611b28614492565b611b328483612235565b9084529150611b418483612235565b506020840152509092915050565b611b57613045565b600080611b648482612659565b92509050600b8114611b7857611b78614492565b6060611b848584612235565b9350905080600081518110611b9b57611b9b61390a565b60200101516001600160f81b03191615611bb757611bb7614492565b60018151611bc591906144be565b6001600160401b03811115611bdc57611bdc61333a565b604051818152601f19601f8301168101602001604052908015611c06576020820181803683370190505b5084515260015b8151811015611c7e57818181518110611c2857611c2861390a565b60200101516001600160f81b031916855151611c456001846144be565b81518110611c5557611c5561390a565b60200101906001600160f81b031916908160001a90535080611c76816144d1565b915050611c0d565b50611c8985846126a5565b6001600160401b0390911660208601529250611ca585846126e6565b90151560408601529250611cb98584612235565b8560600151919091529250611cce8584612235565b8560800151919091529250611ce38584612751565b60a08601919091529250611cf78584612860565b60079190910b60c08601529250611d0e8584612860565b60079190910b60e086015292506060611d278685612235565b94509050611d34816123a8565b6101008601526060611d468786612235565b95509050611d53816123a8565b6101208701526060611d658887612235565b96509050611d72816123a8565b61014088015250949695505050505050565b611d9f60405160408082019052606081526000602082015290565b611daa6020836144fa565b15611dd257611dba6020836144fa565b611dc59060206144be565b611dcf908361450e565b91505b602083018290526040518084526000815282810160200181811015611df657600080fd5b604052509192915050565b611adc60e082178351906128af565b611e2b60405160408082019052606081526000602082015290565b600080611e388482612659565b9250905060028114611e4c57611e4c614492565b611e568483612235565b9084529150611e6584836126a5565b506001600160401b03166020840152509092915050565b60606000611e8a60406114a2565b905061130c83518290611f39565b611eb360405160408082019052606081526000602082015290565b611ece60405160408082019052606081526000602082015290565b6701ffffffffffffff600784901c1692607f166000849003611efd57611ef482826128af565b50909392505050565b611f0a82608083176128af565b5050611ece565b50919050565b611f2460d88351906128af565b50611f32602a8351906128af565b506114d982825b611ad08260028351612515565b60008160070b12611f5d576114d982600083612515565b6114d9826001611f6f84600019614521565b612515565b60606000825151611f8690600161450e565b6001600160401b03811115611f9d57611f9d61333a565b604051818152601f19601f8301168101602001604052908015611fc7576020820181803683370190505b50905082602001511515600114611fdf576000611fe5565b600160f81b5b81600081518110611ff857611ff861390a565b60200101906001600160f81b031916908160001a905350600160005b845151811015611ef457845181815181106120315761203161390a565b60200101516001600160f81b0319168383815181106120525761205261390a565b60200101906001600160f81b031916908160001a90535081612073816144d1565b9250508080612081906144d1565b915050612014565b6120af604051806060016040528060608152602001600015158152602001600081525090565b602084018451600059601f831615600181146120dd57601f84166020908103808601845283010192506120e7565b6020820192508382525b508282848660046101c2fa506020815101810160405280515b6020811461212e5760006020830151146001811461211e575061212e565b60208301925050601f1901612100565b815284525050506020810183905281156121485781612152565b6121528151612922565b60408201529392505050565b60606000808060208501855181019061217791906145da565b919450925090506001600160401b0382166121b1578051156121ac57604051630e74990760e01b815260040160405180910390fd5b612214565b6001600160401b038216605114806121d257506001600160401b0382166071145b156121f95780516000036121ac57604051630e74990760e01b815260040160405180910390fd5b8160405163f1f6bced60e01b815260040161084a919061316f565b8215610de8578260405163d4bb667160e01b815260040161084a91906134cb565b606060008060006122468686612960565b96509092506001600160401b0316905060ff82166006148061226b575060ff82166002145b6122875760405162461bcd60e51b815260040161084a90614685565b60051960ff8316016122c05761229d8686612960565b96509092506001600160401b0316905060ff82166002146122c0576122c0614492565b60006122cc828761450e565b90506000826001600160401b038111156122e8576122e861333a565b604051818152601f19601f8301168101602001604052908015612312576020820181803683370190505b5090506000875b8381101561238b578981815181106123335761233361390a565b60200101516001600160f81b0319168383815181106123545761235461390a565b60200101906001600160f81b031916908160001a90535081612375816144d1565b9250508080612383906144d1565b915050612319565b5081612397858a61450e565b9650965050505050505b9250929050565b6123c360405160408082019052606081526000602082015290565b81516000036123fb57604051806040016040528060405160408082019052600181526000602080830182905291835291015292915050565b60006001835161240b91906144be565b6001600160401b038111156124225761242261333a565b604051818152601f19601f830116810160200160405290801561244c576020820181803683370190505b5090506000836000815181106124645761246461390a565b60200101516001600160f81b031916600160f81b03612481575060015b60015b84518110156124f35784818151811061249f5761249f61390a565b60200101516001600160f81b031916836124ba6001846144be565b815181106124ca576124ca61390a565b60200101906001600160f81b031916908160001a905350806124eb816144d1565b915050612484565b50604051604080820190529182521515602082015292915050565b611adc8383835b6017816001600160401b03161161253b5761172460e0600584901b1682178451906128af565b60ff816001600160401b03161161257c576125636018611fe0600585901b16178451906128af565b506117246001600160401b038216600185519190612add565b61ffff816001600160401b0316116125be576125a56019611fe0600585901b16178451906128af565b506117246001600160401b038216600285519190612add565b63ffffffff816001600160401b031611612602576125e9601a611fe0600585901b16178451906128af565b506117246001600160401b038216600485519190612add565b612619601b611fe0600585901b16178451906128af565b506117246001600160401b038216600885519190612add565b61264d60405160408082019052606081526000602082015290565b6106a783838451612b6c565b6000806000806126698686612960565b96509092506001600160401b0316905060ff821660041461269c5760405162461bcd60e51b815260040161084a906146c9565b95939450505050565b6000806000806126b58686612960565b96509092506001600160401b0316905060ff82161561269c5760405162461bcd60e51b815260040161084a9061471b565b6000806000806126f68686612960565b96509092506001600160401b0316905060ff82166007146127295760405162461bcd60e51b815260040161084a9061475f565b60158114806127385750601481145b61274457612744614492565b6014141595939450505050565b606060008060006127628686612960565b96509092506001600160401b0316905060ff82166003146127955760405162461bcd60e51b815260040161084a906147b0565b60006127a1828761450e565b90506000826001600160401b038111156127bd576127bd61333a565b604051818152601f19601f83011681016020016040529080156127e7576020820181803683370190505b5090506000875b8381101561238b578981815181106128085761280861390a565b60200101516001600160f81b0319168383815181106128295761282961390a565b60200101906001600160f81b031916908160001a9053508161284a816144d1565b9250508080612858906144d1565b9150506127ee565b6000806000806128708686612960565b96509092506001600160401b0316905060ff821660011480612893575060ff8216155b61269c5760405162461bcd60e51b815260040161084a90614812565b6128ca60405160408082019052606081526000602082015290565b6000835151905060006128de82600161450e565b9050846020015182106128ff576128ff856128fa836002614822565b612c46565b84516020838201018581538151831115612917578282525b509495945050505050565b600061292d82612c61565b1561293a57506000919050565b60006020830151905061294c81612caa565b915060086020845103028201915050919050565b6000806000806129708686612e9a565b905061297d60018661450e565b94506007600582901c16601f8216601c81106129ab5760405162461bcd60e51b815260040161084a90614883565b60188160ff1610156129c95790945060ff169250849150612ad69050565b8060ff16601803612a265760006129e08989612e9a565b90506129ed60018961450e565b975060188160ff161015612a135760405162461bcd60e51b815260040161084a906148b6565b9195505060ff169250849150612ad69050565b8060ff16601903612a60576000612a3d8989612ee8565b9050612a4a60028961450e565b97509195505061ffff169250849150612ad69050565b8060ff16601a03612a9c576000612a778989612f29565b9050612a8460048961450e565b97509195505063ffffffff169250849150612ad69050565b8060ff16601b14612aaf57612aaf614492565b6000612abb8989612f6a565b9050612ac860088961450e565b975091955090935085925050505b9250925092565b612af860405160408082019052606081526000602082015290565b600084515190506000612b0b828561450e565b90508560200151811115612b2857612b28866128fa836002614822565b60006001612b38866101006149d4565b612b4291906144be565b905086518281018783198251161781528151841115612b5f578382525b5096979650505050505050565b612b8760405160408082019052606081526000602082015290565b8251821115612b9557600080fd5b600084515190506000612ba8848361450e565b90508560200151811115612bc557612bc5866128fa836002614822565b60008087518051856020830101935080851115612be0578482525b505050602086015b60208610612c205780518252612bff60208361450e565b9150612c0c60208261450e565b9050612c196020876144be565b9550612be8565b60001960208790036101000a018019825116818451161790925250959695505050505050565b600082519050612c568383611d84565b506117248382612632565b60008060208301815b8451811015612c9f57815192508215612c8857506000949350505050565b602091820191612c98908261450e565b9050612c6a565b506001949350505050565b6000811560018114612e9157600160801b600160401b640100000000620100006101006010600460026000198b019081041790810417908104179081041790810417908104179081041790810417600101926040517ff8f9cbfae6cc78fbefe7cdc3a1793dfcf4f0e8bbd8cec470b6a28a7a5a3e1efd81527ff5ecf1b3e9debc68e1d9cfabc5997135bfb7a7a3938b7b606b5b4b3f2f1f0ffe60208201527ff6e4ed9ff2d6b458eadcdf97bd91692de2d4da8fd2d0ac50c6ae9a827252361660408201527fc8c0b887b0a8a4489c948c7f847c6125746c645c544c444038302820181008ff60608201527ff7cae577eec2a03cf3bad76fb589591debb2dd67e0aa9834bea6925f6a4a2e0e60808201527fe39ed557db96902cd38ed14fad815115c786af479b7e8324736353433727170760a08201527fc976c13bb96e881cb166a933a55e490d9d56952b8d4e801485467d236242260660c08201527f753a6d1b65325d0c552a4d1345224105391a310b29122104190a11030902010060e082015261010081016040527e818283848586878898a8b8c8d8e8f929395969799a9b9d9e9faaeb6bedeeff600160f81b8082880204818160ff0385015104600160ff1b86116101000201965060001985018516612e87576001870196505b5050505050611f11565b50600092915050565b6000612ea782600161450e565b83511015612ec75760405162461bcd60e51b815260040161084a90614a0e565b828281518110612ed957612ed961390a565b602001015160f81c9392505050565b6000612ef582600261450e565b83511015612f155760405162461bcd60e51b815260040161084a90614a0e565b60008260200184015160f01c949350505050565b6000612f3682600461450e565b83511015612f565760405162461bcd60e51b815260040161084a90614a0e565b60008260200184015160e01c949350505050565b6000612f7782600861450e565b83511015612f975760405162461bcd60e51b815260040161084a90614a0e565b60008260200184015160c01c949350505050565b6040518061016001604052806060815260200160006001600160401b0316815260200160001515815260200160608152602001600060070b8152602001600060070b815260200160008152602001600081526020016000815260200160006001600160401b03168152602001613040604051608081016040908152606080835260006020840181905291830182905282015290565b905290565b604051806101600160405280613065604051602081016040526060815290565b815260200160006001600160401b03168152602001600015158152602001613097604051602081016040526060815290565b81526020016130b0604051602081016040526060815290565b815260200160608152602001600060070b8152602001600060070b81526020016130eb60405160408082019052606081526000602082015290565b815260200161310b60405160408082019052606081526000602082015290565b815260200161304060405160408082019052606081526000602082015290565b604051806040016040528061315160405160408082019052606081526000602082015290565b8152602001600081525090565b6001600160401b0381165b82525050565b60208101610684828461315e565b805b8114610b4657600080fd5b80356106848161317d565b6000602082840312156131aa576131aa600080fd5b6000610de8848461318a565b60005b838110156131d15780820151838201526020016131b9565b50506000910152565b60006131ea826000815192915050565b8084526020840193506132018185602086016131b6565b601f01601f19169290920192915050565b801515613169565b6131698160070b90565b80613169565b6000608083018251848203855261324182826131da565b9150506020830151613256602086018261315e565b5060408301516132696040860182613212565b50606083015161327c6060860182613212565b509392505050565b6101608082528101613296818e6131da565b90506132a5602083018d61315e565b6132b2604083018c613212565b81810360608301526132c4818b6131da565b90506132d3608083018a61321a565b6132e060a083018961321a565b6132ed60c0830188613224565b6132fa60e0830187613224565b613308610100830186613224565b61331661012083018561315e565b818103610140830152613329818461322a565b9d9c50505050505050505050505050565b634e487b7160e01b600052604160045260246000fd5b601f19601f83011681018181106001600160401b03821117156133755761337561333a565b6040525050565b600061338b6000604051905090565b90506133978282613350565b919050565b60006001600160401b038211156133b5576133b561333a565b601f19601f83011660200192915050565b82818337506000910152565b60006133e56133e08461339c565b61337c565b90508281526020810184848401111561340057613400600080fd5b61327c8482856133c6565b600082601f83011261341f5761341f600080fd5b8135610de88482602086016133d2565b60006020828403121561344457613444600080fd5b81356001600160401b0381111561345d5761345d600080fd5b610de88482850161340b565b60006001600160a01b038216610684565b61317f81613469565b80356106848161347a565b600080604083850312156134a4576134a4600080fd5b60006134b08585613483565b92505060206134c18582860161318a565b9150509250929050565b602081016106848284613224565b61316981613469565b6020810161068482846134d9565b602080825281016106a781846131da565b6040810161350f8285613224565b6106a76020830184613212565b60008083601f84011261353157613531600080fd5b5081356001600160401b0381111561354b5761354b600080fd5b6020830191508360018202830111156123a1576123a1600080fd5b6000806020838503121561357c5761357c600080fd5b82356001600160401b0381111561359557613595600080fd5b6135a18582860161351c565b92509250509250929050565b600060408301825184820385526135c482826131da565b915050602083015161327c6020860182613212565b602080825281016106a781846135ad565b6001600160401b03811661317f565b8035610684816135ea565b60008060006060848603121561361c5761361c600080fd5b600061362886866135f9565b9350506020613639868287016135f9565b92505060408401356001600160401b0381111561365857613658600080fd5b6136648682870161340b565b9150509250925092565b63ffffffff8116613169565b60608101613688828661366e565b613695602083018561315e565b81810360408301526136a781846131da565b95945050505050565b60006101608301825184820385526136c882826131da565b91505060208301516136dd602086018261315e565b5060408301516136f06040860182613212565b506060830151848203606086015261370882826131da565b915050608083015161371d608086018261321a565b5060a083015161373060a086018261321a565b5060c083015161374360c0860182613224565b5060e083015161375660e0860182613224565b5061010083015161376b610100860182613224565b5061012083015161378061012086018261315e565b506101408301518482036101408601526136a7828261322a565b602080825281016106a781846136b0565b60006101608284031215611f1157611f11600080fd5b6000602082840312156137d6576137d6600080fd5b81356001600160401b038111156137ef576137ef600080fd5b610de8848285016137ab565b60408201815161380b8482613224565b5060208201516117246020850182613212565b6040810161068482846137fb565b6040808252810161383d81856131da565b90506106a76020830184613212565b634e487b7160e01b600052602260045260246000fd5b60028104600182168061387657607f821691505b602082108103611f1157611f1161384c565b60006138958385846133c6565b50500190565b6000610de8828486613888565b603281526000602082017f7468652066696c65636f696e206d6574686f642074686174207761732063616c8152711b1959081a5cc81b9bdd081a185b991b195960721b602082015291505b5060400190565b60208082528101610684816138a8565b634e487b7160e01b600052603260045260246000fd5b6000808335601e193685900301811261393b5761393b600080fd5b8084019250823591506001600160401b0382111561395b5761395b600080fd5b60208301925060018202360383131561397657613976600080fd5b509250929050565b600061068461398a8381565b90565b6139968361397e565b81546008840282811b60001990911b908116901990911617825550505050565b6000611adc81848461398d565b818110156114d9576139d66000826139b6565b6001016139c3565b601f821115611adc576139fc81600081815281906020902092915050565b6020601f85010481016020851015613a115750805b61149b6020601f8601048301826139c3565b826001600160401b03811115613a3b57613a3b61333a565b613a458254613862565b613a508282856139de565b6000601f831160018114613a845760008415613a6c5750858201355b600019600886021c1981166002860217865550613aea565b601f198416613a9e86600081815281906020902092915050565b60005b82811015613ac15788850135825560209485019460019092019101613aa1565b86831015613add57600019601f88166008021c19858a01351682555b6001600288020188555050505b50505050505050565b611adc838383613a23565b60008135610684816135ea565b60006001600160401b03835b81169019929092169190911792915050565b60006001600160401b038216610684565b613b4382613b29565b613b4e818354613b0b565b8255505050565b80151561317f565b6000813561068481613b55565b600068ff0000000000000000613b178460401b90565b6000811515610684565b613b9382613b80565b613b4e818354613b6a565b61317f8160070b90565b6000813561068481613b9e565b6000610684613bc761398a8460070b90565b60070b90565b613b4382613bb5565b60006fffffffffffffffff0000000000000000613b178460401b90565b613bfc82613bb5565b613b4e818354613bd6565b600081356106848161317d565b600060001983613b17565b613c288261397e565b613b4e818354613c14565b60008235607e1936849003018112613c4d57613c4d600080fd5b9190910192915050565b600069ff000000000000000000613b178460481b90565b613c7782613b80565b613b4e818354613c57565b8082613c8e8180613920565b613c99818386613af3565b50505050600181016020830180613caf81613afe565b9050613cbb8184613b3a565b505050600181016040830180613cd081613b5d565b9050613cdc8184613b8a565b505050600181016060830180613cf181613b5d565b905061149b8184613c6e565b6114d98282613c82565b8082613d138180613920565b613d1e818386613af3565b50505050600181016020830180613d3481613afe565b9050613d408184613b3a565b505050600181016040830180613d5581613b5d565b9050613d618184613b8a565b5050506002810160608301613d768185613920565b613d81818386613af3565b50505050600381016080830180613d9781613ba8565b9050613da38184613bcd565b5050506003810160a0830180613db881613ba8565b9050613dc48184613bf3565b5050506004810160c0830180613dd981613c07565b9050613de58184613c1f565b5050506005810160e0830180613dfa81613c07565b9050613e068184613c1f565b50505060068101610100830180613e1c81613c07565b9050613e288184613c1f565b50505060078101610120830180613e3e81613afe565b9050613e4a8184613b3a565b505050600881016101408301613e608185613c33565b61149b8184613cfd565b6114d98282613d07565b60006106848260601b90565b600061068482613e74565b613169613e9782613469565b613e80565b6000613ea88286613224565b602082019150613eb88285613e8b565b601482019150613ec88284613224565b506020019392505050565b803561068481613b55565b600060208284031215613ef357613ef3600080fd5b6000610de88484613ed3565b600060208284031215613f1457613f14600080fd5b6000610de884846135f9565b60408101613f2e828561315e565b6106a76020830184613224565b61020560f11b81526002016000613f528284613e8b565b50601401919050565b6000610684825190565b6000613f75826000815192915050565b60208301613f8281613f5b565b92506020821015613fa357613f9e600019836020036008021b90565b831692505b5050919050565b601881526000602082017f70726f706f73616c4964206e6f7420617661696c61626c650000000000000000815291505b5060200190565b6020808252810161068481613faa565b602781526000602082017f6d73672e73656e646572206e6565647320746f206265206d61726b6574206163815266746f722066303560c81b602082015291506138f3565b6020808252810161068481613ff1565b6000614055826000815192915050565b6140638185602086016131b6565b9290920192915050565b60006106a78284614045565b602a81526000602082017f706965636520636964206d757374206265206164646564206265666f726520618152697574686f72697a696e6760b01b602082015291506138f3565b6020808252810161068481614079565b603b81526000602082017f6465616c206661696c656420706f6c69637920636865636b3a2070726f76696481527f657220616c726561647920636c61696d65642074686973206369640000000000602082015291506138f3565b60208082528101610684816140d0565b601c81526000602082017f76657269666965645f6465616c20706172616d206d69736d617463680000000081529150613fda565b602080825281016106848161413a565b602981526000602082017f73746f726167652070726963652067726561746572207468616e2072657175658152681cdd08185b5bdd5b9d60ba1b602082015291506138f3565b602080825281016106848161417e565b602d81526000602082017f636c69656e7420636f6c6c61746572616c2067726561746572207468616e207281526c195c5d595cdd08185b5bdd5b9d609a1b602082015291506138f3565b60208082528101610684816141d4565b600c81526000602082016b24b73b30b634b21021a127a960a11b81529150613fda565b602080825281016106848161422e565b61426f826000815192915050565b6001600160401b038111156142865761428661333a565b6142908254613862565b61429b8282856139de565b6020601f8311600181146142d057600084156142b8578287015190505b600019600886021c1981166002860217865550614336565b601f1984166142ea86600081815281906020902092915050565b60005b8281101561430d57848901518255602094850194600190920191016142ed565b868310156143295784890151600019601f89166008021c191682555b6001600288020188555050505b505050505050565b602981526000602082017f6d73672e73656e646572206e6565647320746f2062652076657269667265672081526830b1ba37b91033181b60b91b602082015291506138f3565b602080825281016106848161433e565b6011815260006020820170446174614361702052656365697665642160781b81529150613fda565b6020808252810161068481614394565b60008082525b5060010190565b60006143e4826143cc565b91506106a78284614045565b60008082526001820191506106a78284614045565b60006144118284613224565b50602001919050565b60408101613f2e8285613224565b61316981613b29565b60c0810161443f828961315e565b61444c6020830188613224565b614459604083018761315e565b614466606083018661315e565b818103608083015261447881856131da565b905061448760a0830184614428565b979650505050505050565b634e487b7160e01b600052600160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b81810381811115610684576106846144a8565b600060001982036143d2576143d26144a8565b634e487b7160e01b600052601260045260246000fd5b600082614509576145096144e4565b500690565b80820180821115610684576106846144a8565b600061452d8260070b90565b91506145398360070b90565b925050818103677fffffffffffffff198112677fffffffffffffff82131715610684576106846144a8565b6000815190506106848161317d565b600081519050610684816135ea565b60006145906133e08461339c565b9050828152602081018484840111156145ab576145ab600080fd5b61327c8482856131b6565b600082601f8301126145ca576145ca600080fd5b8151610de8848260208601614582565b6000806000606084860312156145f2576145f2600080fd5b60006145fe8686614564565b935050602061460f86828701614573565b92505060408401516001600160401b0381111561462e5761462e600080fd5b613664868287016145b6565b602e81526000602082017f696e76616c6964206d616a20286578706563746564204d616a546167206f722081526d4d616a42797465537472696e672960901b602082015291506138f3565b602080825281016106848161463a565b601f81526000602082017f696e76616c6964206d616a20286578706563746564204d616a4172726179290081529150613fda565b6020808252810161068481614695565b602581526000602082017f696e76616c6964206d616a20286578706563746564204d616a556e7369676e6581526464496e742960d81b602082015291506138f3565b60208082528101610684816146d9565b601f81526000602082017f696e76616c6964206d616a20286578706563746564204d616a4f74686572290081529150613fda565b602080825281016106848161472b565b602481526000602082017f696e76616c6964206d616a20286578706563746564204d616a54657874537472815263696e672960e01b602082015291506138f3565b602080825281016106848161476f565b603581526000602082017f696e76616c6964206d616a20286578706563746564204d616a5369676e6564498152746e74206f72204d616a556e7369676e6564496e742960581b602082015291506138f3565b60208082528101610684816147c0565b81810280821583820485141761483a5761483a6144a8565b5092915050565b602581526000602082017f63616e6e6f742068616e646c6520686561646572732077697468206578747261815264203e20323760d81b602082015291506138f3565b6020808252810161068481614841565b600c81526000602082016b34b73b30b634b21031b137b960a11b81529150613fda565b6020808252810161068481614893565b80825b6001851115614905578086048111156148e4576148e46144a8565b60018516156148f257908102905b80026148fe8560011c90565b94506148c9565b94509492505050565b60008261491d575060016106a7565b8161492a575060006106a7565b8160018114614940576002811461494a57614977565b60019150506106a7565b60ff84111561495b5761495b6144a8565b8360020a915084821115614971576149716144a8565b506106a7565b5060208310610133831016604e8410600b84101617156149aa575081810a838111156149a5576149a56144a8565b6106a7565b6149b784848460016148c6565b925090508184048111156149cd576149cd6144a8565b0292915050565b60006106a7600019848461490e565b6014815260006020820173736c6963696e67206f7574206f662072616e676560601b81529150613fda565b60208082528101610684816149e356fea26469706673582212201b01dc0326e954f45b2120214245737e9936f175da312cd5e4a515286105e75a64736f6c63430008110033",
      "sourceMap": "2642:9612:31:-:0;;;3748:49;;;;;;;;;-1:-1:-1;3772:5:31;:18;;-1:-1:-1;;;;;;3772:18:31;3780:10;3772:18;;;2642:9612;;;;;;",
      "linkReferences": {}
    },
    "deployedBytecode": {
      "object": "0x608060405234801561001057600080fd5b50600436106101365760003560e01c806378133bb2116100b8578063d91921ed1161007c578063d91921ed146102f9578063dd08881c1461030e578063dd27fe901461034d578063f44a890314610360578063f4b2e4d814610380578063f82704f01461039357600080fd5b806378133bb214610279578063868e10c4146102995780638da5cb5b146102bb57806396925ae6146102ce578063b34ba252146102ee57600080fd5b8063297ab486116100ff578063297ab486146101fd57806329aa3d2a146102055780634634aed5146102135780636067f4541461023357806374112d661461023e57600080fd5b80627067901461013b57806303988f841461015c5780630a0e0c91146101865780630cf20cc9146101c25780632522f2b7146101e2575b600080fd5b610146639d8b067881565b604051610153919061316f565b60405180910390f35b61016f61016a366004613195565b6103b4565b6040516101539b9a99989796959493929190613284565b61014661019436600461342f565b600381805160208101820180518482526020830160208501209152546001600160401b031693508492505050565b6101d56101d036600461348e565b610627565b60405161015391906134cb565b6101f0600660ff60981b0181565b60405161015391906134e2565b6004546101d5565b6101f0600560ff60981b0181565b610226610221366004613195565b61068a565b60405161015391906134f0565b61014663f98c996681565b61026b61024c366004613195565b6000602052806000526040600020805460019091015490915060ff1682565b604051610153929190613501565b61028c610287366004613566565b6106ae565b60405161015391906135d9565b6102ac6102a7366004613604565b61079e565b6040516101539392919061367a565b6005546101f0906001600160a01b031681565b6102e16102dc366004613195565b610863565b604051610153919061379a565b61014663de180de381565b61030c610307366004613195565b610b1d565b005b61026b61031c36600461342f565b600181805160208101820180518482526020830160208501209152805460019091015490945060ff16925084915050565b6101d561035b3660046137c1565b610b49565b61037361036e366004613566565b610cbe565b604051610153919061381e565b61022661038e366004613195565b610d1d565b6103a66103a136600461342f565b610df0565b60405161015392919061382c565b600481815481106103c457600080fd5b906000526020600020600a90910201805490915081906103e390613862565b80601f016020809104026020016040519081016040528092919081815260200182805461040f90613862565b801561045c5780601f106104315761010080835404028352916020019161045c565b820191906000526020600020905b81548152906001019060200180831161043f57829003601f168201915b50505050600183015460028401805493946001600160401b03831694600160401b90930460ff1693509161048f90613862565b80601f01602080910402602001604051908101604052809291908181526020018280546104bb90613862565b80156105085780601f106104dd57610100808354040283529160200191610508565b820191906000526020600020905b8154815290600101906020018083116104eb57829003601f168201915b505050506003830154600484015460058501546006860154600780880154969785820b97600160401b90960490910b95509293919290916001600160401b0316906008810160405180608001604052908160008201805461056890613862565b80601f016020809104026020016040519081016040528092919081815260200182805461059490613862565b80156105e15780601f106105b6576101008083540402835291602001916105e1565b820191906000526020600020905b8154815290600101906020018083116105c457829003601f168201915b5050509183525050600191909101546001600160401b038116602083015260ff600160401b8204811615156040840152600160481b90910416151560609091015290508b565b6005546000906001600160a01b0316331461064157600080fd5b6000604051806040016040528061065786610eab565b815260200161066585610ef4565b90529050600061067482610f43565b905061067f81610f8d565b925050505b92915050565b6060600061069783610fae565b90506106a78161014001516112b8565b9392505050565b6106c960405160408082019052606081526000602082015290565b600283836040516106db92919061389b565b908152602001604051809103902060405180604001604052908160008201805461070490613862565b80601f016020809104026020016040519081016040528092919081815260200182805461073090613862565b801561077d5780601f106107525761010080835404028352916020019161077d565b820191906000526020600020905b81548152906001019060200180831161076057829003601f168201915b50505091835250506001919091015460ff1615156020909101529392505050565b60008060608082639d8b0677196001600160401b038916016107f1576107c386611315565b60006107cf60016114a2565b90506107dc8160016114c2565b6107e5816114dd565b92506051915050610853565b63f98c9965196001600160401b038916016108145761080f8661150a565b610853565b63de180de2196001600160401b038916016108325761080f86611680565b60405162461bcd60e51b815260040161084a906138fa565b60405180910390fd5b6000989097509095509350505050565b61086b612fab565b6004828154811061087e5761087e61390a565b90600052602060002090600a0201604051806101600160405290816000820180546108a890613862565b80601f01602080910402602001604051908101604052809291908181526020018280546108d490613862565b80156109215780601f106108f657610100808354040283529160200191610921565b820191906000526020600020905b81548152906001019060200180831161090457829003601f168201915b505050918352505060018201546001600160401b0381166020830152600160401b900460ff161515604082015260028201805460609092019161096390613862565b80601f016020809104026020016040519081016040528092919081815260200182805461098f90613862565b80156109dc5780601f106109b1576101008083540402835291602001916109dc565b820191906000526020600020905b8154815290600101906020018083116109bf57829003601f168201915b50505091835250506003820154600781810b6020840152600160401b909104810b6040808401919091526004840154606084015260058401546080840152600684015460a0840152908301546001600160401b031660c083015260e090910190600883019051806080016040529081600082018054610a5a90613862565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8690613862565b8015610ad35780601f10610aa857610100808354040283529160200191610ad3565b820191906000526020600020905b815481529060010190602001808311610ab657829003601f168201915b5050509183525050600191909101546001600160401b038116602083015260ff600160401b8204811615156040840152600160481b90910416151560609091015290525092915050565b6005546001600160a01b03163314610b3457600080fd5b610b46610b4030610eab565b826116de565b50565b6005546000906001600160a01b03163314610b6357600080fd5b600480546001810182556000918252908390829060209020600a90910201610b8b8282613e6a565b50506000423383604051602001610ba493929190613e9c565b60405160208183030381529060405280519060200120905060405160408082018152838252600160208084019190915260008481529081905220815181556020820151600191909101805460ff19169115159190911790555060405160408082019052818152600160208201819052610c1d8680613920565b604051610c2b92919061389b565b9081526020016040518091039020815181556020820151600191909101805460ff191691151591909117905550610c686060850160408601613ede565b1515817ffd6419d07e4c269e58d0c63969756c2124155b4a8d6dd08b8cd46e3a9acbf625610c9c6040880160208901613eff565b8760c00135604051610caf929190613f20565b60405180910390a39392505050565b610cd8604051604080820190526000808252602082015290565b60018383604051610cea92919061389b565b9081526020016040518091039020604051604081810190528154815260019091015460ff16151560208201529392505050565b60606000610d2a83610fae565b9050610d34613045565b604051602081016040528083519052815260208201516001600160401b03166020820152604082015115156040820152610d6d30610eab565b6060820152610d7c600061172a565b6080820152606082015160a0820152608082015160070b60c082015260a082015160070b60e0820152610db260c0830151610ef4565b610100820152610dc560e0830151610ef4565b610120820152610dd9610100830151610ef4565b610140820152610de881611782565b949350505050565b6002818051602081018201805184825260208301602085012091528054909450849350610e1f92509050613862565b80601f0160208091040260200160405190810160405280929190818152602001828054610e4b90613862565b8015610e985780601f10610e6d57610100808354040283529160200191610e98565b820191906000526020600020905b815481529060010190602001808311610e7b57829003601f168201915b5050506001909301549192505060ff1682565b610ebf604051602081016040526060815290565b604051806020016040528083604051602001610edb9190613f3b565b6040516020818303038152906040528152509050919050565b610f0f60405160408082019052606081526000602082015290565b6000610f1c836000611876565b90506000604051604080820190528083518152602001836020015115159052949350505050565b610f5e60405160408082019052606081526000602082015290565b6000610f69836118c7565b90506000610f8260056387ed0a646051856000806118ff565b9050610de8816119f1565b600080610f9f83518460200151611a85565b905060008151610de890613f65565b610fb6612fab565b6000828152602081905260408120604051604080820190528154815260019091015460ff16151560208201908152909150516110045760405162461bcd60e51b815260040161084a90613fe1565b60048151815481106110185761101861390a565b90600052602060002090600a02016040518061016001604052908160008201805461104290613862565b80601f016020809104026020016040519081016040528092919081815260200182805461106e90613862565b80156110bb5780601f10611090576101008083540402835291602001916110bb565b820191906000526020600020905b81548152906001019060200180831161109e57829003601f168201915b505050918352505060018201546001600160401b0381166020830152600160401b900460ff16151560408201526002820180546060909201916110fd90613862565b80601f016020809104026020016040519081016040528092919081815260200182805461112990613862565b80156111765780601f1061114b57610100808354040283529160200191611176565b820191906000526020600020905b81548152906001019060200180831161115957829003601f168201915b50505091835250506003820154600781810b6020840152600160401b909104810b6040808401919091526004840154606084015260058401546080840152600684015460a0840152908301546001600160401b031660c083015260e0909101906008830190518060800160405290816000820180546111f490613862565b80601f016020809104026020016040519081016040528092919081815260200182805461122090613862565b801561126d5780601f106112425761010080835404028352916020019161126d565b820191906000526020600020905b81548152906001019060200180831161125057829003601f168201915b5050509183525050600191909101546001600160401b038116602083015260ff600160401b8204811615156040840152600160481b9091041615156060909101529052509392505050565b606060006112c660406114a2565b90506112d3816004611ab7565b6112df83518290611ac3565b6112ee83602001518290611ae1565b6112fd836040015182906114c2565b61130c836060015182906114c2565b6106a7816114dd565b33600560ff60981b011461133b5760405162461bcd60e51b815260040161084a90614035565b600061134682611aed565b905060006113578260200151611b4f565b905060008151519050600181604051611370919061406d565b90815260200160405180910390206001015460ff166113a15760405162461bcd60e51b815260040161084a906140c0565b6002816040516113b1919061406d565b90815260200160405180910390206001015460ff16156113e35760405162461bcd60e51b815260040161084a9061412a565b600061140c6001836040516113f8919061406d565b908152602001604051809103902054610fae565b90508060400151151583604001511515146114395760405162461bcd60e51b815260040161084a9061416e565b8060c0015161144c846101000151610f8d565b111561146a5760405162461bcd60e51b815260040161084a906141c4565b80610100015161147e846101400151610f8d565b1061149b5760405162461bcd60e51b815260040161084a9061421e565b5050505050565b6114aa61312b565b6114b5815183611d84565b5060006020820152919050565b6114d982826114d2576014611e01565b6015611e01565b5050565b60608160200151156115015760405162461bcd60e51b815260040161084a90614251565b81515192915050565b33600560ff60981b01146115305760405162461bcd60e51b815260040161084a90614035565b600061153b82611e10565b905060006115498251611b4f565b9050600181515160405161155d919061406d565b90815260200160405180910390206001015460ff1661158e5760405162461bcd60e51b815260040161084a906140c0565b60028151516040516115a0919061406d565b90815260200160405180910390206001015460ff16156115d25760405162461bcd60e51b815260040161084a9061412a565b60405180604001604052808260800151518152600160209091015260028251516040516115ff919061406d565b90815260200160405180910390208151819061161b9082614261565b506020820151600191909101805460ff1916911515919091179055506020820151600382515160405161164e919061406d565b9081526020016040518091039020805467ffffffffffffffff19166001600160401b0392909216919091179055505050565b33600660ff60981b01146116a65760405162461bcd60e51b815260040161084a90614384565b7f10aa319ed8cad9bceb033c0c2788c4ae17469ac844e4c6e2c2e20e74ca8a7be86040516116d3906143bc565b60405180910390a150565b60006116e983611e7c565b905060006117026005633105f1a66051858760006118ff565b905080511561172457604051630e74990760e01b815260040160405180910390fd5b50505050565b61173e604051602081016040526060815290565b600061174983611e98565b90506040516020810160405280825160405160200161176891906143d9565b604051602081830303815290604052815250915050919050565b6060600061179060406114a2565b905061179d81600b611ab7565b6117d18351516040516020016117b391906143f0565b60405160208183030381529060405282611f1790919063ffffffff16565b6117e083602001518290611ae1565b6117ef836040015182906114c2565b6117ff8360600151518290611f39565b61180f8360800151518290611f39565b61181e8360a001518290611ac3565b61182d8360c001518290611f46565b61183c8360e001518290611f46565b61185461184d846101000151611f74565b8290611f39565b61186561184d846101200151611f74565b61130c61184d846101400151611f74565b61189c604051806060016040528060608152602001600015158152602001600081525090565b6106a7836040516020016118b09190614405565b604051602081830303815290604052836000612089565b606060006118d560406114a2565b90506118e2816002611ab7565b6118ef8351518290611f39565b61130c61184d8460200151611f74565b60604783811015611927578084604051634787a10360e11b815260040161084a92919061441a565b6000806005607f60991b01898787611940576000611943565b60015b8b8b8f60405160200161195b96959493929190614431565b604051602081830303815290604052604051611977919061406d565b600060405180830381855af49150503d80600081146119b2576040513d603f01601f191681016040523d815291503d6000602084013e6119b7565b606091505b5091509150816119da57604051638a7db5bf60e01b815260040160405180910390fd5b6119e38161215e565b9a9950505050505050505050565b611a0c60405160408082019052606081526000602082015290565b606060008084511115611a3b57611a238482612235565b9092509050600082511115611a3b57610de8826123a8565b60405160408082019052806000604051818152601f19601f8301168101602001604052908015611a72576020820181803683370190505b5081526000602090910152949350505050565b611aab604051806060016040528060608152602001600015158152602001600081525090565b6106a783836000612089565b6114d98260048361250e565b611ad08260038351612515565b611adc81835190612632565b505050565b6114d982600083612515565b611b07604051604080820190526060808252602082015290565b600080611b148482612659565b9250905060028114611b2857611b28614492565b611b328483612235565b9084529150611b418483612235565b506020840152509092915050565b611b57613045565b600080611b648482612659565b92509050600b8114611b7857611b78614492565b6060611b848584612235565b9350905080600081518110611b9b57611b9b61390a565b60200101516001600160f81b03191615611bb757611bb7614492565b60018151611bc591906144be565b6001600160401b03811115611bdc57611bdc61333a565b604051818152601f19601f8301168101602001604052908015611c06576020820181803683370190505b5084515260015b8151811015611c7e57818181518110611c2857611c2861390a565b60200101516001600160f81b031916855151611c456001846144be565b81518110611c5557611c5561390a565b60200101906001600160f81b031916908160001a90535080611c76816144d1565b915050611c0d565b50611c8985846126a5565b6001600160401b0390911660208601529250611ca585846126e6565b90151560408601529250611cb98584612235565b8560600151919091529250611cce8584612235565b8560800151919091529250611ce38584612751565b60a08601919091529250611cf78584612860565b60079190910b60c08601529250611d0e8584612860565b60079190910b60e086015292506060611d278685612235565b94509050611d34816123a8565b6101008601526060611d468786612235565b95509050611d53816123a8565b6101208701526060611d658887612235565b96509050611d72816123a8565b61014088015250949695505050505050565b611d9f60405160408082019052606081526000602082015290565b611daa6020836144fa565b15611dd257611dba6020836144fa565b611dc59060206144be565b611dcf908361450e565b91505b602083018290526040518084526000815282810160200181811015611df657600080fd5b604052509192915050565b611adc60e082178351906128af565b611e2b60405160408082019052606081526000602082015290565b600080611e388482612659565b9250905060028114611e4c57611e4c614492565b611e568483612235565b9084529150611e6584836126a5565b506001600160401b03166020840152509092915050565b60606000611e8a60406114a2565b905061130c83518290611f39565b611eb360405160408082019052606081526000602082015290565b611ece60405160408082019052606081526000602082015290565b6701ffffffffffffff600784901c1692607f166000849003611efd57611ef482826128af565b50909392505050565b611f0a82608083176128af565b5050611ece565b50919050565b611f2460d88351906128af565b50611f32602a8351906128af565b506114d982825b611ad08260028351612515565b60008160070b12611f5d576114d982600083612515565b6114d9826001611f6f84600019614521565b612515565b60606000825151611f8690600161450e565b6001600160401b03811115611f9d57611f9d61333a565b604051818152601f19601f8301168101602001604052908015611fc7576020820181803683370190505b50905082602001511515600114611fdf576000611fe5565b600160f81b5b81600081518110611ff857611ff861390a565b60200101906001600160f81b031916908160001a905350600160005b845151811015611ef457845181815181106120315761203161390a565b60200101516001600160f81b0319168383815181106120525761205261390a565b60200101906001600160f81b031916908160001a90535081612073816144d1565b9250508080612081906144d1565b915050612014565b6120af604051806060016040528060608152602001600015158152602001600081525090565b602084018451600059601f831615600181146120dd57601f84166020908103808601845283010192506120e7565b6020820192508382525b508282848660046101c2fa506020815101810160405280515b6020811461212e5760006020830151146001811461211e575061212e565b60208301925050601f1901612100565b815284525050506020810183905281156121485781612152565b6121528151612922565b60408201529392505050565b60606000808060208501855181019061217791906145da565b919450925090506001600160401b0382166121b1578051156121ac57604051630e74990760e01b815260040160405180910390fd5b612214565b6001600160401b038216605114806121d257506001600160401b0382166071145b156121f95780516000036121ac57604051630e74990760e01b815260040160405180910390fd5b8160405163f1f6bced60e01b815260040161084a919061316f565b8215610de8578260405163d4bb667160e01b815260040161084a91906134cb565b606060008060006122468686612960565b96509092506001600160401b0316905060ff82166006148061226b575060ff82166002145b6122875760405162461bcd60e51b815260040161084a90614685565b60051960ff8316016122c05761229d8686612960565b96509092506001600160401b0316905060ff82166002146122c0576122c0614492565b60006122cc828761450e565b90506000826001600160401b038111156122e8576122e861333a565b604051818152601f19601f8301168101602001604052908015612312576020820181803683370190505b5090506000875b8381101561238b578981815181106123335761233361390a565b60200101516001600160f81b0319168383815181106123545761235461390a565b60200101906001600160f81b031916908160001a90535081612375816144d1565b9250508080612383906144d1565b915050612319565b5081612397858a61450e565b9650965050505050505b9250929050565b6123c360405160408082019052606081526000602082015290565b81516000036123fb57604051806040016040528060405160408082019052600181526000602080830182905291835291015292915050565b60006001835161240b91906144be565b6001600160401b038111156124225761242261333a565b604051818152601f19601f830116810160200160405290801561244c576020820181803683370190505b5090506000836000815181106124645761246461390a565b60200101516001600160f81b031916600160f81b03612481575060015b60015b84518110156124f35784818151811061249f5761249f61390a565b60200101516001600160f81b031916836124ba6001846144be565b815181106124ca576124ca61390a565b60200101906001600160f81b031916908160001a905350806124eb816144d1565b915050612484565b50604051604080820190529182521515602082015292915050565b611adc8383835b6017816001600160401b03161161253b5761172460e0600584901b1682178451906128af565b60ff816001600160401b03161161257c576125636018611fe0600585901b16178451906128af565b506117246001600160401b038216600185519190612add565b61ffff816001600160401b0316116125be576125a56019611fe0600585901b16178451906128af565b506117246001600160401b038216600285519190612add565b63ffffffff816001600160401b031611612602576125e9601a611fe0600585901b16178451906128af565b506117246001600160401b038216600485519190612add565b612619601b611fe0600585901b16178451906128af565b506117246001600160401b038216600885519190612add565b61264d60405160408082019052606081526000602082015290565b6106a783838451612b6c565b6000806000806126698686612960565b96509092506001600160401b0316905060ff821660041461269c5760405162461bcd60e51b815260040161084a906146c9565b95939450505050565b6000806000806126b58686612960565b96509092506001600160401b0316905060ff82161561269c5760405162461bcd60e51b815260040161084a9061471b565b6000806000806126f68686612960565b96509092506001600160401b0316905060ff82166007146127295760405162461bcd60e51b815260040161084a9061475f565b60158114806127385750601481145b61274457612744614492565b6014141595939450505050565b606060008060006127628686612960565b96509092506001600160401b0316905060ff82166003146127955760405162461bcd60e51b815260040161084a906147b0565b60006127a1828761450e565b90506000826001600160401b038111156127bd576127bd61333a565b604051818152601f19601f83011681016020016040529080156127e7576020820181803683370190505b5090506000875b8381101561238b578981815181106128085761280861390a565b60200101516001600160f81b0319168383815181106128295761282961390a565b60200101906001600160f81b031916908160001a9053508161284a816144d1565b9250508080612858906144d1565b9150506127ee565b6000806000806128708686612960565b96509092506001600160401b0316905060ff821660011480612893575060ff8216155b61269c5760405162461bcd60e51b815260040161084a90614812565b6128ca60405160408082019052606081526000602082015290565b6000835151905060006128de82600161450e565b9050846020015182106128ff576128ff856128fa836002614822565b612c46565b84516020838201018581538151831115612917578282525b509495945050505050565b600061292d82612c61565b1561293a57506000919050565b60006020830151905061294c81612caa565b915060086020845103028201915050919050565b6000806000806129708686612e9a565b905061297d60018661450e565b94506007600582901c16601f8216601c81106129ab5760405162461bcd60e51b815260040161084a90614883565b60188160ff1610156129c95790945060ff169250849150612ad69050565b8060ff16601803612a265760006129e08989612e9a565b90506129ed60018961450e565b975060188160ff161015612a135760405162461bcd60e51b815260040161084a906148b6565b9195505060ff169250849150612ad69050565b8060ff16601903612a60576000612a3d8989612ee8565b9050612a4a60028961450e565b97509195505061ffff169250849150612ad69050565b8060ff16601a03612a9c576000612a778989612f29565b9050612a8460048961450e565b97509195505063ffffffff169250849150612ad69050565b8060ff16601b14612aaf57612aaf614492565b6000612abb8989612f6a565b9050612ac860088961450e565b975091955090935085925050505b9250925092565b612af860405160408082019052606081526000602082015290565b600084515190506000612b0b828561450e565b90508560200151811115612b2857612b28866128fa836002614822565b60006001612b38866101006149d4565b612b4291906144be565b905086518281018783198251161781528151841115612b5f578382525b5096979650505050505050565b612b8760405160408082019052606081526000602082015290565b8251821115612b9557600080fd5b600084515190506000612ba8848361450e565b90508560200151811115612bc557612bc5866128fa836002614822565b60008087518051856020830101935080851115612be0578482525b505050602086015b60208610612c205780518252612bff60208361450e565b9150612c0c60208261450e565b9050612c196020876144be565b9550612be8565b60001960208790036101000a018019825116818451161790925250959695505050505050565b600082519050612c568383611d84565b506117248382612632565b60008060208301815b8451811015612c9f57815192508215612c8857506000949350505050565b602091820191612c98908261450e565b9050612c6a565b506001949350505050565b6000811560018114612e9157600160801b600160401b640100000000620100006101006010600460026000198b019081041790810417908104179081041790810417908104179081041790810417600101926040517ff8f9cbfae6cc78fbefe7cdc3a1793dfcf4f0e8bbd8cec470b6a28a7a5a3e1efd81527ff5ecf1b3e9debc68e1d9cfabc5997135bfb7a7a3938b7b606b5b4b3f2f1f0ffe60208201527ff6e4ed9ff2d6b458eadcdf97bd91692de2d4da8fd2d0ac50c6ae9a827252361660408201527fc8c0b887b0a8a4489c948c7f847c6125746c645c544c444038302820181008ff60608201527ff7cae577eec2a03cf3bad76fb589591debb2dd67e0aa9834bea6925f6a4a2e0e60808201527fe39ed557db96902cd38ed14fad815115c786af479b7e8324736353433727170760a08201527fc976c13bb96e881cb166a933a55e490d9d56952b8d4e801485467d236242260660c08201527f753a6d1b65325d0c552a4d1345224105391a310b29122104190a11030902010060e082015261010081016040527e818283848586878898a8b8c8d8e8f929395969799a9b9d9e9faaeb6bedeeff600160f81b8082880204818160ff0385015104600160ff1b86116101000201965060001985018516612e87576001870196505b5050505050611f11565b50600092915050565b6000612ea782600161450e565b83511015612ec75760405162461bcd60e51b815260040161084a90614a0e565b828281518110612ed957612ed961390a565b602001015160f81c9392505050565b6000612ef582600261450e565b83511015612f155760405162461bcd60e51b815260040161084a90614a0e565b60008260200184015160f01c949350505050565b6000612f3682600461450e565b83511015612f565760405162461bcd60e51b815260040161084a90614a0e565b60008260200184015160e01c949350505050565b6000612f7782600861450e565b83511015612f975760405162461bcd60e51b815260040161084a90614a0e565b60008260200184015160c01c949350505050565b6040518061016001604052806060815260200160006001600160401b0316815260200160001515815260200160608152602001600060070b8152602001600060070b815260200160008152602001600081526020016000815260200160006001600160401b03168152602001613040604051608081016040908152606080835260006020840181905291830182905282015290565b905290565b604051806101600160405280613065604051602081016040526060815290565b815260200160006001600160401b03168152602001600015158152602001613097604051602081016040526060815290565b81526020016130b0604051602081016040526060815290565b815260200160608152602001600060070b8152602001600060070b81526020016130eb60405160408082019052606081526000602082015290565b815260200161310b60405160408082019052606081526000602082015290565b815260200161304060405160408082019052606081526000602082015290565b604051806040016040528061315160405160408082019052606081526000602082015290565b8152602001600081525090565b6001600160401b0381165b82525050565b60208101610684828461315e565b805b8114610b4657600080fd5b80356106848161317d565b6000602082840312156131aa576131aa600080fd5b6000610de8848461318a565b60005b838110156131d15780820151838201526020016131b9565b50506000910152565b60006131ea826000815192915050565b8084526020840193506132018185602086016131b6565b601f01601f19169290920192915050565b801515613169565b6131698160070b90565b80613169565b6000608083018251848203855261324182826131da565b9150506020830151613256602086018261315e565b5060408301516132696040860182613212565b50606083015161327c6060860182613212565b509392505050565b6101608082528101613296818e6131da565b90506132a5602083018d61315e565b6132b2604083018c613212565b81810360608301526132c4818b6131da565b90506132d3608083018a61321a565b6132e060a083018961321a565b6132ed60c0830188613224565b6132fa60e0830187613224565b613308610100830186613224565b61331661012083018561315e565b818103610140830152613329818461322a565b9d9c50505050505050505050505050565b634e487b7160e01b600052604160045260246000fd5b601f19601f83011681018181106001600160401b03821117156133755761337561333a565b6040525050565b600061338b6000604051905090565b90506133978282613350565b919050565b60006001600160401b038211156133b5576133b561333a565b601f19601f83011660200192915050565b82818337506000910152565b60006133e56133e08461339c565b61337c565b90508281526020810184848401111561340057613400600080fd5b61327c8482856133c6565b600082601f83011261341f5761341f600080fd5b8135610de88482602086016133d2565b60006020828403121561344457613444600080fd5b81356001600160401b0381111561345d5761345d600080fd5b610de88482850161340b565b60006001600160a01b038216610684565b61317f81613469565b80356106848161347a565b600080604083850312156134a4576134a4600080fd5b60006134b08585613483565b92505060206134c18582860161318a565b9150509250929050565b602081016106848284613224565b61316981613469565b6020810161068482846134d9565b602080825281016106a781846131da565b6040810161350f8285613224565b6106a76020830184613212565b60008083601f84011261353157613531600080fd5b5081356001600160401b0381111561354b5761354b600080fd5b6020830191508360018202830111156123a1576123a1600080fd5b6000806020838503121561357c5761357c600080fd5b82356001600160401b0381111561359557613595600080fd5b6135a18582860161351c565b92509250509250929050565b600060408301825184820385526135c482826131da565b915050602083015161327c6020860182613212565b602080825281016106a781846135ad565b6001600160401b03811661317f565b8035610684816135ea565b60008060006060848603121561361c5761361c600080fd5b600061362886866135f9565b9350506020613639868287016135f9565b92505060408401356001600160401b0381111561365857613658600080fd5b6136648682870161340b565b9150509250925092565b63ffffffff8116613169565b60608101613688828661366e565b613695602083018561315e565b81810360408301526136a781846131da565b95945050505050565b60006101608301825184820385526136c882826131da565b91505060208301516136dd602086018261315e565b5060408301516136f06040860182613212565b506060830151848203606086015261370882826131da565b915050608083015161371d608086018261321a565b5060a083015161373060a086018261321a565b5060c083015161374360c0860182613224565b5060e083015161375660e0860182613224565b5061010083015161376b610100860182613224565b5061012083015161378061012086018261315e565b506101408301518482036101408601526136a7828261322a565b602080825281016106a781846136b0565b60006101608284031215611f1157611f11600080fd5b6000602082840312156137d6576137d6600080fd5b81356001600160401b038111156137ef576137ef600080fd5b610de8848285016137ab565b60408201815161380b8482613224565b5060208201516117246020850182613212565b6040810161068482846137fb565b6040808252810161383d81856131da565b90506106a76020830184613212565b634e487b7160e01b600052602260045260246000fd5b60028104600182168061387657607f821691505b602082108103611f1157611f1161384c565b60006138958385846133c6565b50500190565b6000610de8828486613888565b603281526000602082017f7468652066696c65636f696e206d6574686f642074686174207761732063616c8152711b1959081a5cc81b9bdd081a185b991b195960721b602082015291505b5060400190565b60208082528101610684816138a8565b634e487b7160e01b600052603260045260246000fd5b6000808335601e193685900301811261393b5761393b600080fd5b8084019250823591506001600160401b0382111561395b5761395b600080fd5b60208301925060018202360383131561397657613976600080fd5b509250929050565b600061068461398a8381565b90565b6139968361397e565b81546008840282811b60001990911b908116901990911617825550505050565b6000611adc81848461398d565b818110156114d9576139d66000826139b6565b6001016139c3565b601f821115611adc576139fc81600081815281906020902092915050565b6020601f85010481016020851015613a115750805b61149b6020601f8601048301826139c3565b826001600160401b03811115613a3b57613a3b61333a565b613a458254613862565b613a508282856139de565b6000601f831160018114613a845760008415613a6c5750858201355b600019600886021c1981166002860217865550613aea565b601f198416613a9e86600081815281906020902092915050565b60005b82811015613ac15788850135825560209485019460019092019101613aa1565b86831015613add57600019601f88166008021c19858a01351682555b6001600288020188555050505b50505050505050565b611adc838383613a23565b60008135610684816135ea565b60006001600160401b03835b81169019929092169190911792915050565b60006001600160401b038216610684565b613b4382613b29565b613b4e818354613b0b565b8255505050565b80151561317f565b6000813561068481613b55565b600068ff0000000000000000613b178460401b90565b6000811515610684565b613b9382613b80565b613b4e818354613b6a565b61317f8160070b90565b6000813561068481613b9e565b6000610684613bc761398a8460070b90565b60070b90565b613b4382613bb5565b60006fffffffffffffffff0000000000000000613b178460401b90565b613bfc82613bb5565b613b4e818354613bd6565b600081356106848161317d565b600060001983613b17565b613c288261397e565b613b4e818354613c14565b60008235607e1936849003018112613c4d57613c4d600080fd5b9190910192915050565b600069ff000000000000000000613b178460481b90565b613c7782613b80565b613b4e818354613c57565b8082613c8e8180613920565b613c99818386613af3565b50505050600181016020830180613caf81613afe565b9050613cbb8184613b3a565b505050600181016040830180613cd081613b5d565b9050613cdc8184613b8a565b505050600181016060830180613cf181613b5d565b905061149b8184613c6e565b6114d98282613c82565b8082613d138180613920565b613d1e818386613af3565b50505050600181016020830180613d3481613afe565b9050613d408184613b3a565b505050600181016040830180613d5581613b5d565b9050613d618184613b8a565b5050506002810160608301613d768185613920565b613d81818386613af3565b50505050600381016080830180613d9781613ba8565b9050613da38184613bcd565b5050506003810160a0830180613db881613ba8565b9050613dc48184613bf3565b5050506004810160c0830180613dd981613c07565b9050613de58184613c1f565b5050506005810160e0830180613dfa81613c07565b9050613e068184613c1f565b50505060068101610100830180613e1c81613c07565b9050613e288184613c1f565b50505060078101610120830180613e3e81613afe565b9050613e4a8184613b3a565b505050600881016101408301613e608185613c33565b61149b8184613cfd565b6114d98282613d07565b60006106848260601b90565b600061068482613e74565b613169613e9782613469565b613e80565b6000613ea88286613224565b602082019150613eb88285613e8b565b601482019150613ec88284613224565b506020019392505050565b803561068481613b55565b600060208284031215613ef357613ef3600080fd5b6000610de88484613ed3565b600060208284031215613f1457613f14600080fd5b6000610de884846135f9565b60408101613f2e828561315e565b6106a76020830184613224565b61020560f11b81526002016000613f528284613e8b565b50601401919050565b6000610684825190565b6000613f75826000815192915050565b60208301613f8281613f5b565b92506020821015613fa357613f9e600019836020036008021b90565b831692505b5050919050565b601881526000602082017f70726f706f73616c4964206e6f7420617661696c61626c650000000000000000815291505b5060200190565b6020808252810161068481613faa565b602781526000602082017f6d73672e73656e646572206e6565647320746f206265206d61726b6574206163815266746f722066303560c81b602082015291506138f3565b6020808252810161068481613ff1565b6000614055826000815192915050565b6140638185602086016131b6565b9290920192915050565b60006106a78284614045565b602a81526000602082017f706965636520636964206d757374206265206164646564206265666f726520618152697574686f72697a696e6760b01b602082015291506138f3565b6020808252810161068481614079565b603b81526000602082017f6465616c206661696c656420706f6c69637920636865636b3a2070726f76696481527f657220616c726561647920636c61696d65642074686973206369640000000000602082015291506138f3565b60208082528101610684816140d0565b601c81526000602082017f76657269666965645f6465616c20706172616d206d69736d617463680000000081529150613fda565b602080825281016106848161413a565b602981526000602082017f73746f726167652070726963652067726561746572207468616e2072657175658152681cdd08185b5bdd5b9d60ba1b602082015291506138f3565b602080825281016106848161417e565b602d81526000602082017f636c69656e7420636f6c6c61746572616c2067726561746572207468616e207281526c195c5d595cdd08185b5bdd5b9d609a1b602082015291506138f3565b60208082528101610684816141d4565b600c81526000602082016b24b73b30b634b21021a127a960a11b81529150613fda565b602080825281016106848161422e565b61426f826000815192915050565b6001600160401b038111156142865761428661333a565b6142908254613862565b61429b8282856139de565b6020601f8311600181146142d057600084156142b8578287015190505b600019600886021c1981166002860217865550614336565b601f1984166142ea86600081815281906020902092915050565b60005b8281101561430d57848901518255602094850194600190920191016142ed565b868310156143295784890151600019601f89166008021c191682555b6001600288020188555050505b505050505050565b602981526000602082017f6d73672e73656e646572206e6565647320746f2062652076657269667265672081526830b1ba37b91033181b60b91b602082015291506138f3565b602080825281016106848161433e565b6011815260006020820170446174614361702052656365697665642160781b81529150613fda565b6020808252810161068481614394565b60008082525b5060010190565b60006143e4826143cc565b91506106a78284614045565b60008082526001820191506106a78284614045565b60006144118284613224565b50602001919050565b60408101613f2e8285613224565b61316981613b29565b60c0810161443f828961315e565b61444c6020830188613224565b614459604083018761315e565b614466606083018661315e565b818103608083015261447881856131da565b905061448760a0830184614428565b979650505050505050565b634e487b7160e01b600052600160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b81810381811115610684576106846144a8565b600060001982036143d2576143d26144a8565b634e487b7160e01b600052601260045260246000fd5b600082614509576145096144e4565b500690565b80820180821115610684576106846144a8565b600061452d8260070b90565b91506145398360070b90565b925050818103677fffffffffffffff198112677fffffffffffffff82131715610684576106846144a8565b6000815190506106848161317d565b600081519050610684816135ea565b60006145906133e08461339c565b9050828152602081018484840111156145ab576145ab600080fd5b61327c8482856131b6565b600082601f8301126145ca576145ca600080fd5b8151610de8848260208601614582565b6000806000606084860312156145f2576145f2600080fd5b60006145fe8686614564565b935050602061460f86828701614573565b92505060408401516001600160401b0381111561462e5761462e600080fd5b613664868287016145b6565b602e81526000602082017f696e76616c6964206d616a20286578706563746564204d616a546167206f722081526d4d616a42797465537472696e672960901b602082015291506138f3565b602080825281016106848161463a565b601f81526000602082017f696e76616c6964206d616a20286578706563746564204d616a4172726179290081529150613fda565b6020808252810161068481614695565b602581526000602082017f696e76616c6964206d616a20286578706563746564204d616a556e7369676e6581526464496e742960d81b602082015291506138f3565b60208082528101610684816146d9565b601f81526000602082017f696e76616c6964206d616a20286578706563746564204d616a4f74686572290081529150613fda565b602080825281016106848161472b565b602481526000602082017f696e76616c6964206d616a20286578706563746564204d616a54657874537472815263696e672960e01b602082015291506138f3565b602080825281016106848161476f565b603581526000602082017f696e76616c6964206d616a20286578706563746564204d616a5369676e6564498152746e74206f72204d616a556e7369676e6564496e742960581b602082015291506138f3565b60208082528101610684816147c0565b81810280821583820485141761483a5761483a6144a8565b5092915050565b602581526000602082017f63616e6e6f742068616e646c6520686561646572732077697468206578747261815264203e20323760d81b602082015291506138f3565b6020808252810161068481614841565b600c81526000602082016b34b73b30b634b21031b137b960a11b81529150613fda565b6020808252810161068481614893565b80825b6001851115614905578086048111156148e4576148e46144a8565b60018516156148f257908102905b80026148fe8560011c90565b94506148c9565b94509492505050565b60008261491d575060016106a7565b8161492a575060006106a7565b8160018114614940576002811461494a57614977565b60019150506106a7565b60ff84111561495b5761495b6144a8565b8360020a915084821115614971576149716144a8565b506106a7565b5060208310610133831016604e8410600b84101617156149aa575081810a838111156149a5576149a56144a8565b6106a7565b6149b784848460016148c6565b925090508184048111156149cd576149cd6144a8565b0292915050565b60006106a7600019848461490e565b6014815260006020820173736c6963696e67206f7574206f662072616e676560601b81529150613fda565b60208082528101610684816149e356fea26469706673582212201b01dc0326e954f45b2120214245737e9936f175da312cd5e4a515286105e75a64736f6c63430008110033",
      "sourceMap": "2642:9612:31:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2726:67;;2783:10;2726:67;;;;;;;;;:::i;:::-;;;;;;;;3504:26;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;;;;;;;:::i;3436:42::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3436:42:31;;-1:-1:-1;3436:42:31;;-1:-1:-1;;;3436:42:31;10544:458;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;3060:112::-;;-1:-1:-1;;;;;3060:112:31;;;;;;;;;:::i;4104:89::-;4174:5;:12;4104:89;;2944:110;;-1:-1:-1;;;;;2944:110:31;;6760:233;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;2873:65::-;;2928:10;2873:65;;3179:52;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;-1:-1:-1;3179:52:31;;;;;;;;;;;;:::i;3803:142::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;11328:924::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;:::i;3721:20::-;;;;;-1:-1:-1;;;;;3721:20:31;;;4199:130;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;2799:68::-;;2857:10;2799:68;;9257:160;;;;;;:::i;:::-;;:::i;:::-;;3271:54;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3271:54:31;;;-1:-1:-1;3271:54:31;;-1:-1:-1;;3271:54:31;4335:805;;;;;;:::i;:::-;;:::i;3951:147::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;5506:977::-;;;;;;:::i;:::-;;:::i;3358:51::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;:::i;3504:26::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3504:26:31;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;3504:26:31;;;;;;;;;;;-1:-1:-1;;;;;3504:26:31;;;-1:-1:-1;;;3504:26:31;;;;;;-1:-1:-1;3504:26:31;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;3504:26:31;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;3504:26:31;;;;;;;-1:-1:-1;3504:26:31;;;;;;-1:-1:-1;;;;;3504:26:31;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;3504:26:31;;;-1:-1:-1;;3504:26:31;;;;;;-1:-1:-1;;;;;3504:26:31;;;;;;;-1:-1:-1;;;3504:26:31;;;;;;;;;;-1:-1:-1;;;3504:26:31;;;;;;;;;;;;-1:-1:-1;3504:26:31;:::o;10544:458::-;10676:5;;10638:4;;-1:-1:-1;;;;;10676:5:31;10662:10;:19;10654:28;;;;;;10693:47;10743:142;;;;;;;;10807:27;10827:6;10807:19;:27::i;:::-;10743:142;;;;10852:19;10865:5;10852:12;:19::i;:::-;10743:142;;10693:192;-1:-1:-1;10895:29:31;10927:33;10693:192;10927:25;:33::i;:::-;10895:65;;10978:17;10991:3;10978:12;:17::i;:::-;10971:24;;;;10544:458;;;;;:::o;6760:233::-;6839:25;6876:23;6902:26;6917:10;6902:14;:26::i;:::-;6876:52;;6945:41;6968:4;:17;;;6945:22;:41::i;:::-;6938:48;6760:233;-1:-1:-1;;;6760:233:31:o;3803:142::-;3882:18;-1:-1:-1;;;;;;;;;;;;;;;;;;3882:18:31;3919:14;3934:3;;3919:19;;;;;;;:::i;:::-;;;;;;;;;;;;;3912:26;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;3912:26:31;;;-1:-1:-1;;3912:26:31;;;;;;;;;;;;;;;;3803:142;-1:-1:-1;;;3803:142:31:o;11328:924::-;11450:6;;11466:12;;11450:6;-1:-1:-1;;;;;;;11570:41:31;;;11566:648;;11627:27;11647:6;11627:19;:27::i;:::-;11774:26;11803:14;11815:1;11803:11;:14::i;:::-;11774:43;-1:-1:-1;11831:19:31;11774:43;11845:4;11831:13;:19::i;:::-;11870:10;:3;:8;:10::i;:::-;11864:16;;1077:4:30;11894:23:31;;11613:315;11566:648;;;-1:-1:-1;;;;;;;11938:39:31;;;11934:280;;11993:18;12004:6;11993:10;:18::i;:::-;11934:280;;;-1:-1:-1;;;;;;;12032:42:31;;;12028:186;;12090:22;12105:6;12090:14;:22::i;12028:186::-;12143:60;;-1:-1:-1;;;12143:60:31;;;;;;;:::i;:::-;;;;;;;;12028:186;12231:1;;12234:5;;-1:-1:-1;12241:3:31;;-1:-1:-1;11328:924:31;-1:-1:-1;;;;11328:924:31:o;4199:130::-;4273:18;;:::i;:::-;4310:5;4316;4310:12;;;;;;;;:::i;:::-;;;;;;;;;;;4303:19;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;4303:19:31;;;-1:-1:-1;;4303:19:31;;;;-1:-1:-1;;;;;4303:19:31;;;;;;-1:-1:-1;;;4303:19:31;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;4303:19:31;;;-1:-1:-1;;4303:19:31;;;;;;;;;;;;-1:-1:-1;;;4303:19:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;4303:19:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;4303:19:31;;;-1:-1:-1;;4303:19:31;;;;;;-1:-1:-1;;;;;4303:19:31;;;;;;;-1:-1:-1;;;4303:19:31;;;;;;;;;;-1:-1:-1;;;4303:19:31;;;;;;;;;;;;;-1:-1:-1;4303:19:31;4199:130;-1:-1:-1;;4199:130:31:o;9257:160::-;9331:5;;-1:-1:-1;;;;;9331:5:31;9317:10;:19;9309:28;;;;;;9347:63;9368:34;9396:4;9368:19;:34::i;:::-;9404:5;9347:20;:63::i;:::-;9257:160;:::o;4335:805::-;4504:5;;4418:7;;-1:-1:-1;;;;;4504:5:31;4490:10;:19;4482:28;;;;;;4537:5;:12;;4559:16;;;;;4521:13;4559:16;;;4537:12;4570:4;;4537:12;;4559:16;;;;;;;;;;;;:::i;:::-;;;4673:10;4726:15;4743:10;4755:5;4709:52;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;4686:85;;;;;;4673:98;;4801:24;;;;;;;;;;;4820:4;4801:24;;;;;;;;;4781:17;;;;;;;;:44;;;;;;;;;;;;;;;-1:-1:-1;;4781:44:31;;;;;;;;;;-1:-1:-1;4870:23:31;;;;;;;;;;;4888:4;4870:23;;;;;;4852:14;:4;;:14;:::i;:::-;4836:31;;;;;;;:::i;:::-;;;;;;;;;;;;;:57;;;;;;;;;;;;;;;-1:-1:-1;;4836:57:31;;;;;;;;;;-1:-1:-1;5043:18:31;;;;;;;;:::i;:::-;4966:147;;4998:2;4966:147;5014:15;;;;;;;;:::i;:::-;5075:4;:28;;;4966:147;;;;;;;:::i;:::-;;;;;;;;5131:2;4335:805;-1:-1:-1;;;4335:805:31:o;3951:147::-;4032:20;-1:-1:-1;;;;;;;;;;;;;;;;;;4032:20:31;4071:15;4087:3;;4071:20;;;;;;;:::i;:::-;;;;;;;;;;;;;4064:27;;;;;;;;;;;;;;;;;;;;;;;;;;3951:147;-1:-1:-1;;;3951:147:31:o;5506:977::-;5586:12;5610:23;5636:26;5651:10;5636:14;:26::i;:::-;5610:52;;5673:35;;:::i;:::-;5734:31;;;;;;;;5750:4;:14;5734:31;;5718:47;;5792:15;;;;-1:-1:-1;;;;;5775:32:31;:14;;;:32;5837:18;;;;5817:38;;:17;;;:38;5878:34;5906:4;5878:19;:34::i;:::-;5865:10;;;:47;6041:27;6066:1;6041:24;:27::i;:::-;6026:12;;;:42;6090:10;;;;6078:9;;;:22;6128:16;;;;6110:34;;:15;;;:34;6170:14;;;;6154:30;;:13;;;:30;6224:64;6250:28;;;;6224:12;:64::i;:::-;6194:27;;;:94;6324:38;6337:24;;;;6324:12;:38::i;:::-;6298:23;;;:64;6396:36;6409:22;;;;6396:12;:36::i;:::-;6372:21;;;:60;6450:26;6372:3;6450:21;:26::i;:::-;6443:33;5506:977;-1:-1:-1;;;;5506:977:31:o;3358:51::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3358:51:31;;-1:-1:-1;3358:51:31;;-1:-1:-1;3358:51:31;-1:-1:-1;3358:51:31;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;3358:51:31;;;;;;;-1:-1:-1;;3358:51:31;;;:::o;6562:192::-;6642:29;-1:-1:-1;;;;;;;;;;;;6642:29:31;6690:57;;;;;;;;6741:4;6713:33;;;;;;;;:::i;:::-;;;;;;;;;;;;;6690:57;;;6683:64;;6562:192;;;:::o;9477:343::-;9551:25;-1:-1:-1;;;;;;;;;;;;;;;;;;9551:25:31;9588:37;9628:29;9644:5;9651;9628:15;:29::i;:::-;9588:69;;9667:35;9705:82;;;;;;;;;9737:9;:13;9705:82;;;;9764:9;:13;;;9705:82;;;;9667:120;9477:343;-1:-1:-1;;;;9477:343:31:o;2098:397:14:-;2190:25;-1:-1:-1;;;;;;;;;;;;;;;;;;2190:25:14;2227:24;2254:39;:6;:37;:39::i;:::-;2227:66;;2304:19;2326:113;1126:1:25;1226:10;1077:4:30;2417:11:14;2430:1;2433:5;2326:14;:113::i;:::-;2304:135;;2457:31;:6;:29;:31::i;9826:341:31:-;9919:7;;9979:73;10008:6;:10;10032:6;:10;;;9979:15;:73::i;:::-;9938:114;-1:-1:-1;10062:27:31;9938:114;10108:14;10100:23;;;:::i;5203:253::-;5284:18;;:::i;:::-;5314:21;5338:25;;;;;;;;5314:21;5338:25;5314:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;5381:8:31;5373:45;;;;-1:-1:-1;;;5373:45:31;;;;;;;:::i;:::-;5436:5;5442:2;:6;5436:13;;;;;;;;:::i;:::-;;;;;;;;;;;5429:20;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;5429:20:31;;;-1:-1:-1;;5429:20:31;;;;-1:-1:-1;;;;;5429:20:31;;;;;;-1:-1:-1;;;5429:20:31;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;5429:20:31;;;-1:-1:-1;;5429:20:31;;;;;;;;;;;;-1:-1:-1;;;5429:20:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;5429:20:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;5429:20:31;;;-1:-1:-1;;5429:20:31;;;;;;-1:-1:-1;;;;;5429:20:31;;;;;;;-1:-1:-1;;;5429:20:31;;;;;;;;;;-1:-1:-1;;;5429:20:31;;;;;;;;;;;;;-1:-1:-1;5429:20:31;5203:253;-1:-1:-1;;;5203:253:31:o;2267:373::-;2348:12;2368:26;2397:15;2409:2;2397:11;:15::i;:::-;2368:44;-1:-1:-1;2418:22:31;2368:44;2438:1;2418:19;:22::i;:::-;2446:36;2462:6;:19;2446:3;;:15;:36::i;:::-;2488:32;2504:6;:15;;;2488:3;;:15;:32::i;:::-;2526:40;2540:6;:25;;;2526:3;;:13;:40::i;:::-;2572:42;2586:6;:27;;;2572:3;;:13;:42::i;:::-;2627:10;:3;:8;:10::i;6999:1160::-;7094:10;-1:-1:-1;;;;;7094:38:31;7073:124;;;;-1:-1:-1;;;7073:124:31;;;;;;;:::i;:::-;7208:49;7260:58;:6;:56;:58::i;:::-;7208:110;;7328:40;7371:58;7408:3;:11;;;7371:23;:58::i;:::-;7328:101;-1:-1:-1;7440:21:31;7328:101;7464:18;:23;7440:47;;7505:15;7521:8;7505:25;;;;;;:::i;:::-;;;;;;;;;;;;;:31;;;;;7497:86;;;;-1:-1:-1;;;7497:86:31;;;;;;;:::i;:::-;7602:14;7617:8;7602:24;;;;;;:::i;:::-;;;;;;;;;;;;;:30;;;;;7601:31;7593:103;;;;-1:-1:-1;;;7593:103:31;;;;;;;:::i;:::-;7707:22;7732:52;7747:15;7763:8;7747:25;;;;;;:::i;:::-;;;;;;;;;;;;;:36;7732:14;:52::i;:::-;7707:77;;7828:3;:17;;;7802:43;;:8;:22;;;:43;;;7794:84;;;;-1:-1:-1;;;7794:84:31;;;;;;;:::i;:::-;7946:3;:27;;;7896:46;7909:8;:32;;;7896:12;:46::i;:::-;:77;;7888:131;;;;-1:-1:-1;;;7888:131:31;;;;;;;:::i;:::-;8080:3;:21;;;8037:40;8050:8;:26;;;8037:12;:40::i;:::-;:64;8029:122;;;;-1:-1:-1;;;8029:122:31;;;;;;;:::i;:::-;7063:1096;;;;6999:1160;:::o;2741:174:22:-;2798:22;;:::i;:::-;2832:31;2844:4;:8;2854;2832:11;:31::i;:::-;-1:-1:-1;2886:1:22;2873:10;;;:14;:4;2741:174;-1:-1:-1;2741:174:22:o;4456:138::-;4534:53;4551:3;4556:5;:30;;2598:2;4534:16;:53::i;4556:30::-;2641:2;4534:16;:53::i;:::-;4456:138;;:::o;2921:158::-;2981:12;3013:3;:9;;;:14;3005:39;;;;-1:-1:-1;;;3005:39:22;;;;;;;:::i;:::-;3061:3;:7;:11;3054:18;2921:158;-1:-1:-1;;2921:158:22:o;8165:914:31:-;8246:10;-1:-1:-1;;;;;8246:38:31;8225:124;;;;-1:-1:-1;;;8225:124:31;;;;;;;:::i;:::-;8360:34;8397:63;8444:6;8397:33;:63::i;:::-;8360:100;-1:-1:-1;8470:40:31;8513:64;8360:100;8550:17;8513:23;:64::i;:::-;8470:107;-1:-1:-1;8609:15:31;8470:107;8625:18;:23;8609:40;;;;;;:::i;:::-;;;;;;;;;;;;;:46;;;;;8588:135;;;;-1:-1:-1;;;8588:135:31;;;;;;;:::i;:::-;8755:14;8770:8;:18;:23;8755:39;;;;;;:::i;:::-;;;;;;;;;;;;;:45;;;;;8754:46;8733:152;;;;-1:-1:-1;;;8733:152:31;;;;;;;:::i;:::-;8938:75;;;;;;;;8963:8;:17;;;:22;8938:75;;8999:4;8938:75;;;;;8896:14;8911:8;:18;:23;8896:39;;;;;;:::i;:::-;;;;;;;;;;;;;:117;;;;;;;;:::i;:::-;;;;;;;;;;;;;-1:-1:-1;;8896:117:31;;;;;;;;;;-1:-1:-1;9061:11:31;;;;9023:10;9034:8;:18;:23;9023:35;;;;;;:::i;:::-;;;;;;;;;;;;;:49;;-1:-1:-1;;9023:49:31;-1:-1:-1;;;;;9023:49:31;;;;;;;;;;-1:-1:-1;;;8165:914:31:o;11008:314::-;11093:10;-1:-1:-1;;;;;11093:40:31;11072:128;;;;-1:-1:-1;;;11072:128:31;;;;;;;:::i;:::-;11215:36;;;;;;:::i;:::-;;;;;;;;11008:314;:::o;1495:406:14:-;1597:24;1624:35;:16;:33;:35::i;:::-;1597:62;;1670:17;1690:112;1126:1:25;1170:9;1077:4:30;1776:11:14;1789:5;1796;1690:14;:112::i;:::-;1670:132;;1816:4;:11;:16;1812:83;;1855:29;;-1:-1:-1;;;1855:29:14;;;;;;;;;;;1812:83;1587:314;;1495:406;;:::o;2466:262:28:-;2526:29;-1:-1:-1;;;;;;;;;;;;2526:29:28;2567:27;2597:46;2635:7;2597:37;:46::i;:::-;2567:76;;2660:61;;;;;;;;2709:6;:10;2683:37;;;;;;;;:::i;:::-;;;;;;;;;;;;;2660:61;;;2653:68;;;2466:262;;;:::o;1211:1084:32:-;1308:12;1386:26;1415:15;1427:2;1415:11;:15::i;:::-;1386:44;-1:-1:-1;1437:23:32;1386:44;1457:2;1437:19;:23::i;:::-;1668:64;1703:12;:22;:27;1681:50;;;;;;;;:::i;:::-;;;;;;;;;;;;;1668:3;:12;;:64;;;;:::i;:::-;1738:40;1754:12;:23;;;1738:3;;:15;:40::i;:::-;1784:41;1798:12;:26;;;1784:3;;:13;:41::i;:::-;1831:40;1846:12;:19;;;:24;1831:3;;:14;:40::i;:::-;1877:42;1892:12;:21;;;:26;1877:3;;:14;:42::i;:::-;1925:35;1941:12;:18;;;1925:3;;:15;:35::i;:::-;1966:40;1981:12;:24;;;1966:3;;:14;:40::i;:::-;2012:38;2027:12;:22;;;2012:3;;:14;:38::i;:::-;2056:70;2071:54;:12;:36;;;:52;:54::i;:::-;2056:3;;:14;:70::i;:::-;2132:66;2147:50;:12;:32;;;:48;:50::i;2132:66::-;2204:64;2219:48;:12;:30;;;:46;:48::i;4155:155:20:-;4233:16;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;4233:16:20;4267:36;4290:3;4273:21;;;;;;;;:::i;:::-;;;;;;;;;;;;;4296:3;4301:1;4267:5;:36::i;1648:366:19:-;1760:12;1784:26;1813:15;1825:2;1813:11;:15::i;:::-;1784:44;-1:-1:-1;1839:22:19;1784:44;1859:1;1839:19;:22::i;:::-;1871:46;1886:6;:25;:30;1871:3;;:14;:46::i;:::-;1927:52;1942:36;:6;:18;;;:34;:36::i;5152:699:26:-;5366:12;5405:21;5440:15;;;5436:85;;;5495:7;5504:5;5478:32;;-1:-1:-1;;;5478:32:26;;;;;;;;;:::i;5436:85::-;5532:12;;-1:-1:-1;;;;;5634:10:26;5647:5;5654:11;:43;;1713:10;5654:43;;;1538:10;5654:43;5699:5;5706:11;5719:6;5616:110;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;5567:169;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;5567:169:26;;;;;;;;;-1:-1:-1;5567:169:26;;;;;;;;;;;;;;5531:205;;;;5751:7;5746:63;;5781:17;;-1:-1:-1;;;5781:17:26;;;;;;;;;;;5746:63;5826:18;5839:4;5826:12;:18::i;:::-;5819:25;5152:699;-1:-1:-1;;;;;;;;;;5152:699:26:o;3683:406:17:-;3756:25;-1:-1:-1;;;;;;;;;;;;;;;;;;3756:25:17;3793:16;3819:12;3863:1;3850:3;:10;:14;3846:180;;;3897:22;:3;3911:7;3897:13;:22::i;:::-;3880:39;;-1:-1:-1;3880:39:17;-1:-1:-1;3950:1:17;3880:39;3937:10;:14;3933:83;;;3978:23;:3;:21;:23::i;3933:83::-;4043:39;;;;;;;;;4072:1;4062:12;;;;;-1:-1:-1;;4062:12:17;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;4062:12:17;-1:-1:-1;4043:39:17;;4076:5;4043:39;;;;;4036:46;3683:406;-1:-1:-1;;;;3683:406:17:o;3679:145:20:-;3765:16;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;3765:16:20;3799:18;3805:3;3810;3815:1;3799:5;:18::i;4984:148:22:-;5071:54;5095:3;2298:1;5118:6;5071:23;:54::i;4246:204::-;4335:70;4353:3;2249:1;4390:5;4384:19;4335:17;:70::i;:::-;4415:28;4436:5;4415:3;:7;:14;;:28::i;:::-;;4246:204;;:::o;3629:134::-;3711:45;3729:3;2094:1;3750:5;3711:17;:45::i;2136:424:15:-;2227:49;-1:-1:-1;;;;;;;;;;;;;;;;;;2227:49:15;2288:12;;2350:31;:7;2288:12;2350:22;:31::i;:::-;2333:48;-1:-1:-1;2333:48:15;-1:-1:-1;2405:1:15;2398:8;;2391:16;;;;:::i;:::-;2445:26;:7;2463;2445:17;:26::i;:::-;2418:53;;;;-1:-1:-1;2506:26:15;:7;2418:53;2506:17;:26::i;:::-;-1:-1:-1;2482:11:15;;;2481:51;-1:-1:-1;2482:3:15;;2136:424;-1:-1:-1;;2136:424:15:o;2297:1681:32:-;2372:35;;:::i;:::-;2415:12;;2469:31;:7;2415:12;2469:22;:31::i;:::-;2452:48;-1:-1:-1;2452:48:32;-1:-1:-1;2520:2:32;2513:9;;2506:17;;;;:::i;:::-;2530:22;2581:26;:7;2599;2581:17;:26::i;:::-;2558:49;-1:-1:-1;2558:49:32;-1:-1:-1;2558:49:32;2630:1;2558:49;2620:12;;;;;;;:::i;:::-;;;;;-1:-1:-1;;;;;;2620:12:32;:20;2613:28;;;;:::i;:::-;2843:1;2824:9;:16;:20;;;;:::i;:::-;-1:-1:-1;;;;;2814:31:32;;;;;;;:::i;:::-;;;;;;-1:-1:-1;;2814:31:32;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2814:31:32;-1:-1:-1;2793:3:32;:13;:52;2868:1;2851:104;2875:9;:16;2871:1;:20;2851:104;;;2936:9;2946:1;2936:12;;;;;;;;:::i;:::-;;;;;-1:-1:-1;;;;;;2936:12:32;2908:3;:13;:18;2927:5;2931:1;2927;:5;:::i;:::-;2908:25;;;;;;;;:::i;:::-;;;;:40;-1:-1:-1;;;;;2908:40:32;;;;;;;;-1:-1:-1;2893:3:32;;;;:::i;:::-;;;;2851:104;;;-1:-1:-1;2989:27:32;:7;3008;2989:18;:27::i;:::-;-1:-1:-1;;;;;2961:55:32;;;2962:14;;;2961:55;;-1:-1:-1;3053:25:32;:7;2961:55;3053:16;:25::i;:::-;3022:56;;;3023:17;;;3022:56;;-1:-1:-1;3113:26:32;:7;3022:56;3113:17;:26::i;:::-;3085:3;:10;;;3084:55;;;;;-1:-1:-1;3176:26:32;:7;3084:55;3176:17;:26::i;:::-;3146:3;:12;;;3145:57;;;;;-1:-1:-1;3232:27:32;:7;3145:57;3232:18;:27::i;:::-;3210:9;;;3209:50;;;;;-1:-1:-1;3294:26:32;:7;3209:50;3294:17;:26::i;:::-;3265:55;;;;;3266:15;;;3265:55;;-1:-1:-1;3353:26:32;:7;3265:55;3353:17;:26::i;:::-;3326:53;;;;;3327:13;;;3326:53;;-1:-1:-1;3386:42:32;3477:26;:7;3326:53;3477:17;:26::i;:::-;3434:69;-1:-1:-1;3434:69:32;-1:-1:-1;3539:58:32;3434:69;3539:56;:58::i;:::-;3509:27;;;:88;3604:38;3687:26;:7;3705;3687:17;:26::i;:::-;3648:65;-1:-1:-1;3648:65:32;-1:-1:-1;3745:45:32;3648:65;3745:43;:45::i;:::-;3719:23;;;:71;3797:36;3876:26;:7;3894;3876:17;:26::i;:::-;3839:63;-1:-1:-1;3839:63:32;-1:-1:-1;3932:43:32;3839:63;3932:41;:43::i;:::-;3908:21;;;:67;-1:-1:-1;3908:3:32;;2297:1681;-1:-1:-1;;;;;;2297:1681:32:o;2512:556:21:-;2583:13;-1:-1:-1;;;;;;;;;;;;;;;;;;2583:13:21;2612;2623:2;2612:8;:13;:::i;:::-;:18;2608:81;;2664:13;2675:2;2664:8;:13;:::i;:::-;2658:20;;:2;:20;:::i;:::-;2646:32;;;;:::i;:::-;;;2608:81;2744:12;;;:23;;;2817:4;2811:11;2847:3;2842;2835:16;2876:1;2871:3;2864:14;2919:8;2914:3;2910:18;2906:2;2902:27;2953:3;2948;2945:12;2942:60;;;2986:1;2983;2976:12;2942:60;3022:4;3015:17;-1:-1:-1;3058:3:21;;2512:556;-1:-1:-1;;2512:556:21:o;8425:158:22:-;8510:66;8537:28;8536:38;;8510:3;:7;:19;;:66::i;853:356:32:-;938:33;-1:-1:-1;;;;;;;;;;;;;;;;;;938:33:32;979:12;;1033:31;:7;979:12;1033:22;:31::i;:::-;1016:48;-1:-1:-1;1016:48:32;-1:-1:-1;1084:1:32;1077:8;;1070:16;;;;:::i;:::-;1123:26;:7;1141;1123:17;:26::i;:::-;1093:56;;;;-1:-1:-1;1179:27:32;:7;1093:56;1179:18;:27::i;:::-;-1:-1:-1;;;;;;1155:51:32;1156:10;;;1155:51;-1:-1:-1;1156:3:32;;853:356;-1:-1:-1;;853:356:32:o;2219:224:18:-;2304:12;2328:26;2357:15;2369:2;2357:11;:15::i;:::-;2328:44;-1:-1:-1;2383:25:18;2398:4;:9;2383:3;;:14;:25::i;1204:421:29:-;1281:20;-1:-1:-1;;;;;;;;;;;;;;;;;;1281:20:29;1313:27;-1:-1:-1;;;;;;;;;;;;;;;;;;1313:27:29;1419:11;1429:1;1419:11;;;;;1401:4;1393:12;1378;1448:10;;;1444:112;;1478:32;:6;1503:5;1478:18;:32::i;:::-;-1:-1:-1;1535:6:29;;1204:421;-1:-1:-1;;;1204:421:29:o;1444:112::-;1569:39;:6;1602:4;1594:12;;1569:18;:39::i;:::-;;1364:255;1351:268;;;1303:322;1204:421;;;:::o;1810:248:18:-;1900:72;1927:42;1900:3;:7;:19;;:72::i;:::-;-1:-1:-1;1982:38:18;1478:2;1982:3;:7;:19;;:38::i;:::-;-1:-1:-1;2030:21:18;:3;2045:5;4053:187:22;4140:62;4158:3;2199:1;4188:5;:12;4140:17;:62::i;3769:278::-;3862:1;3853:5;:10;;;3849:192;;3879:53;3897:3;2094:1;3925:5;3879:17;:53::i;3849:192::-;3963:67;3981:3;2150:1;4018:10;4023:5;-1:-1:-1;;4018:10:22;:::i;:::-;3963:17;:67::i;1235:389:16:-;1314:12;1338:16;1367:3;:7;:14;:18;;1384:1;1367:18;:::i;:::-;-1:-1:-1;;;;;1357:29:16;;;;;;;:::i;:::-;;;;;;-1:-1:-1;;1357:29:16;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1357:29:16;;1338:48;;1406:3;:7;;;:15;;1417:4;1406:15;:45;;1446:4;1406:45;;;-1:-1:-1;;;1406:45:16;1397:3;1401:1;1397:6;;;;;;;;:::i;:::-;;;;:54;-1:-1:-1;;;;;1397:54:16;;;;;;;;-1:-1:-1;1475:1:16;1462:10;1486:111;1507:3;:7;:14;1503:1;:18;1486:111;;;1555:3;:7;1563:1;1555:10;;;;;;;;:::i;:::-;;;;;-1:-1:-1;;;;;;1555:10:16;1542:3;1546:5;1542:3;:10;;;;;;;:::i;:::-;;;;:23;-1:-1:-1;;;;;1542:23:16;;;;;;;;-1:-1:-1;1579:7:16;;;;:::i;:::-;;;;1523:3;;;;;:::i;:::-;;;;1486:111;;34373:2127:20;34480:18;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;34480:18:20;34702:4;34697:3;34693:14;34740:3;34734:10;34757:7;34792;34822:17;;;34819:24;34911:1;34906:201;;;;35171:17;;;35183:4;35161:28;;;35362:19;;;35346:36;;35253:20;;35249:31;;-1:-1:-1;34812:611:20;;34906:201;34955:4;34946:7;34942:18;34931:29;;35046:6;35037:7;35030:23;34812:611;;35480:6;35475:3;35467:6;35461:4;35456:3;35451;35440:47;35436:52;35583:4;35573:7;35567:14;35563:25;35554:7;35550:39;35544:4;35537:53;35740:7;35734:14;35761:436;35788:4;35774:19;;35761:436;;35900:1;35893:4;35884:7;35880:18;35874:25;35871:31;35956:1;35951:40;;;;36052:5;;;35951:40;35984:4;35975:7;35971:18;35960:29;;-1:-1:-1;;;36164:19:20;35761:436;;;36210:26;;36250:18;;-1:-1:-1;;;36360:4:20;36353:12;;36346:25;;;36454:11;;:39;;36487:6;36454:39;;;36468:16;36478:1;:5;36468:9;:16::i;:::-;36443:8;;;:50;:1;34373:2127;-1:-1:-1;;;34373:2127:20:o;7249:746:26:-;7321:12;7346:11;;;7409:49;;;7420:12;7409:49;;;;;;;;:::i;:::-;7345:113;;-1:-1:-1;7345:113:26;-1:-1:-1;7345:113:26;-1:-1:-1;;;;;;7473:31:26;;7469:417;;7524:12;:19;:24;7520:93;;7575:23;;-1:-1:-1;;;7575:23:26;;;;;;;;;;;7520:93;7469:417;;;-1:-1:-1;;;;;7633:31:26;;1077:4:30;7633:31:26;;:70;;-1:-1:-1;;;;;;7668:35:26;;1038:4:30;7668:35:26;7633:70;7629:257;;;7723:12;:19;7746:1;7723:24;7719:93;;7774:23;;-1:-1:-1;;;7774:23:26;;;;;;;;;;;7629:257;7862:12;7849:26;;-1:-1:-1;;;7849:26:26;;;;;;;;:::i;7629:257::-;7900:9;;7896:63;;7943:4;7932:16;;-1:-1:-1;;;7932:16:26;;;;;;;;:::i;4674:759:27:-;4753:12;4767:4;4783:9;4802:8;4843:34;4859:8;4869:7;4843:15;:34::i;:::-;4821:56;-1:-1:-1;4821:56:27;;-1:-1:-1;;;;;;4821:56:27;;-1:-1:-1;4895:13:27;;;1291:1;4895:13;;:37;;-1:-1:-1;4912:20:27;;;1174:1;4912:20;4895:37;4887:96;;;;-1:-1:-1;;;4887:96:27;;;;;;;:::i;:::-;-1:-1:-1;;4998:13:27;;;;4994:142;;5049:34;5065:8;5075:7;5049:15;:34::i;:::-;5027:56;-1:-1:-1;5027:56:27;;-1:-1:-1;;;;;;5027:56:27;;-1:-1:-1;5104:20:27;;;1174:1;5104:20;5097:28;;;;:::i;:::-;5146:12;5161:13;5171:3;5161:7;:13;:::i;:::-;5146:28;;5184:18;5215:3;-1:-1:-1;;;;;5205:14:27;;;;;;;:::i;:::-;;;;;;-1:-1:-1;;5205:14:27;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;5205:14:27;-1:-1:-1;5184:35:27;-1:-1:-1;5229:16:27;5276:7;5259:128;5289:7;5285:1;:11;5259:128;;;5338:8;5347:1;5338:11;;;;;;;;:::i;:::-;;;;;-1:-1:-1;;;;;;5338:11:27;5317:5;5323:11;5317:5;:18;;;;;;;:::i;:::-;;;;:32;-1:-1:-1;;;;;5317:32:27;;;;;;;;-1:-1:-1;5363:13:27;;;;:::i;:::-;;;;5298:3;;;;;:::i;:::-;;;;5259:128;;;-1:-1:-1;5405:5:27;5412:13;5422:3;5412:7;:13;:::i;:::-;5397:29;;;;;;;;;4674:759;;;;;;:::o;1780:482:16:-;1848:25;-1:-1:-1;;;;;;;;;;;;;;;;;;1848:25:16;1889:3;:10;1903:1;1889:15;1885:87;;1927:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1920:41;1780:482;-1:-1:-1;;1780:482:16:o;1885:87::-;1982:16;2024:1;2011:3;:10;:14;;;;:::i;:::-;-1:-1:-1;;;;;2001:25:16;;;;;;;:::i;:::-;;;;;;-1:-1:-1;;2001:25:16;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2001:25:16;;1982:44;;2036:8;2067:3;2071:1;2067:6;;;;;;;;:::i;:::-;;;;;-1:-1:-1;;;;;;2067:6:16;-1:-1:-1;;;2067:14:16;2063:55;;-1:-1:-1;2103:4:16;2063:55;2142:1;2128:82;2149:3;:10;2145:1;:14;2128:82;;;2193:3;2197:1;2193:6;;;;;;;;:::i;:::-;;;;;-1:-1:-1;;;;;;2193:6:16;2180:3;2184:5;2188:1;2184;:5;:::i;:::-;2180:10;;;;;;;;:::i;:::-;;;;:19;-1:-1:-1;;;;;2180:19:16;;;;;;;;-1:-1:-1;2161:3:16;;;;:::i;:::-;;;;2128:82;;;;2227:28;;;;;;;;;;;;;;;;;;1780:482;-1:-1:-1;;1780:482:16:o;8268:151:22:-;8375:37;8393:3;8398:5;8405:6;7381:729;7494:2;7485:5;-1:-1:-1;;;;;7485:11:22;;7481:623;;7512:48;7538:20;7548:1;7539:10;;;7538:20;;;7512:3;:7;:19;;:48::i;7481:623::-;7590:4;7581:5;-1:-1:-1;;;;;7581:13:22;;7577:527;;7610:45;7651:2;7637:10;7646:1;7637:10;;;;7636:17;7610:3;:7;:19;;:45::i;:::-;-1:-1:-1;7669:27:22;-1:-1:-1;;;;;7669:27:22;;7694:1;7669:3;:7;:17;:27;:17;:27::i;7577:527::-;7726:6;7717:5;-1:-1:-1;;;;;7717:15:22;;7713:391;;7748:45;7789:2;7775:10;7784:1;7775:10;;;;7774:17;7748:3;:7;:19;;:45::i;:::-;-1:-1:-1;7807:27:22;-1:-1:-1;;;;;7807:27:22;;7832:1;7807:3;:7;:17;:27;:17;:27::i;7713:391::-;7864:10;7855:5;-1:-1:-1;;;;;7855:19:22;;7851:253;;7890:45;7931:2;7917:10;7926:1;7917:10;;;;7916:17;7890:3;:7;:19;;:45::i;:::-;-1:-1:-1;7949:27:22;-1:-1:-1;;;;;7949:27:22;;7974:1;7949:3;:7;:17;:27;:17;:27::i;7851:253::-;8007:45;8048:2;8034:10;8043:1;8034:10;;;;8033:17;8007:3;:7;:19;;:45::i;:::-;-1:-1:-1;8066:27:22;-1:-1:-1;;;;;8066:27:22;;8091:1;8066:3;:7;:17;:27;:17;:27::i;6056:146:21:-;6133:13;-1:-1:-1;;;;;;;;;;;;;;;;;;6133:13:21;6165:30;6172:3;6177:4;6183;:11;6165:6;:30::i;3152:308:27:-;3236:4;3242;3258:9;3277:8;3318:34;3334:8;3344:7;3318:15;:34::i;:::-;3296:56;-1:-1:-1;3296:56:27;;-1:-1:-1;;;;;;3296:56:27;;-1:-1:-1;3370:15:27;;;1237:1;3370:15;3362:59;;;;-1:-1:-1;;;3362:59:27;;;;;;;:::i;:::-;3440:3;3445:7;;-1:-1:-1;;;;3152:308:27:o;8958:332::-;9038:6;9046:4;9062:9;9081:10;9126:34;9142:8;9152:7;9126:15;:34::i;:::-;9102:58;-1:-1:-1;9102:58:27;;-1:-1:-1;;;;;;9102:58:27;;-1:-1:-1;9178:21:27;;;;9170:71;;;;-1:-1:-1;;;9170:71:27;;;;;;;:::i;2460:381::-;2538:4;2544;2560:9;2579:10;2624:34;2640:8;2650:7;2624:15;:34::i;:::-;2600:58;-1:-1:-1;2600:58:27;;-1:-1:-1;;;;;;2600:58:27;;-1:-1:-1;2676:15:27;;;1320:1;2676:15;2668:59;;;;-1:-1:-1;;;2668:59:27;;;;;;;:::i;:::-;1428:2;2744:18;;;:41;;-1:-1:-1;1460:2:27;2766:19;;2744:41;2737:49;;;;:::i;:::-;1460:2;2805:19;;;2826:7;;-1:-1:-1;;;;2460:381:27:o;3774:590::-;3854:13;3869:4;3885:9;3904:8;3945:34;3961:8;3971:7;3945:15;:34::i;:::-;3923:56;-1:-1:-1;3923:56:27;;-1:-1:-1;;;;;;3923:56:27;;-1:-1:-1;3997:20:27;;;1208:1;3997:20;3989:69;;;;-1:-1:-1;;;3989:69:27;;;;;;;:::i;:::-;4069:12;4084:13;4094:3;4084:7;:13;:::i;:::-;4069:28;;4107:18;4138:3;-1:-1:-1;;;;;4128:14:27;;;;;;;:::i;:::-;;;;;;-1:-1:-1;;4128:14:27;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;4128:14:27;-1:-1:-1;4107:35:27;-1:-1:-1;4152:16:27;4199:7;4182:128;4212:7;4208:1;:11;4182:128;;;4261:8;4270:1;4261:11;;;;;;;;:::i;:::-;;;;;-1:-1:-1;;;;;;4261:11:27;4240:5;4246:11;4240:5;:18;;;;;;;:::i;:::-;;;;:32;-1:-1:-1;;;;;4240:32:27;;;;;;;;-1:-1:-1;4286:13:27;;;;:::i;:::-;;;;4221:3;;;;;:::i;:::-;;;;4182:128;;11407:376;11486:5;11493:4;11509:9;11528:10;11573:34;11589:8;11599:7;11573:15;:34::i;:::-;11549:58;-1:-1:-1;11549:58:27;;-1:-1:-1;;;;;;11549:58:27;;-1:-1:-1;11625:19:27;;;1140:1;11625:19;;:44;;-1:-1:-1;11648:21:27;;;;11625:44;11617:110;;;;-1:-1:-1;;;11617:110:27;;;;;;;:::i;6471:700:21:-;6546:13;-1:-1:-1;;;;;;;;;;;;;;;;;;6546:13:21;6571:8;6582:3;:7;:14;6571:25;-1:-1:-1;6606:15:21;6624:7;6571:25;6630:1;6624:7;:::i;:::-;6606:25;;6652:3;:12;;;6645:3;:19;6641:77;;6680:27;6687:3;6692:14;:10;6705:1;6692:14;:::i;:::-;6680:6;:27::i;:::-;6820:3;6814:10;6941:2;6935:3;6927:6;6923:16;6919:25;6971:4;6965;6957:19;7067:6;7061:13;7049:10;7046:29;7043:91;;;7109:10;7101:6;7094:26;7043:91;-1:-1:-1;7161:3:21;;6471:700;-1:-1:-1;;;;;6471:700:21:o;29694:470:20:-;29765:6;29785:9;29792:1;29785:6;:9::i;:::-;29782:22;;;-1:-1:-1;29803:1:20;;29694:470;-1:-1:-1;29694:470:20:o;29782:22::-;29814:11;29880:4;29878:1;29874:11;29868:18;29858:28;;29946:17;29956:6;29946:9;:17::i;:::-;29942:21;;30115:1;30107:4;30103:1;30097:8;30093:19;30089:28;30086:1;30082:36;30077:41;;30063:95;29694:470;;;:::o;15880:1381:27:-;15963:5;15970:6;15978:4;15994:11;16008:27;16019:4;16025:9;16008:10;:27::i;:::-;15994:41;-1:-1:-1;16045:14:27;16058:1;16045:14;;:::i;:::-;;-1:-1:-1;16081:19:27;16099:1;16081:19;;;;16130:4;16122:12;;16242:2;16236:8;;16228:58;;;;-1:-1:-1;;;16228:58:27;;;;;;;:::i;:::-;16338:2;16332:3;:8;;;16328:67;;;16364:3;;-1:-1:-1;16356:28:27;;;-1:-1:-1;16374:9:27;;-1:-1:-1;16356:28:27;;-1:-1:-1;16356:28:27;16328:67;16439:3;:9;;16446:2;16439:9;16435:234;;16464:10;16477:27;16488:4;16494:9;16477:10;:27::i;:::-;16464:40;-1:-1:-1;16518:14:27;16531:1;16518:14;;:::i;:::-;;;16562:2;16554:4;:10;;;;16546:35;;;;-1:-1:-1;;;16546:35:27;;;;;;;:::i;:::-;16637:3;;-1:-1:-1;;16629:29:27;;;-1:-1:-1;16648:9:27;;-1:-1:-1;16629:29:27;;-1:-1:-1;16629:29:27;16435:234;16716:3;:9;;16723:2;16716:9;16712:159;;16741:14;16758:28;16770:4;16776:9;16758:11;:28::i;:::-;16741:45;-1:-1:-1;16800:14:27;16813:1;16800:14;;:::i;:::-;;-1:-1:-1;16836:3:27;;-1:-1:-1;;16828:32:27;;;-1:-1:-1;16800:14:27;;-1:-1:-1;16828:32:27;;-1:-1:-1;16828:32:27;16712:159;16918:3;:9;;16925:2;16918:9;16914:159;;16943:14;16960:28;16972:4;16978:9;16960:11;:28::i;:::-;16943:45;-1:-1:-1;17002:14:27;17015:1;17002:14;;:::i;:::-;;-1:-1:-1;17038:3:27;;-1:-1:-1;;17030:32:27;;;-1:-1:-1;17002:14:27;;-1:-1:-1;17030:32:27;;-1:-1:-1;17030:32:27;16914:159;17123:3;:9;;17130:2;17123:9;17116:17;;;;:::i;:::-;17143:14;17160:28;17172:4;17178:9;17160:11;:28::i;:::-;17143:45;-1:-1:-1;17198:14:27;17211:1;17198:14;;:::i;:::-;;-1:-1:-1;17230:3:27;;-1:-1:-1;17235:7:27;;-1:-1:-1;17198:14:27;;-1:-1:-1;;;15880:1381:27;;;;;;:::o;9627:796:21:-;9709:13;-1:-1:-1;;;;;;;;;;;;;;;;;;9709:13:21;9734:8;9745:3;:7;:14;9734:25;-1:-1:-1;9769:16:21;9788:9;9734:25;9788:3;:9;:::i;:::-;9769:28;;9825:3;:12;;;9811:11;:26;9807:85;;;9853:28;9860:3;9865:15;:11;9879:1;9865:15;:::i;9853:28::-;9902:9;9929:1;9915:10;9922:3;9915;:10;:::i;:::-;9914:16;;;;:::i;:::-;9902:28;;10032:3;10026:10;10151:11;10143:6;10139:24;10221:4;10213;10209:9;10202:4;10196:11;10192:27;10189:37;10183:4;10176:51;10319:6;10313:13;10300:11;10297:30;10294:93;;;10361:11;10353:6;10346:27;10294:93;-1:-1:-1;10413:3:21;;9627:796;-1:-1:-1;;;;;;;9627:796:21:o;4354:1428::-;4441:13;-1:-1:-1;;;;;;;;;;;;;;;;;;4441:13:21;4481:4;:11;4474:3;:18;;4466:27;;;;;;4504:8;4515:3;:7;:14;4504:25;-1:-1:-1;4539:16:21;4558:9;4564:3;4504:25;4558:9;:::i;:::-;4539:28;;4595:3;:12;;;4581:11;:26;4577:85;;;4623:28;4630:3;4635:15;:11;4649:1;4635:15;:::i;4623:28::-;4672:9;4691:8;4801:3;4795:10;4884:6;4878:13;5012:3;5007:2;4999:6;4995:15;4991:25;4983:33;;5106:6;5093:11;5090:23;5087:86;;;5147:11;5139:6;5132:27;5087:86;-1:-1:-1;;;5203:2:21;5193:13;;5276:165;5290:2;5283:3;:9;5276:165;;5365:3;5359:10;5346:24;;5397:10;5405:2;5353:4;5397:10;:::i;:::-;;-1:-1:-1;5421:9:21;5428:2;5421:9;;:::i;:::-;;-1:-1:-1;5294:9:21;5301:2;5294:9;;:::i;:::-;;;5276:165;;;-1:-1:-1;;5528:2:21;:8;;;5520:3;:17;5519:23;5614:9;;5608:3;5602:10;5598:26;5674:4;5667;5661:11;5657:22;5709:21;5696:35;;;-1:-1:-1;5772:3:21;;4354:1428;-1:-1:-1;;;;;;4354:1428:21:o;3503:167::-;3576:19;3598:3;:7;3576:29;;3615:19;3620:3;3625:8;3615:4;:19::i;:::-;;3644;3651:3;3656:6;3644;:19::i;28675:447:20:-;28743:4;;28848;28842:11;;28743:4;28872:222;28888:1;:8;28886:1;:10;28872:222;;;28946:10;28940:17;28930:27;-1:-1:-1;28998:10:20;;28995:27;;-1:-1:-1;29017:5:20;;28675:447;-1:-1:-1;;;;28675:447:20:o;28995:27::-;29077:4;29061:21;;;;28898:5;;;;:::i;:::-;;;28872:222;;;-1:-1:-1;29110:4:20;;28675:447;-1:-1:-1;;;;28675:447:20:o;30481:2271::-;30545:6;30592:8;;30618:1;30613:45;;;;-1:-1:-1;;;;;;30983:11:20;30939:7;30897:5;30856:4;30815;30774;-1:-1:-1;;30731:8:20;;30767:12;;;30761:19;30808:12;;;30802:19;30849:12;;;30843:19;30890:13;;;30884:20;30932:15;;;30926:22;30976:19;;;30970:26;31024:27;;;31018:34;31080:43;;;31074:50;30737:1;31146:9;;31187:4;31181:11;31229:66;31216:1;31209:87;31333:66;31326:4;31324:1;31320:11;31313:87;31437:66;31430:4;31428:1;31424:11;31417:87;31541:66;31534:4;31532:1;31528:11;31521:87;31645:66;31638:4;31636:1;31632:11;31625:87;31749:66;31742:4;31740:1;31736:11;31729:87;31853:66;31846:4;31844:1;31840:11;31833:87;31957:66;31950:4;31948:1;31944:11;31937:87;32061:5;32058:1;32054:13;32048:4;32041:27;32098:64;-1:-1:-1;;;32303:5:20;32295;32292:1;32288:13;32284:25;32362:5;32355:2;32351:3;32347:11;32345:1;32341:18;32335:25;32331:37;-1:-1:-1;;;32406:75:20;;32401:3;32397:85;32390:93;;-1:-1:-1;;;32651:11:20;;32642:21;;32636:86;;32702:1;32699;32695:9;32690:14;;32636:86;30679:2057;;;;;30585:2151;;30613:45;-1:-1:-1;30643:1:20;;30481:2271;-1:-1:-1;;30481:2271:20:o;13952:184:27:-;14024:5;14062:9;:5;14070:1;14062:9;:::i;:::-;14049:2;:9;:22;;14041:55;;;;-1:-1:-1;;;14041:55:27;;;;;;;:::i;:::-;14119:2;14122:5;14119:9;;;;;;;;:::i;:::-;;;;;;;;13952:184;-1:-1:-1;;;13952:184:27:o;14345:276::-;14418:6;14457:9;:5;14465:1;14457:9;:::i;:::-;14444:2;:9;:22;;14436:55;;;;-1:-1:-1;;;14436:55:27;;;;;;;:::i;:::-;14501:8;14571:5;14565:4;14561:16;14557:2;14553:25;14547:32;14605:9;;;14345:276;-1:-1:-1;;;;14345:276:27:o;14830:::-;14903:6;14942:9;:5;14950:1;14942:9;:::i;:::-;14929:2;:9;:22;;14921:55;;;;-1:-1:-1;;;14921:55:27;;;;;;;:::i;:::-;14986:8;15056:5;15050:4;15046:16;15042:2;15038:25;15032:32;15090:9;;;14830:276;-1:-1:-1;;;;14830:276:27:o;15315:::-;15388:6;15427:9;:5;15435:1;15427:9;:::i;:::-;15414:2;:9;:22;;15406:55;;;;-1:-1:-1;;;15406:55:27;;;;;;;:::i;:::-;15471:8;15541:5;15535:4;15531:16;15527:2;15523:25;15517:32;15575:9;;;15315:276;-1:-1:-1;;;;15315:276:27:o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;114:115:34:-;-1:-1:-1;;;;;72:30:34;;199:23;194:3;187:36;114:115;;:::o;235:218::-;364:2;349:18;;377:69;353:9;419:6;377:69;:::i;869:122::-;960:5;942:24;935:5;932:35;922:63;;981:1;978;971:12;997:139;1068:20;;1097:33;1068:20;1097:33;:::i;1142:329::-;1201:6;1250:2;1238:9;1229:7;1225:23;1221:32;1218:119;;;1256:79;2642:9612:31;;;1256:79:34;1376:1;1401:53;1446:7;1426:9;1401:53;:::i;1755:246::-;1836:1;1846:113;1860:6;1857:1;1854:13;1846:113;;;1945:1;1940:3;1936:11;1930:18;1917:11;;;1910:39;1882:2;1875:10;1846:113;;;-1:-1:-1;;1993:1:34;1975:16;;1968:27;1755:246::o;2115:373::-;2201:3;2229:38;2261:5;1528:6;1562:5;1556:12;1546:22;1477:98;-1:-1:-1;;1477:98:34;2229:38;1686:19;;;1738:4;1729:14;;2276:77;;2362:65;2420:6;2415:3;2408:4;2401:5;2397:16;2362:65;:::i;:::-;2099:2;2079:14;-1:-1:-1;;2075:28:34;2443:39;;;;;;-1:-1:-1;;2115:373:34:o;2590:109::-;2564:13;;2557:21;2671;2494:90;3464:112;3547:22;3563:5;3443:1;3432:20;;3368:90;3582:118;3687:5;3669:24;786:77;4502:996;4635:3;4671:4;4662:14;;4759:5;4749:23;4809:14;;;4786:38;;4845:73;4813:4;4899:12;4845:73;:::i;:::-;4837:81;;4686:243;5015:4;5008:5;5004:16;4998:23;5034:61;5089:4;5084:3;5080:14;5066:12;5034:61;:::i;:::-;4939:166;5201:4;5194:5;5190:16;5184:23;5220:57;5271:4;5266:3;5262:14;5248:12;5220:57;:::i;:::-;5115:172;5385:4;5378:5;5374:16;5368:23;5404:57;5455:4;5450:3;5446:14;5432:12;5404:57;:::i;:::-;-1:-1:-1;5488:4:34;4502:996;-1:-1:-1;;;4502:996:34:o;5504:1653::-;6000:3;6014:47;;;5985:19;;6078:76;5985:19;6140:6;6078:76;:::i;:::-;6070:84;;6164:70;6230:2;6219:9;6215:18;6206:6;6164:70;:::i;:::-;6244:66;6306:2;6295:9;6291:18;6282:6;6244:66;:::i;:::-;6357:9;6351:4;6347:20;6342:2;6331:9;6327:18;6320:48;6385:78;6458:4;6449:6;6385:78;:::i;:::-;6377:86;;6473:69;6537:3;6526:9;6522:19;6513:6;6473:69;:::i;:::-;6552;6616:3;6605:9;6601:19;6592:6;6552:69;:::i;:::-;6631:73;6699:3;6688:9;6684:19;6675:6;6631:73;:::i;:::-;6714;6782:3;6771:9;6767:19;6758:6;6714:73;:::i;:::-;6797;6865:3;6854:9;6850:19;6841:6;6797:73;:::i;:::-;6880:71;6946:3;6935:9;6931:19;6922:6;6880:71;:::i;:::-;6999:9;6993:4;6989:20;6983:3;6972:9;6968:19;6961:49;7027:123;7145:4;7135:7;7027:123;:::i;:::-;7019:131;5504:1653;-1:-1:-1;;;;;;;;;;;;;5504:1653:34:o;7409:180::-;-1:-1:-1;;;7454:1:34;7447:88;7554:4;7551:1;7544:15;7578:4;7575:1;7568:15;7595:281;-1:-1:-1;;2099:2:34;2079:14;;2075:28;7670:6;7666:40;7808:6;7796:10;7793:22;-1:-1:-1;;;;;7760:10:34;7757:34;7754:62;7751:88;;;7819:18;;:::i;:::-;7855:2;7848:22;-1:-1:-1;;7595:281:34:o;7882:129::-;7916:6;7943:20;492:6;525:2;519:9;509:19;;459:75;;7943:20;7933:30;;7972:33;8000:4;7992:6;7972:33;:::i;:::-;7882:129;;;:::o;8017:307::-;8078:4;-1:-1:-1;;;;;8160:6:34;8157:30;8154:56;;;8190:18;;:::i;:::-;-1:-1:-1;;2099:2:34;2079:14;;2075:28;8312:4;8302:15;;8017:307;-1:-1:-1;;8017:307:34:o;8330:146::-;8427:6;8422:3;8417;8404:30;-1:-1:-1;8468:1:34;8450:16;;8443:27;8330:146::o;8482:423::-;8559:5;8584:65;8600:48;8641:6;8600:48;:::i;:::-;8584:65;:::i;:::-;8575:74;;8672:6;8665:5;8658:21;8710:4;8703:5;8699:16;8748:3;8739:6;8734:3;8730:16;8727:25;8724:112;;;8755:79;2642:9612:31;;;8755:79:34;8845:54;8892:6;8887:3;8882;8845:54;:::i;8924:338::-;8979:5;9028:3;9021:4;9013:6;9009:17;9005:27;8995:122;;9036:79;2642:9612:31;;;9036:79:34;9153:6;9140:20;9178:78;9252:3;9244:6;9237:4;9229:6;9225:17;9178:78;:::i;9268:507::-;9336:6;9385:2;9373:9;9364:7;9360:23;9356:32;9353:119;;;9391:79;2642:9612:31;;;9391:79:34;9511:31;;-1:-1:-1;;;;;9558:30:34;;9555:117;;;9591:79;2642:9612:31;;;9591:79:34;9696:62;9750:7;9741:6;9730:9;9726:22;9696:62;:::i;9913:96::-;9950:7;-1:-1:-1;;;;;9847:54:34;;9979:24;9781:126;10015:122;10088:24;10106:5;10088:24;:::i;10143:139::-;10214:20;;10243:33;10214:20;10243:33;:::i;10288:474::-;10356:6;10364;10413:2;10401:9;10392:7;10388:23;10384:32;10381:119;;;10419:79;2642:9612:31;;;10419:79:34;10539:1;10564:53;10609:7;10589:9;10564:53;:::i;:::-;10554:63;;10510:117;10666:2;10692:53;10737:7;10728:6;10717:9;10713:22;10692:53;:::i;:::-;10682:63;;10637:118;10288:474;;;;;:::o;10768:222::-;10899:2;10884:18;;10912:71;10888:9;10956:6;10912:71;:::i;10996:118::-;11083:24;11101:5;11083:24;:::i;11120:222::-;11251:2;11236:18;;11264:71;11240:9;11308:6;11264:71;:::i;12039:309::-;12188:2;12201:47;;;12173:18;;12265:76;12173:18;12327:6;12265:76;:::i;12354:320::-;12507:2;12492:18;;12520:71;12496:9;12564:6;12520:71;:::i;:::-;12601:66;12663:2;12652:9;12648:18;12639:6;12601:66;:::i;12939:552::-;12996:8;13006:6;13056:3;13049:4;13041:6;13037:17;13033:27;13023:122;;13064:79;2642:9612:31;;;13064:79:34;-1:-1:-1;13164:20:34;;-1:-1:-1;;;;;13196:30:34;;13193:117;;;13229:79;2642:9612:31;;;13229:79:34;13343:4;13335:6;13331:17;13319:29;;13397:3;13389:4;13381:6;13377:17;13367:8;13363:32;13360:41;13357:128;;;13404:79;2642:9612:31;;;13497:527:34;13567:6;13575;13624:2;13612:9;13603:7;13599:23;13595:32;13592:119;;;13630:79;2642:9612:31;;;13630:79:34;13750:31;;-1:-1:-1;;;;;13797:30:34;;13794:117;;;13830:79;2642:9612:31;;;13830:79:34;13943:64;13999:7;13990:6;13979:9;13975:22;13943:64;:::i;:::-;13925:82;;;;13721:296;13497:527;;;;;:::o;14601:613::-;14730:3;14766:4;14757:14;;14850:5;14840:23;14900:14;;;14877:38;;14936:71;14904:4;14988:12;14936:71;:::i;:::-;14928:79;;14781:237;15101:4;15094:5;15090:16;15084:23;15120:57;15171:4;15166:3;15162:14;15148:12;15120:57;:::i;15220:393::-;15411:2;15424:47;;;15396:18;;15488:118;15396:18;15592:6;15488:118;:::i;15619:120::-;-1:-1:-1;;;;;72:30:34;;15691:23;7:101;15745:137;15815:20;;15844:32;15815:20;15844:32;:::i;15888:793::-;15972:6;15980;15988;16037:2;16025:9;16016:7;16012:23;16008:32;16005:119;;;16043:79;2642:9612:31;;;16043:79:34;16163:1;16188:52;16232:7;16212:9;16188:52;:::i;:::-;16178:62;;16134:116;16289:2;16315:52;16359:7;16350:6;16339:9;16335:22;16315:52;:::i;:::-;16305:62;;16260:117;16444:2;16433:9;16429:18;16416:32;-1:-1:-1;;;;;16467:6:34;16464:30;16461:117;;;16497:79;2642:9612:31;;;16497:79:34;16602:62;16656:7;16647:6;16636:9;16632:22;16602:62;:::i;:::-;16592:72;;16387:287;15888:793;;;;;:::o;16786:115::-;16763:10;16752:22;;16871:23;16687:93;16907:521;17108:2;17093:18;;17121:69;17097:9;17163:6;17121:69;:::i;:::-;17200:70;17266:2;17255:9;17251:18;17242:6;17200:70;:::i;:::-;17317:9;17311:4;17307:20;17302:2;17291:9;17287:18;17280:48;17345:76;17416:4;17407:6;17345:76;:::i;:::-;17337:84;16907:521;-1:-1:-1;;;;;16907:521:34:o;18748:2466::-;18877:3;18913:6;18904:16;;19000:5;18990:23;19050:14;;;19027:38;;19086:71;19054:4;19138:12;19086:71;:::i;:::-;19078:79;;18930:238;19256:4;19249:5;19245:16;19239:23;19275:61;19330:4;19325:3;19321:14;19307:12;19275:61;:::i;:::-;19178:168;19437:4;19430:5;19426:16;19420:23;19456:57;19507:4;19502:3;19498:14;19484:12;19456:57;:::i;:::-;19356:167;19606:4;19599:5;19595:16;19589:23;19659:3;19653:4;19649:14;19642:4;19637:3;19633:14;19626:38;19685:73;19753:4;19739:12;19685:73;:::i;:::-;19677:81;;19533:236;19858:4;19851:5;19847:16;19841:23;19877:59;19930:4;19925:3;19921:14;19907:12;19877:59;:::i;:::-;19779:167;20033:4;20026:5;20022:16;20016:23;20052:59;20105:4;20100:3;20096:14;20082:12;20052:59;:::i;:::-;19956:165;20222:4;20215:5;20211:16;20205:23;20241:63;20298:4;20293:3;20289:14;20275:12;20241:63;:::i;:::-;20131:183;20411:4;20404:5;20400:16;20394:23;20430:63;20487:4;20482:3;20478:14;20464:12;20430:63;:::i;:::-;20324:179;20598:6;20591:5;20587:18;20581:25;20619:65;20676:6;20671:3;20667:16;20653:12;20619:65;:::i;:::-;20513:181;20792:6;20785:5;20781:18;20775:25;20813:63;20868:6;20863:3;20859:16;20845:12;20813:63;:::i;:::-;20704:182;20976:6;20969:5;20965:18;20959:25;21033:3;21027:4;21023:14;21014:6;21009:3;21005:16;20998:40;21059:117;21171:4;21157:12;21059:117;:::i;21220:393::-;21411:2;21424:47;;;21396:18;;21488:118;21396:18;21592:6;21488:118;:::i;22218:237::-;22296:5;22337:3;22328:6;22323:3;22319:16;22315:26;22312:113;;;22344:79;2642:9612:31;;;22461:553:34;22552:6;22601:2;22589:9;22580:7;22576:23;22572:32;22569:119;;;22607:79;2642:9612:31;;;22607:79:34;22727:31;;-1:-1:-1;;;;;22774:30:34;;22771:117;;;22807:79;2642:9612:31;;;22807:79:34;22912:85;22989:7;22980:6;22969:9;22965:22;22912:85;:::i;23414:522::-;23575:4;23566:14;;23661:5;23651:23;23687:63;23739:3;23721:12;23687:63;:::i;:::-;23590:170;23843:4;23836:5;23832:16;23826:23;23862:57;23913:4;23908:3;23904:14;23890:12;23862:57;:::i;23942:350::-;24137:2;24122:18;;24150:135;24126:9;24258:6;24150:135;:::i;24298:407::-;24469:2;24482:47;;;24454:18;;24546:76;24454:18;24608:6;24546:76;:::i;:::-;24538:84;;24632:66;24694:2;24683:9;24679:18;24670:6;24632:66;:::i;24711:180::-;-1:-1:-1;;;24756:1:34;24749:88;24856:4;24853:1;24846:15;24880:4;24877:1;24870:15;24897:320;24978:1;24968:12;;25025:1;25015:12;;;25036:81;;25102:4;25094:6;25090:17;25080:27;;25036:81;25164:2;25156:6;25153:14;25133:18;25130:38;25127:84;;25183:18;;:::i;25398:327::-;25512:3;25631:56;25680:6;25675:3;25668:5;25631:56;:::i;:::-;-1:-1:-1;;25703:16:34;;25398:327::o;25731:291::-;25871:3;25893:103;25992:3;25983:6;25975;25893:103;:::i;26271:366::-;26498:2;1686:19;;26413:3;1738:4;1729:14;;26168:34;26145:58;;-1:-1:-1;;;26232:2:34;26220:15;;26213:45;26427:74;-1:-1:-1;26510:93:34;-1:-1:-1;26628:2:34;26619:12;;26271:366::o;26643:419::-;26847:2;26860:47;;;26832:18;;26924:131;26832:18;26924:131;:::i;27068:180::-;-1:-1:-1;;;27113:1:34;27106:88;27213:4;27210:1;27203:15;27237:4;27234:1;27227:15;27809:724;27886:4;;27935:25;;-1:-1:-1;;28011:14:34;28007:29;;;28003:48;27979:73;;27969:168;;28056:79;2642:9612:31;;;28056:79:34;28168:18;28158:8;28154:33;28146:41;;28220:4;28207:18;28197:28;;-1:-1:-1;;;;;28240:6:34;28237:30;28234:117;;;28270:79;2642:9612:31;;;28270:79:34;28378:2;28372:4;28368:13;28360:21;;28435:4;28427:6;28423:17;28407:14;28403:38;28397:4;28393:49;28390:136;;;28445:79;2642:9612:31;;;28445:79:34;27899:634;27809:724;;;;;:::o;29464:142::-;29514:9;29547:53;29565:34;29592:5;29565:34;786:77;29574:24;852:5;786:77;29693:269;29803:39;29834:7;29803:39;:::i;:::-;29892:11;;29118:1;29102:18;;28970:16;;;-1:-1:-1;;28970:16:34;;;29366:19;;;29327:9;;29316:21;;;29356:30;29858:4;29851:105;29769:193;29693:269;;;:::o;30047:189::-;30013:3;30165:65;30223:6;30215;30209:4;30165:65;:::i;30242:186::-;30319:3;30312:5;30309:14;30302:120;;;30373:39;30410:1;30403:5;30373:39;:::i;:::-;30346:1;30335:13;30302:120;;30434:541;30534:2;30529:3;30526:11;30523:445;;;30568:37;30599:5;28689:4;28725:14;;;28712:3;;28769:4;;28756:18;28748:26;28641:140;-1:-1:-1;;28641:140:34;30568:37;28871:2;28866;28855:14;;28851:23;30641:8;30637:44;30834:2;30822:10;30819:18;30816:49;;;-1:-1:-1;30855:8:34;30816:49;30878:80;28871:2;28866;28855:14;;28851:23;30924:8;30920:37;30907:11;30878:80;:::i;31578:1398::-;31739:3;-1:-1:-1;;;;;31800:6:34;31797:30;31794:56;;;31830:18;;:::i;:::-;31874:38;31906:4;31900:11;31874:38;:::i;:::-;31959:66;32018:6;32010;32004:4;31959:66;:::i;:::-;32052:1;32081:2;32073:6;32070:14;32098:1;32093:631;;;;32768:1;32785:6;32782:84;;;-1:-1:-1;32832:19:34;;;32819:33;32782:84;-1:-1:-1;;31214:1:34;31210:13;;31075:16;31177:56;31252:15;;31559:1;31555:11;;31546:21;32886:4;32879:81;32741:229;32063:907;;32093:631;-1:-1:-1;;32129:22:34;;32179:36;32210:4;28689;28725:14;;;28712:3;;28769:4;;28756:18;28748:26;28641:140;-1:-1:-1;;28641:140:34;32179:36;32237:1;32251:215;32265:7;32262:1;32259:14;32251:215;;;32342:19;;;32329:33;32314:49;;32449:2;32434:18;;;;32402:1;32390:14;;;;32281:12;32251:215;;;32494:6;32485:7;32482:19;32479:186;;;-1:-1:-1;;32644:4:34;32632:17;;31214:1;31210:13;31075:16;31177:56;32550:19;;;32537:33;31252:15;32587:64;;32479:186;32711:1;32707;32699:6;32695:14;32691:22;32685:4;32678:36;32100:624;;;32063:907;;31675:1301;;;31578:1398;;;:::o;32982:214::-;33095:95;33182:7;33173;33167:4;33095:95;:::i;33202:184::-;33246:11;33295:3;33282:17;33308:32;33334:5;33308:32;:::i;33490:241::-;33547:6;-1:-1:-1;;;;;33628:8:34;33615:22;33705:19;;33666:9;;33655:21;;;;33695:30;;;;;33490:241;-1:-1:-1;;33490:241:34:o;33737:138::-;33785:9;-1:-1:-1;;;;;72:30:34;;33818:51;7:101;33961:256;34069:37;34098:7;34069:37;:::i;:::-;34128:82;34192:16;34162:4;34156:11;34128:82;:::i;:::-;34122:4;34115:96;34035:182;33961:256;;:::o;34223:116::-;2564:13;;2557:21;34293;2494:90;34345:180;34387:11;34436:3;34423:17;34449:30;34473:5;34449:30;:::i;34631:244::-;34688:6;34717:20;34758:23;34772:8;34608:2;34604:14;;34531:94;34881:104;34925:9;2564:13;;2557:21;34958;2494:90;35069:246;35173:33;35198:7;35173:33;:::i;:::-;35228:80;35290:16;35262:4;35256:11;35228:80;:::i;38484:118::-;38555:22;38571:5;3443:1;3432:20;;3368:90;38608:182;38651:11;38700:3;38687:17;38713:31;38738:5;38713:31;:::i;38796:134::-;38842:9;38875:49;38891:32;38900:22;38916:5;3443:1;3432:20;;3368:90;38891:32;3443:1;3432:20;;3368:90;39015:251;39121:35;39148:7;39121:35;:::i;39272:258::-;39329:6;39358:34;39413:23;39427:8;34608:2;34604:14;;34531:94;39536:251;39642:35;39669:7;39642:35;:::i;:::-;39699:81;39762:16;39733:4;39727:11;39699:81;:::i;39793:186::-;39838:11;39887:3;39874:17;39900:33;39927:5;39900:33;:::i;39985:290::-;40043:6;-1:-1:-1;;40172:8:34;40159:22;33392:92;40281:262;40391:39;40422:7;40391:39;:::i;:::-;40452:84;40518:16;40487:4;40481:11;40452:84;:::i;40549:400::-;40649:4;40690:25;;-1:-1:-1;;40766:14:34;40762:29;;;40758:48;40734:73;;40724:168;;40811:79;2642:9612:31;;;40811:79:34;40909:33;;;;;40549:400;-1:-1:-1;;40549:400:34:o;41055:246::-;41112:6;41141:22;41184:23;41198:8;41032:2;41028:14;;40955:94;41307:246;41411:33;41436:7;41411:33;:::i;:::-;41466:80;41528:16;41500:4;41494:11;41466:80;:::i;41559:1501::-;41743:4;41788:5;41860:63;41788:5;;41860:63;:::i;:::-;41937:112;42035:13;42020;42008:10;41937:112;:::i;:::-;41706:354;;;;42113:1;42107:4;42103:12;42159:2;42152:5;42148:14;42210:12;42253:41;42280:13;42253:41;:::i;:::-;42236:58;;42308:76;42370:13;42358:10;42308:76;:::i;:::-;42070:325;;;42448:1;42442:4;42438:12;42494:2;42487:5;42483:14;42545:12;42588:39;42613:13;42588:39;:::i;:::-;42571:56;;42641:72;42699:13;42687:10;42641:72;:::i;:::-;42405:319;;;42777:1;42771:4;42767:12;42823:2;42816:5;42812:14;42874:12;42917:39;42942:13;42917:39;:::i;:::-;42900:56;;42970:72;43028:13;43016:10;42970:72;:::i;43066:284::-;43216:128;43336:7;43330:4;43216:128;:::i;43356:3951::-;43536:4;43581:5;43653:62;43581:5;;43653:62;:::i;:::-;43729:110;43825:13;43810;43798:10;43729:110;:::i;:::-;43499:351;;;;43903:1;43897:4;43893:12;43949:2;43942:5;43938:14;44000:12;44043:41;44070:13;44043:41;:::i;:::-;44026:58;;44098:76;44160:13;44148:10;44098:76;:::i;:::-;43860:325;;;44238:1;44232:4;44228:12;44284:2;44277:5;44273:14;44335:12;44378:39;44403:13;44378:39;:::i;:::-;44361:56;;44431:72;44489:13;44477:10;44431:72;:::i;:::-;44195:319;;;44567:1;44561:4;44557:12;44613:2;44606:5;44602:14;44679:63;44729:12;44722:5;44679:63;:::i;:::-;44756:112;44854:13;44839;44827:10;44756:112;:::i;:::-;44524:355;;;;44932:1;44926:4;44922:12;44978:3;44971:5;44967:15;45030:12;45073:40;45099:13;45073:40;:::i;:::-;45056:57;;45127:74;45187:13;45175:10;45127:74;:::i;:::-;44889:323;;;45265:1;45259:4;45255:12;45311:3;45304:5;45300:15;45363:12;45406:40;45432:13;45406:40;:::i;:::-;45389:57;;45460:74;45520:13;45508:10;45460:74;:::i;:::-;45222:323;;;45598:1;45592:4;45588:12;45644:3;45637:5;45633:15;45696:12;45739:42;45767:13;45739:42;:::i;:::-;45722:59;;45795:78;45859:13;45847:10;45795:78;:::i;:::-;45555:329;;;45937:1;45931:4;45927:12;45983:3;45976:5;45972:15;46035:12;46078:42;46106:13;46078:42;:::i;:::-;46061:59;;46134:78;46198:13;46186:10;46134:78;:::i;:::-;45894:329;;;46276:1;46270:4;46266:12;46322:3;46315:5;46311:15;46374:12;46417:42;46445:13;46417:42;:::i;:::-;46400:59;;46473:78;46537:13;46525:10;46473:78;:::i;:::-;46233:329;;;46615:1;46609:4;46605:12;46661:3;46654:5;46650:15;46713:12;46756:41;46783:13;46756:41;:::i;:::-;46739:58;;46811:76;46873:13;46861:10;46811:76;:::i;:::-;46572:326;;;46951:1;46945:4;46941:12;46997:3;46990:5;46986:15;47049:85;47121:12;47114:5;47049:85;:::i;:::-;47148:141;47275:13;47263:10;47148:141;:::i;47313:276::-;47459:124;47575:7;47569:4;47459:124;:::i;47943:94::-;47982:7;48011:20;48025:5;47920:2;47916:14;;47843:94;48043:100;48082:7;48111:26;48131:5;48111:26;:::i;48149:157::-;48254:45;48274:24;48292:5;48274:24;:::i;:::-;48254:45;:::i;48312:538::-;48480:3;48495:75;48566:3;48557:6;48495:75;:::i;:::-;48595:2;48590:3;48586:12;48579:19;;48608:75;48679:3;48670:6;48608:75;:::i;:::-;48708:2;48703:3;48699:12;48692:19;;48721:75;48792:3;48783:6;48721:75;:::i;:::-;-1:-1:-1;48821:2:34;48812:12;;48312:538;-1:-1:-1;;;48312:538:34:o;48856:133::-;48924:20;;48953:30;48924:20;48953:30;:::i;48995:323::-;49051:6;49100:2;49088:9;49079:7;49075:23;49071:32;49068:119;;;49106:79;2642:9612:31;;;49106:79:34;49226:1;49251:50;49293:7;49273:9;49251:50;:::i;49324:327::-;49382:6;49431:2;49419:9;49410:7;49406:23;49402:32;49399:119;;;49437:79;2642:9612:31;;;49437:79:34;49557:1;49582:52;49626:7;49606:9;49582:52;:::i;49657:328::-;49814:2;49799:18;;49827:69;49803:9;49869:6;49827:69;:::i;:::-;49906:72;49974:2;49963:9;49959:18;49950:6;49906:72;:::i;50771:522::-;-1:-1:-1;;;50262:90:34;;50757:1;50748:11;50984:3;51164:75;50748:11;51226:6;51164:75;:::i;:::-;-1:-1:-1;51264:2:34;51255:12;;50771:522;-1:-1:-1;50771:522:34:o;51421:154::-;51464:11;51500:29;51524:3;51518:10;852:5;786:77;51581:594;51665:5;51696:38;51728:5;1528:6;1562:5;1556:12;1546:22;1477:98;-1:-1:-1;;1477:98:34;51696:38;51403:4;51394:14;;51845:35;51394:14;51845:35;:::i;:::-;51836:44;;51904:2;51896:6;51893:14;51890:278;;;51975:169;-1:-1:-1;;52030:6:34;52026:2;52022:15;52019:1;52015:23;28970:16;;28886:107;51975:169;51952:5;51931:227;51922:236;;51890:278;51671:504;;51581:594;;;:::o;52361:366::-;52588:2;1686:19;;52503:3;1738:4;1729:14;;52321:26;52298:50;;52517:74;-1:-1:-1;52600:93:34;-1:-1:-1;52718:2:34;52709:12;;52361:366::o;52733:419::-;52937:2;52950:47;;;52922:18;;53014:131;52922:18;53014:131;:::i;53390:366::-;53617:2;1686:19;;53532:3;1738:4;1729:14;;53298:34;53275:58;;-1:-1:-1;;;53362:2:34;53350:15;;53343:34;53546:74;-1:-1:-1;53629:93:34;53158:226;53762:419;53966:2;53979:47;;;53951:18;;54043:131;53951:18;54043:131;:::i;54187:386::-;54291:3;54319:38;54351:5;1528:6;1562:5;1556:12;1546:22;1477:98;-1:-1:-1;;1477:98:34;54319:38;54470:65;54528:6;54523:3;54516:4;54509:5;54505:16;54470:65;:::i;:::-;54551:16;;;;;54187:386;-1:-1:-1;;54187:386:34:o;54579:271::-;54709:3;54731:93;54820:3;54811:6;54731:93;:::i;55091:366::-;55318:2;1686:19;;55233:3;1738:4;1729:14;;54996:34;54973:58;;-1:-1:-1;;;55060:2:34;55048:15;;55041:37;55247:74;-1:-1:-1;55330:93:34;54856:229;55463:419;55667:2;55680:47;;;55652:18;;55744:131;55652:18;55744:131;:::i;56140:366::-;56367:2;1686:19;;56282:3;1738:4;1729:14;;56028:34;56005:58;;56097:29;56092:2;56080:15;;56073:54;56296:74;-1:-1:-1;56379:93:34;55888:246;56512:419;56716:2;56729:47;;;56701:18;;56793:131;56701:18;56793:131;:::i;57121:366::-;57348:2;1686:19;;57263:3;1738:4;1729:14;;57077:30;57054:54;;57277:74;-1:-1:-1;57360:93:34;56937:178;57493:419;57697:2;57710:47;;;57682:18;;57774:131;57682:18;57774:131;:::i;58152:366::-;58379:2;1686:19;;58294:3;1738:4;1729:14;;58058:34;58035:58;;-1:-1:-1;;;58122:2:34;58110:15;;58103:36;58308:74;-1:-1:-1;58391:93:34;57918:228;58524:419;58728:2;58741:47;;;58713:18;;58805:131;58713:18;58805:131;:::i;59187:366::-;59414:2;1686:19;;59329:3;1738:4;1729:14;;59089:34;59066:58;;-1:-1:-1;;;59153:2:34;59141:15;;59134:40;59343:74;-1:-1:-1;59426:93:34;58949:232;59559:419;59763:2;59776:47;;;59748:18;;59840:131;59748:18;59840:131;:::i;60152:366::-;60379:2;1686:19;;60294:3;1738:4;1729:14;;-1:-1:-1;;;60101:38:34;;60308:74;-1:-1:-1;60391:93:34;59984:162;60524:419;60728:2;60741:47;;;60713:18;;60805:131;60713:18;60805:131;:::i;60949:1390::-;61064:36;61096:3;1528:6;1562:5;1556:12;1546:22;1477:98;-1:-1:-1;;1477:98:34;61064:36;-1:-1:-1;;;;;61157:6:34;61154:30;61151:56;;;61187:18;;:::i;:::-;61231:38;61263:4;61257:11;61231:38;:::i;:::-;61316:66;61375:6;61367;61361:4;61316:66;:::i;:::-;61433:4;61465:2;61454:14;;61482:1;61477:617;;;;62138:1;62155:6;62152:77;;;62204:9;62199:3;62195:19;62189:26;62180:35;;62152:77;-1:-1:-1;;31214:1:34;31210:13;;31075:16;31177:56;31252:15;;31559:1;31555:11;;31546:21;62249:4;62242:81;62111:222;61447:886;;61477:617;-1:-1:-1;;61513:22:34;;61563:36;61594:4;28689;28725:14;;;28712:3;;28769:4;;28756:18;28748:26;28641:140;-1:-1:-1;;28641:140:34;61563:36;61621:1;61635:208;61649:7;61646:1;61643:14;61635:208;;;61728:9;61723:3;61719:19;61713:26;61698:42;;61826:2;61811:18;;;;61779:1;61767:14;;;;61665:12;61635:208;;;61871:6;61862:7;61859:19;61856:179;;;61929:9;61924:3;61920:19;61914:26;-1:-1:-1;;62014:4:34;62002:17;;31214:1;31210:13;31075:16;31177:56;31252:15;61957:64;;61856:179;62081:1;62077;62069:6;62065:14;62061:22;62055:4;62048:36;61484:610;;;61447:886;;61039:1300;;;60949:1390;;:::o;62579:366::-;62806:2;1686:19;;62721:3;1738:4;1729:14;;62485:34;62462:58;;-1:-1:-1;;;62549:2:34;62537:15;;62530:36;62735:74;-1:-1:-1;62818:93:34;62345:228;62951:419;63155:2;63168:47;;;63140:18;;63232:131;63140:18;63232:131;:::i;63549:366::-;63776:2;1686:19;;63691:3;1738:4;1729:14;;-1:-1:-1;;;63493:43:34;;63705:74;-1:-1:-1;63788:93:34;63376:167;63921:419;64125:2;64138:47;;;64110:18;;64202:131;64110:18;64202:131;:::i;64566:400::-;64726:3;64463:90;;;64840:93;-1:-1:-1;64958:1:34;64949:11;;64566:400::o;64972:537::-;65203:3;65225:148;65369:3;65225:148;:::i;:::-;65218:155;;65390:93;65479:3;65470:6;65390:93;:::i;65762:535::-;65982:3;65671:79;;;66159:1;66154:3;66150:11;66143:18;;66178:93;66267:3;66258:6;66178:93;:::i;66303:256::-;66415:3;66430:75;66501:3;66492:6;66430:75;:::i;:::-;-1:-1:-1;66530:2:34;66521:12;;66303:256;-1:-1:-1;66303:256:34:o;66565:332::-;66724:2;66709:18;;66737:71;66713:9;66781:6;66737:71;:::i;66903:160::-;67021:35;67050:5;67021:35;:::i;67069:912::-;67383:3;67368:19;;67397:69;67372:9;67439:6;67397:69;:::i;:::-;67476:72;67544:2;67533:9;67529:18;67520:6;67476:72;:::i;:::-;67558:70;67624:2;67613:9;67609:18;67600:6;67558:70;:::i;:::-;67638;67704:2;67693:9;67689:18;67680:6;67638:70;:::i;:::-;67756:9;67750:4;67746:20;67740:3;67729:9;67725:19;67718:49;67784:76;67855:4;67846:6;67784:76;:::i;:::-;67776:84;;67870:104;67969:3;67958:9;67954:19;67945:6;67870:104;:::i;:::-;67069:912;;;;;;;;;:::o;67987:180::-;-1:-1:-1;;;68032:1:34;68025:88;68132:4;68129:1;68122:15;68156:4;68153:1;68146:15;68173:180;-1:-1:-1;;;68218:1:34;68211:88;68318:4;68315:1;68308:15;68342:4;68339:1;68332:15;68359:194;68490:9;;;68512:11;;;68509:37;;;68526:18;;:::i;68559:233::-;68598:3;-1:-1:-1;;68660:5:34;68657:77;68654:103;;68737:18;;:::i;68798:180::-;-1:-1:-1;;;68843:1:34;68836:88;68943:4;68940:1;68933:15;68967:4;68964:1;68957:15;68984:176;69016:1;69106;69096:35;;69111:18;;:::i;:::-;-1:-1:-1;69145:9:34;;68984:176::o;69166:191::-;69295:9;;;69317:10;;;69314:36;;;69330:18;;:::i;69363:323::-;69401:4;69421:18;69437:1;3443;3432:20;;3368:90;69421:18;69416:23;;69453:18;69469:1;3443;3432:20;;3368:90;69453:18;69448:23;-1:-1:-1;;69488:9:34;;;-1:-1:-1;;69526:77:34;;69627:18;69617:29;;69510:146;69507:172;;;69659:18;;:::i;69900:141::-;69956:5;69987:6;69981:13;69972:22;;70003:32;70029:5;70003:32;:::i;70047:141::-;70103:5;70134:6;70128:13;70119:22;;70150:32;70176:5;70150:32;:::i;70194:432::-;70282:5;70307:65;70323:48;70364:6;70323:48;:::i;70307:65::-;70298:74;;70395:6;70388:5;70381:21;70433:4;70426:5;70422:16;70471:3;70462:6;70457:3;70453:16;70450:25;70447:112;;;70478:79;2642:9612:31;;;70478:79:34;70568:52;70613:6;70608:3;70603;70568:52;:::i;70645:353::-;70711:5;70760:3;70753:4;70745:6;70741:17;70737:27;70727:122;;70768:79;2642:9612:31;;;70768:79:34;70878:6;70872:13;70903:89;70988:3;70980:6;70973:4;70965:6;70961:17;70903:89;:::i;71004:830::-;71099:6;71107;71115;71164:2;71152:9;71143:7;71139:23;71135:32;71132:119;;;71170:79;2642:9612:31;;;71170:79:34;71290:1;71315:63;71370:7;71350:9;71315:63;:::i;:::-;71305:73;;71261:127;71427:2;71453:63;71508:7;71499:6;71488:9;71484:22;71453:63;:::i;:::-;71443:73;;71398:128;71586:2;71575:9;71571:18;71565:25;-1:-1:-1;;;;;71609:6:34;71606:30;71603:117;;;71639:79;2642:9612:31;;;71639:79:34;71744:73;71809:7;71800:6;71789:9;71785:22;71744:73;:::i;72424:366::-;72651:2;1686:19;;72566:3;1738:4;1729:14;;72325:34;72302:58;;-1:-1:-1;;;72389:2:34;72377:15;;72370:41;72580:74;-1:-1:-1;72663:93:34;72185:233;72796:419;73000:2;73013:47;;;72985:18;;73077:131;72985:18;73077:131;:::i;73408:366::-;73635:2;1686:19;;73550:3;1738:4;1729:14;;73361:33;73338:57;;73564:74;-1:-1:-1;73647:93:34;73221:181;73780:419;73984:2;73997:47;;;73969:18;;74061:131;73969:18;74061:131;:::i;74435:366::-;74662:2;1686:19;;74577:3;1738:4;1729:14;;74345:34;74322:58;;-1:-1:-1;;;74409:2:34;74397:15;;74390:32;74591:74;-1:-1:-1;74674:93:34;74205:224;74807:419;75011:2;75024:47;;;74996:18;;75088:131;74996:18;75088:131;:::i;75419:366::-;75646:2;1686:19;;75561:3;1738:4;1729:14;;75372:33;75349:57;;75575:74;-1:-1:-1;75658:93:34;75232:181;75791:419;75995:2;76008:47;;;75980:18;;76072:131;75980:18;76072:131;:::i;76445:366::-;76672:2;1686:19;;76587:3;1738:4;1729:14;;76356:34;76333:58;;-1:-1:-1;;;76420:2:34;76408:15;;76401:31;76601:74;-1:-1:-1;76684:93:34;76216:223;76817:419;77021:2;77034:47;;;77006:18;;77098:131;77006:18;77098:131;:::i;77488:366::-;77715:2;1686:19;;77630:3;1738:4;1729:14;;77382:34;77359:58;;-1:-1:-1;;;77446:2:34;77434:15;;77427:48;77644:74;-1:-1:-1;77727:93:34;77242:240;77860:419;78064:2;78077:47;;;78049:18;;78141:131;78049:18;78141:131;:::i;78285:410::-;78430:9;;;;78592;;78625:15;;;78619:22;;78572:83;78549:139;;78668:18;;:::i;:::-;78333:362;78285:410;;;;:::o;78931:366::-;79158:2;1686:19;;79073:3;1738:4;1729:14;;78841:34;78818:58;;-1:-1:-1;;;78905:2:34;78893:15;;78886:32;79087:74;-1:-1:-1;79170:93:34;78701:224;79303:419;79507:2;79520:47;;;79492:18;;79584:131;79492:18;79584:131;:::i;79896:366::-;80123:2;1686:19;;80038:3;1738:4;1729:14;;-1:-1:-1;;;79845:38:34;;80052:74;-1:-1:-1;80135:93:34;79728:162;80268:419;80472:2;80485:47;;;80457:18;;80549:131;80457:18;80549:131;:::i;80801:848::-;80893:6;80917:5;80931:712;80952:1;80942:8;80939:15;80931:712;;;81047:4;81042:3;81038:14;81032:4;81029:24;81026:50;;;81056:18;;:::i;:::-;81106:1;81096:8;81092:16;81089:451;;;81510:16;;;;81089:451;81561:15;;81601:32;81624:8;80779:1;80775:13;;80693:102;81601:32;81589:44;;80931:712;;;80801:848;;;;;;;:::o;81655:1073::-;81709:5;81900:8;81890:40;;-1:-1:-1;81921:1:34;81923:5;;81890:40;81949:4;81939:36;;-1:-1:-1;81966:1:34;81968:5;;81939:36;82035:4;82083:1;82078:27;;;;82119:1;82114:191;;;;82028:277;;82078:27;82096:1;82087:10;;82098:5;;;82114:191;82159:3;82149:8;82146:17;82143:43;;;82166:18;;:::i;:::-;82215:8;82212:1;82208:16;82199:25;;82250:3;82243:5;82240:14;82237:40;;;82257:18;;:::i;:::-;82290:5;;;82028:277;;82414:2;82404:8;82401:16;82395:3;82389:4;82386:13;82382:36;82364:2;82354:8;82351:16;82346:2;82340:4;82337:12;82333:35;82317:111;82314:246;;;-1:-1:-1;82460:19:34;;;82495:14;;;82492:40;;;82512:18;;:::i;:::-;82545:5;;82314:246;82585:42;82623:3;82613:8;82607:4;82604:1;82585:42;:::i;:::-;82570:57;;;;82659:4;82654:3;82650:14;82643:5;82640:25;82637:51;;;82668:18;;:::i;:::-;82706:16;;81655:1073;-1:-1:-1;;81655:1073:34:o;82734:285::-;82794:5;82908:104;-1:-1:-1;;82935:8:34;82929:4;82908:104;:::i;83201:366::-;83428:2;1686:19;;83343:3;1738:4;1729:14;;-1:-1:-1;;;83142:46:34;;83357:74;-1:-1:-1;83440:93:34;83025:170;83573:419;83777:2;83790:47;;;83762:18;;83854:131;83762:18;83854:131;:::i",
      "linkReferences": {}
    },
    "methodIdentifiers": {
      "AUTHENTICATE_MESSAGE_METHOD_NUM()": "00706790",
      "DATACAP_RECEIVER_HOOK_METHOD_NUM()": "b34ba252",
      "MARKET_ACTOR_ETH_ADDRESS()": "29aa3d2a",
      "MARKET_NOTIFY_DEAL_METHOD_NUM()": "6067f454",
      "VERIFREG_ACTOR_ETH_ADDRESS()": "2522f2b7",
      "addBalance(uint256)": "d91921ed",
      "dealProposals(bytes32)": "74112d66",
      "deals(uint256)": "03988f84",
      "dealsLength()": "297ab486",
      "getDealByIndex(uint256)": "96925ae6",
      "getDealProposal(bytes32)": "f4b2e4d8",
      "getExtraParams(bytes32)": "4634aed5",
      "getProposalIdSet(bytes)": "f44a8903",
      "getProviderSet(bytes)": "78133bb2",
      "handle_filecoin_method(uint64,uint64,bytes)": "868e10c4",
      "makeDealProposal((bytes,uint64,bool,string,int64,int64,uint256,uint256,uint256,uint64,(string,uint64,bool,bool)))": "dd27fe90",
      "owner()": "8da5cb5b",
      "pieceDeals(bytes)": "0a0e0c91",
      "pieceProviders(bytes)": "f82704f0",
      "pieceToProposal(bytes)": "dd08881c",
      "withdrawBalance(address,uint256)": "0cf20cc9"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.17+commit.8df45f5f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"errorCode\",\"type\":\"int256\"}],\"name\":\"ActorError\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailToCallActor\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint64\",\"name\":\"\",\"type\":\"uint64\"}],\"name\":\"InvalidCodec\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidResponseLength\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"NotEnoughBalance\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"id\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"size\",\"type\":\"uint64\"},{\"indexed\":true,\"internalType\":\"bool\",\"name\":\"verified\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"}],\"name\":\"DealProposalCreate\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"received\",\"type\":\"string\"}],\"name\":\"ReceivedDataCap\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"AUTHENTICATE_MESSAGE_METHOD_NUM\",\"outputs\":[{\"internalType\":\"uint64\",\"name\":\"\",\"type\":\"uint64\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"DATACAP_RECEIVER_HOOK_METHOD_NUM\",\"outputs\":[{\"internalType\":\"uint64\",\"name\":\"\",\"type\":\"uint64\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MARKET_ACTOR_ETH_ADDRESS\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MARKET_NOTIFY_DEAL_METHOD_NUM\",\"outputs\":[{\"internalType\":\"uint64\",\"name\":\"\",\"type\":\"uint64\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"VERIFREG_ACTOR_ETH_ADDRESS\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"addBalance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"dealProposals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"idx\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"valid\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"deals\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"piece_cid\",\"type\":\"bytes\"},{\"internalType\":\"uint64\",\"name\":\"piece_size\",\"type\":\"uint64\"},{\"internalType\":\"bool\",\"name\":\"verified_deal\",\"type\":\"bool\"},{\"internalType\":\"string\",\"name\":\"label\",\"type\":\"string\"},{\"internalType\":\"int64\",\"name\":\"start_epoch\",\"type\":\"int64\"},{\"internalType\":\"int64\",\"name\":\"end_epoch\",\"type\":\"int64\"},{\"internalType\":\"uint256\",\"name\":\"storage_price_per_epoch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"provider_collateral\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"client_collateral\",\"type\":\"uint256\"},{\"internalType\":\"uint64\",\"name\":\"extra_params_version\",\"type\":\"uint64\"},{\"components\":[{\"internalType\":\"string\",\"name\":\"location_ref\",\"type\":\"string\"},{\"internalType\":\"uint64\",\"name\":\"car_size\",\"type\":\"uint64\"},{\"internalType\":\"bool\",\"name\":\"skip_ipni_announce\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"remove_unsealed_copy\",\"type\":\"bool\"}],\"internalType\":\"struct ExtraParamsV1\",\"name\":\"extra_params\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"dealsLength\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"getDealByIndex\",\"outputs\":[{\"components\":[{\"internalType\":\"bytes\",\"name\":\"piece_cid\",\"type\":\"bytes\"},{\"internalType\":\"uint64\",\"name\":\"piece_size\",\"type\":\"uint64\"},{\"internalType\":\"bool\",\"name\":\"verified_deal\",\"type\":\"bool\"},{\"internalType\":\"string\",\"name\":\"label\",\"type\":\"string\"},{\"internalType\":\"int64\",\"name\":\"start_epoch\",\"type\":\"int64\"},{\"internalType\":\"int64\",\"name\":\"end_epoch\",\"type\":\"int64\"},{\"internalType\":\"uint256\",\"name\":\"storage_price_per_epoch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"provider_collateral\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"client_collateral\",\"type\":\"uint256\"},{\"internalType\":\"uint64\",\"name\":\"extra_params_version\",\"type\":\"uint64\"},{\"components\":[{\"internalType\":\"string\",\"name\":\"location_ref\",\"type\":\"string\"},{\"internalType\":\"uint64\",\"name\":\"car_size\",\"type\":\"uint64\"},{\"internalType\":\"bool\",\"name\":\"skip_ipni_announce\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"remove_unsealed_copy\",\"type\":\"bool\"}],\"internalType\":\"struct ExtraParamsV1\",\"name\":\"extra_params\",\"type\":\"tuple\"}],\"internalType\":\"struct DealRequest\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"proposalId\",\"type\":\"bytes32\"}],\"name\":\"getDealProposal\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"proposalId\",\"type\":\"bytes32\"}],\"name\":\"getExtraParams\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"extra_params\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"cid\",\"type\":\"bytes\"}],\"name\":\"getProposalIdSet\",\"outputs\":[{\"components\":[{\"internalType\":\"bytes32\",\"name\":\"proposalId\",\"type\":\"bytes32\"},{\"internalType\":\"bool\",\"name\":\"valid\",\"type\":\"bool\"}],\"internalType\":\"struct ProposalIdSet\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"cid\",\"type\":\"bytes\"}],\"name\":\"getProviderSet\",\"outputs\":[{\"components\":[{\"internalType\":\"bytes\",\"name\":\"provider\",\"type\":\"bytes\"},{\"internalType\":\"bool\",\"name\":\"valid\",\"type\":\"bool\"}],\"internalType\":\"struct ProviderSet\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint64\",\"name\":\"method\",\"type\":\"uint64\"},{\"internalType\":\"uint64\",\"name\":\"\",\"type\":\"uint64\"},{\"internalType\":\"bytes\",\"name\":\"params\",\"type\":\"bytes\"}],\"name\":\"handle_filecoin_method\",\"outputs\":[{\"internalType\":\"uint32\",\"name\":\"\",\"type\":\"uint32\"},{\"internalType\":\"uint64\",\"name\":\"\",\"type\":\"uint64\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"bytes\",\"name\":\"piece_cid\",\"type\":\"bytes\"},{\"internalType\":\"uint64\",\"name\":\"piece_size\",\"type\":\"uint64\"},{\"internalType\":\"bool\",\"name\":\"verified_deal\",\"type\":\"bool\"},{\"internalType\":\"string\",\"name\":\"label\",\"type\":\"string\"},{\"internalType\":\"int64\",\"name\":\"start_epoch\",\"type\":\"int64\"},{\"internalType\":\"int64\",\"name\":\"end_epoch\",\"type\":\"int64\"},{\"internalType\":\"uint256\",\"name\":\"storage_price_per_epoch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"provider_collateral\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"client_collateral\",\"type\":\"uint256\"},{\"internalType\":\"uint64\",\"name\":\"extra_params_version\",\"type\":\"uint64\"},{\"components\":[{\"internalType\":\"string\",\"name\":\"location_ref\",\"type\":\"string\"},{\"internalType\":\"uint64\",\"name\":\"car_size\",\"type\":\"uint64\"},{\"internalType\":\"bool\",\"name\":\"skip_ipni_announce\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"remove_unsealed_copy\",\"type\":\"bool\"}],\"internalType\":\"struct ExtraParamsV1\",\"name\":\"extra_params\",\"type\":\"tuple\"}],\"internalType\":\"struct DealRequest\",\"name\":\"deal\",\"type\":\"tuple\"}],\"name\":\"makeDealProposal\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"pieceDeals\",\"outputs\":[{\"internalType\":\"uint64\",\"name\":\"\",\"type\":\"uint64\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"pieceProviders\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"provider\",\"type\":\"bytes\"},{\"internalType\":\"bool\",\"name\":\"valid\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"pieceToProposal\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"proposalId\",\"type\":\"bytes32\"},{\"internalType\":\"bool\",\"name\":\"valid\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"client\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"withdrawBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"ActorError(int256)\":[{\"notice\":\"the called actor returned an error as part of its expected behaviour\"}],\"FailToCallActor()\":[{\"notice\":\"an error happened trying to call the actor\"}],\"InvalidCodec(uint64)\":[{\"notice\":\"the codec received is not valid\"}],\"InvalidResponseLength()\":[{\"notice\":\"the response received is not correct. In some case no response is expected and we received one, or a response was indeed expected and we received none.\"}],\"NotEnoughBalance(uint256,uint256)\":[{\"notice\":\"the smart contract has no enough balance to transfer\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/DealClient.sol\":\"DealClient\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"details\":{\"constantOptimizer\":true,\"cse\":true,\"deduplicate\":true,\"inliner\":true,\"jumpdestRemover\":true,\"orderLiterals\":true,\"peephole\":true,\"yul\":false},\"runs\":200},\"remappings\":[\":@zondax/=node_modules/@zondax/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\"]},\"sources\":{\"node_modules/@zondax/filecoin-solidity/contracts/v0.8/MarketAPI.sol\":{\"keccak256\":\"0xd03a89a5220f6ffc97756775153caf6462d2e0446779580dcd78da9ec3a08be4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://487f493bff0badec060f831aac46ffe3a8a0c2ccdfc8a08e0aefe75d905d9983\",\"dweb:/ipfs/QmTFXYSo6J4jwb8eAHURhjg5d3FrEAETeCDbPb6jZDswkP\"]},\"node_modules/@zondax/filecoin-solidity/contracts/v0.8/cbor/AccountCbor.sol\":{\"keccak256\":\"0x13914410fadcdcaf3df1541b6390db150a05376cd6de187efb9b938d39232e07\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d908ba0e4803cdb91aee18d3207a51068e4755d668b38d94f0dec36ce36f1dc7\",\"dweb:/ipfs/Qmerk4KAwJEgELB1BHnM2NwtV4PYnBpJhBzQYiGfUWuro6\"]},\"node_modules/@zondax/filecoin-solidity/contracts/v0.8/cbor/BigIntCbor.sol\":{\"keccak256\":\"0xd6adbe24bbb19fab2cd625015822f41c4265c94287305ab9c1893cb2dc8c28f8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://851f259839c6995ae1b3e71611d1d69e8306f6555cb1555a0f044094840a93f0\",\"dweb:/ipfs/QmQy4vrorjEweJjwo1F2oPuB9FucARtS1jB3amw13eBTUe\"]},\"node_modules/@zondax/filecoin-solidity/contracts/v0.8/cbor/BytesCbor.sol\":{\"keccak256\":\"0xa35b8e270d90263af2b623aac0481964cdcf544a04088a455f3b820dc01307b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://27938df8c289ce9a502f24d701ba998dfca1e8b3d1358702582684568cd93961\",\"dweb:/ipfs/QmVbghqWW7gS93ah1SHM3VYkFFsvTszMh1K7XLBwXmDK8W\"]},\"node_modules/@zondax/filecoin-solidity/contracts/v0.8/cbor/FilecoinCbor.sol\":{\"keccak256\":\"0x9ff8af0eed16822074221442c266d0cf2aef40c0116542be1e91ea4a42867e17\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3d8bcd6e38b65865ab39eb1db42653b4e5f9839c1eacca67bd0c4e5f12b85248\",\"dweb:/ipfs/Qmabf6vvjG4rXvdkxYFoC5QE5QmRkr3HzGswg1kWccFnu3\"]},\"node_modules/@zondax/filecoin-solidity/contracts/v0.8/cbor/MarketCbor.sol\":{\"keccak256\":\"0x63d6d21f8e728ef5e081534cc7b8cc3824628448c84909a3ab733bedca9fc70d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4e94a4b6de4d383b8a2b85d0a198291e81083ec1912add31383835291f251b34\",\"dweb:/ipfs/QmZKg5DU6HHoq5RwbrpYNcnXEcYmgCZsAo2a7kvCnNLE9V\"]},\"node_modules/@zondax/filecoin-solidity/contracts/v0.8/external/BigNumbers.sol\":{\"keccak256\":\"0x7143a57811966416c61c04fbaef62da53b7d526bddc8cbf3e2e65fd5a85178b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9477d1b322e3612dc16357d2aed9d2367c083b8cb07a073d3c9c41a9885c5729\",\"dweb:/ipfs/QmWXUaBxfWnaLWWFHFn8MJzpVLtzYXDsYVPseiaFxFrNnM\"]},\"node_modules/@zondax/filecoin-solidity/contracts/v0.8/external/Buffer.sol\":{\"keccak256\":\"0xad057f6400d77d79e23e4867c7eee2b694e78b12269fcda7031e823990dfde29\",\"license\":\"BSD-2-Clause\",\"urls\":[\"bzz-raw://aa91131f4cc89c4a45cb3671b5ba81d8d42961afa2765168d3f76690de7ad0a7\",\"dweb:/ipfs/QmQgasR6np7gSfrWXQee6kYqRRcqEvjE8i775gZ3nYg55J\"]},\"node_modules/@zondax/filecoin-solidity/contracts/v0.8/external/CBOR.sol\":{\"keccak256\":\"0xf0b4baa56835d50e9aafa88ce35838bf8f3a4b0a35c2859b7b5a4c147a3136e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://cda0859294075899a0fd58c3a8a290b09f75ef70d49cd711ba8c066374307591\",\"dweb:/ipfs/QmW5WeF69pB2BDmYiJVqnnEfTSLxrQ1jHXEHpmHvRorsYk\"]},\"node_modules/@zondax/filecoin-solidity/contracts/v0.8/types/AccountTypes.sol\":{\"keccak256\":\"0xd109cb4e5813229d716bea98a61c72a5c022eb5ced1d91853f6a757cd26e020e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://172b8ebb7aa31d72e892273c44b85355cf55fbe5444c3194d95c7cd1f65c804a\",\"dweb:/ipfs/QmSWN6MhC1fiLgMwdaTtXttAFgx2sbBUc36PKxZQRXW2jU\"]},\"node_modules/@zondax/filecoin-solidity/contracts/v0.8/types/CommonTypes.sol\":{\"keccak256\":\"0xeea06c33a6d4516585a10576b13d9677c3dc6733f90d05f6713d03833e407e1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78977e52297f8f035c0568716a1c6850b42f2f128e095202a3de2a76226302d7\",\"dweb:/ipfs/QmaLH1Vazt36EaVGNpDhCJiomQ4TFZ9ARVPBCGvGLS7dBY\"]},\"node_modules/@zondax/filecoin-solidity/contracts/v0.8/types/MarketTypes.sol\":{\"keccak256\":\"0xdda01a989c5f3ee08e82f947efb8254146fe9bc193f90d4b84a500601be97f6e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://dec9148a6ae3de9a44c69e54ccb3e08bc2825687b21c22873564cfc8e1624ac2\",\"dweb:/ipfs/QmYDsMPQ3b1r4SJGZngdHbrW8VasWsEM5RhG5sze5eRjW6\"]},\"node_modules/@zondax/filecoin-solidity/contracts/v0.8/utils/Actor.sol\":{\"keccak256\":\"0x47bb3da72b47eeee4447af3a66f393f11813212878807042abe5874986bfe5cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://55a6e2d86f2d2d68f6f098673ab787f706a796c2248adc459acbfa62bc56836e\",\"dweb:/ipfs/QmPhbMJSsJYLwfL5P526N4uqQZar3ifJoUcLdf3SYSwRbJ\"]},\"node_modules/@zondax/filecoin-solidity/contracts/v0.8/utils/CborDecode.sol\":{\"keccak256\":\"0x6809c32c2edf720e4d9ffb771a86da102f9f2d12ce785150803fea6791c3866d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d8473af20cdef037d1a6098319d19c066fb250ed19c233eb01ad1b7a7d97dff6\",\"dweb:/ipfs/QmcujKwzMxaCUJSQjKVapyAKpYFqqemWTXZKUAce13ddee\"]},\"node_modules/@zondax/filecoin-solidity/contracts/v0.8/utils/FilAddresses.sol\":{\"keccak256\":\"0xc4875beb9f388f9031a5b8d625724ca00917f7ae723d766c0a3ac11d018003a4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://637360a821af6bba82f93e94a0ead3825b678b55387183ced2f23979bd9b10a2\",\"dweb:/ipfs/QmNQhUHg4Ns7kKnFC2B5zxZkBMyMTjFR9upt3H6E4Vbyk3\"]},\"node_modules/@zondax/filecoin-solidity/contracts/v0.8/utils/Leb128.sol\":{\"keccak256\":\"0xf9e5b82dfec08131fbe5a02f5903c446c448ee0b79048d5a6abce77f09994159\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://48dccb0d2f74a157e20d25c12aee2423a6b223a3ad1b2983743b2d6b7e6a3a6b\",\"dweb:/ipfs/QmSLMhMDfGYw5CmLtAPna7tSkTqAu2cnhSBxuXhEZ1bFqi\"]},\"node_modules/@zondax/filecoin-solidity/contracts/v0.8/utils/Misc.sol\":{\"keccak256\":\"0xf40a1a80b14618d8f16f65edc43026974719f0015e60e368c0a8684934a0fc49\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ef703ccf30e212410323626ac0c3a511be86282a6c998b78fc81172c90ccbf21\",\"dweb:/ipfs/QmXj8aewTdgfXmrd6qxy9omU8yUr6QjsL55QbbsXtzqKeY\"]},\"src/DealClient.sol\":{\"keccak256\":\"0xd63d7bb33147a9bfad753d62f8b047098995e1569348bc820d61fef721e49b6f\",\"license\":\"UNLICENSED\",\"urls\":[\"bzz-raw://51e9712c521539e1befe5812d1605f662598c1897e0ff436c4964d71bf243c9d\",\"dweb:/ipfs/Qmey69vJEBmn1oZYJazRmHM18txE7GGbBCr6twzsxjyDi5\"]},\"src/Types.sol\":{\"keccak256\":\"0xd2bacf9b0656d09a1b7244f9548991bc67005fde39f39d96f5df9c4857e86519\",\"license\":\"UNLICENSED\",\"urls\":[\"bzz-raw://928f13fab41a5a728346e498542a1793bc8ecdb3a7362fda6c358ddac6283309\",\"dweb:/ipfs/QmcHvT7S3zU2GnmQYiYztym8vRFJCAEGT6gxtdNmSTPpQd\"]}},\"version\":1}",
    "metadata": {
      "compiler": {
        "version": "0.8.17+commit.8df45f5f"
      },
      "language": "Solidity",
      "output": {
        "abi": [
          {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "inputs": [
              {
                "internalType": "int256",
                "name": "errorCode",
                "type": "int256"
              }
            ],
            "type": "error",
            "name": "ActorError"
          },
          {
            "inputs": [],
            "type": "error",
            "name": "FailToCallActor"
          },
          {
            "inputs": [
              {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
              }
            ],
            "type": "error",
            "name": "InvalidCodec"
          },
          {
            "inputs": [],
            "type": "error",
            "name": "InvalidResponseLength"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }
            ],
            "type": "error",
            "name": "NotEnoughBalance"
          },
          {
            "inputs": [
              {
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32",
                "indexed": true
              },
              {
                "internalType": "uint64",
                "name": "size",
                "type": "uint64",
                "indexed": false
              },
              {
                "internalType": "bool",
                "name": "verified",
                "type": "bool",
                "indexed": true
              },
              {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256",
                "indexed": false
              }
            ],
            "type": "event",
            "name": "DealProposalCreate",
            "anonymous": false
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "received",
                "type": "string",
                "indexed": false
              }
            ],
            "type": "event",
            "name": "ReceivedDataCap",
            "anonymous": false
          },
          {
            "inputs": [],
            "stateMutability": "view",
            "type": "function",
            "name": "AUTHENTICATE_MESSAGE_METHOD_NUM",
            "outputs": [
              {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
              }
            ]
          },
          {
            "inputs": [],
            "stateMutability": "view",
            "type": "function",
            "name": "DATACAP_RECEIVER_HOOK_METHOD_NUM",
            "outputs": [
              {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
              }
            ]
          },
          {
            "inputs": [],
            "stateMutability": "view",
            "type": "function",
            "name": "MARKET_ACTOR_ETH_ADDRESS",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ]
          },
          {
            "inputs": [],
            "stateMutability": "view",
            "type": "function",
            "name": "MARKET_NOTIFY_DEAL_METHOD_NUM",
            "outputs": [
              {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
              }
            ]
          },
          {
            "inputs": [],
            "stateMutability": "view",
            "type": "function",
            "name": "VERIFREG_ACTOR_ETH_ADDRESS",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "addBalance"
          },
          {
            "inputs": [
              {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "dealProposals",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "idx",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "valid",
                "type": "bool"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "deals",
            "outputs": [
              {
                "internalType": "bytes",
                "name": "piece_cid",
                "type": "bytes"
              },
              {
                "internalType": "uint64",
                "name": "piece_size",
                "type": "uint64"
              },
              {
                "internalType": "bool",
                "name": "verified_deal",
                "type": "bool"
              },
              {
                "internalType": "string",
                "name": "label",
                "type": "string"
              },
              {
                "internalType": "int64",
                "name": "start_epoch",
                "type": "int64"
              },
              {
                "internalType": "int64",
                "name": "end_epoch",
                "type": "int64"
              },
              {
                "internalType": "uint256",
                "name": "storage_price_per_epoch",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "provider_collateral",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "client_collateral",
                "type": "uint256"
              },
              {
                "internalType": "uint64",
                "name": "extra_params_version",
                "type": "uint64"
              },
              {
                "internalType": "struct ExtraParamsV1",
                "name": "extra_params",
                "type": "tuple",
                "components": [
                  {
                    "internalType": "string",
                    "name": "location_ref",
                    "type": "string"
                  },
                  {
                    "internalType": "uint64",
                    "name": "car_size",
                    "type": "uint64"
                  },
                  {
                    "internalType": "bool",
                    "name": "skip_ipni_announce",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "remove_unsealed_copy",
                    "type": "bool"
                  }
                ]
              }
            ]
          },
          {
            "inputs": [],
            "stateMutability": "view",
            "type": "function",
            "name": "dealsLength",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "getDealByIndex",
            "outputs": [
              {
                "internalType": "struct DealRequest",
                "name": "",
                "type": "tuple",
                "components": [
                  {
                    "internalType": "bytes",
                    "name": "piece_cid",
                    "type": "bytes"
                  },
                  {
                    "internalType": "uint64",
                    "name": "piece_size",
                    "type": "uint64"
                  },
                  {
                    "internalType": "bool",
                    "name": "verified_deal",
                    "type": "bool"
                  },
                  {
                    "internalType": "string",
                    "name": "label",
                    "type": "string"
                  },
                  {
                    "internalType": "int64",
                    "name": "start_epoch",
                    "type": "int64"
                  },
                  {
                    "internalType": "int64",
                    "name": "end_epoch",
                    "type": "int64"
                  },
                  {
                    "internalType": "uint256",
                    "name": "storage_price_per_epoch",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "provider_collateral",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "client_collateral",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint64",
                    "name": "extra_params_version",
                    "type": "uint64"
                  },
                  {
                    "internalType": "struct ExtraParamsV1",
                    "name": "extra_params",
                    "type": "tuple",
                    "components": [
                      {
                        "internalType": "string",
                        "name": "location_ref",
                        "type": "string"
                      },
                      {
                        "internalType": "uint64",
                        "name": "car_size",
                        "type": "uint64"
                      },
                      {
                        "internalType": "bool",
                        "name": "skip_ipni_announce",
                        "type": "bool"
                      },
                      {
                        "internalType": "bool",
                        "name": "remove_unsealed_copy",
                        "type": "bool"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "bytes32",
                "name": "proposalId",
                "type": "bytes32"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "getDealProposal",
            "outputs": [
              {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "bytes32",
                "name": "proposalId",
                "type": "bytes32"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "getExtraParams",
            "outputs": [
              {
                "internalType": "bytes",
                "name": "extra_params",
                "type": "bytes"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "bytes",
                "name": "cid",
                "type": "bytes"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "getProposalIdSet",
            "outputs": [
              {
                "internalType": "struct ProposalIdSet",
                "name": "",
                "type": "tuple",
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "proposalId",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bool",
                    "name": "valid",
                    "type": "bool"
                  }
                ]
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "bytes",
                "name": "cid",
                "type": "bytes"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "getProviderSet",
            "outputs": [
              {
                "internalType": "struct ProviderSet",
                "name": "",
                "type": "tuple",
                "components": [
                  {
                    "internalType": "bytes",
                    "name": "provider",
                    "type": "bytes"
                  },
                  {
                    "internalType": "bool",
                    "name": "valid",
                    "type": "bool"
                  }
                ]
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "uint64",
                "name": "method",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
              },
              {
                "internalType": "bytes",
                "name": "params",
                "type": "bytes"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "handle_filecoin_method",
            "outputs": [
              {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
              },
              {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
              },
              {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "struct DealRequest",
                "name": "deal",
                "type": "tuple",
                "components": [
                  {
                    "internalType": "bytes",
                    "name": "piece_cid",
                    "type": "bytes"
                  },
                  {
                    "internalType": "uint64",
                    "name": "piece_size",
                    "type": "uint64"
                  },
                  {
                    "internalType": "bool",
                    "name": "verified_deal",
                    "type": "bool"
                  },
                  {
                    "internalType": "string",
                    "name": "label",
                    "type": "string"
                  },
                  {
                    "internalType": "int64",
                    "name": "start_epoch",
                    "type": "int64"
                  },
                  {
                    "internalType": "int64",
                    "name": "end_epoch",
                    "type": "int64"
                  },
                  {
                    "internalType": "uint256",
                    "name": "storage_price_per_epoch",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "provider_collateral",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "client_collateral",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint64",
                    "name": "extra_params_version",
                    "type": "uint64"
                  },
                  {
                    "internalType": "struct ExtraParamsV1",
                    "name": "extra_params",
                    "type": "tuple",
                    "components": [
                      {
                        "internalType": "string",
                        "name": "location_ref",
                        "type": "string"
                      },
                      {
                        "internalType": "uint64",
                        "name": "car_size",
                        "type": "uint64"
                      },
                      {
                        "internalType": "bool",
                        "name": "skip_ipni_announce",
                        "type": "bool"
                      },
                      {
                        "internalType": "bool",
                        "name": "remove_unsealed_copy",
                        "type": "bool"
                      }
                    ]
                  }
                ]
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "makeDealProposal",
            "outputs": [
              {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
              }
            ]
          },
          {
            "inputs": [],
            "stateMutability": "view",
            "type": "function",
            "name": "owner",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "pieceDeals",
            "outputs": [
              {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "pieceProviders",
            "outputs": [
              {
                "internalType": "bytes",
                "name": "provider",
                "type": "bytes"
              },
              {
                "internalType": "bool",
                "name": "valid",
                "type": "bool"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "pieceToProposal",
            "outputs": [
              {
                "internalType": "bytes32",
                "name": "proposalId",
                "type": "bytes32"
              },
              {
                "internalType": "bool",
                "name": "valid",
                "type": "bool"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "client",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "withdrawBalance",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ]
          }
        ],
        "devdoc": {
          "kind": "dev",
          "methods": {},
          "version": 1
        },
        "userdoc": {
          "kind": "user",
          "methods": {},
          "version": 1
        }
      },
      "settings": {
        "remappings": [
          ":@zondax/=node_modules/@zondax/",
          ":ds-test/=lib/forge-std/lib/ds-test/src/",
          ":forge-std/=lib/forge-std/src/"
        ],
        "optimizer": {
          "runs": 200,
          "details": {
            "peephole": true,
            "inliner": true,
            "jumpdestRemover": true,
            "orderLiterals": true,
            "deduplicate": true,
            "cse": true,
            "constantOptimizer": true,
            "yul": false
          }
        },
        "metadata": {
          "bytecodeHash": "ipfs"
        },
        "compilationTarget": {
          "src/DealClient.sol": "DealClient"
        },
        "libraries": {}
      },
      "sources": {
        "node_modules/@zondax/filecoin-solidity/contracts/v0.8/MarketAPI.sol": {
          "keccak256": "0xd03a89a5220f6ffc97756775153caf6462d2e0446779580dcd78da9ec3a08be4",
          "urls": [
            "bzz-raw://487f493bff0badec060f831aac46ffe3a8a0c2ccdfc8a08e0aefe75d905d9983",
            "dweb:/ipfs/QmTFXYSo6J4jwb8eAHURhjg5d3FrEAETeCDbPb6jZDswkP"
          ],
          "license": "Apache-2.0"
        },
        "node_modules/@zondax/filecoin-solidity/contracts/v0.8/cbor/AccountCbor.sol": {
          "keccak256": "0x13914410fadcdcaf3df1541b6390db150a05376cd6de187efb9b938d39232e07",
          "urls": [
            "bzz-raw://d908ba0e4803cdb91aee18d3207a51068e4755d668b38d94f0dec36ce36f1dc7",
            "dweb:/ipfs/Qmerk4KAwJEgELB1BHnM2NwtV4PYnBpJhBzQYiGfUWuro6"
          ],
          "license": "Apache-2.0"
        },
        "node_modules/@zondax/filecoin-solidity/contracts/v0.8/cbor/BigIntCbor.sol": {
          "keccak256": "0xd6adbe24bbb19fab2cd625015822f41c4265c94287305ab9c1893cb2dc8c28f8",
          "urls": [
            "bzz-raw://851f259839c6995ae1b3e71611d1d69e8306f6555cb1555a0f044094840a93f0",
            "dweb:/ipfs/QmQy4vrorjEweJjwo1F2oPuB9FucARtS1jB3amw13eBTUe"
          ],
          "license": "Apache-2.0"
        },
        "node_modules/@zondax/filecoin-solidity/contracts/v0.8/cbor/BytesCbor.sol": {
          "keccak256": "0xa35b8e270d90263af2b623aac0481964cdcf544a04088a455f3b820dc01307b0",
          "urls": [
            "bzz-raw://27938df8c289ce9a502f24d701ba998dfca1e8b3d1358702582684568cd93961",
            "dweb:/ipfs/QmVbghqWW7gS93ah1SHM3VYkFFsvTszMh1K7XLBwXmDK8W"
          ],
          "license": "Apache-2.0"
        },
        "node_modules/@zondax/filecoin-solidity/contracts/v0.8/cbor/FilecoinCbor.sol": {
          "keccak256": "0x9ff8af0eed16822074221442c266d0cf2aef40c0116542be1e91ea4a42867e17",
          "urls": [
            "bzz-raw://3d8bcd6e38b65865ab39eb1db42653b4e5f9839c1eacca67bd0c4e5f12b85248",
            "dweb:/ipfs/Qmabf6vvjG4rXvdkxYFoC5QE5QmRkr3HzGswg1kWccFnu3"
          ],
          "license": "Apache-2.0"
        },
        "node_modules/@zondax/filecoin-solidity/contracts/v0.8/cbor/MarketCbor.sol": {
          "keccak256": "0x63d6d21f8e728ef5e081534cc7b8cc3824628448c84909a3ab733bedca9fc70d",
          "urls": [
            "bzz-raw://4e94a4b6de4d383b8a2b85d0a198291e81083ec1912add31383835291f251b34",
            "dweb:/ipfs/QmZKg5DU6HHoq5RwbrpYNcnXEcYmgCZsAo2a7kvCnNLE9V"
          ],
          "license": "Apache-2.0"
        },
        "node_modules/@zondax/filecoin-solidity/contracts/v0.8/external/BigNumbers.sol": {
          "keccak256": "0x7143a57811966416c61c04fbaef62da53b7d526bddc8cbf3e2e65fd5a85178b9",
          "urls": [
            "bzz-raw://9477d1b322e3612dc16357d2aed9d2367c083b8cb07a073d3c9c41a9885c5729",
            "dweb:/ipfs/QmWXUaBxfWnaLWWFHFn8MJzpVLtzYXDsYVPseiaFxFrNnM"
          ],
          "license": "MIT"
        },
        "node_modules/@zondax/filecoin-solidity/contracts/v0.8/external/Buffer.sol": {
          "keccak256": "0xad057f6400d77d79e23e4867c7eee2b694e78b12269fcda7031e823990dfde29",
          "urls": [
            "bzz-raw://aa91131f4cc89c4a45cb3671b5ba81d8d42961afa2765168d3f76690de7ad0a7",
            "dweb:/ipfs/QmQgasR6np7gSfrWXQee6kYqRRcqEvjE8i775gZ3nYg55J"
          ],
          "license": "BSD-2-Clause"
        },
        "node_modules/@zondax/filecoin-solidity/contracts/v0.8/external/CBOR.sol": {
          "keccak256": "0xf0b4baa56835d50e9aafa88ce35838bf8f3a4b0a35c2859b7b5a4c147a3136e0",
          "urls": [
            "bzz-raw://cda0859294075899a0fd58c3a8a290b09f75ef70d49cd711ba8c066374307591",
            "dweb:/ipfs/QmW5WeF69pB2BDmYiJVqnnEfTSLxrQ1jHXEHpmHvRorsYk"
          ],
          "license": "MIT"
        },
        "node_modules/@zondax/filecoin-solidity/contracts/v0.8/types/AccountTypes.sol": {
          "keccak256": "0xd109cb4e5813229d716bea98a61c72a5c022eb5ced1d91853f6a757cd26e020e",
          "urls": [
            "bzz-raw://172b8ebb7aa31d72e892273c44b85355cf55fbe5444c3194d95c7cd1f65c804a",
            "dweb:/ipfs/QmSWN6MhC1fiLgMwdaTtXttAFgx2sbBUc36PKxZQRXW2jU"
          ],
          "license": "Apache-2.0"
        },
        "node_modules/@zondax/filecoin-solidity/contracts/v0.8/types/CommonTypes.sol": {
          "keccak256": "0xeea06c33a6d4516585a10576b13d9677c3dc6733f90d05f6713d03833e407e1a",
          "urls": [
            "bzz-raw://78977e52297f8f035c0568716a1c6850b42f2f128e095202a3de2a76226302d7",
            "dweb:/ipfs/QmaLH1Vazt36EaVGNpDhCJiomQ4TFZ9ARVPBCGvGLS7dBY"
          ],
          "license": "Apache-2.0"
        },
        "node_modules/@zondax/filecoin-solidity/contracts/v0.8/types/MarketTypes.sol": {
          "keccak256": "0xdda01a989c5f3ee08e82f947efb8254146fe9bc193f90d4b84a500601be97f6e",
          "urls": [
            "bzz-raw://dec9148a6ae3de9a44c69e54ccb3e08bc2825687b21c22873564cfc8e1624ac2",
            "dweb:/ipfs/QmYDsMPQ3b1r4SJGZngdHbrW8VasWsEM5RhG5sze5eRjW6"
          ],
          "license": "Apache-2.0"
        },
        "node_modules/@zondax/filecoin-solidity/contracts/v0.8/utils/Actor.sol": {
          "keccak256": "0x47bb3da72b47eeee4447af3a66f393f11813212878807042abe5874986bfe5cc",
          "urls": [
            "bzz-raw://55a6e2d86f2d2d68f6f098673ab787f706a796c2248adc459acbfa62bc56836e",
            "dweb:/ipfs/QmPhbMJSsJYLwfL5P526N4uqQZar3ifJoUcLdf3SYSwRbJ"
          ],
          "license": "Apache-2.0"
        },
        "node_modules/@zondax/filecoin-solidity/contracts/v0.8/utils/CborDecode.sol": {
          "keccak256": "0x6809c32c2edf720e4d9ffb771a86da102f9f2d12ce785150803fea6791c3866d",
          "urls": [
            "bzz-raw://d8473af20cdef037d1a6098319d19c066fb250ed19c233eb01ad1b7a7d97dff6",
            "dweb:/ipfs/QmcujKwzMxaCUJSQjKVapyAKpYFqqemWTXZKUAce13ddee"
          ],
          "license": "Apache-2.0"
        },
        "node_modules/@zondax/filecoin-solidity/contracts/v0.8/utils/FilAddresses.sol": {
          "keccak256": "0xc4875beb9f388f9031a5b8d625724ca00917f7ae723d766c0a3ac11d018003a4",
          "urls": [
            "bzz-raw://637360a821af6bba82f93e94a0ead3825b678b55387183ced2f23979bd9b10a2",
            "dweb:/ipfs/QmNQhUHg4Ns7kKnFC2B5zxZkBMyMTjFR9upt3H6E4Vbyk3"
          ],
          "license": "Apache-2.0"
        },
        "node_modules/@zondax/filecoin-solidity/contracts/v0.8/utils/Leb128.sol": {
          "keccak256": "0xf9e5b82dfec08131fbe5a02f5903c446c448ee0b79048d5a6abce77f09994159",
          "urls": [
            "bzz-raw://48dccb0d2f74a157e20d25c12aee2423a6b223a3ad1b2983743b2d6b7e6a3a6b",
            "dweb:/ipfs/QmSLMhMDfGYw5CmLtAPna7tSkTqAu2cnhSBxuXhEZ1bFqi"
          ],
          "license": "Apache-2.0"
        },
        "node_modules/@zondax/filecoin-solidity/contracts/v0.8/utils/Misc.sol": {
          "keccak256": "0xf40a1a80b14618d8f16f65edc43026974719f0015e60e368c0a8684934a0fc49",
          "urls": [
            "bzz-raw://ef703ccf30e212410323626ac0c3a511be86282a6c998b78fc81172c90ccbf21",
            "dweb:/ipfs/QmXj8aewTdgfXmrd6qxy9omU8yUr6QjsL55QbbsXtzqKeY"
          ],
          "license": "Apache-2.0"
        },
        "src/DealClient.sol": {
          "keccak256": "0xd63d7bb33147a9bfad753d62f8b047098995e1569348bc820d61fef721e49b6f",
          "urls": [
            "bzz-raw://51e9712c521539e1befe5812d1605f662598c1897e0ff436c4964d71bf243c9d",
            "dweb:/ipfs/Qmey69vJEBmn1oZYJazRmHM18txE7GGbBCr6twzsxjyDi5"
          ],
          "license": "UNLICENSED"
        },
        "src/Types.sol": {
          "keccak256": "0xd2bacf9b0656d09a1b7244f9548991bc67005fde39f39d96f5df9c4857e86519",
          "urls": [
            "bzz-raw://928f13fab41a5a728346e498542a1793bc8ecdb3a7362fda6c358ddac6283309",
            "dweb:/ipfs/QmcHvT7S3zU2GnmQYiYztym8vRFJCAEGT6gxtdNmSTPpQd"
          ],
          "license": "UNLICENSED"
        }
      },
      "version": 1
    },
    "ast": {
      "absolutePath": "src/DealClient.sol",
      "id": 32771,
      "exportedSymbols": {
        "AccountCBOR": [
          25040
        ],
        "AccountTypes": [
          29837
        ],
        "BigNumbers": [
          28544
        ],
        "BytesCBOR": [
          25480
        ],
        "CBOR": [
          29824
        ],
        "CommonTypes": [
          29875
        ],
        "DealClient": [
          32770
        ],
        "DealRequest": [
          31913
        ],
        "ExtraParamsV1": [
          31922
        ],
        "FilAddresses": [
          31740
        ],
        "MarketAPI": [
          24925
        ],
        "MarketCBOR": [
          26547
        ],
        "MarketDealNotifyParams": [
          32807
        ],
        "MarketTypes": [
          30007
        ],
        "Misc": [
          31839
        ],
        "ProposalIdSet": [
          31879
        ],
        "ProposalIdx": [
          31884
        ],
        "ProviderSet": [
          31889
        ],
        "deserializeDealProposal": [
          33213
        ],
        "deserializeMarketDealNotifyParams": [
          32860
        ],
        "serializeDealProposal": [
          32980
        ],
        "serializeExtraParamsV1": [
          31979
        ]
      },
      "nodeType": "SourceUnit",
      "src": "39:12216:31",
      "nodes": [
        {
          "id": 31841,
          "nodeType": "PragmaDirective",
          "src": "39:24:31",
          "nodes": [],
          "literals": [
            "solidity",
            "^",
            "0.8",
            ".17"
          ]
        },
        {
          "id": 31843,
          "nodeType": "ImportDirective",
          "src": "65:81:31",
          "nodes": [],
          "absolutePath": "node_modules/@zondax/filecoin-solidity/contracts/v0.8/MarketAPI.sol",
          "file": "@zondax/filecoin-solidity/contracts/v0.8/MarketAPI.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 32771,
          "sourceUnit": 24926,
          "symbolAliases": [
            {
              "foreign": {
                "id": 31842,
                "name": "MarketAPI",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 24925,
                "src": "73:9:31",
                "typeDescriptions": {}
              },
              "nameLocation": "-1:-1:-1"
            }
          ],
          "unitAlias": ""
        },
        {
          "id": 31845,
          "nodeType": "ImportDirective",
          "src": "147:91:31",
          "nodes": [],
          "absolutePath": "node_modules/@zondax/filecoin-solidity/contracts/v0.8/types/CommonTypes.sol",
          "file": "@zondax/filecoin-solidity/contracts/v0.8/types/CommonTypes.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 32771,
          "sourceUnit": 29876,
          "symbolAliases": [
            {
              "foreign": {
                "id": 31844,
                "name": "CommonTypes",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 29875,
                "src": "155:11:31",
                "typeDescriptions": {}
              },
              "nameLocation": "-1:-1:-1"
            }
          ],
          "unitAlias": ""
        },
        {
          "id": 31847,
          "nodeType": "ImportDirective",
          "src": "239:91:31",
          "nodes": [],
          "absolutePath": "node_modules/@zondax/filecoin-solidity/contracts/v0.8/types/MarketTypes.sol",
          "file": "@zondax/filecoin-solidity/contracts/v0.8/types/MarketTypes.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 32771,
          "sourceUnit": 30008,
          "symbolAliases": [
            {
              "foreign": {
                "id": 31846,
                "name": "MarketTypes",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 30007,
                "src": "247:11:31",
                "typeDescriptions": {}
              },
              "nameLocation": "-1:-1:-1"
            }
          ],
          "unitAlias": ""
        },
        {
          "id": 31849,
          "nodeType": "ImportDirective",
          "src": "331:93:31",
          "nodes": [],
          "absolutePath": "node_modules/@zondax/filecoin-solidity/contracts/v0.8/types/AccountTypes.sol",
          "file": "@zondax/filecoin-solidity/contracts/v0.8/types/AccountTypes.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 32771,
          "sourceUnit": 29838,
          "symbolAliases": [
            {
              "foreign": {
                "id": 31848,
                "name": "AccountTypes",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 29837,
                "src": "339:12:31",
                "typeDescriptions": {}
              },
              "nameLocation": "-1:-1:-1"
            }
          ],
          "unitAlias": ""
        },
        {
          "id": 31851,
          "nodeType": "ImportDirective",
          "src": "425:91:31",
          "nodes": [],
          "absolutePath": "node_modules/@zondax/filecoin-solidity/contracts/v0.8/types/CommonTypes.sol",
          "file": "@zondax/filecoin-solidity/contracts/v0.8/types/CommonTypes.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 32771,
          "sourceUnit": 29876,
          "symbolAliases": [
            {
              "foreign": {
                "id": 31850,
                "name": "CommonTypes",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 29875,
                "src": "433:11:31",
                "typeDescriptions": {}
              },
              "nameLocation": "-1:-1:-1"
            }
          ],
          "unitAlias": ""
        },
        {
          "id": 31853,
          "nodeType": "ImportDirective",
          "src": "517:90:31",
          "nodes": [],
          "absolutePath": "node_modules/@zondax/filecoin-solidity/contracts/v0.8/cbor/AccountCbor.sol",
          "file": "@zondax/filecoin-solidity/contracts/v0.8/cbor/AccountCbor.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 32771,
          "sourceUnit": 25041,
          "symbolAliases": [
            {
              "foreign": {
                "id": 31852,
                "name": "AccountCBOR",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 25040,
                "src": "525:11:31",
                "typeDescriptions": {}
              },
              "nameLocation": "-1:-1:-1"
            }
          ],
          "unitAlias": ""
        },
        {
          "id": 31855,
          "nodeType": "ImportDirective",
          "src": "608:88:31",
          "nodes": [],
          "absolutePath": "node_modules/@zondax/filecoin-solidity/contracts/v0.8/cbor/MarketCbor.sol",
          "file": "@zondax/filecoin-solidity/contracts/v0.8/cbor/MarketCbor.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 32771,
          "sourceUnit": 26548,
          "symbolAliases": [
            {
              "foreign": {
                "id": 31854,
                "name": "MarketCBOR",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 26547,
                "src": "616:10:31",
                "typeDescriptions": {}
              },
              "nameLocation": "-1:-1:-1"
            }
          ],
          "unitAlias": ""
        },
        {
          "id": 31857,
          "nodeType": "ImportDirective",
          "src": "697:86:31",
          "nodes": [],
          "absolutePath": "node_modules/@zondax/filecoin-solidity/contracts/v0.8/cbor/BytesCbor.sol",
          "file": "@zondax/filecoin-solidity/contracts/v0.8/cbor/BytesCbor.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 32771,
          "sourceUnit": 25481,
          "symbolAliases": [
            {
              "foreign": {
                "id": 31856,
                "name": "BytesCBOR",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 25480,
                "src": "705:9:31",
                "typeDescriptions": {}
              },
              "nameLocation": "-1:-1:-1"
            }
          ],
          "unitAlias": ""
        },
        {
          "id": 31859,
          "nodeType": "ImportDirective",
          "src": "784:92:31",
          "nodes": [],
          "absolutePath": "node_modules/@zondax/filecoin-solidity/contracts/v0.8/external/BigNumbers.sol",
          "file": "@zondax/filecoin-solidity/contracts/v0.8/external/BigNumbers.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 32771,
          "sourceUnit": 28545,
          "symbolAliases": [
            {
              "foreign": {
                "id": 31858,
                "name": "BigNumbers",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 28544,
                "src": "792:10:31",
                "typeDescriptions": {}
              },
              "nameLocation": "-1:-1:-1"
            }
          ],
          "unitAlias": ""
        },
        {
          "id": 31861,
          "nodeType": "ImportDirective",
          "src": "877:80:31",
          "nodes": [],
          "absolutePath": "node_modules/@zondax/filecoin-solidity/contracts/v0.8/external/CBOR.sol",
          "file": "@zondax/filecoin-solidity/contracts/v0.8/external/CBOR.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 32771,
          "sourceUnit": 29825,
          "symbolAliases": [
            {
              "foreign": {
                "id": 31860,
                "name": "CBOR",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 29824,
                "src": "885:4:31",
                "typeDescriptions": {}
              },
              "nameLocation": "-1:-1:-1"
            }
          ],
          "unitAlias": ""
        },
        {
          "id": 31863,
          "nodeType": "ImportDirective",
          "src": "958:77:31",
          "nodes": [],
          "absolutePath": "node_modules/@zondax/filecoin-solidity/contracts/v0.8/utils/Misc.sol",
          "file": "@zondax/filecoin-solidity/contracts/v0.8/utils/Misc.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 32771,
          "sourceUnit": 31840,
          "symbolAliases": [
            {
              "foreign": {
                "id": 31862,
                "name": "Misc",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 31839,
                "src": "966:4:31",
                "typeDescriptions": {}
              },
              "nameLocation": "-1:-1:-1"
            }
          ],
          "unitAlias": ""
        },
        {
          "id": 31865,
          "nodeType": "ImportDirective",
          "src": "1036:93:31",
          "nodes": [],
          "absolutePath": "node_modules/@zondax/filecoin-solidity/contracts/v0.8/utils/FilAddresses.sol",
          "file": "@zondax/filecoin-solidity/contracts/v0.8/utils/FilAddresses.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 32771,
          "sourceUnit": 31741,
          "symbolAliases": [
            {
              "foreign": {
                "id": 31864,
                "name": "FilAddresses",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 31740,
                "src": "1044:12:31",
                "typeDescriptions": {}
              },
              "nameLocation": "-1:-1:-1"
            }
          ],
          "unitAlias": ""
        },
        {
          "id": 31870,
          "nodeType": "ImportDirective",
          "src": "1130:134:31",
          "nodes": [],
          "absolutePath": "src/Types.sol",
          "file": "./Types.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 32771,
          "sourceUnit": 33214,
          "symbolAliases": [
            {
              "foreign": {
                "id": 31866,
                "name": "MarketDealNotifyParams",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 32807,
                "src": "1138:22:31",
                "typeDescriptions": {}
              },
              "nameLocation": "-1:-1:-1"
            },
            {
              "foreign": {
                "id": 31867,
                "name": "deserializeMarketDealNotifyParams",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 32860,
                "src": "1162:33:31",
                "typeDescriptions": {}
              },
              "nameLocation": "-1:-1:-1"
            },
            {
              "foreign": {
                "id": 31868,
                "name": "serializeDealProposal",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 32980,
                "src": "1197:21:31",
                "typeDescriptions": {}
              },
              "nameLocation": "-1:-1:-1"
            },
            {
              "foreign": {
                "id": 31869,
                "name": "deserializeDealProposal",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 33213,
                "src": "1220:23:31",
                "typeDescriptions": {}
              },
              "nameLocation": "-1:-1:-1"
            }
          ],
          "unitAlias": ""
        },
        {
          "id": 31874,
          "nodeType": "UsingForDirective",
          "src": "1266:31:31",
          "nodes": [],
          "global": false,
          "libraryName": {
            "id": 31871,
            "name": "CBOR",
            "nameLocations": [
              "1272:4:31"
            ],
            "nodeType": "IdentifierPath",
            "referencedDeclaration": 29824,
            "src": "1272:4:31"
          },
          "typeName": {
            "id": 31873,
            "nodeType": "UserDefinedTypeName",
            "pathNode": {
              "id": 31872,
              "name": "CBOR.CBORBuffer",
              "nameLocations": [
                "1281:4:31",
                "1286:10:31"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 28979,
              "src": "1281:15:31"
            },
            "referencedDeclaration": 28979,
            "src": "1281:15:31",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_CBORBuffer_$28979_storage_ptr",
              "typeString": "struct CBOR.CBORBuffer"
            }
          }
        },
        {
          "id": 31879,
          "nodeType": "StructDefinition",
          "src": "1299:64:31",
          "nodes": [],
          "canonicalName": "ProposalIdSet",
          "members": [
            {
              "constant": false,
              "id": 31876,
              "mutability": "mutable",
              "name": "proposalId",
              "nameLocation": "1334:10:31",
              "nodeType": "VariableDeclaration",
              "scope": 31879,
              "src": "1326:18:31",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              },
              "typeName": {
                "id": 31875,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1326:7:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 31878,
              "mutability": "mutable",
              "name": "valid",
              "nameLocation": "1355:5:31",
              "nodeType": "VariableDeclaration",
              "scope": 31879,
              "src": "1350:10:31",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "typeName": {
                "id": 31877,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "1350:4:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              },
              "visibility": "internal"
            }
          ],
          "name": "ProposalIdSet",
          "nameLocation": "1306:13:31",
          "scope": 32771,
          "visibility": "public"
        },
        {
          "id": 31884,
          "nodeType": "StructDefinition",
          "src": "1365:55:31",
          "nodes": [],
          "canonicalName": "ProposalIdx",
          "members": [
            {
              "constant": false,
              "id": 31881,
              "mutability": "mutable",
              "name": "idx",
              "nameLocation": "1398:3:31",
              "nodeType": "VariableDeclaration",
              "scope": 31884,
              "src": "1390:11:31",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 31880,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1390:7:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 31883,
              "mutability": "mutable",
              "name": "valid",
              "nameLocation": "1412:5:31",
              "nodeType": "VariableDeclaration",
              "scope": 31884,
              "src": "1407:10:31",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "typeName": {
                "id": 31882,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "1407:4:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              },
              "visibility": "internal"
            }
          ],
          "name": "ProposalIdx",
          "nameLocation": "1372:11:31",
          "scope": 32771,
          "visibility": "public"
        },
        {
          "id": 31889,
          "nodeType": "StructDefinition",
          "src": "1422:58:31",
          "nodes": [],
          "canonicalName": "ProviderSet",
          "members": [
            {
              "constant": false,
              "id": 31886,
              "mutability": "mutable",
              "name": "provider",
              "nameLocation": "1453:8:31",
              "nodeType": "VariableDeclaration",
              "scope": 31889,
              "src": "1447:14:31",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              },
              "typeName": {
                "id": 31885,
                "name": "bytes",
                "nodeType": "ElementaryTypeName",
                "src": "1447:5:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 31888,
              "mutability": "mutable",
              "name": "valid",
              "nameLocation": "1472:5:31",
              "nodeType": "VariableDeclaration",
              "scope": 31889,
              "src": "1467:10:31",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "typeName": {
                "id": 31887,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "1467:4:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              },
              "visibility": "internal"
            }
          ],
          "name": "ProviderSet",
          "nameLocation": "1429:11:31",
          "scope": 32771,
          "visibility": "public"
        },
        {
          "id": 31913,
          "nodeType": "StructDefinition",
          "src": "1692:318:31",
          "nodes": [],
          "canonicalName": "DealRequest",
          "members": [
            {
              "constant": false,
              "id": 31891,
              "mutability": "mutable",
              "name": "piece_cid",
              "nameLocation": "1723:9:31",
              "nodeType": "VariableDeclaration",
              "scope": 31913,
              "src": "1717:15:31",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              },
              "typeName": {
                "id": 31890,
                "name": "bytes",
                "nodeType": "ElementaryTypeName",
                "src": "1717:5:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 31893,
              "mutability": "mutable",
              "name": "piece_size",
              "nameLocation": "1745:10:31",
              "nodeType": "VariableDeclaration",
              "scope": 31913,
              "src": "1738:17:31",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint64",
                "typeString": "uint64"
              },
              "typeName": {
                "id": 31892,
                "name": "uint64",
                "nodeType": "ElementaryTypeName",
                "src": "1738:6:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint64",
                  "typeString": "uint64"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 31895,
              "mutability": "mutable",
              "name": "verified_deal",
              "nameLocation": "1766:13:31",
              "nodeType": "VariableDeclaration",
              "scope": 31913,
              "src": "1761:18:31",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "typeName": {
                "id": 31894,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "1761:4:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 31897,
              "mutability": "mutable",
              "name": "label",
              "nameLocation": "1792:5:31",
              "nodeType": "VariableDeclaration",
              "scope": 31913,
              "src": "1785:12:31",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              },
              "typeName": {
                "id": 31896,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "1785:6:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 31899,
              "mutability": "mutable",
              "name": "start_epoch",
              "nameLocation": "1809:11:31",
              "nodeType": "VariableDeclaration",
              "scope": 31913,
              "src": "1803:17:31",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_int64",
                "typeString": "int64"
              },
              "typeName": {
                "id": 31898,
                "name": "int64",
                "nodeType": "ElementaryTypeName",
                "src": "1803:5:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_int64",
                  "typeString": "int64"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 31901,
              "mutability": "mutable",
              "name": "end_epoch",
              "nameLocation": "1832:9:31",
              "nodeType": "VariableDeclaration",
              "scope": 31913,
              "src": "1826:15:31",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_int64",
                "typeString": "int64"
              },
              "typeName": {
                "id": 31900,
                "name": "int64",
                "nodeType": "ElementaryTypeName",
                "src": "1826:5:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_int64",
                  "typeString": "int64"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 31903,
              "mutability": "mutable",
              "name": "storage_price_per_epoch",
              "nameLocation": "1855:23:31",
              "nodeType": "VariableDeclaration",
              "scope": 31913,
              "src": "1847:31:31",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 31902,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1847:7:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 31905,
              "mutability": "mutable",
              "name": "provider_collateral",
              "nameLocation": "1892:19:31",
              "nodeType": "VariableDeclaration",
              "scope": 31913,
              "src": "1884:27:31",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 31904,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1884:7:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 31907,
              "mutability": "mutable",
              "name": "client_collateral",
              "nameLocation": "1925:17:31",
              "nodeType": "VariableDeclaration",
              "scope": 31913,
              "src": "1917:25:31",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 31906,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1917:7:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 31909,
              "mutability": "mutable",
              "name": "extra_params_version",
              "nameLocation": "1955:20:31",
              "nodeType": "VariableDeclaration",
              "scope": 31913,
              "src": "1948:27:31",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint64",
                "typeString": "uint64"
              },
              "typeName": {
                "id": 31908,
                "name": "uint64",
                "nodeType": "ElementaryTypeName",
                "src": "1948:6:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint64",
                  "typeString": "uint64"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 31912,
              "mutability": "mutable",
              "name": "extra_params",
              "nameLocation": "1995:12:31",
              "nodeType": "VariableDeclaration",
              "scope": 31913,
              "src": "1981:26:31",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_ExtraParamsV1_$31922_storage_ptr",
                "typeString": "struct ExtraParamsV1"
              },
              "typeName": {
                "id": 31911,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 31910,
                  "name": "ExtraParamsV1",
                  "nameLocations": [
                    "1981:13:31"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31922,
                  "src": "1981:13:31"
                },
                "referencedDeclaration": 31922,
                "src": "1981:13:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_ExtraParamsV1_$31922_storage_ptr",
                  "typeString": "struct ExtraParamsV1"
                }
              },
              "visibility": "internal"
            }
          ],
          "name": "DealRequest",
          "nameLocation": "1699:11:31",
          "scope": 32771,
          "visibility": "public"
        },
        {
          "id": 31922,
          "nodeType": "StructDefinition",
          "src": "2135:130:31",
          "nodes": [],
          "canonicalName": "ExtraParamsV1",
          "members": [
            {
              "constant": false,
              "id": 31915,
              "mutability": "mutable",
              "name": "location_ref",
              "nameLocation": "2169:12:31",
              "nodeType": "VariableDeclaration",
              "scope": 31922,
              "src": "2162:19:31",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              },
              "typeName": {
                "id": 31914,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "2162:6:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 31917,
              "mutability": "mutable",
              "name": "car_size",
              "nameLocation": "2194:8:31",
              "nodeType": "VariableDeclaration",
              "scope": 31922,
              "src": "2187:15:31",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint64",
                "typeString": "uint64"
              },
              "typeName": {
                "id": 31916,
                "name": "uint64",
                "nodeType": "ElementaryTypeName",
                "src": "2187:6:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint64",
                  "typeString": "uint64"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 31919,
              "mutability": "mutable",
              "name": "skip_ipni_announce",
              "nameLocation": "2213:18:31",
              "nodeType": "VariableDeclaration",
              "scope": 31922,
              "src": "2208:23:31",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "typeName": {
                "id": 31918,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "2208:4:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 31921,
              "mutability": "mutable",
              "name": "remove_unsealed_copy",
              "nameLocation": "2242:20:31",
              "nodeType": "VariableDeclaration",
              "scope": 31922,
              "src": "2237:25:31",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "typeName": {
                "id": 31920,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "2237:4:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              },
              "visibility": "internal"
            }
          ],
          "name": "ExtraParamsV1",
          "nameLocation": "2142:13:31",
          "scope": 32771,
          "visibility": "public"
        },
        {
          "id": 31979,
          "nodeType": "FunctionDefinition",
          "src": "2267:373:31",
          "nodes": [],
          "body": {
            "id": 31978,
            "nodeType": "Block",
            "src": "2362:278:31",
            "nodes": [],
            "statements": [
              {
                "assignments": [
                  31934
                ],
                "declarations": [
                  {
                    "constant": false,
                    "id": 31934,
                    "mutability": "mutable",
                    "name": "buf",
                    "nameLocation": "2391:3:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 31978,
                    "src": "2368:26:31",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_CBORBuffer_$28979_memory_ptr",
                      "typeString": "struct CBOR.CBORBuffer"
                    },
                    "typeName": {
                      "id": 31933,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 31932,
                        "name": "CBOR.CBORBuffer",
                        "nameLocations": [
                          "2368:4:31",
                          "2373:10:31"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 28979,
                        "src": "2368:15:31"
                      },
                      "referencedDeclaration": 28979,
                      "src": "2368:15:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_CBORBuffer_$28979_storage_ptr",
                        "typeString": "struct CBOR.CBORBuffer"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "id": 31939,
                "initialValue": {
                  "arguments": [
                    {
                      "hexValue": "3634",
                      "id": 31937,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2409:2:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_64_by_1",
                        "typeString": "int_const 64"
                      },
                      "value": "64"
                    }
                  ],
                  "expression": {
                    "argumentTypes": [
                      {
                        "typeIdentifier": "t_rational_64_by_1",
                        "typeString": "int_const 64"
                      }
                    ],
                    "expression": {
                      "id": 31935,
                      "name": "CBOR",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29824,
                      "src": "2397:4:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_CBOR_$29824_$",
                        "typeString": "type(library CBOR)"
                      }
                    },
                    "id": 31936,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "2402:6:31",
                    "memberName": "create",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 29046,
                    "src": "2397:11:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_struct$_CBORBuffer_$28979_memory_ptr_$",
                      "typeString": "function (uint256) pure returns (struct CBOR.CBORBuffer memory)"
                    }
                  },
                  "id": 31938,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": false,
                  "kind": "functionCall",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "2397:15:31",
                  "tryCall": false,
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_CBORBuffer_$28979_memory_ptr",
                    "typeString": "struct CBOR.CBORBuffer memory"
                  }
                },
                "nodeType": "VariableDeclarationStatement",
                "src": "2368:44:31"
              },
              {
                "expression": {
                  "arguments": [
                    {
                      "hexValue": "34",
                      "id": 31943,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2438:1:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_4_by_1",
                        "typeString": "int_const 4"
                      },
                      "value": "4"
                    }
                  ],
                  "expression": {
                    "argumentTypes": [
                      {
                        "typeIdentifier": "t_rational_4_by_1",
                        "typeString": "int_const 4"
                      }
                    ],
                    "expression": {
                      "id": 31940,
                      "name": "buf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31934,
                      "src": "2418:3:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_CBORBuffer_$28979_memory_ptr",
                        "typeString": "struct CBOR.CBORBuffer memory"
                      }
                    },
                    "id": 31942,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "2422:15:31",
                    "memberName": "startFixedArray",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 29338,
                    "src": "2418:19:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_function_internal_pure$_t_struct$_CBORBuffer_$28979_memory_ptr_$_t_uint64_$returns$__$bound_to$_t_struct$_CBORBuffer_$28979_memory_ptr_$",
                      "typeString": "function (struct CBOR.CBORBuffer memory,uint64) pure"
                    }
                  },
                  "id": 31944,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": false,
                  "kind": "functionCall",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "2418:22:31",
                  "tryCall": false,
                  "typeDescriptions": {
                    "typeIdentifier": "t_tuple$__$",
                    "typeString": "tuple()"
                  }
                },
                "id": 31945,
                "nodeType": "ExpressionStatement",
                "src": "2418:22:31"
              },
              {
                "expression": {
                  "arguments": [
                    {
                      "expression": {
                        "id": 31949,
                        "name": "params",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31925,
                        "src": "2462:6:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ExtraParamsV1_$31922_memory_ptr",
                          "typeString": "struct ExtraParamsV1 memory"
                        }
                      },
                      "id": 31950,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2469:12:31",
                      "memberName": "location_ref",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31915,
                      "src": "2462:19:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    }
                  ],
                  "expression": {
                    "argumentTypes": [
                      {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    ],
                    "expression": {
                      "id": 31946,
                      "name": "buf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31934,
                      "src": "2446:3:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_CBORBuffer_$28979_memory_ptr",
                        "typeString": "struct CBOR.CBORBuffer memory"
                      }
                    },
                    "id": 31948,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "2450:11:31",
                    "memberName": "writeString",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 29264,
                    "src": "2446:15:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_function_internal_pure$_t_struct$_CBORBuffer_$28979_memory_ptr_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_CBORBuffer_$28979_memory_ptr_$",
                      "typeString": "function (struct CBOR.CBORBuffer memory,string memory) pure"
                    }
                  },
                  "id": 31951,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": false,
                  "kind": "functionCall",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "2446:36:31",
                  "tryCall": false,
                  "typeDescriptions": {
                    "typeIdentifier": "t_tuple$__$",
                    "typeString": "tuple()"
                  }
                },
                "id": 31952,
                "nodeType": "ExpressionStatement",
                "src": "2446:36:31"
              },
              {
                "expression": {
                  "arguments": [
                    {
                      "expression": {
                        "id": 31956,
                        "name": "params",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31925,
                        "src": "2504:6:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ExtraParamsV1_$31922_memory_ptr",
                          "typeString": "struct ExtraParamsV1 memory"
                        }
                      },
                      "id": 31957,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2511:8:31",
                      "memberName": "car_size",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31917,
                      "src": "2504:15:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    }
                  ],
                  "expression": {
                    "argumentTypes": [
                      {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    ],
                    "expression": {
                      "id": 31953,
                      "name": "buf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31934,
                      "src": "2488:3:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_CBORBuffer_$28979_memory_ptr",
                        "typeString": "struct CBOR.CBORBuffer memory"
                      }
                    },
                    "id": 31955,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "2492:11:31",
                    "memberName": "writeUInt64",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 29168,
                    "src": "2488:15:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_function_internal_pure$_t_struct$_CBORBuffer_$28979_memory_ptr_$_t_uint64_$returns$__$bound_to$_t_struct$_CBORBuffer_$28979_memory_ptr_$",
                      "typeString": "function (struct CBOR.CBORBuffer memory,uint64) pure"
                    }
                  },
                  "id": 31958,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": false,
                  "kind": "functionCall",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "2488:32:31",
                  "tryCall": false,
                  "typeDescriptions": {
                    "typeIdentifier": "t_tuple$__$",
                    "typeString": "tuple()"
                  }
                },
                "id": 31959,
                "nodeType": "ExpressionStatement",
                "src": "2488:32:31"
              },
              {
                "expression": {
                  "arguments": [
                    {
                      "expression": {
                        "id": 31963,
                        "name": "params",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31925,
                        "src": "2540:6:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ExtraParamsV1_$31922_memory_ptr",
                          "typeString": "struct ExtraParamsV1 memory"
                        }
                      },
                      "id": 31964,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2547:18:31",
                      "memberName": "skip_ipni_announce",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31919,
                      "src": "2540:25:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    }
                  ],
                  "expression": {
                    "argumentTypes": [
                      {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    ],
                    "expression": {
                      "id": 31960,
                      "name": "buf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31934,
                      "src": "2526:3:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_CBORBuffer_$28979_memory_ptr",
                        "typeString": "struct CBOR.CBORBuffer memory"
                      }
                    },
                    "id": 31962,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "2530:9:31",
                    "memberName": "writeBool",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 29281,
                    "src": "2526:13:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_function_internal_pure$_t_struct$_CBORBuffer_$28979_memory_ptr_$_t_bool_$returns$__$bound_to$_t_struct$_CBORBuffer_$28979_memory_ptr_$",
                      "typeString": "function (struct CBOR.CBORBuffer memory,bool) pure"
                    }
                  },
                  "id": 31965,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": false,
                  "kind": "functionCall",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "2526:40:31",
                  "tryCall": false,
                  "typeDescriptions": {
                    "typeIdentifier": "t_tuple$__$",
                    "typeString": "tuple()"
                  }
                },
                "id": 31966,
                "nodeType": "ExpressionStatement",
                "src": "2526:40:31"
              },
              {
                "expression": {
                  "arguments": [
                    {
                      "expression": {
                        "id": 31970,
                        "name": "params",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31925,
                        "src": "2586:6:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ExtraParamsV1_$31922_memory_ptr",
                          "typeString": "struct ExtraParamsV1 memory"
                        }
                      },
                      "id": 31971,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2593:20:31",
                      "memberName": "remove_unsealed_copy",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31921,
                      "src": "2586:27:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    }
                  ],
                  "expression": {
                    "argumentTypes": [
                      {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    ],
                    "expression": {
                      "id": 31967,
                      "name": "buf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31934,
                      "src": "2572:3:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_CBORBuffer_$28979_memory_ptr",
                        "typeString": "struct CBOR.CBORBuffer memory"
                      }
                    },
                    "id": 31969,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "2576:9:31",
                    "memberName": "writeBool",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 29281,
                    "src": "2572:13:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_function_internal_pure$_t_struct$_CBORBuffer_$28979_memory_ptr_$_t_bool_$returns$__$bound_to$_t_struct$_CBORBuffer_$28979_memory_ptr_$",
                      "typeString": "function (struct CBOR.CBORBuffer memory,bool) pure"
                    }
                  },
                  "id": 31972,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": false,
                  "kind": "functionCall",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "2572:42:31",
                  "tryCall": false,
                  "typeDescriptions": {
                    "typeIdentifier": "t_tuple$__$",
                    "typeString": "tuple()"
                  }
                },
                "id": 31973,
                "nodeType": "ExpressionStatement",
                "src": "2572:42:31"
              },
              {
                "expression": {
                  "arguments": [],
                  "expression": {
                    "argumentTypes": [],
                    "expression": {
                      "id": 31974,
                      "name": "buf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31934,
                      "src": "2627:3:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_CBORBuffer_$28979_memory_ptr",
                        "typeString": "struct CBOR.CBORBuffer memory"
                      }
                    },
                    "id": 31975,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "2631:4:31",
                    "memberName": "data",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 29067,
                    "src": "2627:8:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_function_internal_pure$_t_struct$_CBORBuffer_$28979_memory_ptr_$returns$_t_bytes_memory_ptr_$bound_to$_t_struct$_CBORBuffer_$28979_memory_ptr_$",
                      "typeString": "function (struct CBOR.CBORBuffer memory) pure returns (bytes memory)"
                    }
                  },
                  "id": 31976,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": false,
                  "kind": "functionCall",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "2627:10:31",
                  "tryCall": false,
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes memory"
                  }
                },
                "functionReturnParameters": 31929,
                "id": 31977,
                "nodeType": "Return",
                "src": "2620:17:31"
              }
            ]
          },
          "implemented": true,
          "kind": "freeFunction",
          "modifiers": [],
          "name": "serializeExtraParamsV1",
          "nameLocation": "2276:22:31",
          "parameters": {
            "id": 31926,
            "nodeType": "ParameterList",
            "parameters": [
              {
                "constant": false,
                "id": 31925,
                "mutability": "mutable",
                "name": "params",
                "nameLocation": "2325:6:31",
                "nodeType": "VariableDeclaration",
                "scope": 31979,
                "src": "2304:27:31",
                "stateVariable": false,
                "storageLocation": "memory",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_ExtraParamsV1_$31922_memory_ptr",
                  "typeString": "struct ExtraParamsV1"
                },
                "typeName": {
                  "id": 31924,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 31923,
                    "name": "ExtraParamsV1",
                    "nameLocations": [
                      "2304:13:31"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 31922,
                    "src": "2304:13:31"
                  },
                  "referencedDeclaration": 31922,
                  "src": "2304:13:31",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ExtraParamsV1_$31922_storage_ptr",
                    "typeString": "struct ExtraParamsV1"
                  }
                },
                "visibility": "internal"
              }
            ],
            "src": "2298:35:31"
          },
          "returnParameters": {
            "id": 31929,
            "nodeType": "ParameterList",
            "parameters": [
              {
                "constant": false,
                "id": 31928,
                "mutability": "mutable",
                "name": "",
                "nameLocation": "-1:-1:-1",
                "nodeType": "VariableDeclaration",
                "scope": 31979,
                "src": "2348:12:31",
                "stateVariable": false,
                "storageLocation": "memory",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_memory_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 31927,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "2348:5:31",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "src": "2347:14:31"
          },
          "scope": 32771,
          "stateMutability": "pure",
          "virtual": false,
          "visibility": "internal"
        },
        {
          "id": 32770,
          "nodeType": "ContractDefinition",
          "src": "2642:9612:31",
          "nodes": [
            {
              "id": 31981,
              "nodeType": "UsingForDirective",
              "src": "2668:24:31",
              "nodes": [],
              "global": false,
              "libraryName": {
                "id": 31980,
                "name": "AccountCBOR",
                "nameLocations": [
                  "2674:11:31"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 25040,
                "src": "2674:11:31"
              }
            },
            {
              "id": 31983,
              "nodeType": "UsingForDirective",
              "src": "2697:23:31",
              "nodes": [],
              "global": false,
              "libraryName": {
                "id": 31982,
                "name": "MarketCBOR",
                "nameLocations": [
                  "2703:10:31"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 26547,
                "src": "2703:10:31"
              }
            },
            {
              "id": 31986,
              "nodeType": "VariableDeclaration",
              "src": "2726:67:31",
              "nodes": [],
              "constant": true,
              "functionSelector": "00706790",
              "mutability": "constant",
              "name": "AUTHENTICATE_MESSAGE_METHOD_NUM",
              "nameLocation": "2749:31:31",
              "scope": 32770,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint64",
                "typeString": "uint64"
              },
              "typeName": {
                "id": 31984,
                "name": "uint64",
                "nodeType": "ElementaryTypeName",
                "src": "2726:6:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint64",
                  "typeString": "uint64"
                }
              },
              "value": {
                "hexValue": "32363433313334303732",
                "id": 31985,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "2783:10:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_2643134072_by_1",
                  "typeString": "int_const 2643134072"
                },
                "value": "2643134072"
              },
              "visibility": "public"
            },
            {
              "id": 31989,
              "nodeType": "VariableDeclaration",
              "src": "2799:68:31",
              "nodes": [],
              "constant": true,
              "functionSelector": "b34ba252",
              "mutability": "constant",
              "name": "DATACAP_RECEIVER_HOOK_METHOD_NUM",
              "nameLocation": "2822:32:31",
              "scope": 32770,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint64",
                "typeString": "uint64"
              },
              "typeName": {
                "id": 31987,
                "name": "uint64",
                "nodeType": "ElementaryTypeName",
                "src": "2799:6:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint64",
                  "typeString": "uint64"
                }
              },
              "value": {
                "hexValue": "33373236313138333731",
                "id": 31988,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "2857:10:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_3726118371_by_1",
                  "typeString": "int_const 3726118371"
                },
                "value": "3726118371"
              },
              "visibility": "public"
            },
            {
              "id": 31992,
              "nodeType": "VariableDeclaration",
              "src": "2873:65:31",
              "nodes": [],
              "constant": true,
              "functionSelector": "6067f454",
              "mutability": "constant",
              "name": "MARKET_NOTIFY_DEAL_METHOD_NUM",
              "nameLocation": "2896:29:31",
              "scope": 32770,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint64",
                "typeString": "uint64"
              },
              "typeName": {
                "id": 31990,
                "name": "uint64",
                "nodeType": "ElementaryTypeName",
                "src": "2873:6:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint64",
                  "typeString": "uint64"
                }
              },
              "value": {
                "hexValue": "34313836373431303934",
                "id": 31991,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "2928:10:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_4186741094_by_1",
                  "typeString": "int_const 4186741094"
                },
                "value": "4186741094"
              },
              "visibility": "public"
            },
            {
              "id": 31998,
              "nodeType": "VariableDeclaration",
              "src": "2944:110:31",
              "nodes": [],
              "constant": true,
              "functionSelector": "29aa3d2a",
              "mutability": "constant",
              "name": "MARKET_ACTOR_ETH_ADDRESS",
              "nameLocation": "2968:24:31",
              "scope": 32770,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 31993,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "2944:7:31",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": {
                "arguments": [
                  {
                    "hexValue": "307866663030303030303030303030303030303030303030303030303030303030303030303030303035",
                    "id": 31996,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3011:42:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "value": "0xff00000000000000000000000000000000000005"
                  }
                ],
                "expression": {
                  "argumentTypes": [
                    {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  ],
                  "id": 31995,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "nodeType": "ElementaryTypeNameExpression",
                  "src": "3003:7:31",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_address_$",
                    "typeString": "type(address)"
                  },
                  "typeName": {
                    "id": 31994,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3003:7:31",
                    "typeDescriptions": {}
                  }
                },
                "id": 31997,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "typeConversion",
                "lValueRequested": false,
                "nameLocations": [],
                "names": [],
                "nodeType": "FunctionCall",
                "src": "3003:51:31",
                "tryCall": false,
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "visibility": "public"
            },
            {
              "id": 32004,
              "nodeType": "VariableDeclaration",
              "src": "3060:112:31",
              "nodes": [],
              "constant": true,
              "functionSelector": "2522f2b7",
              "mutability": "constant",
              "name": "VERIFREG_ACTOR_ETH_ADDRESS",
              "nameLocation": "3084:26:31",
              "scope": 32770,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 31999,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "3060:7:31",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": {
                "arguments": [
                  {
                    "hexValue": "307846463030303030303030303030303030303030303030303030303030303030303030303030303036",
                    "id": 32002,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3129:42:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "value": "0xFF00000000000000000000000000000000000006"
                  }
                ],
                "expression": {
                  "argumentTypes": [
                    {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  ],
                  "id": 32001,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "nodeType": "ElementaryTypeNameExpression",
                  "src": "3121:7:31",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_address_$",
                    "typeString": "type(address)"
                  },
                  "typeName": {
                    "id": 32000,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3121:7:31",
                    "typeDescriptions": {}
                  }
                },
                "id": 32003,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "typeConversion",
                "lValueRequested": false,
                "nameLocations": [],
                "names": [],
                "nodeType": "FunctionCall",
                "src": "3121:51:31",
                "tryCall": false,
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "visibility": "public"
            },
            {
              "id": 32009,
              "nodeType": "VariableDeclaration",
              "src": "3179:52:31",
              "nodes": [],
              "constant": false,
              "functionSelector": "74112d66",
              "mutability": "mutable",
              "name": "dealProposals",
              "nameLocation": "3218:13:31",
              "scope": 32770,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_ProposalIdx_$31884_storage_$",
                "typeString": "mapping(bytes32 => struct ProposalIdx)"
              },
              "typeName": {
                "id": 32008,
                "keyType": {
                  "id": 32005,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "3187:7:31",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "nodeType": "Mapping",
                "src": "3179:31:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_ProposalIdx_$31884_storage_$",
                  "typeString": "mapping(bytes32 => struct ProposalIdx)"
                },
                "valueType": {
                  "id": 32007,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 32006,
                    "name": "ProposalIdx",
                    "nameLocations": [
                      "3198:11:31"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 31884,
                    "src": "3198:11:31"
                  },
                  "referencedDeclaration": 31884,
                  "src": "3198:11:31",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ProposalIdx_$31884_storage_ptr",
                    "typeString": "struct ProposalIdx"
                  }
                }
              },
              "visibility": "public"
            },
            {
              "id": 32014,
              "nodeType": "VariableDeclaration",
              "src": "3271:54:31",
              "nodes": [],
              "constant": false,
              "functionSelector": "dd08881c",
              "mutability": "mutable",
              "name": "pieceToProposal",
              "nameLocation": "3310:15:31",
              "scope": 32770,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes_memory_ptr_$_t_struct$_ProposalIdSet_$31879_storage_$",
                "typeString": "mapping(bytes => struct ProposalIdSet)"
              },
              "typeName": {
                "id": 32013,
                "keyType": {
                  "id": 32010,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "3279:5:31",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "nodeType": "Mapping",
                "src": "3271:31:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes_memory_ptr_$_t_struct$_ProposalIdSet_$31879_storage_$",
                  "typeString": "mapping(bytes => struct ProposalIdSet)"
                },
                "valueType": {
                  "id": 32012,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 32011,
                    "name": "ProposalIdSet",
                    "nameLocations": [
                      "3288:13:31"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 31879,
                    "src": "3288:13:31"
                  },
                  "referencedDeclaration": 31879,
                  "src": "3288:13:31",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ProposalIdSet_$31879_storage_ptr",
                    "typeString": "struct ProposalIdSet"
                  }
                }
              },
              "visibility": "public"
            },
            {
              "id": 32019,
              "nodeType": "VariableDeclaration",
              "src": "3358:51:31",
              "nodes": [],
              "constant": false,
              "functionSelector": "f82704f0",
              "mutability": "mutable",
              "name": "pieceProviders",
              "nameLocation": "3395:14:31",
              "scope": 32770,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes_memory_ptr_$_t_struct$_ProviderSet_$31889_storage_$",
                "typeString": "mapping(bytes => struct ProviderSet)"
              },
              "typeName": {
                "id": 32018,
                "keyType": {
                  "id": 32015,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "3366:5:31",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "nodeType": "Mapping",
                "src": "3358:29:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes_memory_ptr_$_t_struct$_ProviderSet_$31889_storage_$",
                  "typeString": "mapping(bytes => struct ProviderSet)"
                },
                "valueType": {
                  "id": 32017,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 32016,
                    "name": "ProviderSet",
                    "nameLocations": [
                      "3375:11:31"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 31889,
                    "src": "3375:11:31"
                  },
                  "referencedDeclaration": 31889,
                  "src": "3375:11:31",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ProviderSet_$31889_storage_ptr",
                    "typeString": "struct ProviderSet"
                  }
                }
              },
              "visibility": "public"
            },
            {
              "id": 32023,
              "nodeType": "VariableDeclaration",
              "src": "3436:42:31",
              "nodes": [],
              "constant": false,
              "functionSelector": "0a0e0c91",
              "mutability": "mutable",
              "name": "pieceDeals",
              "nameLocation": "3468:10:31",
              "scope": 32770,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes_memory_ptr_$_t_uint64_$",
                "typeString": "mapping(bytes => uint64)"
              },
              "typeName": {
                "id": 32022,
                "keyType": {
                  "id": 32020,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "3444:5:31",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "nodeType": "Mapping",
                "src": "3436:24:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes_memory_ptr_$_t_uint64_$",
                  "typeString": "mapping(bytes => uint64)"
                },
                "valueType": {
                  "id": 32021,
                  "name": "uint64",
                  "nodeType": "ElementaryTypeName",
                  "src": "3453:6:31",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  }
                }
              },
              "visibility": "public"
            },
            {
              "id": 32027,
              "nodeType": "VariableDeclaration",
              "src": "3504:26:31",
              "nodes": [],
              "constant": false,
              "functionSelector": "03988f84",
              "mutability": "mutable",
              "name": "deals",
              "nameLocation": "3525:5:31",
              "scope": 32770,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_DealRequest_$31913_storage_$dyn_storage",
                "typeString": "struct DealRequest[]"
              },
              "typeName": {
                "baseType": {
                  "id": 32025,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 32024,
                    "name": "DealRequest",
                    "nameLocations": [
                      "3504:11:31"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 31913,
                    "src": "3504:11:31"
                  },
                  "referencedDeclaration": 31913,
                  "src": "3504:11:31",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_DealRequest_$31913_storage_ptr",
                    "typeString": "struct DealRequest"
                  }
                },
                "id": 32026,
                "nodeType": "ArrayTypeName",
                "src": "3504:13:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_struct$_DealRequest_$31913_storage_$dyn_storage_ptr",
                  "typeString": "struct DealRequest[]"
                }
              },
              "visibility": "public"
            },
            {
              "id": 32031,
              "nodeType": "EventDefinition",
              "src": "3537:39:31",
              "nodes": [],
              "anonymous": false,
              "eventSelector": "10aa319ed8cad9bceb033c0c2788c4ae17469ac844e4c6e2c2e20e74ca8a7be8",
              "name": "ReceivedDataCap",
              "nameLocation": "3543:15:31",
              "parameters": {
                "id": 32030,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32029,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "received",
                    "nameLocation": "3566:8:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 32031,
                    "src": "3559:15:31",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 32028,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "3559:6:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3558:17:31"
              }
            },
            {
              "id": 32041,
              "nodeType": "EventDefinition",
              "src": "3581:134:31",
              "nodes": [],
              "anonymous": false,
              "eventSelector": "fd6419d07e4c269e58d0c63969756c2124155b4a8d6dd08b8cd46e3a9acbf625",
              "name": "DealProposalCreate",
              "nameLocation": "3587:18:31",
              "parameters": {
                "id": 32040,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32033,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "id",
                    "nameLocation": "3631:2:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 32041,
                    "src": "3615:18:31",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 32032,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "3615:7:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 32035,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "size",
                    "nameLocation": "3650:4:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 32041,
                    "src": "3643:11:31",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    },
                    "typeName": {
                      "id": 32034,
                      "name": "uint64",
                      "nodeType": "ElementaryTypeName",
                      "src": "3643:6:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 32037,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "verified",
                    "nameLocation": "3677:8:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 32041,
                    "src": "3664:21:31",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 32036,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "3664:4:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 32039,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "price",
                    "nameLocation": "3703:5:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 32041,
                    "src": "3695:13:31",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 32038,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3695:7:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3605:109:31"
              }
            },
            {
              "id": 32043,
              "nodeType": "VariableDeclaration",
              "src": "3721:20:31",
              "nodes": [],
              "constant": false,
              "functionSelector": "8da5cb5b",
              "mutability": "mutable",
              "name": "owner",
              "nameLocation": "3736:5:31",
              "scope": 32770,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 32042,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "3721:7:31",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "visibility": "public"
            },
            {
              "id": 32052,
              "nodeType": "FunctionDefinition",
              "src": "3748:49:31",
              "nodes": [],
              "body": {
                "id": 32051,
                "nodeType": "Block",
                "src": "3762:35:31",
                "nodes": [],
                "statements": [
                  {
                    "expression": {
                      "id": 32049,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 32046,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32043,
                        "src": "3772:5:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "expression": {
                          "id": 32047,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "3780:3:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 32048,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3784:6:31",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "3780:10:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "3772:18:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 32050,
                    "nodeType": "ExpressionStatement",
                    "src": "3772:18:31"
                  }
                ]
              },
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nameLocation": "-1:-1:-1",
              "parameters": {
                "id": 32044,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3759:2:31"
              },
              "returnParameters": {
                "id": 32045,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3762:0:31"
              },
              "scope": 32770,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "id": 32065,
              "nodeType": "FunctionDefinition",
              "src": "3803:142:31",
              "nodes": [],
              "body": {
                "id": 32064,
                "nodeType": "Block",
                "src": "3902:43:31",
                "nodes": [],
                "statements": [
                  {
                    "expression": {
                      "baseExpression": {
                        "id": 32060,
                        "name": "pieceProviders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32019,
                        "src": "3919:14:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes_memory_ptr_$_t_struct$_ProviderSet_$31889_storage_$",
                          "typeString": "mapping(bytes memory => struct ProviderSet storage ref)"
                        }
                      },
                      "id": 32062,
                      "indexExpression": {
                        "id": 32061,
                        "name": "cid",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32054,
                        "src": "3934:3:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3919:19:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ProviderSet_$31889_storage",
                        "typeString": "struct ProviderSet storage ref"
                      }
                    },
                    "functionReturnParameters": 32059,
                    "id": 32063,
                    "nodeType": "Return",
                    "src": "3912:26:31"
                  }
                ]
              },
              "functionSelector": "78133bb2",
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getProviderSet",
              "nameLocation": "3812:14:31",
              "parameters": {
                "id": 32055,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32054,
                    "mutability": "mutable",
                    "name": "cid",
                    "nameLocation": "3851:3:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 32065,
                    "src": "3836:18:31",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_calldata_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 32053,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "3836:5:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3826:34:31"
              },
              "returnParameters": {
                "id": 32059,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32058,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 32065,
                    "src": "3882:18:31",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ProviderSet_$31889_memory_ptr",
                      "typeString": "struct ProviderSet"
                    },
                    "typeName": {
                      "id": 32057,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 32056,
                        "name": "ProviderSet",
                        "nameLocations": [
                          "3882:11:31"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 31889,
                        "src": "3882:11:31"
                      },
                      "referencedDeclaration": 31889,
                      "src": "3882:11:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ProviderSet_$31889_storage_ptr",
                        "typeString": "struct ProviderSet"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3881:20:31"
              },
              "scope": 32770,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "id": 32078,
              "nodeType": "FunctionDefinition",
              "src": "3951:147:31",
              "nodes": [],
              "body": {
                "id": 32077,
                "nodeType": "Block",
                "src": "4054:44:31",
                "nodes": [],
                "statements": [
                  {
                    "expression": {
                      "baseExpression": {
                        "id": 32073,
                        "name": "pieceToProposal",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32014,
                        "src": "4071:15:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes_memory_ptr_$_t_struct$_ProposalIdSet_$31879_storage_$",
                          "typeString": "mapping(bytes memory => struct ProposalIdSet storage ref)"
                        }
                      },
                      "id": 32075,
                      "indexExpression": {
                        "id": 32074,
                        "name": "cid",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32067,
                        "src": "4087:3:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "4071:20:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ProposalIdSet_$31879_storage",
                        "typeString": "struct ProposalIdSet storage ref"
                      }
                    },
                    "functionReturnParameters": 32072,
                    "id": 32076,
                    "nodeType": "Return",
                    "src": "4064:27:31"
                  }
                ]
              },
              "functionSelector": "f44a8903",
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getProposalIdSet",
              "nameLocation": "3960:16:31",
              "parameters": {
                "id": 32068,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32067,
                    "mutability": "mutable",
                    "name": "cid",
                    "nameLocation": "4001:3:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 32078,
                    "src": "3986:18:31",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_calldata_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 32066,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "3986:5:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3976:34:31"
              },
              "returnParameters": {
                "id": 32072,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32071,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 32078,
                    "src": "4032:20:31",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ProposalIdSet_$31879_memory_ptr",
                      "typeString": "struct ProposalIdSet"
                    },
                    "typeName": {
                      "id": 32070,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 32069,
                        "name": "ProposalIdSet",
                        "nameLocations": [
                          "4032:13:31"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 31879,
                        "src": "4032:13:31"
                      },
                      "referencedDeclaration": 31879,
                      "src": "4032:13:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ProposalIdSet_$31879_storage_ptr",
                        "typeString": "struct ProposalIdSet"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "4031:22:31"
              },
              "scope": 32770,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "id": 32087,
              "nodeType": "FunctionDefinition",
              "src": "4104:89:31",
              "nodes": [],
              "body": {
                "id": 32086,
                "nodeType": "Block",
                "src": "4157:36:31",
                "nodes": [],
                "statements": [
                  {
                    "expression": {
                      "expression": {
                        "id": 32083,
                        "name": "deals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32027,
                        "src": "4174:5:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_DealRequest_$31913_storage_$dyn_storage",
                          "typeString": "struct DealRequest storage ref[] storage ref"
                        }
                      },
                      "id": 32084,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4180:6:31",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "4174:12:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 32082,
                    "id": 32085,
                    "nodeType": "Return",
                    "src": "4167:19:31"
                  }
                ]
              },
              "functionSelector": "297ab486",
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "dealsLength",
              "nameLocation": "4113:11:31",
              "parameters": {
                "id": 32079,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "4124:2:31"
              },
              "returnParameters": {
                "id": 32082,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32081,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 32087,
                    "src": "4148:7:31",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 32080,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4148:7:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "4147:9:31"
              },
              "scope": 32770,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "id": 32100,
              "nodeType": "FunctionDefinition",
              "src": "4199:130:31",
              "nodes": [],
              "body": {
                "id": 32099,
                "nodeType": "Block",
                "src": "4293:36:31",
                "nodes": [],
                "statements": [
                  {
                    "expression": {
                      "baseExpression": {
                        "id": 32095,
                        "name": "deals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32027,
                        "src": "4310:5:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_DealRequest_$31913_storage_$dyn_storage",
                          "typeString": "struct DealRequest storage ref[] storage ref"
                        }
                      },
                      "id": 32097,
                      "indexExpression": {
                        "id": 32096,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32089,
                        "src": "4316:5:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "4310:12:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DealRequest_$31913_storage",
                        "typeString": "struct DealRequest storage ref"
                      }
                    },
                    "functionReturnParameters": 32094,
                    "id": 32098,
                    "nodeType": "Return",
                    "src": "4303:19:31"
                  }
                ]
              },
              "functionSelector": "96925ae6",
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getDealByIndex",
              "nameLocation": "4208:14:31",
              "parameters": {
                "id": 32090,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32089,
                    "mutability": "mutable",
                    "name": "index",
                    "nameLocation": "4240:5:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 32100,
                    "src": "4232:13:31",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 32088,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4232:7:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "4222:29:31"
              },
              "returnParameters": {
                "id": 32094,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32093,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 32100,
                    "src": "4273:18:31",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_DealRequest_$31913_memory_ptr",
                      "typeString": "struct DealRequest"
                    },
                    "typeName": {
                      "id": 32092,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 32091,
                        "name": "DealRequest",
                        "nameLocations": [
                          "4273:11:31"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 31913,
                        "src": "4273:11:31"
                      },
                      "referencedDeclaration": 31913,
                      "src": "4273:11:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DealRequest_$31913_storage_ptr",
                        "typeString": "struct DealRequest"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "4272:20:31"
              },
              "scope": 32770,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "id": 32171,
              "nodeType": "FunctionDefinition",
              "src": "4335:805:31",
              "nodes": [],
              "body": {
                "id": 32170,
                "nodeType": "Block",
                "src": "4427:713:31",
                "nodes": [],
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 32112,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 32109,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "4490:3:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 32110,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4494:6:31",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "4490:10:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 32111,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32043,
                            "src": "4504:5:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "4490:19:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 32108,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "4482:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 32113,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4482:28:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 32114,
                    "nodeType": "ExpressionStatement",
                    "src": "4482:28:31"
                  },
                  {
                    "assignments": [
                      32116
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 32116,
                        "mutability": "mutable",
                        "name": "index",
                        "nameLocation": "4529:5:31",
                        "nodeType": "VariableDeclaration",
                        "scope": 32170,
                        "src": "4521:13:31",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 32115,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "4521:7:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 32119,
                    "initialValue": {
                      "expression": {
                        "id": 32117,
                        "name": "deals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32027,
                        "src": "4537:5:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_DealRequest_$31913_storage_$dyn_storage",
                          "typeString": "struct DealRequest storage ref[] storage ref"
                        }
                      },
                      "id": 32118,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4543:6:31",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "4537:12:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4521:28:31"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 32123,
                          "name": "deal",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32103,
                          "src": "4570:4:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealRequest_$31913_calldata_ptr",
                            "typeString": "struct DealRequest calldata"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_DealRequest_$31913_calldata_ptr",
                            "typeString": "struct DealRequest calldata"
                          }
                        ],
                        "expression": {
                          "id": 32120,
                          "name": "deals",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32027,
                          "src": "4559:5:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_DealRequest_$31913_storage_$dyn_storage",
                            "typeString": "struct DealRequest storage ref[] storage ref"
                          }
                        },
                        "id": 32122,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4565:4:31",
                        "memberName": "push",
                        "nodeType": "MemberAccess",
                        "src": "4559:10:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_DealRequest_$31913_storage_$dyn_storage_ptr_$_t_struct$_DealRequest_$31913_storage_$returns$__$bound_to$_t_array$_t_struct$_DealRequest_$31913_storage_$dyn_storage_ptr_$",
                          "typeString": "function (struct DealRequest storage ref[] storage pointer,struct DealRequest storage ref)"
                        }
                      },
                      "id": 32124,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4559:16:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 32125,
                    "nodeType": "ExpressionStatement",
                    "src": "4559:16:31"
                  },
                  {
                    "assignments": [
                      32127
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 32127,
                        "mutability": "mutable",
                        "name": "id",
                        "nameLocation": "4681:2:31",
                        "nodeType": "VariableDeclaration",
                        "scope": 32170,
                        "src": "4673:10:31",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "typeName": {
                          "id": 32126,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "4673:7:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 32138,
                    "initialValue": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "expression": {
                                "id": 32131,
                                "name": "block",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -4,
                                "src": "4726:5:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_block",
                                  "typeString": "block"
                                }
                              },
                              "id": 32132,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4732:9:31",
                              "memberName": "timestamp",
                              "nodeType": "MemberAccess",
                              "src": "4726:15:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 32133,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "4743:3:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 32134,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4747:6:31",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "4743:10:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 32135,
                              "name": "index",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32116,
                              "src": "4755:5:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "id": 32129,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "4709:3:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 32130,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "4713:12:31",
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "src": "4709:16:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 32136,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4709:52:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 32128,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "4686:9:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 32137,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4686:85:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4673:98:31"
                  },
                  {
                    "expression": {
                      "id": 32146,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 32139,
                          "name": "dealProposals",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32009,
                          "src": "4781:13:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_ProposalIdx_$31884_storage_$",
                            "typeString": "mapping(bytes32 => struct ProposalIdx storage ref)"
                          }
                        },
                        "id": 32141,
                        "indexExpression": {
                          "id": 32140,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32127,
                          "src": "4795:2:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "4781:17:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ProposalIdx_$31884_storage",
                          "typeString": "struct ProposalIdx storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "id": 32143,
                            "name": "index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32116,
                            "src": "4813:5:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "hexValue": "74727565",
                            "id": 32144,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4820:4:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "id": 32142,
                          "name": "ProposalIdx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31884,
                          "src": "4801:11:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ProposalIdx_$31884_storage_ptr_$",
                            "typeString": "type(struct ProposalIdx storage pointer)"
                          }
                        },
                        "id": 32145,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4801:24:31",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ProposalIdx_$31884_memory_ptr",
                          "typeString": "struct ProposalIdx memory"
                        }
                      },
                      "src": "4781:44:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ProposalIdx_$31884_storage",
                        "typeString": "struct ProposalIdx storage ref"
                      }
                    },
                    "id": 32147,
                    "nodeType": "ExpressionStatement",
                    "src": "4781:44:31"
                  },
                  {
                    "expression": {
                      "id": 32156,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 32148,
                          "name": "pieceToProposal",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32014,
                          "src": "4836:15:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes_memory_ptr_$_t_struct$_ProposalIdSet_$31879_storage_$",
                            "typeString": "mapping(bytes memory => struct ProposalIdSet storage ref)"
                          }
                        },
                        "id": 32151,
                        "indexExpression": {
                          "expression": {
                            "id": 32149,
                            "name": "deal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32103,
                            "src": "4852:4:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_DealRequest_$31913_calldata_ptr",
                              "typeString": "struct DealRequest calldata"
                            }
                          },
                          "id": 32150,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4857:9:31",
                          "memberName": "piece_cid",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31891,
                          "src": "4852:14:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_calldata_ptr",
                            "typeString": "bytes calldata"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "4836:31:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ProposalIdSet_$31879_storage",
                          "typeString": "struct ProposalIdSet storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "id": 32153,
                            "name": "id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32127,
                            "src": "4884:2:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "hexValue": "74727565",
                            "id": 32154,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4888:4:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "id": 32152,
                          "name": "ProposalIdSet",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31879,
                          "src": "4870:13:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ProposalIdSet_$31879_storage_ptr_$",
                            "typeString": "type(struct ProposalIdSet storage pointer)"
                          }
                        },
                        "id": 32155,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4870:23:31",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ProposalIdSet_$31879_memory_ptr",
                          "typeString": "struct ProposalIdSet memory"
                        }
                      },
                      "src": "4836:57:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ProposalIdSet_$31879_storage",
                        "typeString": "struct ProposalIdSet storage ref"
                      }
                    },
                    "id": 32157,
                    "nodeType": "ExpressionStatement",
                    "src": "4836:57:31"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "id": 32159,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32127,
                          "src": "4998:2:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "expression": {
                            "id": 32160,
                            "name": "deal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32103,
                            "src": "5014:4:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_DealRequest_$31913_calldata_ptr",
                              "typeString": "struct DealRequest calldata"
                            }
                          },
                          "id": 32161,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5019:10:31",
                          "memberName": "piece_size",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31893,
                          "src": "5014:15:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        {
                          "expression": {
                            "id": 32162,
                            "name": "deal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32103,
                            "src": "5043:4:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_DealRequest_$31913_calldata_ptr",
                              "typeString": "struct DealRequest calldata"
                            }
                          },
                          "id": 32163,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5048:13:31",
                          "memberName": "verified_deal",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31895,
                          "src": "5043:18:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "expression": {
                            "id": 32164,
                            "name": "deal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32103,
                            "src": "5075:4:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_DealRequest_$31913_calldata_ptr",
                              "typeString": "struct DealRequest calldata"
                            }
                          },
                          "id": 32165,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5080:23:31",
                          "memberName": "storage_price_per_epoch",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31903,
                          "src": "5075:28:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 32158,
                        "name": "DealProposalCreate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32041,
                        "src": "4966:18:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_uint64_$_t_bool_$_t_uint256_$returns$__$",
                          "typeString": "function (bytes32,uint64,bool,uint256)"
                        }
                      },
                      "id": 32166,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4966:147:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 32167,
                    "nodeType": "EmitStatement",
                    "src": "4961:152:31"
                  },
                  {
                    "expression": {
                      "id": 32168,
                      "name": "id",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32127,
                      "src": "5131:2:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "functionReturnParameters": 32107,
                    "id": 32169,
                    "nodeType": "Return",
                    "src": "5124:9:31"
                  }
                ]
              },
              "functionSelector": "dd27fe90",
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "makeDealProposal",
              "nameLocation": "4344:16:31",
              "parameters": {
                "id": 32104,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32103,
                    "mutability": "mutable",
                    "name": "deal",
                    "nameLocation": "4391:4:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 32171,
                    "src": "4370:25:31",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_DealRequest_$31913_calldata_ptr",
                      "typeString": "struct DealRequest"
                    },
                    "typeName": {
                      "id": 32102,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 32101,
                        "name": "DealRequest",
                        "nameLocations": [
                          "4370:11:31"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 31913,
                        "src": "4370:11:31"
                      },
                      "referencedDeclaration": 31913,
                      "src": "4370:11:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DealRequest_$31913_storage_ptr",
                        "typeString": "struct DealRequest"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "4360:41:31"
              },
              "returnParameters": {
                "id": 32107,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32106,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 32171,
                    "src": "4418:7:31",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 32105,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "4418:7:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "4417:9:31"
              },
              "scope": 32770,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "id": 32198,
              "nodeType": "FunctionDefinition",
              "src": "5203:253:31",
              "nodes": [],
              "body": {
                "id": 32197,
                "nodeType": "Block",
                "src": "5304:152:31",
                "nodes": [],
                "statements": [
                  {
                    "assignments": [
                      32181
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 32181,
                        "mutability": "mutable",
                        "name": "pi",
                        "nameLocation": "5333:2:31",
                        "nodeType": "VariableDeclaration",
                        "scope": 32197,
                        "src": "5314:21:31",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ProposalIdx_$31884_memory_ptr",
                          "typeString": "struct ProposalIdx"
                        },
                        "typeName": {
                          "id": 32180,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 32179,
                            "name": "ProposalIdx",
                            "nameLocations": [
                              "5314:11:31"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 31884,
                            "src": "5314:11:31"
                          },
                          "referencedDeclaration": 31884,
                          "src": "5314:11:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_ProposalIdx_$31884_storage_ptr",
                            "typeString": "struct ProposalIdx"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 32185,
                    "initialValue": {
                      "baseExpression": {
                        "id": 32182,
                        "name": "dealProposals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32009,
                        "src": "5338:13:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_ProposalIdx_$31884_storage_$",
                          "typeString": "mapping(bytes32 => struct ProposalIdx storage ref)"
                        }
                      },
                      "id": 32184,
                      "indexExpression": {
                        "id": 32183,
                        "name": "proposalId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32173,
                        "src": "5352:10:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "5338:25:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ProposalIdx_$31884_storage",
                        "typeString": "struct ProposalIdx storage ref"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "5314:49:31"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 32187,
                            "name": "pi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32181,
                            "src": "5381:2:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_ProposalIdx_$31884_memory_ptr",
                              "typeString": "struct ProposalIdx memory"
                            }
                          },
                          "id": 32188,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5384:5:31",
                          "memberName": "valid",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31883,
                          "src": "5381:8:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "70726f706f73616c4964206e6f7420617661696c61626c65",
                          "id": 32189,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5391:26:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_bc3e01c9cff6bd66ee1090a89073dd71d1bd834c8ab4a4527f481ed5e5cb5477",
                            "typeString": "literal_string \"proposalId not available\""
                          },
                          "value": "proposalId not available"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_bc3e01c9cff6bd66ee1090a89073dd71d1bd834c8ab4a4527f481ed5e5cb5477",
                            "typeString": "literal_string \"proposalId not available\""
                          }
                        ],
                        "id": 32186,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "5373:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 32190,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5373:45:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 32191,
                    "nodeType": "ExpressionStatement",
                    "src": "5373:45:31"
                  },
                  {
                    "expression": {
                      "baseExpression": {
                        "id": 32192,
                        "name": "deals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32027,
                        "src": "5436:5:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_DealRequest_$31913_storage_$dyn_storage",
                          "typeString": "struct DealRequest storage ref[] storage ref"
                        }
                      },
                      "id": 32195,
                      "indexExpression": {
                        "expression": {
                          "id": 32193,
                          "name": "pi",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32181,
                          "src": "5442:2:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_ProposalIdx_$31884_memory_ptr",
                            "typeString": "struct ProposalIdx memory"
                          }
                        },
                        "id": 32194,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5445:3:31",
                        "memberName": "idx",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 31881,
                        "src": "5442:6:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "5436:13:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DealRequest_$31913_storage",
                        "typeString": "struct DealRequest storage ref"
                      }
                    },
                    "functionReturnParameters": 32178,
                    "id": 32196,
                    "nodeType": "Return",
                    "src": "5429:20:31"
                  }
                ]
              },
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getDealRequest",
              "nameLocation": "5212:14:31",
              "parameters": {
                "id": 32174,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32173,
                    "mutability": "mutable",
                    "name": "proposalId",
                    "nameLocation": "5244:10:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 32198,
                    "src": "5236:18:31",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 32172,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5236:7:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "5226:34:31"
              },
              "returnParameters": {
                "id": 32178,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32177,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 32198,
                    "src": "5284:18:31",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_DealRequest_$31913_memory_ptr",
                      "typeString": "struct DealRequest"
                    },
                    "typeName": {
                      "id": 32176,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 32175,
                        "name": "DealRequest",
                        "nameLocations": [
                          "5284:11:31"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 31913,
                        "src": "5284:11:31"
                      },
                      "referencedDeclaration": 31913,
                      "src": "5284:11:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DealRequest_$31913_storage_ptr",
                        "typeString": "struct DealRequest"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "5283:20:31"
              },
              "scope": 32770,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "id": 32315,
              "nodeType": "FunctionDefinition",
              "src": "5506:977:31",
              "nodes": [],
              "body": {
                "id": 32314,
                "nodeType": "Block",
                "src": "5600:883:31",
                "nodes": [],
                "statements": [
                  {
                    "assignments": [
                      32207
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 32207,
                        "mutability": "mutable",
                        "name": "deal",
                        "nameLocation": "5629:4:31",
                        "nodeType": "VariableDeclaration",
                        "scope": 32314,
                        "src": "5610:23:31",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_DealRequest_$31913_memory_ptr",
                          "typeString": "struct DealRequest"
                        },
                        "typeName": {
                          "id": 32206,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 32205,
                            "name": "DealRequest",
                            "nameLocations": [
                              "5610:11:31"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 31913,
                            "src": "5610:11:31"
                          },
                          "referencedDeclaration": 31913,
                          "src": "5610:11:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealRequest_$31913_storage_ptr",
                            "typeString": "struct DealRequest"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 32211,
                    "initialValue": {
                      "arguments": [
                        {
                          "id": 32209,
                          "name": "proposalId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32200,
                          "src": "5651:10:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "id": 32208,
                        "name": "getDealRequest",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32198,
                        "src": "5636:14:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_struct$_DealRequest_$31913_memory_ptr_$",
                          "typeString": "function (bytes32) view returns (struct DealRequest memory)"
                        }
                      },
                      "id": 32210,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5636:26:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DealRequest_$31913_memory_ptr",
                        "typeString": "struct DealRequest memory"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "5610:52:31"
                  },
                  {
                    "assignments": [
                      32216
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 32216,
                        "mutability": "mutable",
                        "name": "ret",
                        "nameLocation": "5705:3:31",
                        "nodeType": "VariableDeclaration",
                        "scope": 32314,
                        "src": "5673:35:31",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                          "typeString": "struct MarketTypes.DealProposal"
                        },
                        "typeName": {
                          "id": 32215,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 32214,
                            "name": "MarketTypes.DealProposal",
                            "nameLocations": [
                              "5673:11:31",
                              "5685:12:31"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 30000,
                            "src": "5673:24:31"
                          },
                          "referencedDeclaration": 30000,
                          "src": "5673:24:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealProposal_$30000_storage_ptr",
                            "typeString": "struct MarketTypes.DealProposal"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 32217,
                    "nodeType": "VariableDeclarationStatement",
                    "src": "5673:35:31"
                  },
                  {
                    "expression": {
                      "id": 32226,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "expression": {
                          "id": 32218,
                          "name": "ret",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32216,
                          "src": "5718:3:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                            "typeString": "struct MarketTypes.DealProposal memory"
                          }
                        },
                        "id": 32220,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberLocation": "5722:9:31",
                        "memberName": "piece_cid",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 29974,
                        "src": "5718:13:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Cid_$29872_memory_ptr",
                          "typeString": "struct CommonTypes.Cid memory"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "expression": {
                              "id": 32223,
                              "name": "deal",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32207,
                              "src": "5750:4:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_DealRequest_$31913_memory_ptr",
                                "typeString": "struct DealRequest memory"
                              }
                            },
                            "id": 32224,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5755:9:31",
                            "memberName": "piece_cid",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 31891,
                            "src": "5750:14:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "expression": {
                            "id": 32221,
                            "name": "CommonTypes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29875,
                            "src": "5734:11:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_CommonTypes_$29875_$",
                              "typeString": "type(library CommonTypes)"
                            }
                          },
                          "id": 32222,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5746:3:31",
                          "memberName": "Cid",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 29872,
                          "src": "5734:15:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Cid_$29872_storage_ptr_$",
                            "typeString": "type(struct CommonTypes.Cid storage pointer)"
                          }
                        },
                        "id": 32225,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5734:31:31",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Cid_$29872_memory_ptr",
                          "typeString": "struct CommonTypes.Cid memory"
                        }
                      },
                      "src": "5718:47:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Cid_$29872_memory_ptr",
                        "typeString": "struct CommonTypes.Cid memory"
                      }
                    },
                    "id": 32227,
                    "nodeType": "ExpressionStatement",
                    "src": "5718:47:31"
                  },
                  {
                    "expression": {
                      "id": 32233,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "expression": {
                          "id": 32228,
                          "name": "ret",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32216,
                          "src": "5775:3:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                            "typeString": "struct MarketTypes.DealProposal memory"
                          }
                        },
                        "id": 32230,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberLocation": "5779:10:31",
                        "memberName": "piece_size",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 29976,
                        "src": "5775:14:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "expression": {
                          "id": 32231,
                          "name": "deal",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32207,
                          "src": "5792:4:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealRequest_$31913_memory_ptr",
                            "typeString": "struct DealRequest memory"
                          }
                        },
                        "id": 32232,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5797:10:31",
                        "memberName": "piece_size",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 31893,
                        "src": "5792:15:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "src": "5775:32:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "id": 32234,
                    "nodeType": "ExpressionStatement",
                    "src": "5775:32:31"
                  },
                  {
                    "expression": {
                      "id": 32240,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "expression": {
                          "id": 32235,
                          "name": "ret",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32216,
                          "src": "5817:3:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                            "typeString": "struct MarketTypes.DealProposal memory"
                          }
                        },
                        "id": 32237,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberLocation": "5821:13:31",
                        "memberName": "verified_deal",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 29978,
                        "src": "5817:17:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "expression": {
                          "id": 32238,
                          "name": "deal",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32207,
                          "src": "5837:4:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealRequest_$31913_memory_ptr",
                            "typeString": "struct DealRequest memory"
                          }
                        },
                        "id": 32239,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5842:13:31",
                        "memberName": "verified_deal",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 31895,
                        "src": "5837:18:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "5817:38:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 32241,
                    "nodeType": "ExpressionStatement",
                    "src": "5817:38:31"
                  },
                  {
                    "expression": {
                      "id": 32251,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "expression": {
                          "id": 32242,
                          "name": "ret",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32216,
                          "src": "5865:3:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                            "typeString": "struct MarketTypes.DealProposal memory"
                          }
                        },
                        "id": 32244,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberLocation": "5869:6:31",
                        "memberName": "client",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 29981,
                        "src": "5865:10:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FilAddress_$29869_memory_ptr",
                          "typeString": "struct CommonTypes.FilAddress memory"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 32248,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "5906:4:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_DealClient_$32770",
                                  "typeString": "contract DealClient"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_DealClient_$32770",
                                  "typeString": "contract DealClient"
                                }
                              ],
                              "id": 32247,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "5898:7:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 32246,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "5898:7:31",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 32249,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5898:13:31",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 32245,
                          "name": "getDelegatedAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32333,
                          "src": "5878:19:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_address_$returns$_t_struct$_FilAddress_$29869_memory_ptr_$",
                            "typeString": "function (address) pure returns (struct CommonTypes.FilAddress memory)"
                          }
                        },
                        "id": 32250,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5878:34:31",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FilAddress_$29869_memory_ptr",
                          "typeString": "struct CommonTypes.FilAddress memory"
                        }
                      },
                      "src": "5865:47:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_FilAddress_$29869_memory_ptr",
                        "typeString": "struct CommonTypes.FilAddress memory"
                      }
                    },
                    "id": 32252,
                    "nodeType": "ExpressionStatement",
                    "src": "5865:47:31"
                  },
                  {
                    "expression": {
                      "id": 32260,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "expression": {
                          "id": 32253,
                          "name": "ret",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32216,
                          "src": "6026:3:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                            "typeString": "struct MarketTypes.DealProposal memory"
                          }
                        },
                        "id": 32255,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberLocation": "6030:8:31",
                        "memberName": "provider",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 29984,
                        "src": "6026:12:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FilAddress_$29869_memory_ptr",
                          "typeString": "struct CommonTypes.FilAddress memory"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 32258,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6066:1:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "expression": {
                            "id": 32256,
                            "name": "FilAddresses",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31740,
                            "src": "6041:12:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_FilAddresses_$31740_$",
                              "typeString": "type(library FilAddresses)"
                            }
                          },
                          "id": 32257,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6054:11:31",
                          "memberName": "fromActorID",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31739,
                          "src": "6041:24:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint64_$returns$_t_struct$_FilAddress_$29869_memory_ptr_$",
                            "typeString": "function (uint64) pure returns (struct CommonTypes.FilAddress memory)"
                          }
                        },
                        "id": 32259,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6041:27:31",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FilAddress_$29869_memory_ptr",
                          "typeString": "struct CommonTypes.FilAddress memory"
                        }
                      },
                      "src": "6026:42:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_FilAddress_$29869_memory_ptr",
                        "typeString": "struct CommonTypes.FilAddress memory"
                      }
                    },
                    "id": 32261,
                    "nodeType": "ExpressionStatement",
                    "src": "6026:42:31"
                  },
                  {
                    "expression": {
                      "id": 32267,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "expression": {
                          "id": 32262,
                          "name": "ret",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32216,
                          "src": "6078:3:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                            "typeString": "struct MarketTypes.DealProposal memory"
                          }
                        },
                        "id": 32264,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberLocation": "6082:5:31",
                        "memberName": "label",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 29986,
                        "src": "6078:9:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "expression": {
                          "id": 32265,
                          "name": "deal",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32207,
                          "src": "6090:4:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealRequest_$31913_memory_ptr",
                            "typeString": "struct DealRequest memory"
                          }
                        },
                        "id": 32266,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6095:5:31",
                        "memberName": "label",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 31897,
                        "src": "6090:10:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "src": "6078:22:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "id": 32268,
                    "nodeType": "ExpressionStatement",
                    "src": "6078:22:31"
                  },
                  {
                    "expression": {
                      "id": 32274,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "expression": {
                          "id": 32269,
                          "name": "ret",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32216,
                          "src": "6110:3:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                            "typeString": "struct MarketTypes.DealProposal memory"
                          }
                        },
                        "id": 32271,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberLocation": "6114:11:31",
                        "memberName": "start_epoch",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 29988,
                        "src": "6110:15:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int64",
                          "typeString": "int64"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "expression": {
                          "id": 32272,
                          "name": "deal",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32207,
                          "src": "6128:4:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealRequest_$31913_memory_ptr",
                            "typeString": "struct DealRequest memory"
                          }
                        },
                        "id": 32273,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6133:11:31",
                        "memberName": "start_epoch",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 31899,
                        "src": "6128:16:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int64",
                          "typeString": "int64"
                        }
                      },
                      "src": "6110:34:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int64",
                        "typeString": "int64"
                      }
                    },
                    "id": 32275,
                    "nodeType": "ExpressionStatement",
                    "src": "6110:34:31"
                  },
                  {
                    "expression": {
                      "id": 32281,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "expression": {
                          "id": 32276,
                          "name": "ret",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32216,
                          "src": "6154:3:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                            "typeString": "struct MarketTypes.DealProposal memory"
                          }
                        },
                        "id": 32278,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberLocation": "6158:9:31",
                        "memberName": "end_epoch",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 29990,
                        "src": "6154:13:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int64",
                          "typeString": "int64"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "expression": {
                          "id": 32279,
                          "name": "deal",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32207,
                          "src": "6170:4:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealRequest_$31913_memory_ptr",
                            "typeString": "struct DealRequest memory"
                          }
                        },
                        "id": 32280,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6175:9:31",
                        "memberName": "end_epoch",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 31901,
                        "src": "6170:14:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int64",
                          "typeString": "int64"
                        }
                      },
                      "src": "6154:30:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int64",
                        "typeString": "int64"
                      }
                    },
                    "id": 32282,
                    "nodeType": "ExpressionStatement",
                    "src": "6154:30:31"
                  },
                  {
                    "expression": {
                      "id": 32290,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "expression": {
                          "id": 32283,
                          "name": "ret",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32216,
                          "src": "6194:3:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                            "typeString": "struct MarketTypes.DealProposal memory"
                          }
                        },
                        "id": 32285,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberLocation": "6198:23:31",
                        "memberName": "storage_price_per_epoch",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 29993,
                        "src": "6194:27:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                          "typeString": "struct CommonTypes.BigInt memory"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "expression": {
                              "id": 32287,
                              "name": "deal",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32207,
                              "src": "6250:4:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_DealRequest_$31913_memory_ptr",
                                "typeString": "struct DealRequest memory"
                              }
                            },
                            "id": 32288,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6255:23:31",
                            "memberName": "storage_price_per_epoch",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 31903,
                            "src": "6250:28:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 32286,
                          "name": "uintToBigInt",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32584,
                          "src": "6224:12:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_struct$_BigInt_$29866_memory_ptr_$",
                            "typeString": "function (uint256) view returns (struct CommonTypes.BigInt memory)"
                          }
                        },
                        "id": 32289,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6224:64:31",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                          "typeString": "struct CommonTypes.BigInt memory"
                        }
                      },
                      "src": "6194:94:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                        "typeString": "struct CommonTypes.BigInt memory"
                      }
                    },
                    "id": 32291,
                    "nodeType": "ExpressionStatement",
                    "src": "6194:94:31"
                  },
                  {
                    "expression": {
                      "id": 32299,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "expression": {
                          "id": 32292,
                          "name": "ret",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32216,
                          "src": "6298:3:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                            "typeString": "struct MarketTypes.DealProposal memory"
                          }
                        },
                        "id": 32294,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberLocation": "6302:19:31",
                        "memberName": "provider_collateral",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 29996,
                        "src": "6298:23:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                          "typeString": "struct CommonTypes.BigInt memory"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "expression": {
                              "id": 32296,
                              "name": "deal",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32207,
                              "src": "6337:4:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_DealRequest_$31913_memory_ptr",
                                "typeString": "struct DealRequest memory"
                              }
                            },
                            "id": 32297,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6342:19:31",
                            "memberName": "provider_collateral",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 31905,
                            "src": "6337:24:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 32295,
                          "name": "uintToBigInt",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32584,
                          "src": "6324:12:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_struct$_BigInt_$29866_memory_ptr_$",
                            "typeString": "function (uint256) view returns (struct CommonTypes.BigInt memory)"
                          }
                        },
                        "id": 32298,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6324:38:31",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                          "typeString": "struct CommonTypes.BigInt memory"
                        }
                      },
                      "src": "6298:64:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                        "typeString": "struct CommonTypes.BigInt memory"
                      }
                    },
                    "id": 32300,
                    "nodeType": "ExpressionStatement",
                    "src": "6298:64:31"
                  },
                  {
                    "expression": {
                      "id": 32308,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "expression": {
                          "id": 32301,
                          "name": "ret",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32216,
                          "src": "6372:3:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                            "typeString": "struct MarketTypes.DealProposal memory"
                          }
                        },
                        "id": 32303,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberLocation": "6376:17:31",
                        "memberName": "client_collateral",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 29999,
                        "src": "6372:21:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                          "typeString": "struct CommonTypes.BigInt memory"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "expression": {
                              "id": 32305,
                              "name": "deal",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32207,
                              "src": "6409:4:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_DealRequest_$31913_memory_ptr",
                                "typeString": "struct DealRequest memory"
                              }
                            },
                            "id": 32306,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6414:17:31",
                            "memberName": "client_collateral",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 31907,
                            "src": "6409:22:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 32304,
                          "name": "uintToBigInt",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32584,
                          "src": "6396:12:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_struct$_BigInt_$29866_memory_ptr_$",
                            "typeString": "function (uint256) view returns (struct CommonTypes.BigInt memory)"
                          }
                        },
                        "id": 32307,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6396:36:31",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                          "typeString": "struct CommonTypes.BigInt memory"
                        }
                      },
                      "src": "6372:60:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                        "typeString": "struct CommonTypes.BigInt memory"
                      }
                    },
                    "id": 32309,
                    "nodeType": "ExpressionStatement",
                    "src": "6372:60:31"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 32311,
                          "name": "ret",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32216,
                          "src": "6472:3:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                            "typeString": "struct MarketTypes.DealProposal memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                            "typeString": "struct MarketTypes.DealProposal memory"
                          }
                        ],
                        "id": 32310,
                        "name": "serializeDealProposal",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32980,
                        "src": "6450:21:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_struct$_DealProposal_$30000_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                          "typeString": "function (struct MarketTypes.DealProposal memory) pure returns (bytes memory)"
                        }
                      },
                      "id": 32312,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6450:26:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes memory"
                      }
                    },
                    "functionReturnParameters": 32204,
                    "id": 32313,
                    "nodeType": "Return",
                    "src": "6443:33:31"
                  }
                ]
              },
              "functionSelector": "f4b2e4d8",
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getDealProposal",
              "nameLocation": "5515:15:31",
              "parameters": {
                "id": 32201,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32200,
                    "mutability": "mutable",
                    "name": "proposalId",
                    "nameLocation": "5548:10:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 32315,
                    "src": "5540:18:31",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 32199,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5540:7:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "5530:34:31"
              },
              "returnParameters": {
                "id": 32204,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32203,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 32315,
                    "src": "5586:12:31",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 32202,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "5586:5:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "5585:14:31"
              },
              "scope": 32770,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "id": 32333,
              "nodeType": "FunctionDefinition",
              "src": "6562:192:31",
              "nodes": [],
              "body": {
                "id": 32332,
                "nodeType": "Block",
                "src": "6673:81:31",
                "nodes": [],
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "hexValue": "040a",
                              "id": 32327,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "hexString",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6730:9:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_6ee660aa2adc1bd05230ceb696525081ef5e848b2214e55088b7764bb3f767e8",
                                "typeString": "literal_string hex\"040a\""
                              },
                              "value": "\u0004\n"
                            },
                            {
                              "id": 32328,
                              "name": "addr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32317,
                              "src": "6741:4:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_6ee660aa2adc1bd05230ceb696525081ef5e848b2214e55088b7764bb3f767e8",
                                "typeString": "literal_string hex\"040a\""
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "id": 32325,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "6713:3:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 32326,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "6717:12:31",
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "src": "6713:16:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 32329,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6713:33:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "expression": {
                          "id": 32323,
                          "name": "CommonTypes",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 29875,
                          "src": "6690:11:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_CommonTypes_$29875_$",
                            "typeString": "type(library CommonTypes)"
                          }
                        },
                        "id": 32324,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6702:10:31",
                        "memberName": "FilAddress",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 29869,
                        "src": "6690:22:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_FilAddress_$29869_storage_ptr_$",
                          "typeString": "type(struct CommonTypes.FilAddress storage pointer)"
                        }
                      },
                      "id": 32330,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6690:57:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_FilAddress_$29869_memory_ptr",
                        "typeString": "struct CommonTypes.FilAddress memory"
                      }
                    },
                    "functionReturnParameters": 32322,
                    "id": 32331,
                    "nodeType": "Return",
                    "src": "6683:64:31"
                  }
                ]
              },
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getDelegatedAddress",
              "nameLocation": "6571:19:31",
              "parameters": {
                "id": 32318,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32317,
                    "mutability": "mutable",
                    "name": "addr",
                    "nameLocation": "6608:4:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 32333,
                    "src": "6600:12:31",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 32316,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "6600:7:31",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "6590:28:31"
              },
              "returnParameters": {
                "id": 32322,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32321,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 32333,
                    "src": "6642:29:31",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_FilAddress_$29869_memory_ptr",
                      "typeString": "struct CommonTypes.FilAddress"
                    },
                    "typeName": {
                      "id": 32320,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 32319,
                        "name": "CommonTypes.FilAddress",
                        "nameLocations": [
                          "6642:11:31",
                          "6654:10:31"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 29869,
                        "src": "6642:22:31"
                      },
                      "referencedDeclaration": 29869,
                      "src": "6642:22:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_FilAddress_$29869_storage_ptr",
                        "typeString": "struct CommonTypes.FilAddress"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "6641:31:31"
              },
              "scope": 32770,
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "id": 32353,
              "nodeType": "FunctionDefinition",
              "src": "6760:233:31",
              "nodes": [],
              "body": {
                "id": 32352,
                "nodeType": "Block",
                "src": "6866:127:31",
                "nodes": [],
                "statements": [
                  {
                    "assignments": [
                      32342
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 32342,
                        "mutability": "mutable",
                        "name": "deal",
                        "nameLocation": "6895:4:31",
                        "nodeType": "VariableDeclaration",
                        "scope": 32352,
                        "src": "6876:23:31",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_DealRequest_$31913_memory_ptr",
                          "typeString": "struct DealRequest"
                        },
                        "typeName": {
                          "id": 32341,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 32340,
                            "name": "DealRequest",
                            "nameLocations": [
                              "6876:11:31"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 31913,
                            "src": "6876:11:31"
                          },
                          "referencedDeclaration": 31913,
                          "src": "6876:11:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealRequest_$31913_storage_ptr",
                            "typeString": "struct DealRequest"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 32346,
                    "initialValue": {
                      "arguments": [
                        {
                          "id": 32344,
                          "name": "proposalId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32335,
                          "src": "6917:10:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "id": 32343,
                        "name": "getDealRequest",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32198,
                        "src": "6902:14:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_struct$_DealRequest_$31913_memory_ptr_$",
                          "typeString": "function (bytes32) view returns (struct DealRequest memory)"
                        }
                      },
                      "id": 32345,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6902:26:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DealRequest_$31913_memory_ptr",
                        "typeString": "struct DealRequest memory"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "6876:52:31"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 32348,
                            "name": "deal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32342,
                            "src": "6968:4:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_DealRequest_$31913_memory_ptr",
                              "typeString": "struct DealRequest memory"
                            }
                          },
                          "id": 32349,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6973:12:31",
                          "memberName": "extra_params",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31912,
                          "src": "6968:17:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_ExtraParamsV1_$31922_memory_ptr",
                            "typeString": "struct ExtraParamsV1 memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_ExtraParamsV1_$31922_memory_ptr",
                            "typeString": "struct ExtraParamsV1 memory"
                          }
                        ],
                        "id": 32347,
                        "name": "serializeExtraParamsV1",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31979,
                        "src": "6945:22:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_struct$_ExtraParamsV1_$31922_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                          "typeString": "function (struct ExtraParamsV1 memory) pure returns (bytes memory)"
                        }
                      },
                      "id": 32350,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6945:41:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes memory"
                      }
                    },
                    "functionReturnParameters": 32339,
                    "id": 32351,
                    "nodeType": "Return",
                    "src": "6938:48:31"
                  }
                ]
              },
              "functionSelector": "4634aed5",
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getExtraParams",
              "nameLocation": "6769:14:31",
              "parameters": {
                "id": 32336,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32335,
                    "mutability": "mutable",
                    "name": "proposalId",
                    "nameLocation": "6801:10:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 32353,
                    "src": "6793:18:31",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 32334,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "6793:7:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "6783:34:31"
              },
              "returnParameters": {
                "id": 32339,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32338,
                    "mutability": "mutable",
                    "name": "extra_params",
                    "nameLocation": "6852:12:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 32353,
                    "src": "6839:25:31",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 32337,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "6839:5:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "6838:27:31"
              },
              "scope": 32770,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "id": 32450,
              "nodeType": "FunctionDefinition",
              "src": "6999:1160:31",
              "nodes": [],
              "body": {
                "id": 32449,
                "nodeType": "Block",
                "src": "7063:1096:31",
                "nodes": [],
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 32362,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 32359,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "7094:3:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 32360,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "7098:6:31",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "7094:10:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 32361,
                            "name": "MARKET_ACTOR_ETH_ADDRESS",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31998,
                            "src": "7108:24:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "7094:38:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "6d73672e73656e646572206e6565647320746f206265206d61726b6574206163746f7220663035",
                          "id": 32363,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7146:41:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_682b1e94e282b7dcb8c5f97429929793eaa0abf4f41d2521a040a1e09350b58f",
                            "typeString": "literal_string \"msg.sender needs to be market actor f05\""
                          },
                          "value": "msg.sender needs to be market actor f05"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_682b1e94e282b7dcb8c5f97429929793eaa0abf4f41d2521a040a1e09350b58f",
                            "typeString": "literal_string \"msg.sender needs to be market actor f05\""
                          }
                        ],
                        "id": 32358,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "7073:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 32364,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7073:124:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 32365,
                    "nodeType": "ExpressionStatement",
                    "src": "7073:124:31"
                  },
                  {
                    "assignments": [
                      32370
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 32370,
                        "mutability": "mutable",
                        "name": "amp",
                        "nameLocation": "7254:3:31",
                        "nodeType": "VariableDeclaration",
                        "scope": 32449,
                        "src": "7208:49:31",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_AuthenticateMessageParams_$29836_memory_ptr",
                          "typeString": "struct AccountTypes.AuthenticateMessageParams"
                        },
                        "typeName": {
                          "id": 32369,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 32368,
                            "name": "AccountTypes.AuthenticateMessageParams",
                            "nameLocations": [
                              "7208:12:31",
                              "7221:25:31"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 29836,
                            "src": "7208:38:31"
                          },
                          "referencedDeclaration": 29836,
                          "src": "7208:38:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AuthenticateMessageParams_$29836_storage_ptr",
                            "typeString": "struct AccountTypes.AuthenticateMessageParams"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 32374,
                    "initialValue": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 32371,
                          "name": "params",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32355,
                          "src": "7260:6:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 32372,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7280:36:31",
                        "memberName": "deserializeAuthenticateMessageParams",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 25039,
                        "src": "7260:56:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_struct$_AuthenticateMessageParams_$29836_memory_ptr_$bound_to$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory) pure returns (struct AccountTypes.AuthenticateMessageParams memory)"
                        }
                      },
                      "id": 32373,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7260:58:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_AuthenticateMessageParams_$29836_memory_ptr",
                        "typeString": "struct AccountTypes.AuthenticateMessageParams memory"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "7208:110:31"
                  },
                  {
                    "assignments": [
                      32379
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 32379,
                        "mutability": "mutable",
                        "name": "proposal",
                        "nameLocation": "7360:8:31",
                        "nodeType": "VariableDeclaration",
                        "scope": 32449,
                        "src": "7328:40:31",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                          "typeString": "struct MarketTypes.DealProposal"
                        },
                        "typeName": {
                          "id": 32378,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 32377,
                            "name": "MarketTypes.DealProposal",
                            "nameLocations": [
                              "7328:11:31",
                              "7340:12:31"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 30000,
                            "src": "7328:24:31"
                          },
                          "referencedDeclaration": 30000,
                          "src": "7328:24:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealProposal_$30000_storage_ptr",
                            "typeString": "struct MarketTypes.DealProposal"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 32384,
                    "initialValue": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 32381,
                            "name": "amp",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32370,
                            "src": "7408:3:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_AuthenticateMessageParams_$29836_memory_ptr",
                              "typeString": "struct AccountTypes.AuthenticateMessageParams memory"
                            }
                          },
                          "id": 32382,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7412:7:31",
                          "memberName": "message",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 29835,
                          "src": "7408:11:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 32380,
                        "name": "deserializeDealProposal",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33213,
                        "src": "7371:23:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_struct$_DealProposal_$30000_memory_ptr_$",
                          "typeString": "function (bytes memory) pure returns (struct MarketTypes.DealProposal memory)"
                        }
                      },
                      "id": 32383,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7371:58:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                        "typeString": "struct MarketTypes.DealProposal memory"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "7328:101:31"
                  },
                  {
                    "assignments": [
                      32386
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 32386,
                        "mutability": "mutable",
                        "name": "pieceCid",
                        "nameLocation": "7453:8:31",
                        "nodeType": "VariableDeclaration",
                        "scope": 32449,
                        "src": "7440:21:31",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes"
                        },
                        "typeName": {
                          "id": 32385,
                          "name": "bytes",
                          "nodeType": "ElementaryTypeName",
                          "src": "7440:5:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_storage_ptr",
                            "typeString": "bytes"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 32390,
                    "initialValue": {
                      "expression": {
                        "expression": {
                          "id": 32387,
                          "name": "proposal",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32379,
                          "src": "7464:8:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                            "typeString": "struct MarketTypes.DealProposal memory"
                          }
                        },
                        "id": 32388,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7473:9:31",
                        "memberName": "piece_cid",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 29974,
                        "src": "7464:18:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Cid_$29872_memory_ptr",
                          "typeString": "struct CommonTypes.Cid memory"
                        }
                      },
                      "id": 32389,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7483:4:31",
                      "memberName": "data",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 29871,
                      "src": "7464:23:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes memory"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "7440:47:31"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "expression": {
                            "baseExpression": {
                              "id": 32392,
                              "name": "pieceToProposal",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32014,
                              "src": "7505:15:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes_memory_ptr_$_t_struct$_ProposalIdSet_$31879_storage_$",
                                "typeString": "mapping(bytes memory => struct ProposalIdSet storage ref)"
                              }
                            },
                            "id": 32394,
                            "indexExpression": {
                              "id": 32393,
                              "name": "pieceCid",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32386,
                              "src": "7521:8:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "7505:25:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_ProposalIdSet_$31879_storage",
                              "typeString": "struct ProposalIdSet storage ref"
                            }
                          },
                          "id": 32395,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7531:5:31",
                          "memberName": "valid",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31878,
                          "src": "7505:31:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "706965636520636964206d757374206265206164646564206265666f726520617574686f72697a696e67",
                          "id": 32396,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7538:44:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_2384b38794e08a47d7aadfbf72726d7885fecfbad69cb0f04bf2081a6f2b6e40",
                            "typeString": "literal_string \"piece cid must be added before authorizing\""
                          },
                          "value": "piece cid must be added before authorizing"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_2384b38794e08a47d7aadfbf72726d7885fecfbad69cb0f04bf2081a6f2b6e40",
                            "typeString": "literal_string \"piece cid must be added before authorizing\""
                          }
                        ],
                        "id": 32391,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "7497:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 32397,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7497:86:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 32398,
                    "nodeType": "ExpressionStatement",
                    "src": "7497:86:31"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 32404,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "7601:31:31",
                          "subExpression": {
                            "expression": {
                              "baseExpression": {
                                "id": 32400,
                                "name": "pieceProviders",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 32019,
                                "src": "7602:14:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes_memory_ptr_$_t_struct$_ProviderSet_$31889_storage_$",
                                  "typeString": "mapping(bytes memory => struct ProviderSet storage ref)"
                                }
                              },
                              "id": 32402,
                              "indexExpression": {
                                "id": 32401,
                                "name": "pieceCid",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 32386,
                                "src": "7617:8:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "7602:24:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_ProviderSet_$31889_storage",
                                "typeString": "struct ProviderSet storage ref"
                              }
                            },
                            "id": 32403,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "7627:5:31",
                            "memberName": "valid",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 31888,
                            "src": "7602:30:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "6465616c206661696c656420706f6c69637920636865636b3a2070726f766964657220616c726561647920636c61696d6564207468697320636964",
                          "id": 32405,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7634:61:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_6385db11a2e2401e7360708f4679494827e8f6b8fac693ae7573f9b07ef12e80",
                            "typeString": "literal_string \"deal failed policy check: provider already claimed this cid\""
                          },
                          "value": "deal failed policy check: provider already claimed this cid"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_6385db11a2e2401e7360708f4679494827e8f6b8fac693ae7573f9b07ef12e80",
                            "typeString": "literal_string \"deal failed policy check: provider already claimed this cid\""
                          }
                        ],
                        "id": 32399,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "7593:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 32406,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7593:103:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 32407,
                    "nodeType": "ExpressionStatement",
                    "src": "7593:103:31"
                  },
                  {
                    "assignments": [
                      32410
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 32410,
                        "mutability": "mutable",
                        "name": "req",
                        "nameLocation": "7726:3:31",
                        "nodeType": "VariableDeclaration",
                        "scope": 32449,
                        "src": "7707:22:31",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_DealRequest_$31913_memory_ptr",
                          "typeString": "struct DealRequest"
                        },
                        "typeName": {
                          "id": 32409,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 32408,
                            "name": "DealRequest",
                            "nameLocations": [
                              "7707:11:31"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 31913,
                            "src": "7707:11:31"
                          },
                          "referencedDeclaration": 31913,
                          "src": "7707:11:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealRequest_$31913_storage_ptr",
                            "typeString": "struct DealRequest"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 32417,
                    "initialValue": {
                      "arguments": [
                        {
                          "expression": {
                            "baseExpression": {
                              "id": 32412,
                              "name": "pieceToProposal",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32014,
                              "src": "7747:15:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes_memory_ptr_$_t_struct$_ProposalIdSet_$31879_storage_$",
                                "typeString": "mapping(bytes memory => struct ProposalIdSet storage ref)"
                              }
                            },
                            "id": 32414,
                            "indexExpression": {
                              "id": 32413,
                              "name": "pieceCid",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32386,
                              "src": "7763:8:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "7747:25:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_ProposalIdSet_$31879_storage",
                              "typeString": "struct ProposalIdSet storage ref"
                            }
                          },
                          "id": 32415,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7773:10:31",
                          "memberName": "proposalId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31876,
                          "src": "7747:36:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "id": 32411,
                        "name": "getDealRequest",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32198,
                        "src": "7732:14:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_struct$_DealRequest_$31913_memory_ptr_$",
                          "typeString": "function (bytes32) view returns (struct DealRequest memory)"
                        }
                      },
                      "id": 32416,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7732:52:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DealRequest_$31913_memory_ptr",
                        "typeString": "struct DealRequest memory"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "7707:77:31"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 32423,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 32419,
                              "name": "proposal",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32379,
                              "src": "7802:8:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                                "typeString": "struct MarketTypes.DealProposal memory"
                              }
                            },
                            "id": 32420,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "7811:13:31",
                            "memberName": "verified_deal",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 29978,
                            "src": "7802:22:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "expression": {
                              "id": 32421,
                              "name": "req",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32410,
                              "src": "7828:3:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_DealRequest_$31913_memory_ptr",
                                "typeString": "struct DealRequest memory"
                              }
                            },
                            "id": 32422,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "7832:13:31",
                            "memberName": "verified_deal",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 31895,
                            "src": "7828:17:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "7802:43:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "76657269666965645f6465616c20706172616d206d69736d61746368",
                          "id": 32424,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7847:30:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_6389e38a1e779ba2125aab3400bd4f5bc871c161b00e1c7c1b0bedadf3754ed8",
                            "typeString": "literal_string \"verified_deal param mismatch\""
                          },
                          "value": "verified_deal param mismatch"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_6389e38a1e779ba2125aab3400bd4f5bc871c161b00e1c7c1b0bedadf3754ed8",
                            "typeString": "literal_string \"verified_deal param mismatch\""
                          }
                        ],
                        "id": 32418,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "7794:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 32425,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7794:84:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 32426,
                    "nodeType": "ExpressionStatement",
                    "src": "7794:84:31"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 32434,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "expression": {
                                  "id": 32429,
                                  "name": "proposal",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 32379,
                                  "src": "7909:8:31",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                                    "typeString": "struct MarketTypes.DealProposal memory"
                                  }
                                },
                                "id": 32430,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "7918:23:31",
                                "memberName": "storage_price_per_epoch",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 29993,
                                "src": "7909:32:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                                  "typeString": "struct CommonTypes.BigInt memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                                  "typeString": "struct CommonTypes.BigInt memory"
                                }
                              ],
                              "id": 32428,
                              "name": "bigIntToUint",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32619,
                              "src": "7896:12:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_struct$_BigInt_$29866_memory_ptr_$returns$_t_uint256_$",
                                "typeString": "function (struct CommonTypes.BigInt memory) view returns (uint256)"
                              }
                            },
                            "id": 32431,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7896:46:31",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "expression": {
                              "id": 32432,
                              "name": "req",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32410,
                              "src": "7946:3:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_DealRequest_$31913_memory_ptr",
                                "typeString": "struct DealRequest memory"
                              }
                            },
                            "id": 32433,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "7950:23:31",
                            "memberName": "storage_price_per_epoch",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 31903,
                            "src": "7946:27:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "7896:77:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "73746f726167652070726963652067726561746572207468616e207265717565737420616d6f756e74",
                          "id": 32435,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7975:43:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_68b3ed28175a375840f0326a973004d9845cbb36056bad056f81d6b15b57bea6",
                            "typeString": "literal_string \"storage price greater than request amount\""
                          },
                          "value": "storage price greater than request amount"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_68b3ed28175a375840f0326a973004d9845cbb36056bad056f81d6b15b57bea6",
                            "typeString": "literal_string \"storage price greater than request amount\""
                          }
                        ],
                        "id": 32427,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "7888:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 32436,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7888:131:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 32437,
                    "nodeType": "ExpressionStatement",
                    "src": "7888:131:31"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 32445,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "expression": {
                                  "id": 32440,
                                  "name": "proposal",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 32379,
                                  "src": "8050:8:31",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                                    "typeString": "struct MarketTypes.DealProposal memory"
                                  }
                                },
                                "id": 32441,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "8059:17:31",
                                "memberName": "client_collateral",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 29999,
                                "src": "8050:26:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                                  "typeString": "struct CommonTypes.BigInt memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                                  "typeString": "struct CommonTypes.BigInt memory"
                                }
                              ],
                              "id": 32439,
                              "name": "bigIntToUint",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32619,
                              "src": "8037:12:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_struct$_BigInt_$29866_memory_ptr_$returns$_t_uint256_$",
                                "typeString": "function (struct CommonTypes.BigInt memory) view returns (uint256)"
                              }
                            },
                            "id": 32442,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8037:40:31",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "expression": {
                              "id": 32443,
                              "name": "req",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32410,
                              "src": "8080:3:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_DealRequest_$31913_memory_ptr",
                                "typeString": "struct DealRequest memory"
                              }
                            },
                            "id": 32444,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8084:17:31",
                            "memberName": "client_collateral",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 31907,
                            "src": "8080:21:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8037:64:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "636c69656e7420636f6c6c61746572616c2067726561746572207468616e207265717565737420616d6f756e74",
                          "id": 32446,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8103:47:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_9f0b81cd899f17cf4b04b1b4fd7aa53fa7eb3f0cc2da614b69bdc96267b7aaf2",
                            "typeString": "literal_string \"client collateral greater than request amount\""
                          },
                          "value": "client collateral greater than request amount"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_9f0b81cd899f17cf4b04b1b4fd7aa53fa7eb3f0cc2da614b69bdc96267b7aaf2",
                            "typeString": "literal_string \"client collateral greater than request amount\""
                          }
                        ],
                        "id": 32438,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "8029:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 32447,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8029:122:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 32448,
                    "nodeType": "ExpressionStatement",
                    "src": "8029:122:31"
                  }
                ]
              },
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "authenticateMessage",
              "nameLocation": "7008:19:31",
              "parameters": {
                "id": 32356,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32355,
                    "mutability": "mutable",
                    "name": "params",
                    "nameLocation": "7041:6:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 32450,
                    "src": "7028:19:31",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 32354,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "7028:5:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "7027:21:31"
              },
              "returnParameters": {
                "id": 32357,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "7063:0:31"
              },
              "scope": 32770,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "id": 32524,
              "nodeType": "FunctionDefinition",
              "src": "8165:914:31",
              "nodes": [],
              "body": {
                "id": 32523,
                "nodeType": "Block",
                "src": "8215:864:31",
                "nodes": [],
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 32459,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 32456,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "8246:3:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 32457,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8250:6:31",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "8246:10:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 32458,
                            "name": "MARKET_ACTOR_ETH_ADDRESS",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31998,
                            "src": "8260:24:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "8246:38:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "6d73672e73656e646572206e6565647320746f206265206d61726b6574206163746f7220663035",
                          "id": 32460,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8298:41:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_682b1e94e282b7dcb8c5f97429929793eaa0abf4f41d2521a040a1e09350b58f",
                            "typeString": "literal_string \"msg.sender needs to be market actor f05\""
                          },
                          "value": "msg.sender needs to be market actor f05"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_682b1e94e282b7dcb8c5f97429929793eaa0abf4f41d2521a040a1e09350b58f",
                            "typeString": "literal_string \"msg.sender needs to be market actor f05\""
                          }
                        ],
                        "id": 32455,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "8225:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 32461,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8225:124:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 32462,
                    "nodeType": "ExpressionStatement",
                    "src": "8225:124:31"
                  },
                  {
                    "assignments": [
                      32465
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 32465,
                        "mutability": "mutable",
                        "name": "mdnp",
                        "nameLocation": "8390:4:31",
                        "nodeType": "VariableDeclaration",
                        "scope": 32523,
                        "src": "8360:34:31",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketDealNotifyParams_$32807_memory_ptr",
                          "typeString": "struct MarketDealNotifyParams"
                        },
                        "typeName": {
                          "id": 32464,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 32463,
                            "name": "MarketDealNotifyParams",
                            "nameLocations": [
                              "8360:22:31"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 32807,
                            "src": "8360:22:31"
                          },
                          "referencedDeclaration": 32807,
                          "src": "8360:22:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketDealNotifyParams_$32807_storage_ptr",
                            "typeString": "struct MarketDealNotifyParams"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 32469,
                    "initialValue": {
                      "arguments": [
                        {
                          "id": 32467,
                          "name": "params",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32452,
                          "src": "8444:6:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 32466,
                        "name": "deserializeMarketDealNotifyParams",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32860,
                        "src": "8397:33:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_struct$_MarketDealNotifyParams_$32807_memory_ptr_$",
                          "typeString": "function (bytes memory) pure returns (struct MarketDealNotifyParams memory)"
                        }
                      },
                      "id": 32468,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8397:63:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_MarketDealNotifyParams_$32807_memory_ptr",
                        "typeString": "struct MarketDealNotifyParams memory"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "8360:100:31"
                  },
                  {
                    "assignments": [
                      32474
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 32474,
                        "mutability": "mutable",
                        "name": "proposal",
                        "nameLocation": "8502:8:31",
                        "nodeType": "VariableDeclaration",
                        "scope": 32523,
                        "src": "8470:40:31",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                          "typeString": "struct MarketTypes.DealProposal"
                        },
                        "typeName": {
                          "id": 32473,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 32472,
                            "name": "MarketTypes.DealProposal",
                            "nameLocations": [
                              "8470:11:31",
                              "8482:12:31"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 30000,
                            "src": "8470:24:31"
                          },
                          "referencedDeclaration": 30000,
                          "src": "8470:24:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DealProposal_$30000_storage_ptr",
                            "typeString": "struct MarketTypes.DealProposal"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 32479,
                    "initialValue": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 32476,
                            "name": "mdnp",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32465,
                            "src": "8550:4:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketDealNotifyParams_$32807_memory_ptr",
                              "typeString": "struct MarketDealNotifyParams memory"
                            }
                          },
                          "id": 32477,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8555:12:31",
                          "memberName": "dealProposal",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 32804,
                          "src": "8550:17:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 32475,
                        "name": "deserializeDealProposal",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33213,
                        "src": "8513:23:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_struct$_DealProposal_$30000_memory_ptr_$",
                          "typeString": "function (bytes memory) pure returns (struct MarketTypes.DealProposal memory)"
                        }
                      },
                      "id": 32478,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8513:64:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                        "typeString": "struct MarketTypes.DealProposal memory"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "8470:107:31"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "expression": {
                            "baseExpression": {
                              "id": 32481,
                              "name": "pieceToProposal",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32014,
                              "src": "8609:15:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes_memory_ptr_$_t_struct$_ProposalIdSet_$31879_storage_$",
                                "typeString": "mapping(bytes memory => struct ProposalIdSet storage ref)"
                              }
                            },
                            "id": 32485,
                            "indexExpression": {
                              "expression": {
                                "expression": {
                                  "id": 32482,
                                  "name": "proposal",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 32474,
                                  "src": "8625:8:31",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                                    "typeString": "struct MarketTypes.DealProposal memory"
                                  }
                                },
                                "id": 32483,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "8634:9:31",
                                "memberName": "piece_cid",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 29974,
                                "src": "8625:18:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Cid_$29872_memory_ptr",
                                  "typeString": "struct CommonTypes.Cid memory"
                                }
                              },
                              "id": 32484,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "8644:4:31",
                              "memberName": "data",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 29871,
                              "src": "8625:23:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "8609:40:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_ProposalIdSet_$31879_storage",
                              "typeString": "struct ProposalIdSet storage ref"
                            }
                          },
                          "id": 32486,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8650:5:31",
                          "memberName": "valid",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31878,
                          "src": "8609:46:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "706965636520636964206d757374206265206164646564206265666f726520617574686f72697a696e67",
                          "id": 32487,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8669:44:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_2384b38794e08a47d7aadfbf72726d7885fecfbad69cb0f04bf2081a6f2b6e40",
                            "typeString": "literal_string \"piece cid must be added before authorizing\""
                          },
                          "value": "piece cid must be added before authorizing"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_2384b38794e08a47d7aadfbf72726d7885fecfbad69cb0f04bf2081a6f2b6e40",
                            "typeString": "literal_string \"piece cid must be added before authorizing\""
                          }
                        ],
                        "id": 32480,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "8588:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 32488,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8588:135:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 32489,
                    "nodeType": "ExpressionStatement",
                    "src": "8588:135:31"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 32497,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "8754:46:31",
                          "subExpression": {
                            "expression": {
                              "baseExpression": {
                                "id": 32491,
                                "name": "pieceProviders",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 32019,
                                "src": "8755:14:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes_memory_ptr_$_t_struct$_ProviderSet_$31889_storage_$",
                                  "typeString": "mapping(bytes memory => struct ProviderSet storage ref)"
                                }
                              },
                              "id": 32495,
                              "indexExpression": {
                                "expression": {
                                  "expression": {
                                    "id": 32492,
                                    "name": "proposal",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 32474,
                                    "src": "8770:8:31",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                                      "typeString": "struct MarketTypes.DealProposal memory"
                                    }
                                  },
                                  "id": 32493,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "8779:9:31",
                                  "memberName": "piece_cid",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 29974,
                                  "src": "8770:18:31",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Cid_$29872_memory_ptr",
                                    "typeString": "struct CommonTypes.Cid memory"
                                  }
                                },
                                "id": 32494,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "8789:4:31",
                                "memberName": "data",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 29871,
                                "src": "8770:23:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "8755:39:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_ProviderSet_$31889_storage",
                                "typeString": "struct ProviderSet storage ref"
                              }
                            },
                            "id": 32496,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8795:5:31",
                            "memberName": "valid",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 31888,
                            "src": "8755:45:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "6465616c206661696c656420706f6c69637920636865636b3a2070726f766964657220616c726561647920636c61696d6564207468697320636964",
                          "id": 32498,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8814:61:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_6385db11a2e2401e7360708f4679494827e8f6b8fac693ae7573f9b07ef12e80",
                            "typeString": "literal_string \"deal failed policy check: provider already claimed this cid\""
                          },
                          "value": "deal failed policy check: provider already claimed this cid"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_6385db11a2e2401e7360708f4679494827e8f6b8fac693ae7573f9b07ef12e80",
                            "typeString": "literal_string \"deal failed policy check: provider already claimed this cid\""
                          }
                        ],
                        "id": 32490,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "8733:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 32499,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8733:152:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 32500,
                    "nodeType": "ExpressionStatement",
                    "src": "8733:152:31"
                  },
                  {
                    "expression": {
                      "id": 32512,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 32501,
                          "name": "pieceProviders",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32019,
                          "src": "8896:14:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes_memory_ptr_$_t_struct$_ProviderSet_$31889_storage_$",
                            "typeString": "mapping(bytes memory => struct ProviderSet storage ref)"
                          }
                        },
                        "id": 32505,
                        "indexExpression": {
                          "expression": {
                            "expression": {
                              "id": 32502,
                              "name": "proposal",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32474,
                              "src": "8911:8:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                                "typeString": "struct MarketTypes.DealProposal memory"
                              }
                            },
                            "id": 32503,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8920:9:31",
                            "memberName": "piece_cid",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 29974,
                            "src": "8911:18:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Cid_$29872_memory_ptr",
                              "typeString": "struct CommonTypes.Cid memory"
                            }
                          },
                          "id": 32504,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8930:4:31",
                          "memberName": "data",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 29871,
                          "src": "8911:23:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "8896:39:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ProviderSet_$31889_storage",
                          "typeString": "struct ProviderSet storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "expression": {
                              "expression": {
                                "id": 32507,
                                "name": "proposal",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 32474,
                                "src": "8963:8:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                                  "typeString": "struct MarketTypes.DealProposal memory"
                                }
                              },
                              "id": 32508,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "8972:8:31",
                              "memberName": "provider",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 29984,
                              "src": "8963:17:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_FilAddress_$29869_memory_ptr",
                                "typeString": "struct CommonTypes.FilAddress memory"
                              }
                            },
                            "id": 32509,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8981:4:31",
                            "memberName": "data",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 29868,
                            "src": "8963:22:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          {
                            "hexValue": "74727565",
                            "id": 32510,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8999:4:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            },
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "id": 32506,
                          "name": "ProviderSet",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31889,
                          "src": "8938:11:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ProviderSet_$31889_storage_ptr_$",
                            "typeString": "type(struct ProviderSet storage pointer)"
                          }
                        },
                        "id": 32511,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8938:75:31",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ProviderSet_$31889_memory_ptr",
                          "typeString": "struct ProviderSet memory"
                        }
                      },
                      "src": "8896:117:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ProviderSet_$31889_storage",
                        "typeString": "struct ProviderSet storage ref"
                      }
                    },
                    "id": 32513,
                    "nodeType": "ExpressionStatement",
                    "src": "8896:117:31"
                  },
                  {
                    "expression": {
                      "id": 32521,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 32514,
                          "name": "pieceDeals",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32023,
                          "src": "9023:10:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes_memory_ptr_$_t_uint64_$",
                            "typeString": "mapping(bytes memory => uint64)"
                          }
                        },
                        "id": 32518,
                        "indexExpression": {
                          "expression": {
                            "expression": {
                              "id": 32515,
                              "name": "proposal",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32474,
                              "src": "9034:8:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_DealProposal_$30000_memory_ptr",
                                "typeString": "struct MarketTypes.DealProposal memory"
                              }
                            },
                            "id": 32516,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9043:9:31",
                            "memberName": "piece_cid",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 29974,
                            "src": "9034:18:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Cid_$29872_memory_ptr",
                              "typeString": "struct CommonTypes.Cid memory"
                            }
                          },
                          "id": 32517,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9053:4:31",
                          "memberName": "data",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 29871,
                          "src": "9034:23:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "9023:35:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "expression": {
                          "id": 32519,
                          "name": "mdnp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32465,
                          "src": "9061:4:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketDealNotifyParams_$32807_memory_ptr",
                            "typeString": "struct MarketDealNotifyParams memory"
                          }
                        },
                        "id": 32520,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9066:6:31",
                        "memberName": "dealId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 32806,
                        "src": "9061:11:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "src": "9023:49:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "id": 32522,
                    "nodeType": "ExpressionStatement",
                    "src": "9023:49:31"
                  }
                ]
              },
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "dealNotify",
              "nameLocation": "8174:10:31",
              "parameters": {
                "id": 32453,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32452,
                    "mutability": "mutable",
                    "name": "params",
                    "nameLocation": "8198:6:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 32524,
                    "src": "8185:19:31",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 32451,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "8185:5:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "8184:21:31"
              },
              "returnParameters": {
                "id": 32454,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "8215:0:31"
              },
              "scope": 32770,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "id": 32549,
              "nodeType": "FunctionDefinition",
              "src": "9257:160:31",
              "nodes": [],
              "body": {
                "id": 32548,
                "nodeType": "Block",
                "src": "9299:118:31",
                "nodes": [],
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 32533,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 32530,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "9317:3:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 32531,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9321:6:31",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "9317:10:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 32532,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32043,
                            "src": "9331:5:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "9317:19:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 32529,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "9309:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 32534,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9309:28:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 32535,
                    "nodeType": "ExpressionStatement",
                    "src": "9309:28:31"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 32542,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "9396:4:31",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_DealClient_$32770",
                                    "typeString": "contract DealClient"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_DealClient_$32770",
                                    "typeString": "contract DealClient"
                                  }
                                ],
                                "id": 32541,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "9388:7:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 32540,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "9388:7:31",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 32543,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9388:13:31",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 32539,
                            "name": "getDelegatedAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32333,
                            "src": "9368:19:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_address_$returns$_t_struct$_FilAddress_$29869_memory_ptr_$",
                              "typeString": "function (address) pure returns (struct CommonTypes.FilAddress memory)"
                            }
                          },
                          "id": 32544,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9368:34:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_FilAddress_$29869_memory_ptr",
                            "typeString": "struct CommonTypes.FilAddress memory"
                          }
                        },
                        {
                          "id": 32545,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32526,
                          "src": "9404:5:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_FilAddress_$29869_memory_ptr",
                            "typeString": "struct CommonTypes.FilAddress memory"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 32536,
                          "name": "MarketAPI",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 24925,
                          "src": "9347:9:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_MarketAPI_$24925_$",
                            "typeString": "type(library MarketAPI)"
                          }
                        },
                        "id": 32538,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9357:10:31",
                        "memberName": "addBalance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 24470,
                        "src": "9347:20:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_FilAddress_$29869_memory_ptr_$_t_uint256_$returns$__$",
                          "typeString": "function (struct CommonTypes.FilAddress memory,uint256)"
                        }
                      },
                      "id": 32546,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9347:63:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 32547,
                    "nodeType": "ExpressionStatement",
                    "src": "9347:63:31"
                  }
                ]
              },
              "functionSelector": "d91921ed",
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "addBalance",
              "nameLocation": "9266:10:31",
              "parameters": {
                "id": 32527,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32526,
                    "mutability": "mutable",
                    "name": "value",
                    "nameLocation": "9285:5:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 32549,
                    "src": "9277:13:31",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 32525,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "9277:7:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "9276:15:31"
              },
              "returnParameters": {
                "id": 32528,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "9299:0:31"
              },
              "scope": 32770,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "id": 32584,
              "nodeType": "FunctionDefinition",
              "src": "9477:343:31",
              "nodes": [],
              "body": {
                "id": 32583,
                "nodeType": "Block",
                "src": "9578:242:31",
                "nodes": [],
                "statements": [
                  {
                    "assignments": [
                      32561
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 32561,
                        "mutability": "mutable",
                        "name": "bigNumVal",
                        "nameLocation": "9616:9:31",
                        "nodeType": "VariableDeclaration",
                        "scope": 32583,
                        "src": "9588:37:31",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BigNumber_$26569_memory_ptr",
                          "typeString": "struct BigNumbers.BigNumber"
                        },
                        "typeName": {
                          "id": 32560,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 32559,
                            "name": "BigNumbers.BigNumber",
                            "nameLocations": [
                              "9588:10:31",
                              "9599:9:31"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 26569,
                            "src": "9588:20:31"
                          },
                          "referencedDeclaration": 26569,
                          "src": "9588:20:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_BigNumber_$26569_storage_ptr",
                            "typeString": "struct BigNumbers.BigNumber"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 32567,
                    "initialValue": {
                      "arguments": [
                        {
                          "id": 32564,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32551,
                          "src": "9644:5:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "hexValue": "66616c7365",
                          "id": 32565,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9651:5:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "expression": {
                          "id": 32562,
                          "name": "BigNumbers",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28544,
                          "src": "9628:10:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_BigNumbers_$28544_$",
                            "typeString": "type(library BigNumbers)"
                          }
                        },
                        "id": 32563,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9639:4:31",
                        "memberName": "init",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 26680,
                        "src": "9628:15:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_bool_$returns$_t_struct$_BigNumber_$26569_memory_ptr_$",
                          "typeString": "function (uint256,bool) view returns (struct BigNumbers.BigNumber memory)"
                        }
                      },
                      "id": 32566,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9628:29:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BigNumber_$26569_memory_ptr",
                        "typeString": "struct BigNumbers.BigNumber memory"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "9588:69:31"
                  },
                  {
                    "assignments": [
                      32572
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 32572,
                        "mutability": "mutable",
                        "name": "bigIntVal",
                        "nameLocation": "9693:9:31",
                        "nodeType": "VariableDeclaration",
                        "scope": 32583,
                        "src": "9667:35:31",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                          "typeString": "struct CommonTypes.BigInt"
                        },
                        "typeName": {
                          "id": 32571,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 32570,
                            "name": "CommonTypes.BigInt",
                            "nameLocations": [
                              "9667:11:31",
                              "9679:6:31"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 29866,
                            "src": "9667:18:31"
                          },
                          "referencedDeclaration": 29866,
                          "src": "9667:18:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_BigInt_$29866_storage_ptr",
                            "typeString": "struct CommonTypes.BigInt"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 32580,
                    "initialValue": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 32575,
                            "name": "bigNumVal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32561,
                            "src": "9737:9:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BigNumber_$26569_memory_ptr",
                              "typeString": "struct BigNumbers.BigNumber memory"
                            }
                          },
                          "id": 32576,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9747:3:31",
                          "memberName": "val",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 26564,
                          "src": "9737:13:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        {
                          "expression": {
                            "id": 32577,
                            "name": "bigNumVal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32561,
                            "src": "9764:9:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BigNumber_$26569_memory_ptr",
                              "typeString": "struct BigNumbers.BigNumber memory"
                            }
                          },
                          "id": 32578,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9774:3:31",
                          "memberName": "neg",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 26566,
                          "src": "9764:13:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "expression": {
                          "id": 32573,
                          "name": "CommonTypes",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 29875,
                          "src": "9705:11:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_CommonTypes_$29875_$",
                            "typeString": "type(library CommonTypes)"
                          }
                        },
                        "id": 32574,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9717:6:31",
                        "memberName": "BigInt",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 29866,
                        "src": "9705:18:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_BigInt_$29866_storage_ptr_$",
                          "typeString": "type(struct CommonTypes.BigInt storage pointer)"
                        }
                      },
                      "id": 32579,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9705:82:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                        "typeString": "struct CommonTypes.BigInt memory"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "9667:120:31"
                  },
                  {
                    "expression": {
                      "id": 32581,
                      "name": "bigIntVal",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32572,
                      "src": "9804:9:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                        "typeString": "struct CommonTypes.BigInt memory"
                      }
                    },
                    "functionReturnParameters": 32556,
                    "id": 32582,
                    "nodeType": "Return",
                    "src": "9797:16:31"
                  }
                ]
              },
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "uintToBigInt",
              "nameLocation": "9486:12:31",
              "parameters": {
                "id": 32552,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32551,
                    "mutability": "mutable",
                    "name": "value",
                    "nameLocation": "9516:5:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 32584,
                    "src": "9508:13:31",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 32550,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "9508:7:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "9498:29:31"
              },
              "returnParameters": {
                "id": 32556,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32555,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 32584,
                    "src": "9551:25:31",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                      "typeString": "struct CommonTypes.BigInt"
                    },
                    "typeName": {
                      "id": 32554,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 32553,
                        "name": "CommonTypes.BigInt",
                        "nameLocations": [
                          "9551:11:31",
                          "9563:6:31"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 29866,
                        "src": "9551:18:31"
                      },
                      "referencedDeclaration": 29866,
                      "src": "9551:18:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BigInt_$29866_storage_ptr",
                        "typeString": "struct CommonTypes.BigInt"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "9550:27:31"
              },
              "scope": 32770,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "id": 32619,
              "nodeType": "FunctionDefinition",
              "src": "9826:341:31",
              "nodes": [],
              "body": {
                "id": 32618,
                "nodeType": "Block",
                "src": "9928:239:31",
                "nodes": [],
                "statements": [
                  {
                    "assignments": [
                      32596
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 32596,
                        "mutability": "mutable",
                        "name": "bigNumUint",
                        "nameLocation": "9966:10:31",
                        "nodeType": "VariableDeclaration",
                        "scope": 32618,
                        "src": "9938:38:31",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BigNumber_$26569_memory_ptr",
                          "typeString": "struct BigNumbers.BigNumber"
                        },
                        "typeName": {
                          "id": 32595,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 32594,
                            "name": "BigNumbers.BigNumber",
                            "nameLocations": [
                              "9938:10:31",
                              "9949:9:31"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 26569,
                            "src": "9938:20:31"
                          },
                          "referencedDeclaration": 26569,
                          "src": "9938:20:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_BigNumber_$26569_storage_ptr",
                            "typeString": "struct BigNumbers.BigNumber"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 32604,
                    "initialValue": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 32599,
                            "name": "bigInt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32587,
                            "src": "10008:6:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                              "typeString": "struct CommonTypes.BigInt memory"
                            }
                          },
                          "id": 32600,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10015:3:31",
                          "memberName": "val",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 29863,
                          "src": "10008:10:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        {
                          "expression": {
                            "id": 32601,
                            "name": "bigInt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32587,
                            "src": "10032:6:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                              "typeString": "struct CommonTypes.BigInt memory"
                            }
                          },
                          "id": 32602,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10039:3:31",
                          "memberName": "neg",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 29865,
                          "src": "10032:10:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "expression": {
                          "id": 32597,
                          "name": "BigNumbers",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28544,
                          "src": "9979:10:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_BigNumbers_$28544_$",
                            "typeString": "type(library BigNumbers)"
                          }
                        },
                        "id": 32598,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9990:4:31",
                        "memberName": "init",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 26659,
                        "src": "9979:15:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes_memory_ptr_$_t_bool_$returns$_t_struct$_BigNumber_$26569_memory_ptr_$",
                          "typeString": "function (bytes memory,bool) view returns (struct BigNumbers.BigNumber memory)"
                        }
                      },
                      "id": 32603,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9979:73:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BigNumber_$26569_memory_ptr",
                        "typeString": "struct BigNumbers.BigNumber memory"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "9938:114:31"
                  },
                  {
                    "assignments": [
                      32606
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 32606,
                        "mutability": "mutable",
                        "name": "bigNumExtractedUint",
                        "nameLocation": "10070:19:31",
                        "nodeType": "VariableDeclaration",
                        "scope": 32618,
                        "src": "10062:27:31",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 32605,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "10062:7:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 32615,
                    "initialValue": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "expression": {
                                "id": 32611,
                                "name": "bigNumUint",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 32596,
                                "src": "10108:10:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_BigNumber_$26569_memory_ptr",
                                  "typeString": "struct BigNumbers.BigNumber memory"
                                }
                              },
                              "id": 32612,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "10119:3:31",
                              "memberName": "val",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 26564,
                              "src": "10108:14:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 32610,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "10100:7:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes32_$",
                              "typeString": "type(bytes32)"
                            },
                            "typeName": {
                              "id": 32609,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "10100:7:31",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 32613,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10100:23:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "id": 32608,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10092:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": {
                          "id": 32607,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "10092:7:31",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 32614,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10092:32:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "10062:62:31"
                  },
                  {
                    "expression": {
                      "id": 32616,
                      "name": "bigNumExtractedUint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32606,
                      "src": "10141:19:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 32591,
                    "id": 32617,
                    "nodeType": "Return",
                    "src": "10134:26:31"
                  }
                ]
              },
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "bigIntToUint",
              "nameLocation": "9835:12:31",
              "parameters": {
                "id": 32588,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32587,
                    "mutability": "mutable",
                    "name": "bigInt",
                    "nameLocation": "9883:6:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 32619,
                    "src": "9857:32:31",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                      "typeString": "struct CommonTypes.BigInt"
                    },
                    "typeName": {
                      "id": 32586,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 32585,
                        "name": "CommonTypes.BigInt",
                        "nameLocations": [
                          "9857:11:31",
                          "9869:6:31"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 29866,
                        "src": "9857:18:31"
                      },
                      "referencedDeclaration": 29866,
                      "src": "9857:18:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BigInt_$29866_storage_ptr",
                        "typeString": "struct CommonTypes.BigInt"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "9847:48:31"
              },
              "returnParameters": {
                "id": 32591,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32590,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 32619,
                    "src": "9919:7:31",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 32589,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "9919:7:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "9918:9:31"
              },
              "scope": 32770,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "id": 32665,
              "nodeType": "FunctionDefinition",
              "src": "10544:458:31",
              "nodes": [],
              "body": {
                "id": 32664,
                "nodeType": "Block",
                "src": "10644:358:31",
                "nodes": [],
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 32632,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 32629,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "10662:3:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 32630,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "10666:6:31",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "10662:10:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 32631,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32043,
                            "src": "10676:5:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "10662:19:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 32628,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "10654:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 32633,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10654:28:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 32634,
                    "nodeType": "ExpressionStatement",
                    "src": "10654:28:31"
                  },
                  {
                    "assignments": [
                      32639
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 32639,
                        "mutability": "mutable",
                        "name": "params",
                        "nameLocation": "10734:6:31",
                        "nodeType": "VariableDeclaration",
                        "scope": 32664,
                        "src": "10693:47:31",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_WithdrawBalanceParams_$29937_memory_ptr",
                          "typeString": "struct MarketTypes.WithdrawBalanceParams"
                        },
                        "typeName": {
                          "id": 32638,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 32637,
                            "name": "MarketTypes.WithdrawBalanceParams",
                            "nameLocations": [
                              "10693:11:31",
                              "10705:21:31"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 29937,
                            "src": "10693:33:31"
                          },
                          "referencedDeclaration": 29937,
                          "src": "10693:33:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_WithdrawBalanceParams_$29937_storage_ptr",
                            "typeString": "struct MarketTypes.WithdrawBalanceParams"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 32649,
                    "initialValue": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 32643,
                              "name": "client",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32621,
                              "src": "10827:6:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 32642,
                            "name": "getDelegatedAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32333,
                            "src": "10807:19:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_address_$returns$_t_struct$_FilAddress_$29869_memory_ptr_$",
                              "typeString": "function (address) pure returns (struct CommonTypes.FilAddress memory)"
                            }
                          },
                          "id": 32644,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10807:27:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_FilAddress_$29869_memory_ptr",
                            "typeString": "struct CommonTypes.FilAddress memory"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "id": 32646,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32623,
                              "src": "10865:5:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 32645,
                            "name": "uintToBigInt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32584,
                            "src": "10852:12:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_struct$_BigInt_$29866_memory_ptr_$",
                              "typeString": "function (uint256) view returns (struct CommonTypes.BigInt memory)"
                            }
                          },
                          "id": 32647,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10852:19:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                            "typeString": "struct CommonTypes.BigInt memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_FilAddress_$29869_memory_ptr",
                            "typeString": "struct CommonTypes.FilAddress memory"
                          },
                          {
                            "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                            "typeString": "struct CommonTypes.BigInt memory"
                          }
                        ],
                        "expression": {
                          "id": 32640,
                          "name": "MarketTypes",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 30007,
                          "src": "10743:11:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_MarketTypes_$30007_$",
                            "typeString": "type(library MarketTypes)"
                          }
                        },
                        "id": 32641,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10768:21:31",
                        "memberName": "WithdrawBalanceParams",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 29937,
                        "src": "10743:46:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_WithdrawBalanceParams_$29937_storage_ptr_$",
                          "typeString": "type(struct MarketTypes.WithdrawBalanceParams storage pointer)"
                        }
                      },
                      "id": 32648,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10743:142:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_WithdrawBalanceParams_$29937_memory_ptr",
                        "typeString": "struct MarketTypes.WithdrawBalanceParams memory"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "10693:192:31"
                  },
                  {
                    "assignments": [
                      32654
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 32654,
                        "mutability": "mutable",
                        "name": "ret",
                        "nameLocation": "10921:3:31",
                        "nodeType": "VariableDeclaration",
                        "scope": 32664,
                        "src": "10895:29:31",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                          "typeString": "struct CommonTypes.BigInt"
                        },
                        "typeName": {
                          "id": 32653,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 32652,
                            "name": "CommonTypes.BigInt",
                            "nameLocations": [
                              "10895:11:31",
                              "10907:6:31"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 29866,
                            "src": "10895:18:31"
                          },
                          "referencedDeclaration": 29866,
                          "src": "10895:18:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_BigInt_$29866_storage_ptr",
                            "typeString": "struct CommonTypes.BigInt"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 32659,
                    "initialValue": {
                      "arguments": [
                        {
                          "id": 32657,
                          "name": "params",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32639,
                          "src": "10953:6:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_WithdrawBalanceParams_$29937_memory_ptr",
                            "typeString": "struct MarketTypes.WithdrawBalanceParams memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_WithdrawBalanceParams_$29937_memory_ptr",
                            "typeString": "struct MarketTypes.WithdrawBalanceParams memory"
                          }
                        ],
                        "expression": {
                          "id": 32655,
                          "name": "MarketAPI",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 24925,
                          "src": "10927:9:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_MarketAPI_$24925_$",
                            "typeString": "type(library MarketAPI)"
                          }
                        },
                        "id": 32656,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10937:15:31",
                        "memberName": "withdrawBalance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 24506,
                        "src": "10927:25:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_WithdrawBalanceParams_$29937_memory_ptr_$returns$_t_struct$_BigInt_$29866_memory_ptr_$",
                          "typeString": "function (struct MarketTypes.WithdrawBalanceParams memory) returns (struct CommonTypes.BigInt memory)"
                        }
                      },
                      "id": 32658,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10927:33:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                        "typeString": "struct CommonTypes.BigInt memory"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "10895:65:31"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 32661,
                          "name": "ret",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32654,
                          "src": "10991:3:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                            "typeString": "struct CommonTypes.BigInt memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_BigInt_$29866_memory_ptr",
                            "typeString": "struct CommonTypes.BigInt memory"
                          }
                        ],
                        "id": 32660,
                        "name": "bigIntToUint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32619,
                        "src": "10978:12:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_struct$_BigInt_$29866_memory_ptr_$returns$_t_uint256_$",
                          "typeString": "function (struct CommonTypes.BigInt memory) view returns (uint256)"
                        }
                      },
                      "id": 32662,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10978:17:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 32627,
                    "id": 32663,
                    "nodeType": "Return",
                    "src": "10971:24:31"
                  }
                ]
              },
              "functionSelector": "0cf20cc9",
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "withdrawBalance",
              "nameLocation": "10553:15:31",
              "parameters": {
                "id": 32624,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32621,
                    "mutability": "mutable",
                    "name": "client",
                    "nameLocation": "10586:6:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 32665,
                    "src": "10578:14:31",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 32620,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "10578:7:31",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 32623,
                    "mutability": "mutable",
                    "name": "value",
                    "nameLocation": "10610:5:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 32665,
                    "src": "10602:13:31",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 32622,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "10602:7:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "10568:53:31"
              },
              "returnParameters": {
                "id": 32627,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32626,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 32665,
                    "src": "10638:4:31",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 32625,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "10638:4:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "10637:6:31"
              },
              "scope": 32770,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "id": 32683,
              "nodeType": "FunctionDefinition",
              "src": "11008:314:31",
              "nodes": [],
              "body": {
                "id": 32682,
                "nodeType": "Block",
                "src": "11062:260:31",
                "nodes": [],
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 32674,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 32671,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "11093:3:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 32672,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "11097:6:31",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "11093:10:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 32673,
                            "name": "VERIFREG_ACTOR_ETH_ADDRESS",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32004,
                            "src": "11107:26:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "11093:40:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "6d73672e73656e646572206e6565647320746f206265207665726966726567206163746f7220663036",
                          "id": 32675,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11147:43:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_eb4237b1ef0af07df0b85df816282dbde7ef434f94123307b16c71082634567c",
                            "typeString": "literal_string \"msg.sender needs to be verifreg actor f06\""
                          },
                          "value": "msg.sender needs to be verifreg actor f06"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_eb4237b1ef0af07df0b85df816282dbde7ef434f94123307b16c71082634567c",
                            "typeString": "literal_string \"msg.sender needs to be verifreg actor f06\""
                          }
                        ],
                        "id": 32670,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "11072:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 32676,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11072:128:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 32677,
                    "nodeType": "ExpressionStatement",
                    "src": "11072:128:31"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "hexValue": "4461746143617020526563656976656421",
                          "id": 32679,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11231:19:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_1279faa0ecdf27a4670ce4704153fe9bf3bac7c35b9db43dbc64d5a55be43cb0",
                            "typeString": "literal_string \"DataCap Received!\""
                          },
                          "value": "DataCap Received!"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_1279faa0ecdf27a4670ce4704153fe9bf3bac7c35b9db43dbc64d5a55be43cb0",
                            "typeString": "literal_string \"DataCap Received!\""
                          }
                        ],
                        "id": 32678,
                        "name": "ReceivedDataCap",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32031,
                        "src": "11215:15:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory)"
                        }
                      },
                      "id": 32680,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11215:36:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 32681,
                    "nodeType": "EmitStatement",
                    "src": "11210:41:31"
                  }
                ]
              },
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "receiveDataCap",
              "nameLocation": "11017:14:31",
              "parameters": {
                "id": 32668,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32667,
                    "mutability": "mutable",
                    "name": "params",
                    "nameLocation": "11045:6:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 32683,
                    "src": "11032:19:31",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 32666,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "11032:5:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "11031:21:31"
              },
              "returnParameters": {
                "id": 32669,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "11062:0:31"
              },
              "scope": 32770,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "id": 32769,
              "nodeType": "FunctionDefinition",
              "src": "11328:924:31",
              "nodes": [],
              "body": {
                "id": 32768,
                "nodeType": "Block",
                "src": "11480:772:31",
                "nodes": [],
                "statements": [
                  {
                    "assignments": [
                      32699
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 32699,
                        "mutability": "mutable",
                        "name": "ret",
                        "nameLocation": "11503:3:31",
                        "nodeType": "VariableDeclaration",
                        "scope": 32768,
                        "src": "11490:16:31",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes"
                        },
                        "typeName": {
                          "id": 32698,
                          "name": "bytes",
                          "nodeType": "ElementaryTypeName",
                          "src": "11490:5:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_storage_ptr",
                            "typeString": "bytes"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 32700,
                    "nodeType": "VariableDeclarationStatement",
                    "src": "11490:16:31"
                  },
                  {
                    "assignments": [
                      32702
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 32702,
                        "mutability": "mutable",
                        "name": "codec",
                        "nameLocation": "11523:5:31",
                        "nodeType": "VariableDeclaration",
                        "scope": 32768,
                        "src": "11516:12:31",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        },
                        "typeName": {
                          "id": 32701,
                          "name": "uint64",
                          "nodeType": "ElementaryTypeName",
                          "src": "11516:6:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 32703,
                    "nodeType": "VariableDeclarationStatement",
                    "src": "11516:12:31"
                  },
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      },
                      "id": 32706,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 32704,
                        "name": "method",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32685,
                        "src": "11570:6:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "id": 32705,
                        "name": "AUTHENTICATE_MESSAGE_METHOD_NUM",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31986,
                        "src": "11580:31:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "src": "11570:41:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        },
                        "id": 32741,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 32739,
                          "name": "method",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32685,
                          "src": "11938:6:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "id": 32740,
                          "name": "MARKET_NOTIFY_DEAL_METHOD_NUM",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31992,
                          "src": "11948:29:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        "src": "11938:39:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseBody": {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          },
                          "id": 32749,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 32747,
                            "name": "method",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32685,
                            "src": "12032:6:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint64",
                              "typeString": "uint64"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 32748,
                            "name": "DATACAP_RECEIVER_HOOK_METHOD_NUM",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31989,
                            "src": "12042:32:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint64",
                              "typeString": "uint64"
                            }
                          },
                          "src": "12032:42:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 32759,
                          "nodeType": "Block",
                          "src": "12129:85:31",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "hexValue": "7468652066696c65636f696e206d6574686f642074686174207761732063616c6c6564206973206e6f742068616e646c6564",
                                    "id": 32756,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "12150:52:31",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_df6bf3057e359b36ba88bed91b7d44ee7bc2300fd1ed9276bed1059b9ad04d07",
                                      "typeString": "literal_string \"the filecoin method that was called is not handled\""
                                    },
                                    "value": "the filecoin method that was called is not handled"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_df6bf3057e359b36ba88bed91b7d44ee7bc2300fd1ed9276bed1059b9ad04d07",
                                      "typeString": "literal_string \"the filecoin method that was called is not handled\""
                                    }
                                  ],
                                  "id": 32755,
                                  "name": "revert",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    -19,
                                    -19
                                  ],
                                  "referencedDeclaration": -19,
                                  "src": "12143:6:31",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (string memory) pure"
                                  }
                                },
                                "id": 32757,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "12143:60:31",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 32758,
                              "nodeType": "ExpressionStatement",
                              "src": "12143:60:31"
                            }
                          ]
                        },
                        "id": 32760,
                        "nodeType": "IfStatement",
                        "src": "12028:186:31",
                        "trueBody": {
                          "id": 32754,
                          "nodeType": "Block",
                          "src": "12076:47:31",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "id": 32751,
                                    "name": "params",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 32689,
                                    "src": "12105:6:31",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  ],
                                  "id": 32750,
                                  "name": "receiveDataCap",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 32683,
                                  "src": "12090:14:31",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_nonpayable$_t_bytes_memory_ptr_$returns$__$",
                                    "typeString": "function (bytes memory)"
                                  }
                                },
                                "id": 32752,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "12090:22:31",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 32753,
                              "nodeType": "ExpressionStatement",
                              "src": "12090:22:31"
                            }
                          ]
                        }
                      },
                      "id": 32761,
                      "nodeType": "IfStatement",
                      "src": "11934:280:31",
                      "trueBody": {
                        "id": 32746,
                        "nodeType": "Block",
                        "src": "11979:43:31",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "id": 32743,
                                  "name": "params",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 32689,
                                  "src": "12004:6:31",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                ],
                                "id": 32742,
                                "name": "dealNotify",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 32524,
                                "src": "11993:10:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_nonpayable$_t_bytes_memory_ptr_$returns$__$",
                                  "typeString": "function (bytes memory)"
                                }
                              },
                              "id": 32744,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "11993:18:31",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_tuple$__$",
                                "typeString": "tuple()"
                              }
                            },
                            "id": 32745,
                            "nodeType": "ExpressionStatement",
                            "src": "11993:18:31"
                          }
                        ]
                      }
                    },
                    "id": 32762,
                    "nodeType": "IfStatement",
                    "src": "11566:648:31",
                    "trueBody": {
                      "id": 32738,
                      "nodeType": "Block",
                      "src": "11613:315:31",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "id": 32708,
                                "name": "params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 32689,
                                "src": "11647:6:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "id": 32707,
                              "name": "authenticateMessage",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32450,
                              "src": "11627:19:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_bytes_memory_ptr_$returns$__$",
                                "typeString": "function (bytes memory) view"
                              }
                            },
                            "id": 32709,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "11627:27:31",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 32710,
                          "nodeType": "ExpressionStatement",
                          "src": "11627:27:31"
                        },
                        {
                          "assignments": [
                            32715
                          ],
                          "declarations": [
                            {
                              "constant": false,
                              "id": 32715,
                              "mutability": "mutable",
                              "name": "buf",
                              "nameLocation": "11797:3:31",
                              "nodeType": "VariableDeclaration",
                              "scope": 32738,
                              "src": "11774:26:31",
                              "stateVariable": false,
                              "storageLocation": "memory",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_CBORBuffer_$28979_memory_ptr",
                                "typeString": "struct CBOR.CBORBuffer"
                              },
                              "typeName": {
                                "id": 32714,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                  "id": 32713,
                                  "name": "CBOR.CBORBuffer",
                                  "nameLocations": [
                                    "11774:4:31",
                                    "11779:10:31"
                                  ],
                                  "nodeType": "IdentifierPath",
                                  "referencedDeclaration": 28979,
                                  "src": "11774:15:31"
                                },
                                "referencedDeclaration": 28979,
                                "src": "11774:15:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_CBORBuffer_$28979_storage_ptr",
                                  "typeString": "struct CBOR.CBORBuffer"
                                }
                              },
                              "visibility": "internal"
                            }
                          ],
                          "id": 32720,
                          "initialValue": {
                            "arguments": [
                              {
                                "hexValue": "31",
                                "id": 32718,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11815:1:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                }
                              ],
                              "expression": {
                                "id": 32716,
                                "name": "CBOR",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 29824,
                                "src": "11803:4:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_CBOR_$29824_$",
                                  "typeString": "type(library CBOR)"
                                }
                              },
                              "id": 32717,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "11808:6:31",
                              "memberName": "create",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 29046,
                              "src": "11803:11:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_struct$_CBORBuffer_$28979_memory_ptr_$",
                                "typeString": "function (uint256) pure returns (struct CBOR.CBORBuffer memory)"
                              }
                            },
                            "id": 32719,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "11803:14:31",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_CBORBuffer_$28979_memory_ptr",
                              "typeString": "struct CBOR.CBORBuffer memory"
                            }
                          },
                          "nodeType": "VariableDeclarationStatement",
                          "src": "11774:43:31"
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "hexValue": "74727565",
                                "id": 32724,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "bool",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11845:4:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "value": "true"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "expression": {
                                "id": 32721,
                                "name": "buf",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 32715,
                                "src": "11831:3:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_CBORBuffer_$28979_memory_ptr",
                                  "typeString": "struct CBOR.CBORBuffer memory"
                                }
                              },
                              "id": 32723,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "11835:9:31",
                              "memberName": "writeBool",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 29281,
                              "src": "11831:13:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_struct$_CBORBuffer_$28979_memory_ptr_$_t_bool_$returns$__$bound_to$_t_struct$_CBORBuffer_$28979_memory_ptr_$",
                                "typeString": "function (struct CBOR.CBORBuffer memory,bool) pure"
                              }
                            },
                            "id": 32725,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "11831:19:31",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 32726,
                          "nodeType": "ExpressionStatement",
                          "src": "11831:19:31"
                        },
                        {
                          "expression": {
                            "id": 32731,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 32727,
                              "name": "ret",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32699,
                              "src": "11864:3:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "id": 32728,
                                  "name": "buf",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 32715,
                                  "src": "11870:3:31",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_CBORBuffer_$28979_memory_ptr",
                                    "typeString": "struct CBOR.CBORBuffer memory"
                                  }
                                },
                                "id": 32729,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "11874:4:31",
                                "memberName": "data",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 29067,
                                "src": "11870:8:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_struct$_CBORBuffer_$28979_memory_ptr_$returns$_t_bytes_memory_ptr_$bound_to$_t_struct$_CBORBuffer_$28979_memory_ptr_$",
                                  "typeString": "function (struct CBOR.CBORBuffer memory) pure returns (bytes memory)"
                                }
                              },
                              "id": 32730,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "11870:10:31",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "src": "11864:16:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 32732,
                          "nodeType": "ExpressionStatement",
                          "src": "11864:16:31"
                        },
                        {
                          "expression": {
                            "id": 32736,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 32733,
                              "name": "codec",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32702,
                              "src": "11894:5:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint64",
                                "typeString": "uint64"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "expression": {
                                "id": 32734,
                                "name": "Misc",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 31839,
                                "src": "11902:4:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_Misc_$31839_$",
                                  "typeString": "type(library Misc)"
                                }
                              },
                              "id": 32735,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "11907:10:31",
                              "memberName": "CBOR_CODEC",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 31814,
                              "src": "11902:15:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint64",
                                "typeString": "uint64"
                              }
                            },
                            "src": "11894:23:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint64",
                              "typeString": "uint64"
                            }
                          },
                          "id": 32737,
                          "nodeType": "ExpressionStatement",
                          "src": "11894:23:31"
                        }
                      ]
                    }
                  },
                  {
                    "expression": {
                      "components": [
                        {
                          "hexValue": "30",
                          "id": 32763,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12231:1:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "id": 32764,
                          "name": "codec",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32702,
                          "src": "12234:5:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        {
                          "id": 32765,
                          "name": "ret",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32699,
                          "src": "12241:3:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "id": 32766,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "12230:15:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_rational_0_by_1_$_t_uint64_$_t_bytes_memory_ptr_$",
                        "typeString": "tuple(int_const 0,uint64,bytes memory)"
                      }
                    },
                    "functionReturnParameters": 32697,
                    "id": 32767,
                    "nodeType": "Return",
                    "src": "12223:22:31"
                  }
                ]
              },
              "functionSelector": "868e10c4",
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "handle_filecoin_method",
              "nameLocation": "11337:22:31",
              "parameters": {
                "id": 32690,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32685,
                    "mutability": "mutable",
                    "name": "method",
                    "nameLocation": "11376:6:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 32769,
                    "src": "11369:13:31",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    },
                    "typeName": {
                      "id": 32684,
                      "name": "uint64",
                      "nodeType": "ElementaryTypeName",
                      "src": "11369:6:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 32687,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 32769,
                    "src": "11392:6:31",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    },
                    "typeName": {
                      "id": 32686,
                      "name": "uint64",
                      "nodeType": "ElementaryTypeName",
                      "src": "11392:6:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 32689,
                    "mutability": "mutable",
                    "name": "params",
                    "nameLocation": "11421:6:31",
                    "nodeType": "VariableDeclaration",
                    "scope": 32769,
                    "src": "11408:19:31",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 32688,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "11408:5:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "11359:74:31"
              },
              "returnParameters": {
                "id": 32697,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 32692,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 32769,
                    "src": "11450:6:31",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    },
                    "typeName": {
                      "id": 32691,
                      "name": "uint32",
                      "nodeType": "ElementaryTypeName",
                      "src": "11450:6:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 32694,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 32769,
                    "src": "11458:6:31",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    },
                    "typeName": {
                      "id": 32693,
                      "name": "uint64",
                      "nodeType": "ElementaryTypeName",
                      "src": "11458:6:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 32696,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 32769,
                    "src": "11466:12:31",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 32695,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "11466:5:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "11449:30:31"
              },
              "scope": 32770,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "abstract": false,
          "baseContracts": [],
          "canonicalName": "DealClient",
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            32770
          ],
          "name": "DealClient",
          "nameLocation": "2651:10:31",
          "scope": 32771,
          "usedErrors": [
            30040,
            30049,
            30052,
            30057,
            30062
          ]
        }
      ],
      "license": "UNLICENSED"
    },
    "id": 31
  }

