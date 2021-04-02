import { Helmet } from 'react-helmet';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://firebasestorage.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,500&family=Source+Code+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap"
          rel="stylesheet"
        ></link>
        {process.env.NODE_ENV !== "development" && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ga_id}`}
          />
        )}
        <link
          rel="dns-prefetch"
          href="https://firebasestorage.googleapis.com"
        />
        {process.env.NODE_ENV !== "development" && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    window.ga_id = '${process.env.ga_id}';
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.ga_id}');
                `,
            }}
          />
        )}
      </Helmet>
     <Routes />
    </div>
  );
}

export default App;
