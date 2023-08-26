import {useEffect} from "react";
import {setPage} from "../slices/pageSlice";
import {useAppDispatch} from "../store/hooks";
import {styles} from "../styles";

const Search = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setPage('Search'))
    })

    return (
        <main className={`absolute top-[70px] ${styles.contentWidth}`}>
            Search
        </main>
    )
}

export default Search
