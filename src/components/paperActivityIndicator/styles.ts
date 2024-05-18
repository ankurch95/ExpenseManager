import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

const style = StyleSheet.create({
    activityIndicatorView:{
        height: 100,
        width: 100,
        alignSelf: 'center'
    },
    activityIndicatorStyle: {
         alignItems: 'center',
          flex: 1 
    },
    activityIndicatorModal:{
        backgroundColor:COLORS.WHITE,
        alignSelf:'center',
        borderRadius: 10,
    }
})

export default style;