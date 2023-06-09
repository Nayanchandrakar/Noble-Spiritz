import Header from "@app/components/Shared/Header"

export const metadata = {
    title: 'Careers',
    description: 'A non profit organization',
}

export default function CareersLayout({ children }) {
    return (
        <>
            <Header pageName="Careers" bg_img="https://i.ibb.co/DbMqJ8Z/contact-banner.jpg" />
            {children}
        </>
    )
}
