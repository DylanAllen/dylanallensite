import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
      window.scroll({
        top: 0, 
        left: 0, 
      });
  }, [location]);

  return (null);
}

export default ScrollToTop;