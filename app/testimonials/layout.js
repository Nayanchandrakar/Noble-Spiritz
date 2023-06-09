import Header from "@app/components/Shared/Header"

export const metadata = {
    title: 'Client & Testimonials',
    description: 'A non profit organization',
}

export default function TestimonialsLayout({ children }) {
    return (
        <>
            <Header pageName="Client & Testimonials" bg_img="https://i.ibb.co/DbMqJ8Z/contact-banner.jpg" />
            {children}
        </>
    )
}