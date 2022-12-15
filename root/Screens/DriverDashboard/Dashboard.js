import {StyleSheet, ImageBackground, Text, View, ScrollView, RefreshControl} from "react-native";
import RideHistoryCard from "../../Components/RideHistoryCard";
import React, {useCallback, useContext, useEffect, useState} from "react";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {ApiUrl} from "../../Urls/ApiUrls";
import LoadingModel from "../Modal/loadingModel";
import ErrorModel from "../Modal/ErrorModel";
import {SessionContext} from "../../Context/SessionContext";
import {SwitchUserContext} from "../../Context/SwitchUserContext";

export default function Dashboard(props) {
    let appMode = useContext(SwitchUserContext);
    const [data,setData] = useState({
        "wallet": 0.0,
        "TRT": 0,
        "DC": 0
    })
    const imageSize = 50;
    const CirlceSize = 12;const [rating, setRating] = useState(0);

    const styles2 = StyleSheet.create({
        conatiner: {
            flex: 1,
            flexDirection: "column",
            padding: 12,
            backgroundColor: "#ffffff",
            width: "100%",
            height: "100%",

        },
        image: {
            padding: 15,
            borderRadius:15,
            paddingVertical: 10,
            flex: 1,
            height:150,
            width:200,
            justifyContent: 'center',
        }
    })
    const styles = StyleSheet.create({
        container: {
            width: "100%",
            backgroundColor: "white",
            alignItems: 'center',
            padding: 22,
            marginTop: 50,
            justifyContent: 'center',
        },
        FirstContainer: {
            width: "100%",
            paddingVertical:38,
            padding:18,
            backgroundColor: "rgba(0,0,0,0.8)",
            flexDirection: "column",
            borderRadius: 10,
            marginTop: 10,
            height:150,
            overflow:"hidden",
            marginBottom: 10,


        },
        flex: {
            flexDirection: "row"
        },
        ThirdContainer: {
            marginEnd: 15,
            width: "48%",
            height:150,
            backgroundColor: "#d3d1d1",
            overflow:"hidden",
            borderRadius: 10,


            marginBottom: 10,



        },
        BackContainer: {
            width: "100%",

            flexDirection: "row",
            borderRadius: 15,

            paddingVertical: 30,
            marginBottom: 10,

        },
        PicContainer: {

            alignItems: 'center',
            alignSelf: "center",

        },
        pic: {
            textAlign: "center",
            alignSelf: "center"
        },
        Right: {

            alignSelf: "flex-end"
        }
        ,
        Circle: {
            width: CirlceSize,
            height: CirlceSize,
            borderRadius: CirlceSize / 2,
            backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "center",
        },
        innerCircle: {
            width: CirlceSize / 2,
            height: CirlceSize / 2,
            borderRadius: CirlceSize / 4,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
        },
        title: {
            color: "rgba(0, 0, 0, 0.5)",
            fontSize: 10,
            fontWeight: "400",

        },
        dateFare: {


            marginEnd: 10,
            textAlign: "right",

        }
        ,
        Address: {
            fontWeight: "400",
            fontSize: 10,
        },
        titleAddressContainer: {
            paddingStart: 3,
            flexDirection: "column",
        },
        Button: {
            backgroundColor: "black",
            width: "45%",
            borderRadius: 10,
            marginTop: 35,
            marginBottom: 15,
            height: 50,
            alignContent: "center",
            justifyContent: "center",
            alignSelf: "center",
            alignItems: "center",
        }
    });
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getDashboard()
        wait(2000).then(() => setRefreshing(false));
    }, []);
    async function getDashboard() {

        let type= ""
        if(appMode.SwitchUserDefaultData.isUserDriver)
        {
            type="asDriver"
        }
        else {
            type="asRider"
        }
        let data={
            type:type
        }

        await fetch(ApiUrl.dashboard, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Token " + session.SessionData.Token
            },
            body: JSON.stringify(data)
        }).then(response => response.json()
        ).then(data => {


            if (data.status <= 200) {
                setData(data.msg)
                setLoading(false)
            } else {
                setLoading(false)
                setErrors([data.msg])
            }
        }).catch(function (error) {
            setLoading(false)

            setErrors(["Network Error" + error])
        });
    }
    const [errors, setErrors] = useState([]);
    const [isLoadingOpen, setLoading] = useState(true);
    const session = useContext(SessionContext);
    useEffect(()=>{
        getDashboard()
        },[]
    )
    return (
        <ScrollView style={styles2.conatiner}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
        >
            <View style={[styles.FirstContainer]}>
                {/*<ImageBackground source={require("../../../assets/img/Rectangle1.png")} style={{paddingVertical:38,padding:18}} resizeMode="stretch" resizeMethod="resize" >*/}
                <Text style={{color: "rgba(255, 255, 255, 0.71)",fontFamily:"Poppins_400Regular",}}>{appMode.SwitchUserDefaultData.isUserDriver? "Total Earnings": "Your balance"}</Text>
                <Text style={{color: "white", fontSize: 35, fontWeight: "800",fontFamily:"Poppins_400Regular",}}>{parseFloat(data.wallet).toFixed(2)} R</Text>
                <Text style={{color: "#FFFFFF",fontFamily:"Poppins_400Regular",}}>Updated Today</Text>

                {/*</ImageBackground>*/}

            </View>
            <Text style={{color: "black", marginTop: 15, fontWeight: "500",fontFamily:"Poppins_400Regular", fontSize: 16}}>Weekly Stats</Text>
            <View style={styles.BackContainer}>
                <View style={styles.ThirdContainer}>
                    <ImageBackground source={require("../../../assets/img/Rectangle15.png")} style={styles2.image}
                                     resizeMode="stretch">
                        <View style={{backgroundColor: "white", alignSelf: "flex-start", padding: 5, borderRadius: 5}}>
                            <MaterialCommunityIcons name="steering" size={24} color="black"/>
                        </View>
                        <Text style={{fontSize: 35,fontFamily:"Poppins_400Regular", fontWeight: "800"}}>{parseInt(data.TRT)}</Text>
                        <Text style={{color: "rgba(0, 0, 0, 0.47)",fontFamily:"Poppins_400Regular",fontSize:11}}>Total Rides Taken</Text>

                    </ImageBackground>

                </View>
                <View style={styles.ThirdContainer}>
                    <ImageBackground source={require("../../../assets/img/dashboard3.png")} style={styles2.image} resizeMode="cover" >
                    <View style={{backgroundColor: "white",fontFamily:"Poppins_400Regular", alignSelf: "flex-start", padding: 5, borderRadius: 5}}>
                        <MaterialCommunityIcons name="map-marker-distance" size={24} color="black"/>
                    </View>
                    <View style={styles.flex}>
                        <Text style={{fontSize: 32, fontWeight: "800", alignSelf: "flex-end",fontFamily:"Poppins_400Regular",}}>{parseFloat(data.DC).toFixed(1)}</Text>
                        <Text
                            style={{fontSize: 15, fontWeight: "800", alignSelf: "flex-end",fontFamily:"Poppins_400Regular", marginBottom: 5}}>KM</Text>
                    </View>
                    <Text style={{color: "rgba(0, 0, 0, 0.47)",fontFamily:"Poppins_400Regular",fontSize:11}}>Distance Covered</Text>

                    </ImageBackground>

                </View>
                <LoadingModel modalVisible={isLoadingOpen} setModalVisible={setLoading}/>
                <ErrorModel errors={errors} setErrors={setErrors} />
            </View>
        </ScrollView>
    )
}