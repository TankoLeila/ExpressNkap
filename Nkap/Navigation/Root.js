import { createStackNavigator } from "@react-navigation/stack";
import Splash from '../Screen/Splash';
import Inscription from '../Screen/Inscription';

const stack = createStackNavigator()
export default function Root(){
    return(
            <stack.Navigator initialRouteName="Splash">
                    <stack.Screen component={Splash} name = " ExpressNkap"/>
<<<<<<< HEAD
                    

=======
                    <stack.Screen component={Inscription} name= "Register"/>
>>>>>>> 63d93093ae836cb6b763976b6c370393097ad378
            </stack.Navigator>
    );
}