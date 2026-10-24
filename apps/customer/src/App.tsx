import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { BookingApp } from './BookingApp';
export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#080a08' }}>
        <BookingApp />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
