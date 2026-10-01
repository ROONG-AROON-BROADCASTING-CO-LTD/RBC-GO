package model

import "time"

type Wallet struct {
	ID            string `json:"id"`
	BalanceSatang int64  `json:"balanceSatang"`
	Currency      string `json:"currency"`
}
type Vehicle struct {
	ID             string `json:"id"`
	DeviceID       string `json:"deviceId"`
	Type           string `json:"type"`
	Status         string `json:"status"`
	BatteryPercent int    `json:"batteryPercent"`
}
type Trip struct {
	ID             string    `json:"id"`
	VehicleID      string    `json:"vehicleId"`
	WalletID       string    `json:"walletId"`
	Status         string    `json:"status"`
	StartedAt      time.Time `json:"startedAt"`
	DistanceMeters int64     `json:"distanceMeters"`
	FareSatang     int64     `json:"fareSatang"`
}
