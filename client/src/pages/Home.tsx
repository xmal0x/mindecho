import {Feed, PostCreator} from "../components";
import {useAppDispatch} from "../store/hooks";
import {useEffect} from "react";
import {setPage} from "../slices/pageSlice";
import {getPosts} from "../slices/thunks";

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
