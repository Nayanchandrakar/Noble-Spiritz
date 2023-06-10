'use client'
import Newsletter from "./components/Newsletter";
import ContactInfos from "./components/ContactInfos";
import Header from "@app/components/Shared/Header";

const Contact = () => {
  return (
    <div>
      <Header pageName="Contact" bg_img="https://i.ibb.co/DbMqJ8Z/contact-banner.jpg" />
      <ContactInfos />
      <Newsletter />
    </div>
  );
}

export default Contact