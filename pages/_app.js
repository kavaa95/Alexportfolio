import Foooter from "../Components/Foooter";
import Navbar from "../Components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <Navbar />
      <Component {...pageProps} />
      <Foooter />
    </div>
  );
}

export default MyApp;
