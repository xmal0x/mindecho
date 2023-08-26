import {useAppDispatch} from "../store/hooks";
import {useEffect} from "react";
import {setPage} from "../slices/pageSlice";

const About = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setPage('About'))
    })

    return (
        <main className={`absolute top-[70px] max-w-[500px] flex flex-col gap-3 p-3`}>
            <p>Welcome to our platform! We are excited to introduce you to our simple yet powerful diary application.
                Designed with a user-friendly interface reminiscent
                of Twitter, our diary platform offers you the ability to express and share your thoughts effortlessly.
            </p>
            <p>
                Imagine having a space where you can jot down your daily reflections, celebrate your accomplishments, or
                simply share your musings with the world.
                Our diary platform allows you to do just that.
            </p>
            <p>
                One of the unique features of our diary application is the smart hashtag recognition system.
                If you include hashtags like #text within your post, our system will automatically identify them and
                segregate them into separate elements.
                This enables you to organize and categorize your entries based on different themes or topics.
            </p>
            <p>
                Engagement is an essential part of any social platform, and we've got you covered there too. You can
                interact with other users' posts by liking them,
                showing your support and appreciation. And don't worry, we understand that sometimes thoughts change or
                posts need to be removed.
            </p>
            Getting started is a breeze. To set up your unique presence on our platform, simply head over to the
            settings page to customize your username.
            This is how others will recognize and connect with you within the diary community.
            <p>
                We're excited to share that our platform is currently in the development phase.
            </p>
            <p>
                Thank you for joining us on this journey of self-expression and connection. We can't wait to see your
                thoughts come to life within our diary community.
            </p>
        </main>
    )
}

export default About
