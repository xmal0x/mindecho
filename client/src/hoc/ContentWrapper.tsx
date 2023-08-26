import {Component, FC} from "react";

const ContentWrapper = (Component: FC<any>) =>
    function HOC() {
        return (
            <div className="top-[70px]">
                <Component />
            </div>
        )
    }

    export default ContentWrapper
