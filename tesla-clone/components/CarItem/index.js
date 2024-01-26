import React from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'
import styles from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGear, faToolbox } from '@fortawesome/free-solid-svg-icons'

const CarItem = () => {
    return (
        // views are like div
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
            {/* mileage */}
            <View style={styles.batterySection}>
                <Image
                    source={require("../../assets/battery.png")}
                    style={styles.batteryImage}
                />
                <Text style={styles.batteryText}>150 miles</Text>
            </View>
            {/* status */}
            <View style={styles.status}>
                <Text style={styles.statusText}>Parked</Text>
            </View>
        </View>
    )
}

export default CarItem
