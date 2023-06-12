"use client";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

const ContactInfos = () => {
  // contact infos
  const contactInfos = [
    {
      id: 1,
      name: "Phone",
      info: "+1 908-878-3691",
      reactIcon: BsTelephone,
    },
    {
      id: 2,
      name: "Email",
      info: "sai.kotla@dignityofnoble.org  ",
      reactIcon: AiOutlineMail,
    },
    {
      id: 3,
      name: "Location",
      info: " Frisco, TX 75035  ",
      reactIcon: FiMapPin,
    },
  ];

  //   decide what to render in the ui
  const content = contactInfos?.map((info) => (
    <div
      key={info?.id}
      className="card max-w-sm rounded-lg shadow-xl p-10  bg-base-100"
    >
      <div className="flex items-center gap-5">
        <info.reactIcon className="text-4xl text-primary" />
        <div>
          <h3 className="text-2xl font-semibold">{info?.name}</h3>
          <p>{info?.info}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-y-5">
      {/* contact info card */}
      {content}
    </section>
  );
};

export default ContactInfos;
