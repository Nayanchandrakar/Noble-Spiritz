'use client'

import Container from "@app/components/Container"
import PostDetail from "@app/components/blog/PostDetail"
import PostWidget from "@app/components/blog/PostWidget"

const BlogDetails = ({params}) => {
    return(
        <>
      <div 
      className=" 
        my-16
      ">
        <Container>
        <div 
        className="
          grid 
          grid-cols-1 
          lg:grid-cols-12 
          gap-12
        ">
          <div 
          className="
            col-span-1 
            lg:col-span-8
          ">
            <PostDetail 
              slugId={params.blogId}
            />
          </div>
          <div 
          className="
            col-span-1 
            lg:col-span-4
          ">
            <div 
            className="
              relative 
              lg:sticky 
              top-0
            ">
              <PostWidget 
                slugId={params.blogId} 
              />
            </div>
          </div>
        </div>
        </Container>
      </div>
    </>
    )
}
export default BlogDetails