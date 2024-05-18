import { StyleSheet } from "react-native";
import { FONT } from "../../theme/fonts";

const style = StyleSheet.create({
    emptyMenuView: {
        alignContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15
    },
    emptyImageView: {
        height: 150,
        width: 150
    },
    emptyMenuHeading: {
        fontFamily: FONT.MEDIUM_FONT,
        fontSize: 20
    },
    emptyMenuDesc: {
        fontFamily: FONT.REGULAR_FONT,
        fontSize: 15,
        textAlign: 'center'
    }
})
export default style