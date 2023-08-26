import {useAppDispatch} from "../store/hooks";
import {useEffect} from "react";
import {setPage} from "../slices/pageSlice";
import {getPosts} from "../slices/thunks";
import PostCreator from "../components/PostCreator";
import Feed from "../components/Feed/Feed";

const Home = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPosts())
        dispatch(setPage('Home'))
    })

    return (
        <>
            <PostCreator/>
            <Feed/>
        </>
    )
}

export default Home
