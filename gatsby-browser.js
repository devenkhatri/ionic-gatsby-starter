import { setupIonicReact } from '@ionic/react';
import React from 'react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './src/theme/variables.css';

const isBrowser = typeof window !== "undefined"
if(isBrowser) setupIonicReact();

// export const wrapRootElement = ({ element }) => {
//   return (
//     <IonApp>
//       <IonReactRouter>
//         <IonSplitPane contentId="main">
//           <Menu />
//           <IonRouterOutlet id="main">
//             <Route path="/" exact={true}>
//               <SecondPage />
//             </Route>
//             <Route path="/page/:name" exact={true}>
//               <Page />
//             </Route>
//           </IonRouterOutlet>
//         </IonSplitPane>
//       </IonReactRouter>
//     </IonApp>
//   )
// }