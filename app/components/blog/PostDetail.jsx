'use client'
import Image from "next/image";
import {SlCalender} from 'react-icons/sl'

const PostDetail = ({
  slugId
}) => {
    return(
        <>
        <div className="bg-white shadow-custom-black rounded-lg lg:p-8 pb-12 mb-8 ">
          <div className="relative overflow-hidden shadow-md mb-6">
            <Image 
            src={'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305182658/HTML-tutorial.jpg'} 
            alt="main_blog_image" 
            className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg " 
            width={10}
            height={10}
            sizes="100"
            />
          </div>
          <div className="px-4 lg:px-0">
            <div className="flex items-center mb-8 w-full">
              <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 ">
                <Image
                  alt={'empty_now'}
                  height={30}
                  width={30}
                  className="align-middle rounded-full"
                  src={'/logo.jpg'}
                />
                <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{'nayan chandrakar'}</p>
              </div>
              <div className="font-medium flex flex-row gap-3
              items-center text-gray-700">
                <SlCalender
                    size={30}
                    color="#ff08a4"
                />
                <span className="align-middle">{'12/23/4123'}</span>
              </div>
            </div>
            <h1 className="mb-8 text-3xl font-semibold">{'Complete Html course'}</h1>
            <p> 
                slugId:{slugId} ipsum dolor sit amet consectetur adipisicing elit. Debitis similique, porro cum ad voluptatem vel repellendus voluptas tenetur! Quibusdam laudantium magnam odit cumque officia quam, aliquid quidem eum expedita perspiciatis sunt? Doloribus rem delectus suscipit, laborum deleniti beatae deserunt at totam pariatur obcaecati quo voluptates adipisci debitis alias necessitatibus doloremque eaque consequatur voluptas nam dolor quis reiciendis distinctio numquam sequi! Eaque dolore quas repellendus ut porro similique saepe sequi velit maiores vitae cupiditate numquam, reiciendis voluptas, blanditiis autem mollitia quasi molestias hic atque! Vel fuga sunt alias nostrum ut quasi molestiae odio. Incidunt nulla repudiandae delectus iure? Mollitia, asperiores aliquid.
            </p>
          </div>
        </div>
  
      </>
    )
}
export default PostDetail