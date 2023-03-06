import { createStackNavigator } from "@react-navigation/stack";
import Splash from '../Screen/Splash';
import Inscription from '../Screen/Inscription';
import Connection from "../Screen/connexion";
import Personnel from "../Screen/Personnel";

const stack = createStackNavigator()
export default function Root(){
    return(
            <stack.Navigator initialRouteName="Personnel">
                    <stack.Screen component={Splash} name = " ExpressNkap"/>
                    <stack.Screen component={Inscription} name= "Register"/>
                    <stack.Screen component={Connection} name="Connection"/>
                    <stack.Screen component={Personnel} name="Personnel"/>
            </stack.Navigator>
    );
}