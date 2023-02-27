import { createStackNavigator } from "@react-navigation/stack";
import Splash from '../Screen/Splash';

const stack = createStackNavigator()
export default function Root(){
    return(
            <stack.Navigator initialRouteName="Splash">
                    <stack.Screen component={Splash} name = " ExpressNkap"/>
            </stack.Navigator>
    );
}