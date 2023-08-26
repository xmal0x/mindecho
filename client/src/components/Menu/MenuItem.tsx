import {Link} from "react-router-dom";
import {styles} from "../../styles";
import React from "react";

interface MenuItemProps {
    id: string,
    title: string,
    activeIcon: string,
    inactiveIcon: string,
    onClick: (id: string) => void,
    activeId: string
}


export const MenuItem = React.memo(({id, activeIcon, inactiveIcon, title, onClick, activeId}: MenuItemProps) => {

    const handleClick = (id: string) => {
        onClick(id)
    }

    return (
        <li className="hover:cursor-pointer group/item" onClick={() => handleClick(id)}>
            <Link to={`/${id}`}>
                <div
                    className="transition duration-300 group-hover/item:bg-gray group-hover/item:bg-opacity-20 py-2 pl-3 pr-5 rounded-full flex items-center gap-4 max-w-fit">
                    <img
                        src={activeId === id ? activeIcon : inactiveIcon}
                        alt={title}
                        className="object-contain w-[30px]"
                    />
                    <p className={`${styles.primaryText} ${activeId === id ? 'font-black' : 'font-medium'} `}>{title}</p>
                </div>
            </Link>
        </li>
    )
})
