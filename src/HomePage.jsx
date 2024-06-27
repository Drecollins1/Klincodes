import React, { useEffect } from "react";
import Herosection from "./Herosection";
import Faq from "./Faq";
import Newsletter from "./newsletter";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="mt-[60px] ">
      <Herosection />
      <Faq/>
      <Newsletter/>
    </div>
  );
};
export default HomePage;
