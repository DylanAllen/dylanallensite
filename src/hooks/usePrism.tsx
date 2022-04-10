import { useEffect } from 'react';
import Prism from 'prismjs';

const usePrism = () => {
  useEffect(() => {
    Prism.highlightAll();
  },[])
}

export default usePrism;
