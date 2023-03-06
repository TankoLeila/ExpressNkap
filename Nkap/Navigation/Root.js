import { createStackNavigator } from "@react-navigation/stack";
import Splash from '../Screen/Splash';
import SignInScreen from "../Screen/Inscription";
import Connection from "../Screen/connexion";
import Accueil from "../Screen/Accueil";
import Splashscreen from "../Screen/SpashScreen";
import Recharge from "../Screen/Recharge";


const stack = createStackNavigator()
export default function Root(){
    return(

            <stack.Navigator initialRouteName="Recharge" >
                    <stack.Screen component={Splash} name = " ExpressNkap"/>
                    <stack.Screen component={SignInScreen} name= "Register"/>
                    <stack.Screen component={Connection} name="Connection"/>
                    <stack.Screen component={Accueil} name ="Accueil"/>
                    <stack.Screen component={Splashscreen} name="splashScreen"/>
                    <stack.Screen component={Recharge} name="Recharge"/>
            </stack.Navigator>
    );
}