import React from "react";
import "../auth.scss";
import "./bgcustom.scss";
import { Space } from "antd";
import "./custom.scss";
function Background() {
  return (
    <>
      <Space className="background">
        <Space style={{ margin: "400px 0 0 0 " }}>
          <div className="loader">
            <div className="box box0">
              <div></div>
            </div>
            <div className="box box1">
              <div></div>
            </div>
            <div className="box box2">
              <div></div>
            </div>
            <div className="box box3">
              <div></div>
            </div>
            <div className="box box4">
              <div></div>
            </div>
            <div className="box box5">
              <div></div>
            </div>
            <div className="box box6">
              <div></div>
            </div>
            <div className="box box7">
              <div></div>
            </div>
            <div className="ground">
              <div></div>
            </div>
          </div>
        </Space>
      </Space>
    </>
  );
}

export default Background;
