"use client";
import { faDownLong, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BreakLength({breakLength,setBreakLength} : {breakLength: number, setBreakLength: any}) {
 
  const incrementBreakLength = () => {
    setBreakLength((prevBreakLength: number) => prevBreakLength + 1 <= 60 ? prevBreakLength + 1: prevBreakLength);
  }
  const decrementBreakLength = () => {
    setBreakLength((prevBreakLength: number) => prevBreakLength - 1 > 0 ? prevBreakLength - 1: prevBreakLength );
  }
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <div className="basis-full" id="break-label">Break Length</div>
      <button onClick={incrementBreakLength} id="break-increment">
        <FontAwesomeIcon icon={faUpLong} />
      </button>
      <div id="break-length">{breakLength}</div>
      <button onClick={decrementBreakLength} id="break-decrement">
        <FontAwesomeIcon icon={faDownLong} />
      </button>
    </div>
  );
}