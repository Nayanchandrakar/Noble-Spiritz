'use client'
import Image from "next/image"
import Link from "next/link"

const PostWidget = () => {
    return(
    <div className="bg-white shadow-custom-black rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{false ? 'Related Posts' : 'Recent Posts'}</h3>
      {[2,3,5,4,34].map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              alt={post.title}
              height={60}
              width={60}
              unoptimized
              className="align-middle rounded-full"
              src={'/logo.jpg'}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">{'12/231/3213'}</p>
            <Link href={`/post/${'post_sluge_id'}`} className="text-md" key={index}>{'Complete Html course'}</Link>
          </div>
        </div>
      ))}
    </div>
    )
}
export default PostWidget