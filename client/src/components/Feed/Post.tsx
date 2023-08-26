import {useAppDispatch} from "../../store/hooks";
import {styles} from "../../styles";
import {like, like_red, remove} from "../../assets";
import {PostProps} from "./Feed";
import {deletePost, likePost} from "../../slices/thunks";

export const Post = ({_id, creator, createdAt, message, tags, liked}: PostProps) => {
    const dispatch = useAppDispatch()
    const date = new Date(createdAt)

    const handleLike = (id: string) => dispatch(likePost(id!))

    return (
        <div className={`flex flex-col gap-2 border-b ${styles.border} p-3 w-full group/item hover:bg-secondary`}>
            <div className="flex justify-between">
                <div className="flex flex-row gap-2 items-center">
                    <p className="text-black font-bold text-[16px]">{creator}</p>
                    <p className="text-gray text-[12px]">{`${date.getDate()}/${date.getMonth()}`}</p>
                </div>
                <img
                    src={remove}
                    alt="remove"
                    className="hover:scale-125 transition duration-300 group/edit opacity-0 group-hover/item:opacity-100 h-[25px] object-contain cursor-pointer"
                    onClick={() => dispatch(deletePost(_id!))}
                />
            </div>
            <p className="text-[16px]">{message}</p>
            <div className="flex flex-row justify-between">
                <p className="text-[14px] text-primary">{tags.join(' ')}</p>
                <div className="cursor-pointer">
                    <img
                        src={like}
                        alt="like"
                        className={`hover:scale-125 transition duration-300 h-[25px] object-contain self-end ${liked ? 'hidden' : 'block'}`}
                        onClick={() => handleLike(_id!)}
                    />
                    <img
                        src={like_red}
                        alt="like"
                        className={`hover:scale-75 transition duration-300 h-[25px] object-contain self-end ${liked ? 'block' : 'hidden'}`}
                        onClick={() => handleLike(_id!)}
                    />
                </div>
            </div>
        </div>
    )
}
