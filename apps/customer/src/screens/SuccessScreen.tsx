import { StyleSheet, Text, View } from 'react-native';
import { Action, colors, Line, ui } from '../components/ui';
import { money, serviceFee, type Vehicle } from '../data/rentals';
import { displayDate, rentalDays } from '../utils/dates';
export function SuccessScreen({
  vehicle,
  start,
  end,
  time,
  location,
  onRestart,
}: {
  vehicle: Vehicle;
  start: string;
  end: string;
  time: string;
  location: string;
  onRestart: () => void;
}) {
  return (
    <View style={styles.content}>
      <View style={styles.check}>
        <Text style={styles.checkText}>✓</Text>
      </View>
      <Text style={ui.label}>READY FOR YOUR NEXT JOURNEY</Text>
      <Text
        accessibilityRole="header"
        style={[ui.title, { textAlign: 'center' }]}
      >
        จองตัวอย่างสำเร็จแล้ว!
      </Text>
      <Text style={[ui.muted, { textAlign: 'center' }]}>
        ทริปในแบบคุณ พร้อมอยู่ตรงนี้{'\n'}
        รายการนี้เป็นตัวอย่างและไม่ได้สำรองยานพาหนะจริง
      </Text>
      <View style={[ui.card, { width: '100%', marginVertical: 16 }]}>
        <View style={ui.row}>
          <Text style={ui.muted}>หมายเลขตัวอย่าง</Text>
          <Text style={[ui.text, { color: colors.lime }]}>RBC-DEMO-026184</Text>
        </View>
        <View style={ui.divider} />
        <Text style={ui.heading}>{vehicle.name}</Text>
        <Text style={ui.muted}>
          {displayDate(start)} – {displayDate(end)}
        </Text>
        <Text style={ui.muted}>
          {location} · {time} น.
        </Text>
        <View style={ui.divider} />
        <Line label="ยอดรวมตัวอย่าง">
          {money(vehicle.price * rentalDays(start, end) + serviceFee)}
        </Line>
        <Line label="เรียกเก็บเงินจริง">฿0</Line>
      </View>
      <View style={{ width: '100%' }}>
        <Action label="สำรวจยานพาหนะอีกครั้ง" onPress={onRestart} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  content: { alignItems: 'center', gap: 12, paddingVertical: 30 },
  check: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: colors.lime,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  checkText: { fontSize: 40, color: '#15220c', fontWeight: '700' },
});
