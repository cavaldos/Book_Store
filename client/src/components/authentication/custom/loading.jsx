import "./custom.scss";

function LoadingCustom() {
  return (
    <>
      <section
        style={{ padding: 0, margin: "400px 0 0 0", height: "30px" }}
        className="dots-container"
      >
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </section>
    </>
  );
}

export default LoadingCustom;
