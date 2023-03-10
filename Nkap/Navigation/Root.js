import { createStackNavigator } from "@react-navigation/stack";
import Splashscreen from "../Screen/SpashScreen"
import Splash from '../Screen/Splash';
import Inscription from '../Screen/Inscription';
import Connection from "../Screen/connexion";
import Personnel from "../Screen/Personnel";
import Accueil from "../Screen/Accueil";
import Recharge from "../Screen/Recharge"

const stack = createStackNavigator()
export default function Root(){
    return(

            <stack.Navigator initialRouteName="splashScreen" >
                    <stack.Screen component={Splash} name = " ExpressNkap"/>
                    <stack.Screen component={Inscription} name= "Register"/>
                    <stack.Screen component={Connection} name="Connection"/>
                    <stack.Screen component={Accueil} name ="Accueil"/>
                    <stack.Screen options={{headerShown:false}} 
                        component={Splashscreen} name="splashScreen"/>
                    <stack.Screen component={Recharge} name="Recharge"/>
                    <stack.Screen component={Personnel} name="personnel"/>
            </stack.Navigator>
    );
}