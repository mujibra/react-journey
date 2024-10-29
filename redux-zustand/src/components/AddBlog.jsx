import { useDispatch, useSelector } from "react-redux";
import { handleAddBlog, handleInputChange } from "../store/slices/blog";

export default function AddBlog() {
  const { blog } = useSelector((state) => state);
  const dispatch = useDispatch();

  function onChangeInput(e) {
    dispatch(
      handleInputChange({
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(handleAddBlog());
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter Blog Title</label>
          <input
            className="p-2 rounded-md border border-black"
            type="text"
            name="title"
            placeholder="Enter Blok Title"
            id="title"
            onChange={(e) => onChangeInput(e)}
            value={blog.formData.title}
          />
        </div>
        <div>
          <label>Enter Blog Description</label>
          <input
            className="p-2 rounded-md border border-black"
            type="text"
            name="description"
            placeholder="Enter Blok Description"
            id="description"
            onChange={(e) => onChangeInput(e)}
            value={blog.formData.description}
          />
        </div>
        <button
          className="border border-cyan-950 bg-cyan-800 text-white"
          type="submit"
        >
          Add New Blog
        </button>
      </form>
    </div>
  );
}
