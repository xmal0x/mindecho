import {logo} from "../../assets";
import {styles} from "../../styles";
import {useState} from "react";
import {menuItems} from "../../utils/constants";
import {MenuItem} from "./MenuItem";


const Menu = () => {
    const [active, setActive] = useState('')

    const handleClick = (id: string) => {
        setActive(id)
    }

    return (
        <aside className={`flex flex-col w-[300px] fixed justify-start gap-5 p-2 border-r ${styles.border} h-full`}>
            <img
                src={logo}
                alt="logo"
                className="h-[50px] object-contain self-start pl-1.5"
            />
            <ul className="flex flex-col gap-3 text-black">
                {menuItems.map(item => (
                    <MenuItem
                        key={item.id}
                        {...item}
                        onClick={handleClick}
                        activeId={active}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Menu
