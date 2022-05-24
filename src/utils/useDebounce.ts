import { useRef } from "react";

export default function useDebounce(
  fn: (...args: any[] ) => void, 
  delay: number
  ) {

  const timeoutRef = useRef(null)
  
  function debounceFn(...args: any[]) {
    window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout( () => {
      fn( ...args );
    }, delay)
  }
  return debounceFn 
}
