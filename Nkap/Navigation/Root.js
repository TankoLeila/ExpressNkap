import { createStackNavigator } from "@react-navigation/stack";
import Splash from '../Screen/Splash';
import Inscription from '../Screen/Inscription';
import Connection from "../Screen/connexion";
import Accueil from "../Screen/Accueil";

const stack = createStackNavigator()
export default function Root(){
    return(
            <stack.Navigator initialRouteName="Accueil">
                    <stack.Screen component={Splash} name = " ExpressNkap"/>
                    <stack.Screen component={Inscription} name= "Register"/>
                    <stack.Screen component={Connection} name="Connection"/>
                    <stack.Screen component={Accueil} name ="Accueil"/>
            </stack.Navigator>
    );
}