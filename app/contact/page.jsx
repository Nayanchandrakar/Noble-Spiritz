import Newsletter from "./components/Newsletter";
import ContactInfos from "./components/ContactInfos";
import Header from "@app/components/Shared/Header";

export const metadata = {
  title: "Contact Us",
  description: "This is contact us page",
};

const Contact = () => {
  return (
    <div className="bg-base-200">
      <Header
        pageName="Contact"
        bg_img="https://i.ibb.co/DbMqJ8Z/contact-banner.jpg"
      />
      <ContactInfos />
      <Newsletter />
    </div>
  );
};

export default Contact;
