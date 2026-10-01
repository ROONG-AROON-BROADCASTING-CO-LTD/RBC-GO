package service

import (
	"errors"
	"math"
)

// DistanceFare rounds fractional satang up once at settlement, using trusted
// odometer delta in meters. Rate and minimum are configuration, never UI input.
func DistanceFare(distanceMeters, rateSatangPerKM, minimumSatang int64) (int64, error) {
	if distanceMeters < 0 || rateSatangPerKM <= 0 || minimumSatang < 0 {
		return 0, errors.New("invalid distance tariff")
	}
	if distanceMeters > (math.MaxInt64-999)/rateSatangPerKM {
		return 0, errors.New("fare overflow")
	}
	fare := (distanceMeters*rateSatangPerKM + 999) / 1000
	if fare < minimumSatang {
		fare = minimumSatang
	}
	return fare, nil
}
