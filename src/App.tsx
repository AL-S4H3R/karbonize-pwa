import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

//TailwindCSS
import './index.css'

//Views
import Landing from './views/Landing';
import Dashboard from './views/Dashboard';
import Auth from './views/Auth';
import MyAccount from './views/MyAccount';
import MyWallet from './views/MyWallet';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
		<IonRouterOutlet>
			<Route exact path="/" component={Landing}/>
			<Route path="/dashboard" component={Dashboard}/>
			<Route path="/auth" component={Auth} />
			<Route path="/account" component={MyAccount} />
			<Route path="/wallet" component={MyWallet} />
		</IonRouterOutlet>
	</IonReactRouter>
  </IonApp>
);

export default App;
