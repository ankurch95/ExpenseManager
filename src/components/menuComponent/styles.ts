import { StyleSheet } from "react-native";
import { FONT } from "../../theme/fonts";

const style = StyleSheet.create({
    footerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    footerIconView: {
        flex: 1,
        alignItems: 'center'
    },
    footerIconText: {
        fontFamily: FONT.MEDIUM_FONT,
        width: 100,
        textAlign: 'center',
        fontSize: 14,
        marginTop: 6
    },
    imageView: {
        borderRadius: 100
    },
    imageStyle: {
        width: 30,
        height: 30,
        margin: 18,
        alignSelf: 'center',
        alignItems: 'center'
    },
})

export default style