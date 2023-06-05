import Link from "next/link"
import Container from "../Container"
import SocialIcons from "../Navbar/SocialIcons"

const MiniFooter = () => {
    return(
    <div className="
        bg-violet-700 
        mt-8
    ">
    <Container>
        <div 
            className="
             flex
             justify-center
             flex-col
             gap-8
             lg:gap-0
             lg:flex-row
             lg:justify-between
             items-center
             p-5
             text-white
        ">
                  
      <p className=" 
        text-sm 
        text-center 
        sm:text-left
      ">
            Copyrights © 2022 Dignityofnoble 
        <Link 
            href="/" 
            className="
            ml-1
        ">
            | Designed & Developed By Ravsol
        </Link>
      </p>

      <span className="
       text-white
       text-sm
       flex
       flex-row
       gap-2
      ">
            Visit us on social networks <SocialIcons/>
      </span>

      </div>
    </Container>
  </div>
    )
}
export default MiniFooter