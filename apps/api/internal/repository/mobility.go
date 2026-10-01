package repository

import "context"

// SettleTrip must atomically check the wallet hold, write a unique ledger entry,
// debit the balance and complete the trip. Never settle from browser distances.
type TripSettlement struct {
	TripID         string
	WalletID       string
	FareSatang     int64
	DistanceMeters int64
	IdempotencyKey string
}
type WalletRepository interface {
	SettleTrip(context.Context, TripSettlement) error
}
