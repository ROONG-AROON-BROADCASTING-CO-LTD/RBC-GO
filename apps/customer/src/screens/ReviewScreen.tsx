import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, Line, ui } from '../components/ui';
import { money, serviceFee, type Vehicle } from '../data/rentals';
import { displayDate, rentalDays } from '../utils/dates';
export type PaymentMethod = 'card' | 'qr';
export function ReviewScreen({
  vehicle,
  start,
  end,
  time,
  location,
  payment,
  accepted,
  onPayment,
  onAccepted,
  onEdit,
}: {
  vehicle: Vehicle;
  start: string;
  end: string;
  time: string;
  location: string;
  payment: PaymentMethod;
  accepted: boolean;
  onPayment: (method: PaymentMethod) => void;
  onAccepted: () => void;
  onEdit: () => void;
}) {
  const days = rentalDays(start, end);
  return (
    <View style={ui.section}>
      <View>
        <Text style={ui.label}>ONE STEP CLOSER</Text>
        <Text accessibilityRole="header" style={ui.title}>
          ตรวจสอบการจอง
        </Text>
        <Text style={ui.muted}>รายละเอียดครบ ก่อนออกเดินทาง</Text>
      </View>
      <View style={ui.card}>
        <Image source={vehicle.image} style={styles.image} />
        <Text style={ui.heading}>{vehicle.name}</Text>
        <Text style={ui.muted}>
          {vehicle.seats} · {vehicle.feature}
        </Text>
        <View style={ui.divider} />
        <Line label="จุดรับ–คืน">{location}</Line>
        <Line label="รับ">
          {displayDate(start)} · {time}
        </Line>
        <Line label="คืน">
          {displayDate(end)} · {time}
        </Line>
        <Pressable
          accessibilityRole="button"
          onPress={onEdit}
          style={{ paddingVertical: 8 }}
        >
          <Text style={{ color: colors.lime }}>แก้ไขวันเช่าและสถานที่ ↗</Text>
        </Pressable>
      </View>
      <View style={ui.card}>
        <Text style={ui.heading}>รายละเอียดค่าเช่า</Text>
        <Line label={`${money(vehicle.price)} × ${days} วัน`}>
          {money(vehicle.price * days)}
        </Line>
        <Line label="ค่าบริการตัวอย่าง">{money(serviceFee)}</Line>
        <View style={ui.divider} />
        <View style={ui.row}>
          <Text style={ui.heading}>ยอดรวม</Text>
          <Text style={ui.price}>
            {money(vehicle.price * days + serviceFee)}
          </Text>
        </View>
        <Text style={ui.muted}>
          ราคาสำหรับสาธิต UI เท่านั้น ยังไม่มีการเรียกเก็บเงิน
        </Text>
      </View>
      <View style={ui.card}>
        <Text style={ui.heading}>วิธีชำระเงินตัวอย่าง</Text>
        {(
          [
            ['card', 'VISA ···· 4242', 'บัตรตัวอย่าง · ไม่ใช้ข้อมูลบัตรจริง'],
            ['qr', 'QR Payment', 'ตัวเลือกจำลอง · ไม่มีการสร้าง QR ชำระเงิน'],
          ] as const
        ).map(([id, title, copy]) => (
          <Pressable
            key={id}
            accessibilityRole="radio"
            accessibilityState={{ checked: payment === id }}
            aria-checked={payment === id}
            accessibilityLabel={title}
            onPress={() => onPayment(id)}
            style={[
              styles.method,
              payment === id && { borderColor: colors.lime },
            ]}
          >
            <View style={{ flex: 1 }}>
              <Text style={ui.text}>{title}</Text>
              <Text style={ui.muted}>{copy}</Text>
            </View>
            <Text style={{ color: colors.lime, fontSize: 20 }}>
              {payment === id ? '◉' : '○'}
            </Text>
          </Pressable>
        ))}
      </View>
      <Pressable
        accessibilityRole="checkbox"
        accessibilityLabel="รับทราบว่าเป็นการจองตัวอย่าง"
        accessibilityState={{ checked: accepted }}
        aria-checked={accepted}
        onPress={onAccepted}
        style={styles.consent}
      >
        <View
          style={[
            styles.checkbox,
            accepted && { backgroundColor: colors.lime },
          ]}
        >
          <Text style={{ color: '#15220c', fontWeight: '700' }}>
            {accepted ? '✓' : ''}
          </Text>
        </View>
        <Text style={[ui.muted, { flex: 1 }]}>
          ฉันรับทราบว่านี่คือการจองตัวอย่าง
          ไม่มีการสำรองยานพาหนะหรือเรียกเก็บเงิน
        </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  image: { width: '100%', height: 150, borderRadius: 12 },
  method: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.line,
  },
  consent: {
    flexDirection: 'row',
    gap: 12,
    padding: 6,
    alignItems: 'flex-start',
  },
  checkbox: {
    width: 25,
    height: 25,
    borderRadius: 7,
    borderColor: colors.lime,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
