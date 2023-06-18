import React from "react";
import Header from "../../components/layout/header";
import Sidebar from "../../components/layout/sidebar";
import Main from "../../components/layout/main";
import Footer from "../../components/layout/footer";
import Login from "../../components/login";
function VisitorPage() {
  return (
    <div>
      <Login />
      <Main></Main>
      <Header />
      <Sidebar />
      {/* login inside main */}
    </div>
  );
}
export default VisitorPage;
