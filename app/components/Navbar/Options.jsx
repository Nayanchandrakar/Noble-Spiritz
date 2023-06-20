'use client'
import Link from 'next/link'

const Options = () => {
    return(
        <div className="dropdown dropdown-hover text-xs">
        <label tabIndex={0} >About us</label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link href={'/team/board_members'}>Team</Link></li>
          <li><Link href={'/testimonials'}>Testimonials</Link></li>
        </ul>
        </div>
    )
}
export default Options