import { createStackNavigator } from "@react-navigation/stack";
import Splash from '../Screen/Splash';
import Inscription from '../Screen/Inscription';
import Connection from "../Screen/connexion";
import Personnel from "../Screen/Personnel";

const stack = createStackNavigator()
export default function Root(){
    return(
<<<<<<< HEAD

            <stack.Navigator initialRouteName="splashScreen" >
=======
            <stack.Navigator initialRouteName="Personnel">
>>>>>>> 9c01e383517ef6662c2a798e6740383a499c19b3
                    <stack.Screen component={Splash} name = " ExpressNkap"/>
                    <stack.Screen component={Inscription} name= "Register"/>
                    <stack.Screen component={Connection} name="Connection"/>
<<<<<<< HEAD
                    <stack.Screen component={Accueil} name ="Accueil"/>
                    <stack.Screen options={{headerShown:false}} component={Splashscreen} name="splashScreen"/>
                    <stack.Screen component={Recharge} name="Recharge"/>
=======
                    <stack.Screen component={Personnel} name="personnel"/>
>>>>>>> 9c01e383517ef6662c2a798e6740383a499c19b3
            </stack.Navigator>
    );
}