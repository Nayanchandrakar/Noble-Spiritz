'use client'
import {CiTwitter} from 'react-icons/ci'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import Link from 'next/link'

const socialIcons = [
    {id:534534, background:'bg-blue-800',icon:FaFacebookF, href:'https://www.facebook.com/profile.php?id=100083581801796&notif_id=1686140081196027&notif_t=page_user_activity&ref=notif'},
    {id:64356, background:'bg-blue-400',icon:CiTwitter, href:'https://twitter.com/NobleSpiritz'},
    {id:35234534, background:'bg-blue-600',icon:FaLinkedinIn, href:'https://www.linkedin.com/company/noblespiritz001/?viewAsMember=true'},
    {id:56734, background:'bg-orange-500',icon:AiOutlineInstagram, href:'https://www.instagram.com/nobelspiritz001/'},
    {id:374623, background:'bg-red-600',icon:AiOutlineYoutube, href:''},
    {id:5674567, background:null,icon:AiOutlineSearch},
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

        {socialIcons?.map((e) => {
            if (e?.icon == AiOutlineSearch && isSearch) {
                return(
                    <>
                    <Link
                        href={e?.href || ''} 
                        key={e?.id}
                        className={`
                            rounded-full
                            w-fit
                            h-fit
                            p-1
                            cursor-pointer
                          ${e?.background}
                        `}>
                     <e.icon
                        width={20}
                        height={20}
                        color={e?.background == null ? 'gray' : 'white'}
                    />
                    </Link>
               </>)
            }else if (e?.icon !== AiOutlineSearch) {
                return(
                    <>
                    <Link 
                        href={e?.href || ''}
                        key={e?.id}
                        className={`
                            rounded-full
                            w-fit
                            h-fit
                            p-[3px]
                            cursor-pointer
                          ${e?.background}
                        `}>
                     <e.icon
                        width={10}
                        height={10}
                        color={e?.background == null ? 'gray' : 'white'}
                    />
                    </Link>
               </>)
            }
        })}
    </div>
    )
}
export default SocialIcons