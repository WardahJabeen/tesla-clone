import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGear, faToolbox } from '@fortawesome/free-solid-svg-icons'

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={require("../../assets/background.png")}
                style={styles.backgroundImage}
            />
            {/* header */}
            <View style={styles.header}>
                <FontAwesomeIcon style={styles.icon} icon={faGear} size={24} />
                <Text style={styles.headerTitle}>Mobile</Text>
                <FontAwesomeIcon style={styles.icon} icon={faToolbox} size={24} />
            </View>
        </View>
    )
}

export default CarItem
