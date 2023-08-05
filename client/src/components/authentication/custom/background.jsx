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
          <div class="loader">
            <div class="box box0">
              <div></div>
            </div>
            <div class="box box1">
              <div></div>
            </div>
            <div class="box box2">
              <div></div>
            </div>
            <div class="box box3">
              <div></div>
            </div>
            <div class="box box4">
              <div></div>
            </div>
            <div class="box box5">
              <div></div>
            </div>
            <div class="box box6">
              <div></div>
            </div>
            <div class="box box7">
              <div></div>
            </div>
            <div class="ground">
              <div></div>
            </div>
          </div>
        </Space>
      </Space>
    </>
  );
}

export default Background;
