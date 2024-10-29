import useFetch from "../../hooks/use-fetch";

export default function CommentsList() {
    const { data, loading, error } = useFetch("https://dummyjson.com/comments");

    if (loading) return <h1>Some salty is coming!</h1>;

    return (
        <div>
            <h3>Comments List Page</h3>
            <ul>
                {data?.comments?.length > 0
                    ? data?.comments.map((comment) => (
                          <div>
                              <label>{comment?.body}</label>
                              <h5>Likes: {comment?.likes}</h5>
                          </div>
                      ))
                    : null}
            </ul>
        </div>
    );
}
