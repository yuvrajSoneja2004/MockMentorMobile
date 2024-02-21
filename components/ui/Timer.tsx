import { useRef } from "react";
import StopwatchTimer, {
  StopwatchTimerMethods,
} from "react-native-animated-stopwatch-timer";

export const StopWatch = () => {
  const stopwatchTimerRef = useRef<StopwatchTimerMethods>(null);

  // Methods to control the stopwatch
  function play() {
    stopwatchTimerRef.current?.play();
  }

  function pause() {
    stopwatchTimerRef.current?.pause();
  }

  function reset() {
    stopwatchTimerRef.current?.reset();
  }

  return <StopwatchTimer ref={stopwatchTimerRef} />;
};
