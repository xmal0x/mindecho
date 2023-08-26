import {ChangeEvent, FormEvent, useState} from "react";
import {styles} from "../styles";
import {useAppDispatch} from "../store/hooks";
import {createPost} from "../slices/thunks";

const splitMessageText = (message: string): {message: string, tags: string[]} => {
    const tags: string[] = []
    const messageWords = message.split(/\s+/);
    const updatedMessage: string[] = []

    for (let i = 0; i < messageWords.length; i++) {
        if (messageWords[i].trim().startsWith('#')) {
            tags.push(messageWords[i].trim())
        } else {
            updatedMessage.push(messageWords[i].trim())
        }
    }
    return {message: updatedMessage.join(' '), tags}
}

const PostCreator = () => {
    const [form, setForm] = useState({
        message: ''
    })
    const dispatch = useAppDispatch()

    const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setForm({message: e.target.value})
    }

    const isFilled = () => form.message.length

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const {tags, message} = splitMessageText(form.message) || []

        dispatch(createPost(
            {creator: 'Kirill', message: message, liked: false, tags, createdAt: Date.now().toString()}
        ))

        setForm({message: ''})
    }

    return (
        <div className={`fixed top-[70px] p-3 w-[500px] h-[150px] border-b ${styles.border} bg-white z-50`}>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col h-full justify-between"
            >
                <textarea
                    placeholder="What is happening?!"
                    rows={2}
                    name="message"
                    value={form.message}
                    onChange={handleMessage}
                    className="text-[18px] resize-none outline-none"
                />
                <div className="flex flex-row justify-end">
                    <button type="submit"
                            disabled={!isFilled()}
                            className={`transition duration-300 rounded-full py-3 px-5 bg-primary ${!isFilled() ? 'bg-opacity-30' : 'hover:bg-opacity-90'} text-white font-bold`}>Post
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PostCreator
