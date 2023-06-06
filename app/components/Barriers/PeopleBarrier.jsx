'use client'
import Image from "next/image"
import Container from "../Container"

const PeopleBarrier = () => {
    return(
        <Container>
        <div 
            className="
            flex
            flex-col
            gap-4
            justify-center
            items-center
            pt-16
            mb-16
        ">
            <h3 
                className="
                 text-3xl
                 font-bold
                 text-center
                "
            >
                PEOPLE WITH &nbsp;
                <br
                 className="
                    block
                    lg:hidden
                 "
                /> 
                BARRIERS PWB`S
            </h3>
            <Image
                alt="people barrier image"
                src="/Barriers/people/peoplebarreier.png"
                width={10}
                height={10}
                sizes="100"
                className="
                    w-full
                    h-full
                    hidden
                    lg:block
                "
            />
        </div>
        </Container>
    )
}
export default PeopleBarrier