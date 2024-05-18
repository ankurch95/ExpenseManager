import { View, Text, Image, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../../theme/colors'
import style from './styles'
import StepIndicator from 'react-native-step-indicator';
import { FONT } from '../../theme/fonts'
import { images } from '../../assets/images';
import { MyContext } from '../../Context'


const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 4,
    currentStepStrokeWidth: 1,
    stepStrokeWidth: 1,
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorLabelFontSize: 1,
    currentStepIndicatorLabelFontSize: 1,
    stepIndicatorLabelFinishedColor: COLORS.SUNRAY_20,
    labelColor: '#999999',
    labelSize: 13,
    labelFontFamily: FONT.BOLD_FONT
}
export default function EditSpendingScreen() {
    const labels = [0, 1000, 2000, 3000, 4000, 5000];
    const navigation = useNavigation()
    const { value } = useContext(MyContext);
    const { setValue } = useContext(MyContext);
    const [clothingCurrentPosition, setClothingCurrentPosition] = useState(labels.indexOf(value.clothingCurrentValue));
    const [beautyCurrentPosition, setBeautyCurrentPosition] = useState(labels.indexOf(value.beautyCurrentValue));
    const [fitnessCurrentPosition, setFitnessCurrentPosition] = useState(labels.indexOf(value.fitnessCurrentValue));
    const [foodCurrentPosition, setFoodCurrentPosition] = useState(labels.indexOf(value.foodCurrentValue));
    const [housingCurrentPosition, setHousingCurrentPosition] = useState(labels.indexOf(value.housingCurrentValue));
    const [otherCurrentPosition, setOtherCurrentPosition] = useState(labels.indexOf(value.otherCurrentValue));

    const [clothingCurrentValue, setClothingCurrentValue] = useState(labels[clothingCurrentPosition]);
    const [beautyCurrentValue, setBeautyCurrentValue] = useState(labels[beautyCurrentPosition]);
    const [fitnessCurrentValue, setFitnessCurrentValue] = useState(labels[fitnessCurrentPosition]);
    const [foodCurrentValue, setFoodCurrentValue] = useState(labels[foodCurrentPosition]);
    const [housingCurrentValue, setHousingCurrentValue] = useState(labels[housingCurrentPosition]);
    const [otherCurrentValue, setOtherCurrentValue] = useState(labels[otherCurrentPosition]);
    const [totalSpending, setTotalSpending] = useState(0);



    const handleButtonPress = () => {
        setValue({
            clothingCurrentValue,
            beautyCurrentValue,
            fitnessCurrentValue,
            foodCurrentValue,
            housingCurrentValue,
            otherCurrentValue
        });
    };

    useEffect(() => {
        let sum = clothingCurrentValue + beautyCurrentValue + fitnessCurrentValue + foodCurrentValue + housingCurrentValue + otherCurrentValue
        setTotalSpending(sum)
    }, [clothingCurrentValue, beautyCurrentValue, fitnessCurrentValue, foodCurrentValue, housingCurrentValue, otherCurrentValue])


    return (
        <View style={style.container}>
            <View style={style.headerView}>
                <Icon
                    name='arrow-back-ios'
                    size={25}
                    color={COLORS.BLACK}
                    style={style.headerIconView}
                    onPress={() => { navigation.goBack(), handleButtonPress() }} />
            </View>
            <ScrollView>
                <View style={style.container}>

                    <View style={style.spendingView}>
                        <Text style={style.totalSpendingText}>Total Spending</Text>
                        <Text style={style.spendingValue}>AED {totalSpending}</Text>
                    </View>

                    <View style={style.cardView}>
                        <View style={style.cardHeaderView}>
                            <View style={style.cardHeaderSubView}>
                                <Image
                                    source={images.TShirt}
                                    style={style.cardCategoryIcon}
                                />
                                <Text style={style.cardCategoryTitle}>Clothing</Text>
                            </View>

                            <View style={style.cardCategoryEditView}>
                                <Text style={style.cardAmountView}>AED {clothingCurrentValue}</Text>
                                <AntDesign
                                    name='edit'
                                    size={25} />
                            </View>
                        </View>
                        <StepIndicator
                            stepCount={6}
                            currentPosition={clothingCurrentPosition}
                            // currentPosition={console.log(labels.indexOf( clothingCurrentValue))}
                            labels={labels}
                            onPress={(position: number) => { setClothingCurrentPosition(position), setClothingCurrentValue(labels[position]) }}
                            customStyles={{
                                ...customStyles,
                                separatorStrokeFinishedWidth: 6,
                                currentStepLabelColor: COLORS.SUNRAY,
                                stepStrokeCurrentColor: COLORS.SUNRAY,
                                stepStrokeFinishedColor: COLORS.SUNRAY,
                                separatorFinishedColor: COLORS.SUNRAY,
                                stepIndicatorFinishedColor: COLORS.SUNRAY,
                                stepIndicatorCurrentColor: COLORS.SUNRAY,
                                stepIndicatorLabelCurrentColor: COLORS.SUNRAY,
                                stepStrokeUnFinishedColor: COLORS.SUNRAY_20,
                                separatorUnFinishedColor: COLORS.SUNRAY_20,
                                stepIndicatorLabelUnFinishedColor: COLORS.SUNRAY_20,
                            }}

                        />
                    </View>


                    <View style={style.cardView}>
                        <View style={style.cardHeaderView}>
                            <View style={style.cardHeaderSubView}>
                                <Image
                                    source={images.Mirror}
                                    style={{ ...style.cardCategoryIcon, tintColor: COLORS.CYAN_AZURE }}
                                />
                                <Text style={style.cardCategoryTitle}>Beauty</Text>
                            </View>

                            <View style={style.cardCategoryEditView}>
                                <Text style={style.cardAmountView}>AED {beautyCurrentValue}</Text>
                                <AntDesign
                                    name='edit'
                                    size={25} />
                            </View>
                        </View>
                        <StepIndicator
                            stepCount={6}
                            currentPosition={beautyCurrentPosition}
                            labels={labels}
                            onPress={(position: number) => { setBeautyCurrentPosition(position), setBeautyCurrentValue(labels[position]) }}
                            customStyles={{
                                ...customStyles,
                                separatorStrokeFinishedWidth: 6,
                                currentStepLabelColor: COLORS.CYAN_AZURE,
                                stepStrokeCurrentColor: COLORS.CYAN_AZURE,
                                stepStrokeFinishedColor: COLORS.CYAN_AZURE,
                                separatorFinishedColor: COLORS.CYAN_AZURE,
                                stepIndicatorFinishedColor: COLORS.CYAN_AZURE,
                                stepIndicatorCurrentColor: COLORS.CYAN_AZURE,
                                stepIndicatorLabelCurrentColor: COLORS.CYAN_AZURE,
                                stepStrokeUnFinishedColor: COLORS.CYAN_AZURE_20,
                                separatorUnFinishedColor: COLORS.CYAN_AZURE_20,
                                stepIndicatorLabelUnFinishedColor: COLORS.CYAN_AZURE_20,
                            }}

                        />
                    </View>


                    <View style={style.cardView}>
                        <View style={style.cardHeaderView}>
                            <View style={style.cardHeaderSubView}>
                                <Image
                                    source={images.HealthFitness}
                                    style={style.cardCategoryIcon}
                                />
                                <Text style={style.cardCategoryTitle}>Health & Fitness</Text>
                            </View>

                            <View style={style.cardCategoryEditView}>
                                <Text style={style.cardAmountView}>AED {fitnessCurrentValue}</Text>
                                <AntDesign
                                    name='edit'
                                    size={25} />
                            </View>
                        </View>
                        <StepIndicator
                            stepCount={6}
                            currentPosition={fitnessCurrentPosition}
                            labels={labels}
                            onPress={(position: number) => { setFitnessCurrentPosition(position), setFitnessCurrentValue(labels[position]) }}
                            customStyles={{
                                ...customStyles,
                                separatorStrokeFinishedWidth: 6,
                                currentStepLabelColor: COLORS.DEEP_SAFFRON,
                                stepStrokeCurrentColor: COLORS.DEEP_SAFFRON,
                                stepStrokeFinishedColor: COLORS.DEEP_SAFFRON,
                                separatorFinishedColor: COLORS.DEEP_SAFFRON,
                                stepIndicatorFinishedColor: COLORS.DEEP_SAFFRON,
                                stepIndicatorCurrentColor: COLORS.DEEP_SAFFRON,
                                stepIndicatorLabelCurrentColor: COLORS.DEEP_SAFFRON,
                                stepStrokeUnFinishedColor: COLORS.DEEP_SAFFRON_20,
                                separatorUnFinishedColor: COLORS.DEEP_SAFFRON_20,
                                stepIndicatorLabelUnFinishedColor: COLORS.DEEP_SAFFRON_20,
                            }}

                        />
                    </View>


                    <View style={style.cardView}>
                        <View style={style.cardHeaderView}>
                            <View style={style.cardHeaderSubView}>
                                <Image
                                    source={images.Food}
                                    style={style.cardCategoryIcon}
                                />
                                <Text style={style.cardCategoryTitle}>Food</Text>
                            </View>

                            <View style={style.cardCategoryEditView}>
                                <Text style={style.cardAmountView}>AED {foodCurrentValue}</Text>
                                <AntDesign
                                    name='edit'
                                    size={25} />
                            </View>
                        </View>
                        <StepIndicator
                            stepCount={6}
                            currentPosition={foodCurrentPosition}
                            labels={labels}
                            onPress={(position: number) => { setFoodCurrentPosition(position), setFoodCurrentValue(labels[position]) }}
                            customStyles={{
                                ...customStyles,
                                separatorStrokeFinishedWidth: 6,
                                currentStepLabelColor: COLORS.ICEBERG,
                                stepStrokeCurrentColor: COLORS.ICEBERG,
                                stepStrokeFinishedColor: COLORS.ICEBERG,
                                separatorFinishedColor: COLORS.ICEBERG,
                                stepIndicatorFinishedColor: COLORS.ICEBERG,
                                stepIndicatorCurrentColor: COLORS.ICEBERG,
                                stepIndicatorLabelCurrentColor: COLORS.ICEBERG,
                                stepStrokeUnFinishedColor: COLORS.ICEBERG_20,
                                separatorUnFinishedColor: COLORS.ICEBERG_20,
                                stepIndicatorLabelUnFinishedColor: COLORS.ICEBERG_20,
                            }}

                        />
                    </View>


                    <View style={style.cardView}>
                        <View style={style.cardHeaderView}>
                            <View style={style.cardHeaderSubView}>
                                <Image
                                    source={images.House}
                                    style={style.cardCategoryIcon}
                                />
                                <Text style={style.cardCategoryTitle}>Housing</Text>
                            </View>

                            <View style={style.cardCategoryEditView}>
                                <Text style={style.cardAmountView}>AED {housingCurrentValue}</Text>
                                <AntDesign
                                    name='edit'
                                    size={25} />
                            </View>
                        </View>
                        <StepIndicator
                            stepCount={6}
                            currentPosition={housingCurrentPosition}
                            labels={labels}
                            onPress={(position: number) => { setHousingCurrentPosition(position), setHousingCurrentValue(labels[position]) }}
                            customStyles={{
                                ...customStyles,
                                separatorStrokeFinishedWidth: 6,
                                currentStepLabelColor: COLORS.PASTEL_PINK,
                                stepStrokeCurrentColor: COLORS.PASTEL_PINK,
                                stepStrokeFinishedColor: COLORS.PASTEL_PINK,
                                separatorFinishedColor: COLORS.PASTEL_PINK,
                                stepIndicatorFinishedColor: COLORS.PASTEL_PINK,
                                stepIndicatorCurrentColor: COLORS.PASTEL_PINK,
                                stepIndicatorLabelCurrentColor: COLORS.PASTEL_PINK,
                                stepStrokeUnFinishedColor: COLORS.PASTEL_PINK_20,
                                separatorUnFinishedColor: COLORS.PASTEL_PINK_20,
                                stepIndicatorLabelUnFinishedColor: COLORS.PASTEL_PINK_20,
                            }}

                        />
                    </View>


                    <View style={style.cardView}>
                        <View style={style.cardHeaderView}>
                            <View style={style.cardHeaderSubView}>
                                <Image
                                    source={images.Beauty}
                                    style={style.cardCategoryIcon}
                                />
                                <Text style={style.cardCategoryTitle}>Beauty</Text>
                            </View>

                            <View style={style.cardCategoryEditView}>
                                <Text style={style.cardAmountView}>AED {otherCurrentValue}</Text>
                                <AntDesign
                                    name='edit'
                                    size={25} />
                            </View>
                        </View>
                        <StepIndicator
                            stepCount={6}
                            currentPosition={otherCurrentPosition}
                            labels={labels}
                            onPress={(position: number) => { setOtherCurrentPosition(position), setOtherCurrentValue(labels[position]) }}
                            customStyles={{
                                ...customStyles,
                                separatorStrokeFinishedWidth: 6,
                                currentStepLabelColor: COLORS.SEA_SERPENT,
                                stepStrokeCurrentColor: COLORS.SEA_SERPENT,
                                stepStrokeFinishedColor: COLORS.SEA_SERPENT,
                                separatorFinishedColor: COLORS.SEA_SERPENT,
                                stepIndicatorFinishedColor: COLORS.SEA_SERPENT,
                                stepIndicatorCurrentColor: COLORS.SEA_SERPENT,
                                stepIndicatorLabelCurrentColor: COLORS.SEA_SERPENT,
                                stepStrokeUnFinishedColor: COLORS.SEA_SERPENT_20,
                                separatorUnFinishedColor: COLORS.SEA_SERPENT_20,
                                stepIndicatorLabelUnFinishedColor: COLORS.SEA_SERPENT_20,
                            }}

                        />
                    </View>


                </View>
            </ScrollView>
        </View>
    )
}