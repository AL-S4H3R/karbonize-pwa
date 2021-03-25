import React from 'react'
import { IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { calendar } from 'ionicons/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faHome, faSearchLocation, faUser } from '@fortawesome/free-solid-svg-icons'

const BottomTabs: React.FC = () => {
    return(
        <footer className="absolute bottom-0 bg-gray-900 w-full p-2 py-3">
            <div className="px-8 my-2 flex justify-between">
                <div>
                    <FontAwesomeIcon icon={faHome} className="text-2xl"/>
                </div>
                <div>
                    <FontAwesomeIcon icon={faSearchLocation} className="text-2xl"/>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCartArrowDown} className="text-2xl"/>
                </div>
                <div>
                    <FontAwesomeIcon icon={faUser} className="text-2xl"/>
                </div>
            </div>
        </footer>
    )
}

export default BottomTabs