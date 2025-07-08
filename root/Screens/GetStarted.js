import {StyleSheet, Pressable, Image, Text, View} from 'react-native';


export default function GetStartedScreen({navigation }) {
    const logoRatio =  1.5;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width:'100%',
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        image: {
            flex: 1,
            width: '100%',
            height: undefined,
        },
        half: {
            flex: 1,
            alignItems: 'center',
            alignContent: "center",
            justifyContent: "center"

        },
            logo: {
                width: 68 * logoRatio,
                height: 32 * logoRatio,
                resizeMode: 'contain',
            },
        disc: {
            fontWeight: "700",
            fontSize: 24,
            marginTop: 60,
            color:"#161616",
            lineHeight:36,
            textAlign: 'center',
            fontFamily:"Poppins_400Regular",

        },
        minidisc: {
            fontWeight: "400",
            fontSize: 16,
            width: 300,
            marginTop: 10,
            fontFamily:"Poppins_400Regular",
            color:"#000000AB",
            textAlign: 'center',

        },
        Button: {
            backgroundColor: "black",
            paddingLeft: 50,
            paddingRight: 50,
            paddingTop: 13,
            paddingBottom: 13,
            borderRadius: 10,
            marginTop: 25,

            justifyContent: "center"
        }

    });


    return (
        <View style={styles.container}>
            <View style={styles.half}>

                <View style={{marginTop:62,justifyContent:"center",alignItems:"center",}} >

                    <Image source={require("../../assets/logo/logo.png")} style={styles.logo}/>
                </View>
                <Text style={styles.disc}>
                    Get a cheapest ride to your destination
                </Text>
                <Text style={styles.minidisc}>
                    We provide the best service to our customers
                </Text>
                <Pressable style={styles.Button}
                onPress={() => navigation.navigate('LoginScreen')}

                >
                    <Text style={{color: "white",fontFamily:"Poppins_400Regular"}}>
                        Get Started
                    </Text>
                </Pressable>
            </View>

            <Image
                style={styles.image}
                source={require('../../assets/img/getStarted.png')}
            />
        </View>)
}
