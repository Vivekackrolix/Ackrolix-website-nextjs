import "@component/styles/globals.css";
import "@component/styles/careerStyles.css";
import FloatingButtons from "@component/components/common/FloatingButtons";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <FloatingButtons/>
    </>
  );
}
