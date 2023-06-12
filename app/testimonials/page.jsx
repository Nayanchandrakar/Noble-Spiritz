'use client'
import Member from "@app/team/[teamType]/components/Member";
import React from "react";

export default function Testimonials() {
  // testimonials data
  const reviews = [
    {
      id: 1,
      name: "Sai Satyadeep Kotla",
      designation: "CEO, Dignity of Noble",
      about:
        "Working with Globallyz has been an absolute pleasure. Their team is knowledgeable, professional, and dedicated to helping us achieve our marketing goals. Thanks to their expertise, we've been able to significantly increase our online visibility and reach more potential customers than ever before. I highly recommend their services to anyone looking to take their marketing efforts to the next level.",
      img: "https://dignityofnoble.org/wp-content/uploads/2023/04/1648856269331.jpeg",
    },
    {
      id: 2,
      name: "Sonia Yadav",
      designation: "Director, Noblespiritz",
      about:
        "Globallyz is simply the best. Their team is incredibly talented and has a deep understanding of the marketing landscape. They've helped us build our brand from the ground up and have been instrumental in our growth and success. We're grateful for their partnership and would recommend their services to anyone looking for a top-notch marketing agency.",
      img: "https://media.licdn.com/dms/image/C4D03AQG_yC3CqZN4_Q/profile-displayphoto-shrink_400_400/0/1661936125512?e=1691020800&v=beta&t=k7GnEzITL5DfClf5mCejIStnF909gY7VLjsaMTmNQY8",
    },
    {
      id: 3,
      name: "Phani Phenumatsa",
      designation: "Director, Mediclinicals",
      about:
        "When we first approached Globallyz, we were struggling to reach our target audience and generate leads. But their team quickly assessed our needs and developed a comprehensive marketing strategy that has transformed our business",
      img: "https://media.licdn.com/dms/image/C4E03AQGH2XhK-l5g2A/profile-displayphoto-shrink_400_400/0/1561928039108?e=1691020800&v=beta&t=oGp0fBw3XiFrH1H8E3A6ik0GA4FX4Rf8JADQyWrkuLU",
    },
    {
      id: 4,
      name: "NADH",
      designation: "Sr Director, Ravsol",
      about:
        "We have had the pleasure of partnering with Globallyz for our digital marketing needs, and the experience has been outstanding. Their team is not only skilled and results-oriented, but they also take the time to understand our unique requirements and tailor their strategies accordingly. The level of professionalism and attention to detail they bring to every project is commendable. Globallyz has undoubtedly played a crucial role in our online success, and we look forward to continuing our collaboration in the future.",
      img: "http://rainbowit.net/themes/imroz/wp-content/uploads/2021/09/team-01.jpg",
    },
    {
      id: 5,
      name: "NAVEEN",
      designation: "Director,Mediclinicals",
      about:
        "Globallyz has truly been a game-changer for our business. Their expertise in digital marketing has helped us expand our online presence and reach a wider audience. Their strategic approach, coupled with their in-depth market analysis, has allowed us to stay ahead of the competition.",
      img: "http://rainbowit.net/themes/imroz/wp-content/uploads/2021/09/team-01.jpg",
    },
    {
      id: 6,
      name: "MAYANK PATEL",
      designation: "Director, Samvedna",
      about:
        "Globallyz has been a trusted partner in our digital marketing journey. Their comprehensive approach and attention to detail have been instrumental in enhancing our online visibility and brand reputation. They bring a wealth of knowledge and expertise to the table, consistently providing innovative solutions that yield tangible results. The team is responsive, collaborative, and genuinely invested in our success.",
      img: "https://media.licdn.com/dms/image/C4D03AQF_dETSxGskag/profile-displayphoto-shrink_400_400/0/1651202231057?e=1691020800&v=beta&t=8Ssdpf2-6I5WiiVxded8TTKegVnyU2Njdm9Fx6RXIeo",
    },
  ];

  // decide what to render in the ui
  let content = null;
  content = (
    <div className="max-w-screen-xl  flex-wrap   mx-auto p-4 ">
      {/* teams */}
      <div className="flex flex-col gap-10">
        {reviews.map((member) => (
          <Member key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
  return <div className="bg-base-200">{content}</div>;
}
