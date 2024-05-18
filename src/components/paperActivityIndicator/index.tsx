import { View } from 'react-native'
import React from 'react'
import { ActivityIndicator, Modal, Portal } from 'react-native-paper'
import style from './styles'
import { COLORS } from '../../theme/colors'

interface PaperActivityIndicatorProps {
    visibility: boolean
}
const PaperActivityIndicator = ({ visibility }: PaperActivityIndicatorProps) => {
    return (
        <Portal>
            <Modal
                dismissable={false}
                visible={visibility}
                contentContainerStyle={style.activityIndicatorModal}>
                <View style={style.activityIndicatorView}>
                    <ActivityIndicator
                        style={style.activityIndicatorStyle}
                        color={COLORS.BLACK} />
                </View>
            </Modal>
        </Portal>
    )
}

export default PaperActivityIndicator
