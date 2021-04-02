import { useEffect } from 'react';
import Prism from './prism';

const usePrism = () => {
  useEffect(() => {
    Prism.highlightAll();
  },[])
}

export default usePrism;
