import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "orange"
    },
    header: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
    icon: {
        color: "white"
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute", //puts the image behind everything else
    },
    batterySection: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    batteryImage: {
        height: 26,
        width: 70,
        marginRight: 12,
    },
    batteryText: {
        color: "white",
        fontSize: 35,
        fontWeight: "bold",
    },
    statusText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    status: {
        alignItems: "center",
    }
});

export default styles;