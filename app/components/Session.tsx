"use client"
export default function Session({ timer, label } : { timer: string, label: string }) {
  return (
    <div>
      <div id="timer-label">{label}</div>
      <div id="time-left">{timer}</div>
    </div>
  )
}