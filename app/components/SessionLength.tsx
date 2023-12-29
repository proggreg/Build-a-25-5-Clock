"use client";
import { faDownLong, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
export default function SessionLength({ setTimer, sessionLength, setSessionLength } :
   { setTimer: any, sessionLength: number, setSessionLength: any }) {

  function incrementSessionLength() {
    setSessionLength((prevSessionLength: number) => prevSessionLength + 1 <= 60 ? prevSessionLength + 1: prevSessionLength);
  }
  function decrementSessionLength() {
    setSessionLength((prevSessionLength: number) => prevSessionLength - 1 > 0 ? prevSessionLength - 1: prevSessionLength);
  }
  useEffect(() => {
    setTimer((prevTimer: string) => {
      return `${sessionLength}:00`;
      }
    );
  }, [sessionLength]);
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <div className="basis-full" id="session-label">Session Length</div>
      <button onClick={incrementSessionLength} id="session-increment">
        <FontAwesomeIcon icon={faUpLong}  />
      </button>
      <div id="session-length">{sessionLength}</div>
      <button onClick={decrementSessionLength} id="session-decrement">
        <FontAwesomeIcon icon={faDownLong} /> 
      </button>
    </div>
  );
}