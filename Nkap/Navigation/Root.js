import { createStackNavigator } from "@react-navigation/stack";
import Splash from '../Screen/Splash';
import Inscription from '../Screen/Inscription';
import Connection from "../Screen/connexion";

const stack = createStackNavigator()
export default function Root(){
    return(
            <stack.Navigator initialRouteName="Splash">
                    <stack.Screen component={Splash} name = " ExpressNkap"/>
                    <stack.Screen component={Inscription} name= "Register"/>
                    <stack.Screen component={Connection} name="Connection"/>
            </stack.Navigator>
    );
}