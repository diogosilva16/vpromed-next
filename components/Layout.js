import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import { useRouter } from "next/router";
import ScheduleWidget from "./ScheduleWidget";

const Layout = ({ children }) => {
  const router = useRouter();

  const showExtra = router.pathname === "/" ? false : true;
  return (
    <>
      {showExtra && <Navbar />}
      <main>{children}</main>
      {showExtra && <ScheduleWidget />}
      {showExtra && <Footer />}
    </>
  );
};

export default Layout;
