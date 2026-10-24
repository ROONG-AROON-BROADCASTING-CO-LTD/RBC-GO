import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type ComponentRef,
} from 'react';
import {
  Animated,
  BackHandler,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Action, colors, ui } from './components/ui';
import {
  money,
  pickupLocations,
  serviceFee,
  type Category,
  type Vehicle,
} from './data/rentals';
import { addDays, dateKey, rentalDays } from './utils/dates';
import { VehicleScreen } from './screens/VehicleScreen';
import { DatesScreen } from './screens/DatesScreen';
import { ReviewScreen, type PaymentMethod } from './screens/ReviewScreen';
import { SuccessScreen } from './screens/SuccessScreen';

function ScreenEntrance({ children }: { children: ReactNode }) {
  const [progress] = useState(() => new Animated.Value(0));
  useEffect(() => {
    const animation = Animated.timing(progress, {
      toValue: 1,
      duration: 260,
      useNativeDriver: true,
      isInteraction: false,
    });
    animation.start();
    return () => animation.stop();
  }, [progress]);
  return (
    <Animated.View
      style={{
        opacity: progress,
        transform: [
          {
            translateY: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [10, 0],
            }),
          },
        ],
      }}
    >
      {children}
    </Animated.View>
  );
}
export function BookingApp() {
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState<Category>('cars');
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [start, setStart] = useState(() => addDays(dateKey(new Date()), 1));
  const [end, setEnd] = useState(() => addDays(dateKey(new Date()), 4));
  const [time, setTime] = useState('10:00');
  const [location, setLocation] = useState(pickupLocations.cars[0]);
  const [payment, setPayment] = useState<PaymentMethod>('card');
  const [accepted, setAccepted] = useState(false);
  const scroll = useRef<ComponentRef<typeof ScrollView>>(null);
  function go(next: number) {
    setStep(next);
    scroll.current?.scrollTo({ y: 0, animated: false });
  }
  useEffect(() => {
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (step === 0) return false;
        setStep((previous) => (previous === 3 ? 0 : previous - 1));
        scroll.current?.scrollTo({ y: 0, animated: false });
        return true;
      },
    );
    return () => subscription.remove();
  }, [step]);
  const days = end ? rentalDays(start, end) : 0;
  const total = vehicle ? vehicle.price * days + serviceFee : 0;
  const canContinue =
    step === 0 ? !!vehicle : step === 1 ? days > 0 && !!location : accepted;
  const selectedProps = vehicle
    ? { vehicle, start, end, time, location }
    : null;
  function restart() {
    setVehicle(null);
    setCategory('cars');
    setAccepted(false);
    setPayment('card');
    setLocation(pickupLocations.cars[0]);
    setStart(addDays(dateKey(new Date()), 1));
    setEnd(addDays(dateKey(new Date()), 4));
    setTime('10:00');
    go(0);
  }
  return (
    <View style={styles.shell}>
      <View style={styles.header}>
        <Text style={styles.brand}>RBC GO</Text>
        <View style={styles.demo}>
          <Text style={styles.demoText}>โหมดตัวอย่าง</Text>
        </View>
        <View style={styles.avatar}>
          <Text style={ui.text}>P</Text>
        </View>
      </View>
      {step < 3 && (
        <View style={styles.navigation}>
          <View style={ui.row}>
            {step > 0 ? (
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="ย้อนกลับ"
                onPress={() => go(step - 1)}
                style={styles.back}
              >
                <Text style={ui.heading}>‹</Text>
              </Pressable>
            ) : (
              <Text style={ui.muted}>การจองของคุณ</Text>
            )}
            <Text style={ui.muted}>0{step + 1} / 03</Text>
          </View>
          <View style={styles.progress}>
            {['เลือกยานพาหนะ', 'เลือกวันเช่า', 'ยืนยันการจอง'].map(
              (label, i) => (
                <View key={label} style={{ flex: 1, gap: 6 }}>
                  <View
                    style={[
                      styles.bar,
                      i <= step && { backgroundColor: colors.lime },
                    ]}
                  />
                  <Text
                    style={[
                      styles.stepLabel,
                      i === step && { color: colors.lime },
                    ]}
                  >
                    {label}
                  </Text>
                </View>
              ),
            )}
          </View>
        </View>
      )}
      <ScrollView
        ref={scroll}
        style={{ flex: 1 }}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ScreenEntrance key={step}>
          {step === 0 && (
            <VehicleScreen
              category={category}
              selected={vehicle}
              onCategory={(c) => {
                setCategory(c);
                if (c !== category) setVehicle(null);
              }}
              onSelect={(v) => {
                setVehicle(v);
                setLocation(pickupLocations[v.category][0]);
              }}
            />
          )}
          {step === 1 && selectedProps && (
            <DatesScreen
              {...selectedProps}
              onRange={(s, e) => {
                setStart(s);
                setEnd(e);
              }}
              onTime={setTime}
              onLocation={setLocation}
            />
          )}
          {step === 2 && selectedProps && (
            <ReviewScreen
              {...selectedProps}
              payment={payment}
              accepted={accepted}
              onPayment={setPayment}
              onAccepted={() => setAccepted((a) => !a)}
              onEdit={() => go(1)}
            />
          )}
          {step === 3 && selectedProps && (
            <SuccessScreen {...selectedProps} onRestart={restart} />
          )}
        </ScreenEntrance>
      </ScrollView>
      {step < 3 && (
        <View style={styles.bottom}>
          <View style={ui.row}>
            <View style={{ flex: 1 }}>
              <Text style={ui.muted}>
                {step === 0
                  ? (vehicle?.name ?? 'เลือกยานพาหนะเพื่อเริ่มต้น')
                  : `ค่าเช่าตัวอย่าง · ${days} วัน`}
              </Text>
              {vehicle && (
                <Text style={ui.price}>
                  {money(step === 0 ? vehicle.price : total)}
                  {step === 0 && <Text style={ui.muted}> / วัน</Text>}
                </Text>
              )}
            </View>
            <Text style={styles.secure}>UI DEMO</Text>
          </View>
          <Action
            disabled={!canContinue}
            label={
              step === 0
                ? 'เลือกวันเช่า  →'
                : step === 1
                  ? 'ตรวจสอบการจอง  →'
                  : 'ยืนยันการจองตัวอย่าง  →'
            }
            onPress={() => {
              if (canContinue) go(step + 1);
            }}
          />
          {step === 2 && (
            <Text style={styles.footnote}>ไม่มีการจองหรือชำระเงินจริง</Text>
          )}
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  shell: {
    flex: 1,
    width: '100%',
    maxWidth: 560,
    alignSelf: 'center',
    backgroundColor: colors.bg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 16,
    gap: 12,
  },
  brand: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.text,
    flex: 1,
    letterSpacing: -0.7,
  },
  demo: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#24311a',
  },
  demoText: { fontSize: 10, lineHeight: 18, color: colors.lime },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.line,
  },
  navigation: { paddingHorizontal: 24, paddingBottom: 20, gap: 12 },
  back: { width: 44, height: 32, justifyContent: 'center' },
  progress: { flexDirection: 'row', gap: 8 },
  bar: { height: 3, borderRadius: 3, backgroundColor: colors.line },
  stepLabel: { fontSize: 10, lineHeight: 18, color: colors.muted },
  content: { paddingHorizontal: 24, paddingBottom: 28 },
  bottom: {
    padding: 20,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: colors.line,
    backgroundColor: '#11160e',
  },
  secure: { fontSize: 10, color: colors.muted, letterSpacing: 1 },
  footnote: {
    textAlign: 'center',
    color: colors.muted,
    fontSize: 11,
    lineHeight: 18,
  },
});
