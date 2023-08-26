import {PostProps} from "./Feed";
import {Post} from "./Post";

export const PostList = ({posts}: {posts: PostProps[] }) => {
    return (
        <div className={`flex flex-col`}>
            {posts.map(post => (
                <Post
                    key={post._id}
                    {...post}
                />
            ))}
        </div>
    )
}
