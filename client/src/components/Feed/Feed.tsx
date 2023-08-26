import {useAppSelector} from "../../store/hooks";
import {selectLoadingStatus, selectPosts} from "../../slices/postsSlice";
import {Loader} from "../UI/Loader";
import {PostList} from "./PostList";
import {styles} from "../../styles";

export interface PostProps {
    _id?: string,
    creator: string,
    message: string,
    tags: string[],
    createdAt: string,
    liked: boolean
}

const Feed = () => {
    const posts = useAppSelector(selectPosts)
    const loadingStatus = useAppSelector(selectLoadingStatus)

    return (
        <main className={`absolute top-[220px] ${styles.contentWidth}`}>
            <div className="w-full">
                {loadingStatus === 'loading' && <Loader style={'my-10'}/>}
                {loadingStatus === 'failed' && <div>Error, try refresh page</div>}
                {loadingStatus === 'completed' && <PostList posts={posts}/>}
            </div>
        </main>
    )
}

export default Feed
