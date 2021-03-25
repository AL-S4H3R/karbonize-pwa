import React from 'react'
import { useHistory } from 'react-router'
import environment from '../../assets/environment.svg'

const Hero: React.FC = () => {

    const history = useHistory()
    
    const gotoAuth = () => {
        history.push('/auth')
    }
        return(
            <section className="px-8 py-4 font-mono text-green-600 oveflow-hidden space-y-12">
                <div className="flex justify-center">
                    <img src={environment} alt="" className="h-64 w-64"/>
                </div>
                <div>
                    <h1 className="text-gray-300 text-center text-lg mx-3">
                        Decentralized Personal Carbon Trading
                    </h1>
                </div>
                <div className="flex justify-center">
                    <button 
                        className="p-2 bg-green-600 text-gray-300"
                        onClick={gotoAuth}
                    >
                        Get Started
                    </button>
                </div>
            </section>
        )
}

export default Hero