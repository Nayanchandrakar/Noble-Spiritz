'use client'

import Header from "@app/components/Shared/Header"
import Card from './Card'
import Container from "@app/components/Container"
import HeadingShortner from "@app/components/HeadingShortner"

const Training = () => {


    const featuredCourses = [
        {id:25235,imagesrc:'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305182658/HTML-tutorial.jpg' , heading:'Completer html course' , RedirectUrl:'/courses/react=23123&34$' , paraInfo:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores saepe quam veritatis nemo vero distinctio. Repellendus cum dignissimos quidem facere.' , rating:5},
        {id:6563,imagesrc:'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305182658/HTML-tutorial.jpg' , heading:'Completer html course' , RedirectUrl:'/courses/react=23123&34$' , paraInfo:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores saepe quam veritatis nemo vero distinctio. Repellendus cum dignissimos quidem facere.' , rating:5},
        {id:7456,imagesrc:'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305182658/HTML-tutorial.jpg' , heading:'Completer html course' , RedirectUrl:'/courses/react=23123&34$' , paraInfo:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores saepe quam veritatis nemo vero distinctio. Repellendus cum dignissimos quidem facere.' , rating:5},
        {id:58567,imagesrc:'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305182658/HTML-tutorial.jpg' , heading:'Completer html course' , RedirectUrl:'/courses/react=23123&34$' , paraInfo:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores saepe quam veritatis nemo vero distinctio. Repellendus cum dignissimos quidem facere.' , rating:5},
        {id:234634,imagesrc:'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305182658/HTML-tutorial.jpg' , heading:'Completer html course' , RedirectUrl:'/courses/react=23123&34$' , paraInfo:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores saepe quam veritatis nemo vero distinctio. Repellendus cum dignissimos quidem facere.' , rating:5},
    ]

    return(
        <>
        <Header
            bg_img={'https://i.ibb.co/DbMqJ8Z/contact-banner.jpg'}
            pageName={'Training'}
        />
        <section 
        className="
            my-20
        ">
        <Container>
            <HeadingShortner
                headline={'Featured Courses'}
            />
        <div 
        className="
            grid
            grid-cols-1
            gap-12
            2xl:grid-cols-4
            sm:grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            pt-12
        ">
                {featuredCourses?.map((elem,index) =>{
                    return(
                        <>
                        <Card
                            imagesrc={elem?.imagesrc}
                            heading={elem?.heading}
                            RedirectUrl={elem?.RedirectUrl}
                            paraInfo={elem?.paraInfo}
                            rating={elem?.rating}
                            key={elem?.id}
                        />
                        </>
                    )
                })}
        </div>
        </Container>
        </section>
        </> )
}
export default Training