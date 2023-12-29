"use client"
import { Tests } from "@repo/ui/tests";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import BreakLength from "./components/BreakLength";
import SessionLength from "./components/SessionLength";
import Session from "./components/Session";
import Controls from "./components/Controls";
import { useState } from "react";
config.autoAddCss = false

export default function Home() {
  const [timer, setTimer] = useState('25:00')
  const [breakLength, setBreakLength] = useState(1);
  const [sessionLength, setSessionLength] = useState(1);
  const [label, setLabel] = useState('Session');
  return (
    <main className="flex text-center min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold">25 + 5 Clock</h1>

      <div className="flex">
        <BreakLength breakLength={breakLength} setBreakLength={setBreakLength} />
        <SessionLength sessionLength={sessionLength} setSessionLength={setSessionLength} setTimer={setTimer} />
      </div>
      <div>
        <Session label={label} timer={timer} />
        <Controls setTimer={setTimer} 
                  setBreakLength={setBreakLength}
                  setSessionLength={setSessionLength}
                  setLabel={setLabel}
                  label={label}
                  breakLength={breakLength}
                   />
      </div>
      <Tests />
    </main>
  );
}
