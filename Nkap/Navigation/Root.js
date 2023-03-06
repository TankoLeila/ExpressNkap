import { createStackNavigator } from "@react-navigation/stack";
import Splash from '../Screen/Splash';
import SignInScreen from "../Screen/Inscription";
import Connection from "../Screen/connexion";
import Splashscreen from "../Screen/SpashScreen";

const stack = createStackNavigator()
export default function Root(){
    return(
            <stack.Navigator initialRouteName="splashScreen" >
                    <stack.Screen component={Splash} name = " ExpressNkap"/>
                    <stack.Screen component={SignInScreen} name= "Register"/>
                    <stack.Screen component={Connection} name="Connection"/>
                    <stack.Screen component={Splashscreen} name="splashScreen"/>
            </stack.Navigator>
    );
}