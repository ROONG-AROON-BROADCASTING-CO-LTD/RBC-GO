import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export const colors = {
  bg: '#080a08',
  panel: '#141a12',
  line: '#2b3426',
  lime: '#89d82a',
  text: '#f4f6ef',
  muted: '#a9b2a2',
};
export const ui = StyleSheet.create({
  title: {
    color: colors.text,
    fontSize: 28,
    lineHeight: 40,
    fontWeight: '700',
  },
  heading: {
    color: colors.text,
    fontSize: 19,
    lineHeight: 29,
    fontWeight: '700',
  },
  text: { color: colors.text, fontSize: 15, lineHeight: 24 },
  muted: { color: colors.muted, fontSize: 13, lineHeight: 22 },
  label: {
    color: colors.lime,
    fontSize: 11,
    lineHeight: 18,
    fontWeight: '700',
    letterSpacing: 1.4,
  },
  card: {
    backgroundColor: colors.panel,
    borderColor: colors.line,
    borderWidth: 1,
    borderRadius: 20,
    padding: 18,
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  section: { gap: 14 },
  divider: { height: 1, backgroundColor: colors.line },
  price: {
    color: colors.lime,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: '700',
  },
});
export function Action({
  label,
  onPress,
  disabled = false,
  secondary = false,
}: {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  secondary?: boolean;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.action,
        secondary && styles.secondary,
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
    >
      <Text style={[styles.actionText, secondary && { color: colors.text }]}>
        {label}
      </Text>
    </Pressable>
  );
}
export function Chip({
  label,
  selected,
  onPress,
}: {
  label: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityLabel={label}
      accessibilityState={{ checked: selected }}
      aria-checked={selected}
      onPress={onPress}
      style={[styles.chip, selected && styles.chipSelected]}
    >
      <Text
        style={[
          ui.text,
          {
            fontSize: 13,
            color: selected ? '#15220c' : colors.muted,
            fontWeight: '600',
          },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}
export function Line({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <View style={ui.row}>
      <Text style={[ui.muted, { flex: 1 }]}>{label}</Text>
      <Text style={[ui.text, { flexShrink: 1, textAlign: 'right' }]}>
        {children}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  action: {
    minHeight: 54,
    backgroundColor: colors.lime,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    color: '#15220c',
    fontSize: 16,
    lineHeight: 25,
    fontWeight: '700',
    textAlign: 'center',
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.line,
  },
  disabled: { opacity: 0.35 },
  pressed: { opacity: 0.8, transform: [{ scale: 0.985 }] },
  chip: {
    minHeight: 44,
    borderRadius: 24,
    paddingHorizontal: 17,
    paddingVertical: 10,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.line,
  },
  chipSelected: { backgroundColor: colors.lime, borderColor: colors.lime },
});
