// Package iot defines the boundary for the future device protocol adapter.
package iot

import (
	"context"
	"time"
)

type Command struct {
	ID        string
	TripID    string
	DeviceID  string
	Action    string
	ExpiresAt time.Time
}
type Acknowledgement struct {
	CommandID  string
	DeviceID   string
	Applied    bool
	ReceivedAt time.Time
}
type Telemetry struct {
	DeviceID       string
	Sequence       uint64
	ReportedAt     time.Time
	Latitude       float64
	Longitude      float64
	BatteryPercent int
	OdometerMeters int64
	Locked         bool
}

// An acknowledgement must correlate to the command, device and current trip.
// Publishing a command alone must never start billing or complete a trip.
type Gateway interface {
	Send(context.Context, Command) error
	AwaitAcknowledgement(context.Context, string) (Acknowledgement, error)
}

// No simulator is wired into the running server. MQTT/HTTP vendor protocol,
// per-device credentials, replay handling and timeout policy remain to be selected.
