import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSystemStatus } from '../hooks/useSystemStatus';
const steps = [
  'เลือกยานพาหนะที่เหมาะกับคุณ',
  'เลือกวันเช่าและจุดรับ–คืน',
  'ตรวจสอบรายละเอียดก่อนยืนยันการเช่า',
];
export function WelcomeScreen() {
  const { status, refresh } = useSystemStatus();
  const loading = status === 'loading';
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.container}>
        <Text style={styles.brand}>RBC GO</Text>
        <Text accessibilityRole="header" style={styles.title}>
          ทุกการเดินทาง{'\n'}เลือกได้ในแบบคุณ
        </Text>
        <Text style={styles.copy}>
          มอเตอร์ไซค์ไฟฟ้า รถยนต์ เรือยอชต์ และเครื่องบิน
          สำรวจบริการเช่าที่เหมาะกับแผนของคุณ
        </Text>
        <View style={styles.steps}>
          {steps.map((step, index) => (
            <View key={step} style={styles.step}>
              <Text style={styles.number}>0{index + 1}</Text>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>
        <View style={styles.card}>
          <Text accessibilityRole="header" style={styles.cardTitle}>
            กำลังเตรียมเปิดให้บริการ
          </Text>
          <Text style={styles.copy}>
            ระบบเข้าสู่ระบบ การจอง และการชำระเงินยังไม่เปิดใช้งาน
          </Text>
          <View style={styles.connection} accessibilityLiveRegion="polite">
            {loading && <ActivityIndicator size="small" color="#89d82a" />}
            <Text style={[styles.status, status === 'error' && styles.error]}>
              {loading
                ? 'กำลังตรวจสอบการเชื่อมต่อ…'
                : status === 'connected'
                  ? 'เชื่อมต่อระบบสำเร็จ'
                  : 'ยังเชื่อมต่อระบบไม่ได้'}
            </Text>
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityState={{ disabled: loading }}
            disabled={loading}
            onPress={() => void refresh()}
            style={({ pressed }) => [
              styles.button,
              pressed && styles.pressed,
              loading && styles.disabled,
            ]}
          >
            <Text style={styles.buttonText}>ตรวจสอบการเชื่อมต่ออีกครั้ง</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  content: { flexGrow: 1, paddingHorizontal: 24, paddingVertical: 32 },
  container: { width: '100%', maxWidth: 480, alignSelf: 'center' },
  brand: {
    color: '#89d82a',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 48,
  },
  title: { color: '#f7f8f4', fontSize: 30, lineHeight: 44, fontWeight: '700' },
  copy: { color: '#c1c3bc', fontSize: 16, lineHeight: 27, marginTop: 12 },
  steps: { gap: 18, marginVertical: 32 },
  step: { flexDirection: 'row', alignItems: 'flex-start', gap: 16 },
  number: { color: '#89d82a', fontSize: 16, lineHeight: 26, fontWeight: '700' },
  stepText: { flex: 1, color: '#f7f8f4', fontSize: 16, lineHeight: 26 },
  card: {
    padding: 24,
    borderRadius: 20,
    backgroundColor: '#171b15',
    borderWidth: 1,
    borderColor: '#30392b',
  },
  cardTitle: {
    color: '#f7f8f4',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 30,
  },
  connection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 24,
  },
  status: { flex: 1, color: '#89d82a', fontSize: 15, lineHeight: 25 },
  error: { color: '#ffa7a7' },
  button: {
    minHeight: 48,
    padding: 12,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#89d82a',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#89d82a',
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'center',
    fontWeight: '600',
  },
  pressed: { backgroundColor: '#29371d' },
  disabled: { opacity: 0.5 },
});
