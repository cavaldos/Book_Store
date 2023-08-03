import "./profile.scss";
import { Steps } from "antd";

function StateOder() {
  return (
    <>
      <div className="oder">
      <h1 className="name-oder">na</h1>
        <Steps
          size="small"
          current={0}
          items={[
            {
              title: "Finished",
            },
            {
              title: "In Progress",
            },
            {
              title: "Waiting",
            },
            {
              title: "Waiting",
            },
          ]}
        />
        state dfoder
      </div>
    </>
  );
}

export default StateOder;
