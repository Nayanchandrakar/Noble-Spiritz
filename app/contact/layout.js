import Header from "@app/components/Shared/Header"

export const metadata = {
    title: 'Contact',
    description: 'A non profit organization',
}

export default function ContactLayout({ children }) {
    return (
        <>
            <Header pageName="Contact" bg_img="https://i.ibb.co/DbMqJ8Z/contact-banner.jpg" />
            {children}
        </>
    )
}
