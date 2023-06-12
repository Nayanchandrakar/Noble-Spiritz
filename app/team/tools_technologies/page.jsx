"use client";
import Image from "next/image";

export default function ToolsTechnologies() {
  const tools = [
    {
      id: 1,
      url: "https://i.ibb.co/LpKmzhZ/google-analitices-logo.png",
      name: "Google Analytics ",
    },
    {
      id: 2,
      url: "https://i.ibb.co/1mBrwSG/Fa-Hubspot-logo.jpg",
      name: "HubSpot",
    },
    { id: 3, url: "https://i.ibb.co/ZMscyBq/quora-logo.png", name: "Quora" },
    { id: 4, url: "https://i.ibb.co/Qr2WZRP/Twitter.png", name: "Twitter" },
    { id: 5, url: "https://i.ibb.co/FJDVZHK/linkedin.png", name: "Linkedin" },
    { id: 6, url: "https://i.ibb.co/kKrGRc8/instagram.jpg", name: "Instagram" },
    {
      id: 7,
      url: "https://i.ibb.co/2cW27MK/facebook-logo.png",
      name: "Facebook",
    },
    {
      id: 8,
      url: "https://www.monsterinsights.com/wp-content/uploads/2021/10/google-search-console-1.png",
      name: "Google Search Console",
    },
    {
      id: 9,
      url: "https://i.ibb.co/s1DZY23/pipedrive-logo.png",
      name: "PipeDrive",
    },
    {
      id: 10,
      url: "https://i.ibb.co/L8jyssZ/salesforce-logo.png",
      name: "SalesForce",
    },
    {
      id: 11,
      url: "https://i.ibb.co/TkhkjLD/office365-logo.png",
      name: "Office 365",
    },
  ];
  return (
    <div className="bg-white w-full rounded-lg">
      <h1 className="text-center text-[2rem] underline">
        Tools / Technologies / Platforms
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-5 p-5">
        {tools?.map((tool) => (
          <div key={tool?.id} className="shadow-xl p-5">
            <Image
              src={tool?.url}
              alt={tool?.name}
              className=""
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
