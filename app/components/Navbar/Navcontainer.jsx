'use client'
import LinkTag from "./Link/LinkTag"
import Options from "./Options"
import HoverBox from "./hover/Hoverbox"


const Navcontainer = ({
    handleActiveButton,
    elem,
    active,
}) => {

    const isAuth = false

    return(
        <div 
            key={elem?.id}
            onClick={() => handleActiveButton(elem?.href)}
            className="
                relative
                p-3
                rounded-lg
                flex
                justify-center
                items-center
                hover:shadow-5xl
                transition-all
                duration-400
                group
            ">


            {elem?.field === 'About us' ? 
            <Options
                key={elem?.field}
            /> 
            : <LinkTag
             field={elem?.field}
             href={elem?.href}
             key={elem?.id}
         />
            }

            <HoverBox
                active={active}
                href={elem?.href}
                key={elem?.id}
            />
    </div>
    )
}
export default Navcontainer