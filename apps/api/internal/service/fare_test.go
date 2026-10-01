package service

import (
	"math"
	"testing"
)

func TestDistanceFare(t *testing.T) {
	for _, tc := range []struct {
		name                        string
		meters, rate, minimum, want int64
		invalid                     bool
	}{
		{"exact kilometers", 6800, 1000, 0, 6800, false},
		{"round fractional satang", 1, 250, 0, 1, false},
		{"minimum", 0, 1000, 5000, 5000, false},
		{"negative distance", -1, 1000, 0, 0, true},
		{"zero rate", 1000, 0, 0, 0, true},
		{"overflow", math.MaxInt64, 1000, 0, 0, true},
	} {
		t.Run(tc.name, func(t *testing.T) {
			got, err := DistanceFare(tc.meters, tc.rate, tc.minimum)
			if (err != nil) != tc.invalid || got != tc.want {
				t.Fatalf("got (%d,%v), want (%d, invalid=%v)", got, err, tc.want, tc.invalid)
			}
		})
	}
}
