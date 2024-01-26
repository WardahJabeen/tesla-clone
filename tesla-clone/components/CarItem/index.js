import React from 'react'
import { View, Text } from 'react-native'
import styles from "./styles"

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
            {/* header */}
            <View style={styles.header}>
                <Text>Settings</Text>
                <Text>Mobile</Text>
                <Text>Surprise</Text>
            </View>
        </View>
    )
}

export default CarItem
