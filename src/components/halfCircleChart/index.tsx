import { View, Text } from 'react-native'
import React from 'react'
import { ProgressCircle } from 'react-native-svg-charts'
import { COLORS } from '../../theme/colors'
import style from './styles'

interface HalfCircleChartProps {
    progressPercentageValue: number
    progressCenterDesc: string
    isNextButtonDisabled: boolean
    spendingLimit: number
    amountSpent: number
    chartActiveColor:string
}
export default function HalfCircleChart({ progressPercentageValue, progressCenterDesc, spendingLimit, amountSpent, isNextButtonDisabled,chartActiveColor }: HalfCircleChartProps) {    
    return (
        <View>
            <ProgressCircle
                style={{ height: 320, marginBottom: -130, marginTop: 30 }}
                progress={progressPercentageValue}
                progressColor={isNextButtonDisabled ? chartActiveColor: COLORS.BRIGHT_GRAY}
                backgroundColor={COLORS.BRIGHT_GRAY}
                startAngle={Math.PI * 0.5}
                endAngle={-Math.PI * 0.5}
                strokeWidth={20}
                cornerRadius={10}
            />

            <Text style={style.centerProgressTitle}>{(isNextButtonDisabled ? progressPercentageValue : 0) * 100}%</Text>
            <Text style={style.centerProgressDesc}>{progressCenterDesc}</Text>

            <View style={style.spendingView}>
                <View style={{ alignItems: 'center' }}>
                    <View>
                        <Text style={style.mediumFont}>Spending Limit</Text>
                    </View>
                    <View>
                        <Text style={style.boldFont}>AED {spendingLimit}</Text>
                    </View>
                </View>

                <View style={style.verticalLine} />

                <View style={{ alignItems: 'center' }}>
                    <View>
                        <Text style={style.mediumFont}>Amount Spent</Text>
                    </View>
                    <View>
                        <Text style={style.boldFont}>AED {amountSpent}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}