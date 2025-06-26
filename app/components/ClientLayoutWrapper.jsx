// "use client";

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function ClientLayoutWrapper({ children }) {
// useEffect(() => {
//   AOS.init({
//     duration: 1000,
//       offset: -200,

//   })
// }, []);

//   return <>{children}</>;
// }

"use client";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function ClientLayoutWrapper({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}