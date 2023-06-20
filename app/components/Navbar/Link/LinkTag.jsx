'use client'
import Link from 'next/link'

const LinkTag = ({
    href,
    field,
}) => {
    return <Link href={href} className="text-xs font-medium">{field}</Link>
}
export default LinkTag