import React, { useState } from 'react'
import { View, ScrollView, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import styles from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGear, faToolbox, faFan, faKey, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons'
import Menu from '../Menu'

const CarItem = () => {

    const [locked, setLocked] = useState(false);
    const clickLock = () => {
        if (locked) {
            setLocked(false);
        }
        else {
            setLocked(true);
        }
    }

    return (
        // views are like div
        <View style={styles.carContainer}>
            <ImageBackground
                source={require("../../assets/background.png")}
                style={styles.backgroundImage}
            />
            {/* header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.icon} icon={faGear} size={24} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Mobile</Text>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.icon} icon={faToolbox} size={24} />
                </TouchableOpacity>
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
            <ScrollView>
                {/* Control Icons */}
                <View style={styles.controls}>
                    <TouchableOpacity>
                        <View style={styles.controlsButton}>
                            <FontAwesomeIcon style={styles.icon} icon={faFan} size={24} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.controlsButton}>
                            <FontAwesomeIcon style={styles.icon} icon={faKey} size={24} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={clickLock}
                    >
                        <View style={styles.controlsButton}>
                            <FontAwesomeIcon style={styles.icon} icon={locked ? faLock : faUnlock} size={24} />
                        </View>
                    </TouchableOpacity>
                </View>
                {/* Menu */}
                <Menu />
            </ScrollView>
        </View>
    )
}

export default CarItem
