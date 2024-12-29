import { useOAuth } from "@clerk/clerk-expo"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import * as webBrowser from "expo-web-browser"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Ionicons from "@expo/vector-icons/Ionicons"
import { Colors } from "@/constants/Color"

export default function Index() {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_apple" })
  const { startOAuthFlow: googleOAuth } = useOAuth({ strategy: "oauth_google" })
  const { top } = useSafeAreaInsets()
  const handleAppleOAuth = async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow()
      console.log("handel app OAuth", createdSessionId)
      if (createdSessionId) {
        setActive!({ session: createdSessionId })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handelGoogleOAuth = async () => {
    try {
      const { createdSessionId, setActive } = await googleOAuth()
      console.log("handel Google OAuth", createdSessionId)
      if (createdSessionId) {
        setActive!({ session: createdSessionId })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const openLink = async (url: string) => {
    await webBrowser.openBrowserAsync(url)
  }

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Image
        source={require("@/assets/images/todoist-logo.png")}
        style={styles.logoImage}
      />
      <Image
        source={require("@/assets/images/login.png")}
        style={styles.bannerImage}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handelGoogleOAuth}>
          <Ionicons name="logo-google" size={24} />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleAppleOAuth}>
          <Ionicons name="logo-apple" size={24} />
          <Text style={styles.buttonText}>Continue with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handelGoogleOAuth}>
          <Ionicons name="mail" size={24} />
          <Text style={styles.buttonText}>Continue with Email</Text>
        </TouchableOpacity>

        <Text style={styles.descriptionText}>
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 40,
    marginTop: 20,
  },
  logoImage: {
    height: 40,
    resizeMode: "contain",
    alignSelf: "center",
  },
  bannerImage: {
    alignSelf: "center",
    height: 250,
    resizeMode: "contain",
  },
  buttonContainer: {
    gap: 20,
    marginHorizontal: 40,
  },
  button: {
    gap: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.lightBorder,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  descriptionText: {
    fontSize: 14,
    color: Colors.lightText,
    textAlign: "center",
    marginTop: 20,
  },
})
