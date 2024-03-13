import React from 'react'
import { Image, Pressable, PressableProps, Text, View } from 'react-native'
import { styles } from './styles'

export type IngredientProps = {
    name: string,
    image: string,
    selected?: boolean,
    onPress?: Function
}


export default function Ingredient({ name, image, selected = false, onPress, ...rest}: IngredientProps & PressableProps) {
    console.log(selected)
  return (
        <Pressable style={[styles.container, selected && styles.selected]} onPress={onPress}>
            <Image style={styles.image} source={{uri: image}}/>
            <Text style={styles.title}>{name}</Text>
        </Pressable>
  )
}
