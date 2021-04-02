import { MutableRefObject, useRef, useEffect, useState } from "react";

const TypedText: React.FunctionComponent<{text: string, className: string}> = ({ text, className }) => {

  function useInterval(callback: () => void , delay: number | null) {
    const savedCallback: MutableRefObject<any | null> = useRef<any | null>(null);
    
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        if (savedCallback) {
          savedCallback.current();
        }
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }
  const [content, setContent] = useState('');
  const [count, setCount] = useState(0);
  const [interval, updateInterval] = useState<number | null>(50);

  useInterval(() => {
    if (count >= text.length) {
      updateInterval(null);
    } else {
      updateInterval(20 + (Math.random() * 200) );
    }
    setContent(text.slice(0,count + 1))
    setCount(count + 1);
  }, interval);


  return (
    <span className={className}>{content || '\u00A0'}</span>
  )
}

export default TypedText;