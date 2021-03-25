import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IonPage } from '@ionic/react'
import React from 'react'
import { useHistory } from 'react-router'
import WalletHeader from '../components/wallet/WalletHeader'

const Web3Connect: React.FC = () => {

    const history = useHistory()

    return(
        <IonPage>
            <div>
                <nav className="flex items-center text-green-400 font-mono px-8 py-4 justify-between">
                    <div>
                        <FontAwesomeIcon 
                        icon={faArrowLeft} 
                        className="text-xl mt-4"
                        onClick={() => history.goBack()}
                        />
                    </div>
                </nav>
                <section className="flex justify-center font-mono text-green-500 px-10 py-4">
                    <div className="w-full space-y-8">
                        <button className="bg-gray-900 p-2 rounded-md w-full border border-green-800">Connect to Portis</button>
                        <button className="bg-gray-900 p-2 rounded-md w-full">Connect to Arkane</button>
                        <button className="bg-gray-900 p-2 rounded-md w-full">Connect to Coinbase</button>
                    </div>
                </section>
            </div>
        </IonPage>
    )
}

export default Web3Connect