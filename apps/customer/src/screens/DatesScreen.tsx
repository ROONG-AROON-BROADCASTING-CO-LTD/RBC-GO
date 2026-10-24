import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Chip, colors, ui } from '../components/ui';
import { pickupLocations, type Vehicle } from '../data/rentals';
import {
  dateKey,
  displayDate,
  fromKey,
  monthLabel,
  rentalDays,
} from '../utils/dates';

export function DatesScreen({
  vehicle,
  start,
  end,
  time,
  location,
  onRange,
  onTime,
  onLocation,
}: {
  vehicle: Vehicle;
  start: string;
  end: string;
  time: string;
  location: string;
  onRange: (start: string, end: string) => void;
  onTime: (time: string) => void;
  onLocation: (location: string) => void;
}) {
  const [month, setMonth] = useState(() => {
    const d = fromKey(start);
    return new Date(d.getFullYear(), d.getMonth(), 1, 12);
  });
  const today = dateKey(new Date());
  const leading = (month.getDay() + 6) % 7;
  const count = new Date(
    month.getFullYear(),
    month.getMonth() + 1,
    0,
  ).getDate();
  const cells = Math.ceil((leading + count) / 7) * 7;
  function select(key: string) {
    if (!start || end || key <= start) onRange(key, '');
    else onRange(start, key);
  }
  return (
    <View style={ui.section}>
      <View>
        <Text style={ui.label}>MAKE TIME FOR YOUR JOURNEY</Text>
        <Text accessibilityRole="header" style={ui.title}>
          วางแผนวันเดินทาง
        </Text>
        <Text style={ui.muted}>เลือกวันรับและวันคืน อย่างน้อย 1 วัน</Text>
      </View>
      <View style={ui.card}>
        <Text style={ui.heading}>จุดรับ–คืน</Text>
        <View style={{ gap: 8 }}>
          {pickupLocations[vehicle.category].map((l) => (
            <Chip
              key={l}
              label={l}
              selected={location === l}
              onPress={() => onLocation(l)}
            />
          ))}
        </View>
        <Text style={ui.muted}>รับและคืนที่จุดเดียวกัน</Text>
      </View>
      <View style={ui.card}>
        <View style={ui.row}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="เดือนก่อนหน้า"
            disabled={dateKey(month).slice(0, 7) <= today.slice(0, 7)}
            onPress={() =>
              setMonth(
                new Date(month.getFullYear(), month.getMonth() - 1, 1, 12),
              )
            }
            style={styles.arrow}
          >
            <Text style={ui.heading}>‹</Text>
          </Pressable>
          <Text style={[ui.heading, { fontSize: 17 }]}>
            {monthLabel(month)}
          </Text>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="เดือนถัดไป"
            onPress={() =>
              setMonth(
                new Date(month.getFullYear(), month.getMonth() + 1, 1, 12),
              )
            }
            style={styles.arrow}
          >
            <Text style={ui.heading}>›</Text>
          </Pressable>
        </View>
        <View style={styles.grid}>
          {['จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส', 'อา'].map((d, i) => (
            <View key={i} style={styles.cell}>
              <Text style={ui.muted}>{d}</Text>
            </View>
          ))}
          {Array.from({ length: cells }, (_, i) => {
            const day = i - leading + 1;
            if (day < 1 || day > count)
              return <View key={i} style={styles.cell} />;
            const key = dateKey(
              new Date(month.getFullYear(), month.getMonth(), day, 12),
            );
            const disabled = key < today;
            const edge = key === start || key === end;
            const range = !!end && key > start && key < end;
            return (
              <View key={i} style={styles.cell}>
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={`วันที่ ${key}`}
                  accessibilityState={{ disabled, selected: edge || range }}
                  disabled={disabled}
                  onPress={() => select(key)}
                  style={[
                    styles.day,
                    range && styles.range,
                    edge && styles.edge,
                    disabled && { opacity: 0.25 },
                  ]}
                >
                  <Text
                    style={[
                      ui.text,
                      edge && { color: '#15220c', fontWeight: '700' },
                    ]}
                  >
                    {day}
                  </Text>
                </Pressable>
              </View>
            );
          })}
        </View>
        <Text
          accessibilityLiveRegion="polite"
          style={[ui.muted, { color: colors.lime }]}
        >
          {end
            ? `ระยะเวลาเช่า ${rentalDays(start, end)} วัน`
            : 'เลือกวันคืนเพื่อกำหนดระยะเวลาเช่า'}
        </Text>
      </View>
      <View style={styles.pair}>
        {[
          ['รับ', start],
          ['คืน', end],
        ].map(([label, value]) => (
          <View key={label} style={[ui.card, { flex: 1, padding: 14 }]}>
            <Text style={ui.muted}>{label}</Text>
            <Text style={[ui.text, { fontWeight: '700' }]}>
              {value ? displayDate(value) : 'เลือกวันคืน'}
            </Text>
            <Text style={ui.muted}>{time} น.</Text>
          </View>
        ))}
      </View>
      <View style={ui.card}>
        <Text style={ui.heading}>เวลารับ–คืน</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {['10:00', '12:00', '14:00'].map((t) => (
            <Chip
              key={t}
              label={t}
              selected={time === t}
              onPress={() => onTime(t)}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  arrow: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: { flexDirection: 'row', flexWrap: 'wrap' },
  cell: {
    width: '14.285714%',
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  day: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  edge: { backgroundColor: colors.lime },
  range: { backgroundColor: '#273b1b', borderRadius: 0 },
  pair: { flexDirection: 'row', gap: 10 },
});
