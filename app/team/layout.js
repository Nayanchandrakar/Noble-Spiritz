import Header from "@app/components/Shared/Header";
import Link from "next/link";


export default function ContactLayout({ children }) {
    const routes = [
        {
            id: 1,
            name: "Board Members",
            route: "/team/board_members"
        },
        {
            id: 2,
            name: "Executive Team",
            route: "/team/executive_team"
        },
        {
            id: 3,
            name: "Volunteers",
            route: "/team/volunteers"
        },
    ]
    // decide what to render as route
    const content = routes?.map((route) => <li key={route?.id} className="border-b mb-2 text-lg border-primary">
        <Link href={route?.route}>{route?.name}</Link>
    </li>)

    return (
        <>
            <Header pageName="Our Team and Tools" bg_img="https://i.ibb.co/DbMqJ8Z/contact-banner.jpg" />
            <div className="bg-base-200">

                <div className="max-w-screen-xl  flex-wrap   mx-auto p-4">

                    <div className="flex flex-col lg:flex-row gap-5">
                        {/* aside */}
                        <aside className="">
                            <ul className=" p-4 w-72 bg-white rounded-lg">
                                {content}
                            </ul>
                        </aside>

                        {/* teams */}
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}