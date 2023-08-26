import {styles} from "../styles";
import {useAppSelector} from "../store/hooks";
import {selectPage} from "../slices/pageSlice";

const Header = () => {
    const title = useAppSelector(selectPage)

    return (
        <div className={`fixed flex items-center top-0 ${styles.contentWidth} h-[70px] border-b ${styles.border} bg-white z-50`}>
            <p className={`${styles.primaryText} font-black pl-3`}>{title}</p>
        </div>
    )
}

export default Header
