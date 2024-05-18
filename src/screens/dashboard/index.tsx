import { View, Text, Pressable, Image, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useAuth } from '../../routes/context/Auth';
import style from './styles';
import { COLORS } from '../../theme/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PaperActivityIndicator from '../../components/paperActivityIndicator';
import HalfCircleChart from '../../components/halfCircleChart';
import MenuComponent from '../../components/menuComponent';
import EmptyMenuComponent from '../../components/emptyMenuComponent';
import { useNavigation } from '@react-navigation/native';
import { MyContext } from '../../Context';


export default function DashboardScreen() {
  const auth = useAuth();
  const navigation = useNavigation()
  const { value } = useContext(MyContext);
  // const { authData, loading } = useAuth();
  const today = new Date();
  const [month, setMonth] = useState<Date>(new Date())
  const [timeoutId, setTimeoutId] = useState(null);
  const [loaderVisibility, setLoaderVisibility] = useState<boolean>(false);
  const [progressPercentage, setProgressPercentage] = useState<number>(0)
  const [progressCenterDesc, setProgressCenterDesc] = useState<string>('Total spendings')
  const [spendingLimit, setSpendingLimit] = useState<number>(0.5)
  const [amountSpent, setAmountSpent] = useState<number>(0.5)
  const [chartActiveColor, setChartActiveColor] = useState<string>(COLORS.ACTIVE_GREEN)
  const [selectedMenu, setSelectedMenu] = useState<string>('')
  const [isMenuSelected, setIsMenuSelected] = useState<boolean>(false)

  useEffect(() => {
    if (selectedMenu == 'Clothing') {
      setProgressPercentage(value.clothingCurrentValue / 5000)
    } else if (selectedMenu == 'Beauty') {
      setProgressPercentage(value.beautyCurrentValue / 5000)
    } else if (selectedMenu == 'Fitness') {
      setProgressPercentage(value.fitnessCurrentValue / 5000)
    } else if (selectedMenu == 'Food') {
      setProgressPercentage(value.foodCurrentValue / 5000)
    } else if (selectedMenu == 'Housing') {
      setProgressPercentage(value.housingCurrentValue / 5000)
    } else if (selectedMenu == 'Other') {
      setProgressPercentage(value.otherCurrentValue / 5000)
    }
  }, [value])



  useEffect(() => {
    setProgressPercentage(0.5)
    isNextButtonDisabled()
    setSpendingLimit(5000.00)
    setAmountSpent(2500.00)

  }, [])

  const totalSpend = () => {
    setSelectedMenu('Total spendings')
    setProgressPercentage(0.5)
    setProgressCenterDesc('Total spendings')
    setChartActiveColor(COLORS.ACTIVE_GREEN)
    setAmountSpent(2500.00)
    setIsMenuSelected(!isMenuSelected)
  }

  const menuSpent = (menuName: string, progressPercentage: number, chartActiveColor: string,
     amountSpentValue: number, status: boolean) => {
    setSelectedMenu(menuName)
    setProgressPercentage(progressPercentage)
    setProgressCenterDesc(menuName)
    setChartActiveColor(chartActiveColor)
    setAmountSpent(amountSpentValue)
    setIsMenuSelected(status)
  }


  const onPressLogout = () => {
    setLoaderVisibility(true)
    startTimeout()
  }

  const startTimeout = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const id = setTimeout(async () => {
      setLoaderVisibility(false)
      auth.signOut()
      clearExistingTimeout()
    }, 10000);
    setTimeoutId(id);
  };

  const clearExistingTimeout = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };



  const getNextMonth = () => {
    setMonth((prevMonth) => {
      const nextMonth = new Date(prevMonth);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      return nextMonth;
    });
  };

  const getPreviousMonth = () => {
    setMonth((prevMonth) => {
      const previousMonth = new Date(prevMonth);
      previousMonth.setMonth(previousMonth.getMonth() - 1);
      return previousMonth;
    });
  };

  const monthInString = (date: { toLocaleString: (arg0: string, arg1: { month: string; year: string; }) => any; }) => {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  const isNextButtonDisabled = () => {

    return (
      month.getMonth() === today.getMonth() &&
      month.getFullYear() === today.getFullYear()
    );
  };


  return (
    <ScrollView>
      <View style={style.viewContainer}>
        <View style={style.headerView}>
          <Text style={style.headingText}>Spending  Dashboard</Text>
          <Text
            onPress={() => onPressLogout()}
            style={style.logoutText}>Logout</Text>
        </View>


        <View style={style.cardView}>
          <View style={style.cardHeaderView}>
            <Text style={style.SpendingSummaryText}>Spending Summary</Text>
            <Text
              style={style.editText}
              onPress={() => navigation.navigate('EditSpending')}>Edit</Text>
          </View>


          <View style={style.cardSubHeaderView}>
            <Pressable
              style={style.chevronButtonView}
              onPress={() => getPreviousMonth()}>
              <Icon name="chevron-left" size={25} color={COLORS.BLACK} />
            </Pressable>

            <View style={{ flexDirection: 'row' }}>
              <Text style={style.monthText}>{monthInString(month)}</Text>
            </View>

            <Pressable
              style={style.chevronButtonView}
              disabled={isNextButtonDisabled()}
              onPress={() => { getNextMonth() }}>
              <Icon name="chevron-right" size={20} color={isNextButtonDisabled() ? COLORS.SILVER_FOIL : COLORS.BLACK} />
            </Pressable>
          </View>

          <HalfCircleChart
            progressPercentageValue={progressPercentage}
            isNextButtonDisabled={isNextButtonDisabled()}
            progressCenterDesc={progressCenterDesc}
            spendingLimit={isNextButtonDisabled() ? spendingLimit : 0}
            amountSpent={isNextButtonDisabled() ? amountSpent : 0}
            chartActiveColor={chartActiveColor}
          />

          {
            isNextButtonDisabled() ?
              <MenuComponent
                clothingFill={value.clothingCurrentValue * 2 / 100}
                beautyFill={value.beautyCurrentValue * 2 / 100}
                healthFitnessFill={value.fitnessCurrentValue * 2 / 100}
                foodFill={value.foodCurrentValue * 2 / 100}
                housingFill={value.housingCurrentValue * 2 / 100}
                otherFill={value.otherCurrentValue * 2 / 100}
                selectedMenu={progressCenterDesc}
                onPressClothing={() => {
                  if (!isMenuSelected || selectedMenu != 'Clothing') {
                    menuSpent('Clothing', value.clothingCurrentValue * 2 / 10000, COLORS.SUNRAY, value.clothingCurrentValue, !isMenuSelected)
                  } else {
                    totalSpend()
                  }
                }}
                onPressBeauty={() => {
                  if (!isMenuSelected || selectedMenu != 'Beauty') {
                    menuSpent('Beauty', value.beautyCurrentValue * 2 / 10000, COLORS.CYAN_AZURE, value.beautyCurrentValue, !isMenuSelected)
                  } else {
                    totalSpend()
                  }
                }}
                onPressHealthFitness={() => {
                  if (!isMenuSelected || selectedMenu != 'Health & Fitness') {
                    menuSpent('Health & Fitness', value.fitnessCurrentValue * 2 / 10000, COLORS.DEEP_SAFFRON, value.fitnessCurrentValue, !isMenuSelected)
                  } else {
                    totalSpend()
                  }
                }}
                onPressFood={() => {
                  if (!isMenuSelected || selectedMenu != 'Food') {
                    menuSpent('Food', value.foodCurrentValue * 2 / 10000, COLORS.ICEBERG, value.foodCurrentValue, !isMenuSelected)
                  } else {
                    totalSpend()
                  }
                }}
                onPressHousing={() => {
                  if (!isMenuSelected || selectedMenu != 'Housing') {
                    menuSpent('Housing', value.housingCurrentValue * 2 / 10000, COLORS.PASTEL_PINK, value.housingCurrentValue, !isMenuSelected)
                  } else {
                    totalSpend()
                  }
                }}
                onPressOther={() => {
                  if (!isMenuSelected || selectedMenu != 'Other') {
                    menuSpent('Other', value.otherCurrentValue * 2 / 10000, COLORS.SEA_SERPENT, value.otherCurrentValue, !isMenuSelected)
                  } else {
                    totalSpend()
                  }
                }}
              /> :
              <EmptyMenuComponent />
          }
        </View>

        <PaperActivityIndicator
          visibility={loaderVisibility} />

      </View>
    </ScrollView>
  )
}
