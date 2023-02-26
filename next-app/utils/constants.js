import ContractABI from './Instagram.json'
import Web3 from 'web3'

export const address = '0xDf0c223c5155054d46C15Ea2cF68c5c6FC3692E3' // goerli
// export const address = '0xBACAb3990b7bBA0D287C7A72A03597E48d4b104f' // local

export const createContract = () => {
  const { ethereum } = window
  if (ethereum) {
    const web3 = new Web3(ethereum)
    return new web3.eth.Contract(ContractABI.abi, address)
  }
}

export const modalStyles = {
  content: {
    height: '300px',
    width: '400px',
    margin: 'auto',
    marginTop: '150px',
    display: 'flex',
  },
  overlay: {
    backgroundColor: 'rgb(0 0 0 / 74%)',
  },
}
