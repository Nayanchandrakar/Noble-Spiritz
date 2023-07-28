import { create } from "zustand"

const useBlogs = create((set) => ({
  blogData: null,
  setBlogdata: (data) => {
    set((state) => ({ blogData: data }))
  },
}))

export default useBlogs
