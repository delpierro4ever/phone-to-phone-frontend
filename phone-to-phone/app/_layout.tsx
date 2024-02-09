import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Stack, router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    popBold: require('../assets/fonts/Poppins-Bold.ttf'),
    popMed: require('../assets/fonts/Poppins-Medium.ttf'),
    popReg: require('../assets/fonts/Poppins-Regular.ttf'),
    popSemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {


  return (

      <Stack >
        <Stack.Screen name="onboarding/onBoarding" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(signIn)/Login" options={{ headerShown: false }} />
        <Stack.Screen name="(signIn)/Signup" options={{ headerShown: false }} />
        <Stack.Screen name="(signIn)/accountCreatedSuccess" options={{ headerShown: false }} />
        <Stack.Screen name='(modals)/pay' options={{ presentation: 'transparentModal', 
        animation: 'fade',
        headerLeft: () => (                  
          <TouchableOpacity onPress={() => router.back}>
            <Ionicons name='close-outline' size={28} />
          </TouchableOpacity>
        )}} />  
      </Stack>
  );
}
