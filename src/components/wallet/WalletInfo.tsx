import { faTintSlash, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useHistory } from 'react-router'
import { useWeb3 } from '../../context/Web3Context'
import { data } from '../../data'
import KreditTrade from './KreditTrade'

const WalletInfo: React.FC = () => {

    const [trade, setTrade] = React.useState('buying')
    const history = useHistory()
    const { web3Instance } = useWeb3()
    
    React.useEffect(() => {
        getEthAccounts()
    }, [web3Instance])
    
    const getEthAccounts = async () => {
        if(web3Instance !== undefined){
            var accounts = await web3Instance.eth.getAccounts()
            console.log(accounts[0])
        }
    }

    return(
        <section className="px-10 py-4 font-mono text-green-400 space-y-6">
            <div className="bg-gray-900 px-8 py-4 space-y-4">
                <div className="flex items-center justify-evenly text-lg">
                    <FontAwesomeIcon icon={faWallet}/>
                    <h1 className="text-center text-gray-300">15 Kredits</h1>
                </div>
                <div className="text-md text-center text-gray-600">
                    1 Kredit = 1 USD
                </div>
            </div>
            <div className="flex items-center justify-around">
                <button onClick={() => history.push('/connect')} className="bg-gray-900 px-3 py-2 rounded-md border border-gray-800 w-full">Connect to Web3</button>
                {/* <button className=" px-3 py-2 border border-green-500 rounded-md">Sell K's</button> */}
            </div>
            {/* <KreditTrade type={trade}/> */}
        </section>
    )
}

export default WalletInfo