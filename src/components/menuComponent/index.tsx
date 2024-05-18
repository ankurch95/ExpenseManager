import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme/colors'
import style from './styles'
import { images } from '../../assets/images'
import MenuIcon from '../menuIcon'


interface MenuComponentProps {
  clothingFill: number,
  onPressClothing: () => void,
  beautyFill: number,
  onPressBeauty: () => void,
  healthFitnessFill: number,
  onPressHealthFitness: () => void,
  foodFill: number,
  onPressFood: () => void,
  housingFill: number,
  onPressHousing: () => void,
  otherFill: number,
  onPressOther: () => void,
  selectedMenu: string,
}
export default function MenuComponent(props: MenuComponentProps) {
  return (
    <View>
      <View style={style.footerView}>
        <Pressable
          style={style.footerIconView}
          onPress={props.onPressClothing}>
          <MenuIcon
            fillValue={props.clothingFill}
            fillColor={COLORS.SUNRAY}
            color={props.selectedMenu == 'Clothing'   ? COLORS.SUNRAY : COLORS.SUNRAY_20 }
            img={images.TShirt} />
          <Text style={style.footerIconText}>Clothings</Text>
        </Pressable>
        <Pressable
          style={style.footerIconView}
          onPress={props.onPressBeauty}>
          <MenuIcon
            fillValue={props.beautyFill}
            fillColor={COLORS.CYAN_AZURE}
            color={props.selectedMenu == 'Beauty' ? COLORS.CYAN_AZURE : COLORS.CYAN_AZURE_20 }
            img={images.Mirror} />
          <Text style={style.footerIconText}>Beauty</Text>
        </Pressable>
        <Pressable
          style={style.footerIconView}
          onPress={props.onPressHealthFitness}>
          <MenuIcon
            fillValue={props.healthFitnessFill}
            fillColor={COLORS.DEEP_SAFFRON}
            color={props.selectedMenu == 'Health & Fitness' ? COLORS.DEEP_SAFFRON : COLORS.DEEP_SAFFRON_20}
            img={images.HealthFitness} />
          <Text style={style.footerIconText}>Health & Fitness</Text>
        </Pressable>
      </View>


      <View style={style.footerView}>
        <Pressable
          style={style.footerIconView}
          onPress={props.onPressFood}>
          <MenuIcon
            fillValue={props.foodFill}
            fillColor={COLORS.ICEBERG}
            color={props.selectedMenu == 'Food' ? COLORS.ICEBERG : COLORS.ICEBERG_20 }
            img={images.Food} />
          <Text style={style.footerIconText}>Food</Text>
        </Pressable>
        <Pressable
          style={style.footerIconView}
          onPress={props.onPressHousing}>
          <MenuIcon
            fillValue={props.housingFill}
            fillColor={COLORS.PASTEL_PINK}
            color={props.selectedMenu == 'Housing' ? COLORS.PASTEL_PINK : COLORS.PASTEL_PINK_20 }
            img={images.House} />
          <Text style={style.footerIconText}>Housing</Text>
        </Pressable>
        <Pressable
          style={style.footerIconView}
          onPress={props.onPressOther}>
          <MenuIcon
            fillValue={props.otherFill}
            fillColor={COLORS.SEA_SERPENT}
            color={props.selectedMenu == 'Other' ? COLORS.SEA_SERPENT : COLORS.SEA_SERPENT_20 }
            img={images.Beauty} />
          <Text style={style.footerIconText}>Beauty</Text>
        </Pressable>
      </View>
    </View>
  )
}