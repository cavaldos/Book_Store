// import "../../main/styles.scss";
// import Logo from "./logo";

// import React from "react";
// import MenuItem from "../menu/index";
// import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

// function AdminSidebar(props) {
//   const { toggle } = props;
//   return (
//     <>
//       <div className="sidebar">
//         <Logo />
//         <div className="menu_list">
//           <div className="menu_item">
//             <MenuItem
//               name="Home"
//               toggle={toggle}
//               path="/"
//               icon={<MenuUnfoldOutlined />}
//             />
//           </div>
//           <div className="menu_item">
//             <MenuItem
//               name="Manager-user"
//               toggle={toggle}
//               path="/admin/user"
//               icon={<MenuUnfoldOutlined />}
//             />
//           </div>
//           <div className="menu_item">
//             <MenuItem
//               name="Manager-product"
//               toggle={toggle}
//               path="/admin/product"
//               icon={<MenuFoldOutlined />}
//             />
//           </div>

//           <div className="menu_item">
//             <MenuItem
//               name="Manager-revenue"
//               toggle={toggle}
//               path="/admin/revenue"
//               icon={<MenuFoldOutlined />}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AdminSidebar;
import "../../main/styles.scss";
import Logo from "./logo";
import React from "react";
import { Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DollarOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

function AdminSidebar(props) {
  const { toggle } = props;
  return (
    <div className="sidebar">
      <Logo />
      <div className="menu_list">
        <Menu
          theme="dark"
          mode="inline"
          style={{ backgroundColor: "rgb(86, 86, 95)" }}
        >
          <Menu.Item
            key="home"
            icon={<MenuUnfoldOutlined />}
            onClick={() => toggle("/")}
          >
            Home
          </Menu.Item>
          <Menu.Item
            key="manager-user"
            icon={<MenuUnfoldOutlined />}
            onClick={() => toggle("/admin/user")}
          >
            Manager-user
          </Menu.Item>
          <SubMenu
            key="manager-revenue"
            icon={<MenuFoldOutlined />}
            title="Manager-revenue"
          >
            <Menu.Item
              key="revenue-chart"
              icon={<LineChartOutlined />}
              onClick={() => toggle("/admin/revenue/chart")}
            >
              Revenue Chart
            </Menu.Item>
            <Menu.Item
              key="revenue-list"
              icon={<DollarOutlined />}
              onClick={() => toggle("/admin/revenue/list")}
            >
              Revenue List
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </div>
  );
}

export default AdminSidebar;