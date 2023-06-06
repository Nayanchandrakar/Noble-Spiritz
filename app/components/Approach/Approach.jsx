import Image from "next/image"
import Container from "../Container"

const Approach = () => {
    return(
        <Container>
        <div
         className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-16
            my-16
        ">
            <div 
            className="
                flex
                md:justify-end
                justify-center
            ">
                <Image
                    alt="approach_image"
                    src="/Approach/approach.png"
                    width={400}
                    height={400}
                />
            </div>

            <div 
                className="
                    flex
                    flex-col
                    gap-2
                ">
                    <span 
                        className="
                        text-5xl
                        text-black
                        font-bold
                    ">
                        OUR APPROACH
                    </span>

                    <div
                     className="
                        flex
                        flex-col
                        gap-3
                        md:justify-normal
                     ">
                        <span>
                            <strong 
                            className="
                                font-bold
                                text-black
                                text-md
                            ">
                                Incubate
                            </strong>
                            <li>Life-skill Enablement</li>
                            <li>Enable to Create Business Portfolios</li>
                        </span>

                        <span>
                            <strong 
                            className="
                                font-bold
                                text-black
                                text-md
                            ">
                                Accelerate
                            </strong>
                            <li>Connect Social Investors</li>
                            <li>Enhance Customer Portfolios</li>
                            <li>Stabilize Operations</li>
                        </span>
                        <span>
                            <strong 
                            className="
                                font-bold
                                text-black
                                text-md
                            ">
                                Own &Operate
                            </strong>
                            <li>Transition to PWB Owners to Operate Independently</li>
                            <li>Host & Support Digitally- Franchised Portfolios</li>
                        </span>

                    </div>
            </div>
        </div>
        </Container>
    )
}
export default Approach