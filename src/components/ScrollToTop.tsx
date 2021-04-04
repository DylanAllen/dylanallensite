import { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

function ScrollToTop({ history }: RouteComponentProps) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scroll({
        top: 0, 
        left: 0, 
      });
    });
    return () => {
      unlisten();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (null);
}

export default withRouter(ScrollToTop);