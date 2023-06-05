'use client'
import {CiTwitter} from 'react-icons/ci'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'

const socialIcons = [
    { background:'bg-blue-800',icon:FaFacebookF},
    { background:'bg-blue-400',icon:CiTwitter},
    { background:'bg-blue-600',icon:FaLinkedinIn},
    { background:'bg-orange-500',icon:AiOutlineInstagram},
    { background:'bg-red-600',icon:AiOutlineYoutube},
    { background:null,icon:AiOutlineSearch},
]

const SocialIcons = ({
    isSearch
}) => {
    return(
        <div 
            className="
             flex
             gap-2
             flex-row
        ">

        {socialIcons?.map((e,index) => {
            if (e?.icon == AiOutlineSearch && isSearch) {
                return(
                    <>
                    <span 
                        key={index}
                        className={`
                            rounded-full
                            w-fit
                            h-fit
                            p-1
                            cursor-pointer
                          ${e?.background}
                        `}>
                     <e.icon
                        key={index + 34}
                        width={20}
                        height={20}
                        color={e?.background == null ? 'gray' : 'white'}
                    />
                    </span>
               </>)
            }else if (e?.icon !== AiOutlineSearch) {
                return(
                    <>
                    <span 
                        key={index}
                        className={`
                            rounded-full
                            w-fit
                            h-fit
                            p-1
                            cursor-pointer
                          ${e?.background}
                        `}>
                     <e.icon
                        key={index + 34}
                        width={20}
                        height={20}
                        color={e?.background == null ? 'gray' : 'white'}
                    />
                    </span>
               </>)
            }
        })}
    </div>
    )
}
export default SocialIcons