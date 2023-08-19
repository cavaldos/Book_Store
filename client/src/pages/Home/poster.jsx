import { Space } from "antd";

function Poster(props) {
  const { src } = props;
  return (
    <>
      <Space align="center">
        <div style={{ maxWidth: "100%" }}>
          <img
            src={src}
            alt="1"
            border="0"
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
          />
        </div>
      </Space>
    </>
  );
}

export default Poster;
