import React from "react";
import Header from "../../components/layout/header";
// import Footer from "../../components/layout/footer";
import Sidebar from "../../components/layout/sidebar";
import Main from "../../components/layout/main";
function AdminPage() {
  return (
    <>
      <Header />
      <Sidebar />
      <Main />
      {/* <Footer /> */}
    </>
  );
}
export default AdminPage;
