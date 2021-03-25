import React from 'react'
import BuyKredit from './BuyKredit';

interface KreditProps {
    type: string;
}

const KreditTrade: React.FC<KreditProps> = ({type}) => {
    
    switch(type){
        case 'selling':
            return(
                <>
                    Selling here
                </>
            )
            break;

        case 'buying':
            return(
                <BuyKredit />
            )
            break;

        default: return(<></>)
    }
}

export default KreditTrade