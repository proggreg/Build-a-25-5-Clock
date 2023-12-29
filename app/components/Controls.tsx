"use client"

import { faArrowsRotate, faPause, faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {useEffect, useState } from "react"

export default function Controls({ setTimer, setBreakLength, setSessionLength, setLabel, breakLength, label} :
   { setTimer: any, setBreakLength: any, setSessionLength: any, setLabel: any , breakLength:number , label: string}) {
  const [running, setRunning] = useState(false)
  const [intervalId, setIntervalId] = useState<any>(null);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    console.log('use effect', label, running)
    if (label === 'Break' && !running && !end) {
      startStopTimer()
    }

  }, [label, running, end])
  const startStopTimer = () => {
    if (!running) {
      setRunning((prevRunning: boolean) => true);
        let id = setInterval(() => {
        setTimer((prevTimer: string) => {
          let seconds = parseInt(prevTimer.split(':')[1]);
          let minutes = parseInt(prevTimer.split(':')[0]);
          if (prevTimer.includes('00:00') || prevTimer.includes('-')) {
            console.log('end timer', label)
            clearInterval(id);
            setRunning((prevRunning: boolean) => false);
            if (label === 'Session') {
              startBreak();
            } else {
              setEnd(true);
            }
            return prevTimer;
          } else if (seconds > 0) {
            seconds -= 1;
            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
          } else {
            seconds = 59;
            minutes = minutes - 1;
            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
          }
        });
      }, 1000);
      console.log('start timer', id)
      setIntervalId(id);
      return true;
    } else {
      console.log('stop timer', intervalId)
      setRunning((prevRunning: boolean) => false);
      clearInterval(intervalId);
      return false;
    } 
    
  }

  const startBreak = () => {
    setTimer(() => {
      return `${breakLength}:00`;
    })
    setLabel((prevLabel: string) => 'Break');
    console.log('start break', label)
  }
  
  const resetTimer = () => {
    console.log('reset timer')
    clearInterval(intervalId);
    setRunning(false);
    setTimer('25:00');
    setBreakLength(5);
    setSessionLength(25);
    setLabel('Session')
  }
  return (
    <div className="flex gap-3">
      <button id="start_stop" onClick={startStopTimer}>
        <FontAwesomeIcon icon={faPlay} />
        <FontAwesomeIcon icon={faPause} />
      </button> 
      <button id="reset" onClick={resetTimer}>
        <FontAwesomeIcon icon={faArrowsRotate} />
      </button>
    </div>
  )
}