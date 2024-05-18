import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";
import { FONT } from "../../theme/fonts";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.ANTI_FLASH_WHITE
    },
    headerView: {
        backgroundColor: COLORS.WHITE,
        paddingVertical: 20
    },
    headerIconView: {
        paddingLeft: 15,
        marginHorizontal: 15
    },
    spendingView: {
        backgroundColor: COLORS.WHITE,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        padding: 20,
        shadowColor: COLORS.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },
    totalSpendingText: {
        fontFamily: FONT.MEDIUM_FONT,
        fontSize: 18
    },
    spendingValue: {
        fontFamily: FONT.BOLD_FONT,
        fontSize: 25
    },
    cardView: {
        marginHorizontal: 10,
        backgroundColor: COLORS.WHITE,
        borderRadius: 10,
        padding: 10,
        shadowColor: COLORS.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        marginTop: 15
    },
    cardHeaderView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    cardHeaderSubView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardCategoryIcon: {
        height: 25, width: 25,
        marginHorizontal: 10
    },
    cardCategoryTitle: {
        fontFamily: FONT.REGULAR_FONT,
        fontSize: 18
    },
    cardCategoryEditView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardAmountView: {
        fontFamily: FONT.REGULAR_FONT,
        fontSize: 18,
        marginRight: 10
    },
    pipeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    stepContainer: {
        // flexDirection: 'row',
        alignItems: 'center',
    },
    line: {

        height: 2,
        backgroundColor: '#e3e3e3',
    },
    lineCompleted: {
        backgroundColor: '#4caf50',
    },
    stepCircle: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: '#e3e3e3',
        justifyContent: 'center',
        alignItems: 'center',
    },
    stepActive: {
        backgroundColor: '#4caf50',
    },
    stepCompleted: {
        backgroundColor: '#4caf50',
    },
    stepText: {
        color: '#fff',
    },
    stepLabel: {
        marginTop: 5,
        color: '#999',
        fontSize: 12,
        textAlign: 'center',
    },
    stepLabelActive: {
        color: '#000',
    },
})
export default style;