import "../styles.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="titlebar drag" />
      <div className="app">
        <Component {...pageProps} />
      </div>
    </>
  );
}
