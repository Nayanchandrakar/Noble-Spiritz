"use client"
import { useState, useEffect } from "react"
import Container from "@app/components/Container"
import PostDetail from "@app/components/blog/PostDetail"
import PostWidget from "@app/components/blog/PostWidget"
import { shallow } from "zustand/shallow"
import useBlogs from "@hooks/useBlogs"

const BlogDetails = ({ params }) => {
  const { setBlogdata, blogData } = useBlogs(
    (state) => ({
      setBlogdata: state.setBlogdata,
      blogData: state.blogData,
    }),
    shallow
  )

  const [blog, setblog] = useState(null)
  const [recentBlogs, setrecentBlogs] = useState(null)
  let id = Number(params.blogId)

  const getBlog = async () => {
    const res = await axios.get(
      "http://mws.dignityofnoble.org/api/v1/blog-posting/published-diligent-topics"
    )
    setBlogdata(res.data.data)
  }

  useEffect(() => {
    const blogFetch = blogData?.find(
      (elem) =>
        id ==
        Number(
          elem?.createdAt.length +
            elem?.topic_title.length +
            elem?.topic_desc.length
        )
    )
    setblog(blogFetch)

    const recentBlogPosts = blogData?.filter(
      (elem) =>
        id !==
        Number(
          elem?.createdAt.length +
            elem?.topic_title.length +
            elem?.topic_desc.length
        )
    )
    setrecentBlogs(recentBlogPosts)
  }, [id])

  return (
    <>
      <div
        className=" 
        my-16
      "
      >
        <Container>
          <div
            className="
          grid 
          grid-cols-1 
          lg:grid-cols-12 
          gap-12
        "
          >
            <div
              className="
            col-span-1 
            lg:col-span-8
          "
            >
              <PostDetail {...blog} />
            </div>
            <div
              className="
            col-span-1 
            lg:col-span-4
          "
            >
              <div
                className="
              relative 
              lg:sticky 
              top-0
            "
              >
                <PostWidget recentblogs={recentBlogs} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
export default BlogDetails
