import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";
import { FONT } from "../../theme/fonts";

const style = StyleSheet.create({
    container: {
        backgroundColor: COLORS.ANTI_FLASH_WHITE,
        flex: 1
    },
    viewContainer: {
        padding: 15
    },
    headerView: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    headingText: {
        fontFamily: FONT.MEDIUM_FONT,
        fontSize: 19,
        flex: 1
    },
    logoutText: {
        fontFamily: FONT.MEDIUM_FONT,
        fontSize: 19
    },
    cardView: {
        backgroundColor: COLORS.WHITE,
        padding: 14,
        marginVertical: 15,
        borderRadius: 15,
        shadowColor: COLORS.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },
    cardHeaderView: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    SpendingSummaryText: {
        fontFamily: FONT.REGULAR_FONT,
        fontSize: 17,
        flex: 1
    },
    editText: {
        fontFamily: FONT.REGULAR_FONT,
        fontSize: 17,
        textDecorationLine: 'underline'
    },
    cardSubHeaderView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    chevronButtonView: {
        backgroundColor: COLORS.ANTI_FLASH_WHITE,
        borderRadius: 5,
        padding: 5
    },
    monthText: {
        fontFamily: FONT.REGULAR_FONT,
        fontSize: 17,
        textDecorationLine: 'underline'
    }
})

export default style;