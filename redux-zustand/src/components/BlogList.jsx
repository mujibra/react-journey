import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogListInitialState } from "../store/slices/blog";

export default function BlogList() {
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state);
  const { blogList } = blog;
  console.log(blogList);

  useEffect(() => {
    dispatch(
      blogListInitialState({
        blogList: JSON.parse(localStorage.getItem("blogList")) || [],
      })
    );
  }, []);

  return (
    <ul>
      {blogList?.length > 0 ? (
        blogList.map((blog) => (
          <div
            className="max-w-xl rounded-lg mt-3 p-2 border border-gray-900"
            key={blog.id}
          >
            <li>{blog.title}</li>
            <li>{blog.description}</li>
          </div>
        ))
      ) : (
        <h2>No Bloglist!</h2>
      )}
    </ul>
  );
}
