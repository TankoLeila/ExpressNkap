import { createStackNavigator } from "@react-navigation/stack";
import Splash from '../Screen/Splash';
import SignInScreen from "../Screen/Inscription";
import Connection from "../Screen/connexion";
<<<<<<< HEAD
import Accueil from "../Screen/Accueil";
=======
import Splashscreen from "../Screen/SpashScreen";
>>>>>>> 573474f934d7698cc961b93054bf53ade6fc3e5c

const stack = createStackNavigator()
export default function Root(){
    return(
<<<<<<< HEAD
            <stack.Navigator initialRouteName="Accueil">
=======
            <stack.Navigator initialRouteName="splashScreen" >
>>>>>>> 573474f934d7698cc961b93054bf53ade6fc3e5c
                    <stack.Screen component={Splash} name = " ExpressNkap"/>
                    <stack.Screen component={SignInScreen} name= "Register"/>
                    <stack.Screen component={Connection} name="Connection"/>
<<<<<<< HEAD
                    <stack.Screen component={Accueil} name ="Accueil"/>
=======
                    <stack.Screen component={Splashscreen} name="splashScreen"/>
>>>>>>> 573474f934d7698cc961b93054bf53ade6fc3e5c
            </stack.Navigator>
    );
}