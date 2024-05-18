import { StyleSheet } from "react-native";
import { FONT } from "../../theme/fonts";
import { COLORS } from "../../theme/colors";

const style = StyleSheet.create({
    centerProgressTitle: {
        textAlign: 'center',
        marginTop: -100,
        marginBottom: 100,
        fontFamily: FONT.MEDIUM_FONT,
        fontSize: 20
    },
    centerProgressDesc: {
        textAlign: 'center',
        marginTop: -100,
        marginBottom: 100,
        fontFamily: FONT.MEDIUM_FONT
    },
    spendingView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -50,
        marginBottom: 20
    },
    mediumFont: {
        fontFamily: FONT.MEDIUM_FONT
    },
    boldFont: {
        fontFamily: FONT.BOLD_FONT
    },
    verticalLine: {
        height: '100%',
        width: 1,
        backgroundColor:COLORS.SILVER_FOIL
    },
})

export default style;