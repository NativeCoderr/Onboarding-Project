import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

function Onboarding2({ navigation }) {
  return (
    <View style={{ width: "100%", height: "100%" }}>
    <LinearGradient colors={['#94b9ff', '#94b9ff', '#b5efc2', '#b5efc2', '#94b9ff']} style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={require("../assets/img/onboardinglogo.png")} style={{ marginBottom: 30 }} />
        <Image source={require("../assets/img/secondimage.png")} style={{ marginTop: 40 }} />
        <View style={{ display: "flex", justifyContent: "center", width: "70%", marginTop: 50 }}>
          <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "700" }}>Time to collaborate</Text>
          <Text style={{ textAlign: "center", fontSize: 14, fontWeight: "500", marginTop: 14 }}>You can invite all your team and start working together to make your dreams come true.</Text>
        </View>
        <View style={{ marginVertical: 14, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
          <Text style={{ width: 20, height: 10, backgroundColor: "#A9B1AB", borderRadius: 30, }}></Text>
          <Text style={{ width: 20, height: 10, backgroundColor: "#0057FB", borderRadius: 30, marginHorizontal: 10 }}></Text>
          <Text style={{ width: 20, height: 10, backgroundColor: "#A9B1AB", borderRadius: 30 }}></Text>
        </View>
      </View>
      <View style={{display:"flex", justifyContent:"space-between", alignItems:"center", flexDirection:"row", marginVertical:50}}>
      <TouchableOpacity onPress={()=> navigation.navigate("Onboardingfirst")}>
        <View style={{
          backgroundColor: "#0057FB",
          width: 100,
          height: 46,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30
        }}>
          <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}>Back</Text>
        </View>
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("Onboarding3")}>
        <View style={{
          backgroundColor: "#0057FB",
          width: 100,
          height: 46,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTopLeftRadius:30,
          borderBottomLeftRadius:30
        }}>
          <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}>Next</Text>
        </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  </View>
  )
}

export default Onboarding2
