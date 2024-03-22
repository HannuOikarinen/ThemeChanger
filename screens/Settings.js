import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Styles from '../Styles';
import { useTheme } from '../context/UseTheme';
import ThemeSwitchButton from '../components/ThemeSwitchButton';

export default function Settings() {
    const { isDarkMode } = useTheme()
  return (
    <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
        <ThemeSwitchButton/>
    </View>
  );
}