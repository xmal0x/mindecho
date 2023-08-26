import {useEffect} from "react";
import {setPage} from "../slices/pageSlice";
import {useAppDispatch} from "../store/hooks";

const Search = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setPage('Search'))
    })

    return (
        <main className={`absolute top-[70px] max-w-[500px]`}>
            Search
        </main>
    )
}

export default Search
