"use client";
import React from "react";
import { useParams } from "next/navigation";
import Member from "./components/Member";

export default function TeamPage() {
  const { teamType } = useParams();

  //   teams data
  const teams = [
    {
      id: 1,
      type: "board_members",
      team: [
        {
          id: 1,
          name: "Mr. Sai Satyadeep Kotla",
          designation: "President",
          about:
            "Sai is the President of NobleSpiritz (an NGO-USA) and brings a wealth of experience to his role. In the United States, Sai has held various leadership positions, including Management & Business Consultant - Digital Transformation and Product/Program Delivery at Kaiser Permanente, Vice President of Business Development & Strategy at Concentrix Catalyst, Associate Director of Business Development, Strategy, Consulting & Operations at Cognizant, Senior Techno-Functional Consultant at Capgemini, and Director of Business Development & Client Relations at Archers. With 18 years of experience, including 2 years as a Social Worker, Sai's expertise lies in digital transformation, strategy, and consulting. He holds a BCom, MCA (India) & MBA, MCA (USA), and certifications in HFMA-CRCS, HFMA-CHFP, PMP, CSM, SAFe Agilist, Certified Product Strategy, Digital Transformation, Corporate Strategy, and Innovation (Patent) from the USA. ",
          img: "https://i.ibb.co/PwRtBRP/Mr-Sai-Satyadeep-Kotla.jpg",
        },
        {
          id: 2,
          name: "Mr. Mayank Patel ",
          designation: "Secretary",
          about:
            "Mayank is a dedicated individual who is determined to prove that his disabilities have not hindered his abilities. As a person with disabilities (PWD), Mayank retired from Indian Railways as an Office Superintendent aŌer 39 years of distinguished service. He has been actively involved in various disability welfare organizations, serving as Honorary Joint Secretary and Secretary at Society for the Physically Handicapped (1983-2010) and as a Trustee cum Secretary at Samvedna Disabled Persons Social Welfare Trust (Gujarat, India) since 2010. Mayank, also the Secretary at NobleSpiritz (NGO-USA), brings with him 35+ years of experience in people management, program and project management, government liaison, sales and marketing, and business development. As a change maker and strategic thinker, he has led multicultural, multidisciplinary teams at the local, regional, and global levels, achieving remarkable success and creating profound social impact in employment and self-employment opportunities for persons with disabilities.",
          img: "https://i.ibb.co/1JDVTfR/MR-MAYANK-PATEL.jpg",
        },
      ],
    },
    {
      id: 2,
      type: "executive_team",
      team: [
        {
          id: 1,
          name: "Hemant Yadav",
          designation: "Business Development & Marketing Head  ",
          about:
            "A driven entrepreneur and marketing expert with a deep understanding of customer behavior and market dynamics. With a passion for crafting effective strategies, he excels in connecting with customers in a meaningful way. ",
          img: "https://i.ibb.co/mN8kcVV/hemant.jpg",
        },
        {
          id: 2,
          name: "Mr. Nag",
          designation: "Treasurer",
          about:
            "At NobleSpiritz, we believe in the power of teamwork and collaboration. Our dedicated team members work tirelessly to drive change, implement innovative programs, and inspire lives. With their diverse skill sets, unwavering dedication, and shared vision, our team ensures that our organization remains at the forefront of empowering individuals with disabilities and creating a more inclusive society.",

          img: "https://i.ibb.co/pvT8BX1/MR-NAG.jpg",
        },
        /* {
          id: 3,
          name: "Neelam Kota",
          designation: "Marketing Specialist",
          about:
            "A skilled Marketing Specialist with a talent for developing impactful marketing strategies. With a keen understanding of market trends and consumer behavior, she excels at creating engaging campaigns that resonate with the target audience. Neelam's passion for innovation and her ability to drive results make her a valuable asset in the field of marketing.",

          img: "https://i.ibb.co/2gGRfSZ/Neelam.jpg",
        },
       
        {
          id: 5,
          name: "Imran Naazir ",
          designation: "Full Stack Web Developer",
          about:
            "Passionate MERN stack developer with expertise in building robust web applications. Skilled in React.js, Node.js, and MongoDB. Committed to delivering high-quality code and enhancing user experiences. Constantly learning and staying updated with the latest web technologies. Strong problem-solving and collaboration skills. Ready to tackle new challenges and contribute to innovative projects.",
          img: "https://pbs.twimg.com/profile_images/1634609501323284480/DTqAbYru_400x400.jpg",
        },
        {
          id: 6,
          name: "Sneha Joseph",
          designation: "Digital Marketing Executive",
          about:
            "A talented Digital Marketing Executive with a strong command of various digital platforms and strategies. With a passion for staying ahead of digital trends, he excels at creating and implementing effective marketing campaigns that drive online visibility and engagement. Sambhrant's analytical mindset and results-driven approach make him a valuable asset in the field of digital marketing.",
          img: "https://media.licdn.com/dms/image/D4D03AQEjlFXsoh1qEA/profile-displayphoto-shrink_400_400/0/1667564699722?e=1691020800&v=beta&t=1o6C1qbyZ6rm6Mz-7H1dPE3uWx41AllRulhnc8QRdRc",
        },
        {
          id: 7,
          name: "Bobby Kose",
          designation: "Digital Marketing Executive",
          about:
            "A talented Digital Marketing Executive with a strong command of various digital platforms and strategies. With a passion for staying ahead of digital trends, he excels at creating and implementing effective marketing campaigns that drive online visibility and engagement. Sambhrant's analytical mindset and results-driven approach make him a valuable asset in the field of digital marketing.",
          img: "https://media.licdn.com/dms/image/D5603AQHLVKOEp6Payg/profile-displayphoto-shrink_400_400/0/1680076119230?e=1691020800&v=beta&t=9iGWRdNKFh4oNl_CV3T_c3z9fbTEPJb3rlnj_FFt0G8",
        },
        {
          id: 8,
          name: "Bharat Lakshkar",
          designation: "Wordpress Developer",
          about:
            "A talented Digital Marketing Executive with a strong command of various digital platforms and strategies. With a passion for staying ahead of digital trends, he excels at creating and implementing effective marketing campaigns that drive online visibility and engagement. Sambhrant's analytical mindset and results-driven approach make him a valuable asset in the field of digital marketing.",
          img: "https://media.licdn.com/dms/image/D4D03AQFj0ZMp8JfzDg/profile-displayphoto-shrink_400_400/0/1670245854193?e=1691020800&v=beta&t=zR9S6f02wBK7XpMbtSXIaw-m3i1ngveLD5jdV6qQWcc",
        }, */
      ],
    },
    {
      id: 3,
      type: "volunteers",
      team: [
        {
          id: 1,
          name: "Person 1",
          designation: "Volunteer 1  ",
          about:
            "ATX President and CEO Dan Whalen is responsible for the company’s overall strategic vision, global operations and growth. Whalen’s 20 years of senior management experience in the broadband and content industries includes a variety of leadership roles that stretch across multiple technology disciplines. With a background that spans sales, product and operational roles, Whalen has the proven expertise, vision and versatility to help customers expand and excel in an era of unprecedented disruption. Prior to joining ATX, Whalen was Chief Product Officer at ADTRAN, responsible for products from concept to delivery. Before ADTRAN, he held multiple leadership positions at ARRIS, including Senior Vice President of Sales, Senior Vice President and General Manager of Global Services, and President, Network & Cloud. In this role he was responsible for oversight of the development and delivery of the company’s portfolio of broadband and video network infrastructure technologies, cloud-based software solutions, and Global Services business. Whalen’s work history also includes key positions at Cisco Systems, Comdisco, KPMG and Bell Atlantic. Whalen holds a Bachelor of Engineering degree from Stevens Institute of Technology.",
          img: "https://spellthemes.com/demos/html-templates/acea/preview/assets/images/all-img/teambg1.jpg",
        },
        {
          id: 2,
          name: "Person 2 ",
          designation: "Volunteer 2",
          about:
            "ATX President and CEO Dan Whalen is responsible for the company’s overall strategic vision, global operations and growth. Whalen’s 20 years of senior management experience in the broadband and content industries includes a variety of leadership roles that stretch across multiple technology disciplines. With a background that spans sales, product and operational roles, Whalen has the proven expertise, vision and versatility to help customers expand and excel in an era of unprecedented disruption. Prior to joining ATX, Whalen was Chief Product Officer at ADTRAN, responsible for products from concept to delivery. Before ADTRAN, he held multiple leadership positions at ARRIS, including Senior Vice President of Sales, Senior Vice President and General Manager of Global Services, and President, Network & Cloud. In this role he was responsible for oversight of the development and delivery of the company’s portfolio of broadband and video network infrastructure technologies, cloud-based software solutions, and Global Services business. Whalen’s work history also includes key positions at Cisco Systems, Comdisco, KPMG and Bell Atlantic. Whalen holds a Bachelor of Engineering degree from Stevens Institute of Technology.",
          img: "https://spellthemes.com/demos/html-templates/acea/preview/assets/images/all-img/teambg1.jpg",
        },
      ],
    },
  ];

  // selected team
  const selectedTeam = teams?.find((team) => team.type === teamType);

  // decide what to render
  const content = selectedTeam?.team?.map((member) => (
    <Member key={member.id} member={member} />
  ));

  return <div className="flex flex-col gap-10">{content}</div>;
}
