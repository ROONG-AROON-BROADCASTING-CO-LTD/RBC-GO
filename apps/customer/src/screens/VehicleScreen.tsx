import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  categories,
  money,
  vehicles,
  type Category,
  type Vehicle,
} from '../data/rentals';
import { Chip, colors, ui } from '../components/ui';

export function VehicleScreen({
  category,
  selected,
  onCategory,
  onSelect,
}: {
  category: Category;
  selected: Vehicle | null;
  onCategory: (category: Category) => void;
  onSelect: (vehicle: Vehicle) => void;
}) {
  const list = vehicles.filter((v) => v.category === category);
  return (
    <View style={ui.section}>
      <View>
        <Text style={ui.label}>FIND YOUR NEXT JOURNEY</Text>
        <Text accessibilityRole="header" style={ui.title}>
          เลือกยานพาหนะ
        </Text>
        <Text style={ui.muted}>ทุกแผนมีการเดินทางที่ใช่ เลือกในแบบคุณ</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 8, paddingVertical: 4 }}
      >
        {categories.map((c) => (
          <Chip
            key={c.id}
            label={c.label}
            selected={category === c.id}
            onPress={() => onCategory(c.id)}
          />
        ))}
      </ScrollView>
      <View style={ui.row}>
        <Text style={ui.heading}>พร้อมสำหรับทริปของคุณ</Text>
        <Text style={ui.muted}>{list.length} ตัวเลือก</Text>
      </View>
      {list.map((v) => (
        <Pressable
          key={v.id}
          accessibilityRole="button"
          accessibilityLabel={`เลือก ${v.name}`}
          accessibilityState={{ selected: selected?.id === v.id }}
          onPress={() => onSelect(v)}
          style={[styles.card, selected?.id === v.id && styles.selected]}
        >
          <View style={styles.imageWrap}>
            <Image source={v.image} style={styles.image} resizeMode="cover" />
            <View style={styles.tag}>
              <Text style={styles.tagText}>ตัวเลือกแนะนำ</Text>
            </View>
            <View
              style={[
                styles.check,
                selected?.id === v.id && { backgroundColor: colors.lime },
              ]}
            >
              <Text
                style={{
                  color: selected?.id === v.id ? '#15220c' : colors.text,
                  fontWeight: '700',
                }}
              >
                {selected?.id === v.id ? '✓' : '+'}
              </Text>
            </View>
          </View>
          <View style={styles.body}>
            <View style={ui.row}>
              <Text style={[ui.heading, { flex: 1 }]}>{v.name}</Text>
              <Text style={styles.rating}>★ {v.rating}</Text>
            </View>
            <Text style={ui.muted}>{v.subtitle}</Text>
            <Text style={styles.features}>
              {v.seats} · {v.feature}
            </Text>
            <View style={ui.divider} />
            <View style={ui.row}>
              <Text style={ui.price}>
                {money(v.price)}
                <Text style={ui.muted}> / วัน</Text>
              </Text>
              <Text style={[ui.muted, { color: colors.lime }]}>
                {selected?.id === v.id ? 'เลือกแล้ว ✓' : 'เลือกตัวเลือกนี้ ↗'}
              </Text>
            </View>
          </View>
        </Pressable>
      ))}
      <Text style={ui.muted}>
        ยานพาหนะ ความพร้อม และราคาทั้งหมดเป็นข้อมูลตัวอย่าง
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.line,
  },
  selected: { borderColor: colors.lime },
  imageWrap: { height: 184, backgroundColor: '#20281a' },
  image: { width: '100%', height: '100%' },
  tag: {
    position: 'absolute',
    left: 14,
    top: 14,
    backgroundColor: 'rgba(8,10,8,.8)',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  tagText: { color: colors.text, fontSize: 11, lineHeight: 18 },
  check: {
    position: 'absolute',
    right: 14,
    top: 14,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(8,10,8,.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: { padding: 18, gap: 8 },
  rating: { color: colors.lime, fontSize: 12, fontWeight: '700' },
  features: { fontSize: 12, lineHeight: 20, color: colors.muted },
});
