import React from "react";
import Newsletter from "./components/Newsletter";
import ContactInfos from "./components/ContactInfos";

export default function Contact() {
  return (
    <div>
      {/* contact info */}
      <ContactInfos />
      {/* newsletter - get in touch */}
      <Newsletter />
    </div>
  );
}
