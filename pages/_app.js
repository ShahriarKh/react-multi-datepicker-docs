import "../styles/globals.scss";

import Sidebar from "components/organisms/Sidebar";

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Sidebar />
         <main>
            <Component {...pageProps} />
         </main>
      </>
   );
}

export default MyApp;
