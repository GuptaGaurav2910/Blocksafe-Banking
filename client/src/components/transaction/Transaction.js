import { useEffect, useState } from 'react'
import { AddTransactionCard } from '../AddTransactionCard';
import { Hero } from '../Hero';
import  Tabular  from '../Tabular';
import { useGlobalState,setGlobalState } from '../../store';
import {
  isWalletConnected,
  checkIfTransactionExist,
  connectWallet,
} from '../../shared/Transaction'

const Transaction = () => {
  const [connectedAccount] = useState('connectedAccount')
  useEffect(() => {
    checkEthereumAvailability();
    isWalletConnected()
  }, [])
  
  const checkEthereumAvailability = () => {
    if (typeof window.ethereum === 'undefined') {
      console.error('MetaMask is not installed or not available.');
      return;
    }
    isWalletConnected();
    checkIfTransactionExist();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <br />
      <br />
      <Hero />
      <div className="text-center mb-10">
        <br />
          <button
            onClick={connectWallet}
            className="text-white bg-blue-500 py-2 px-5 rounded-xl drop-shadow-xl border border-transparent hover:bg-transparent hover:text-blue-500 hover:border hover:border-blue-500 focus:outline-none focus:ring"
          >
            Connect Wallet
          </button>
          <button
            onClick={() => setGlobalState('modal', 'scale-100')}
            className="text-white bg-blue-500 py-2 px-5 rounded-xl drop-shadow-xl border border-transparent hover:bg-transparent hover:text-blue-500 hover:border hover:border-blue-500 focus:outline-none focus:ring"
          >
            Send
      </button>
        </div>
          <AddTransactionCard />
          <Tabular />
  
    </div>
  )
}
export default Transaction