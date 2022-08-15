import React from "react";

import routes from "./routes";
import {Link} from "react-router-dom";

import './index.css';

type RootProps = {

}

const root = (props: RootProps) => {
    return (
        <>
            <h1 style={{
                color: "#EEEEEE"
            }}>임시 테스트</h1>

            {/* --- Diet Preview --------------------------- */}
            <Link style={{
                color: "#AAAAAA",
                width: "auto"
            }} to={"/routes/diet"}>
                <h2>오늘의 식단!</h2>
            </Link>

            <Link style={{
                color: "#AAAAAA",
                width: "auto"
            }} to={"/routes/diet/tomorrow"}>
                <h2>내일의 식단!</h2>
            </Link>

            {/* ------------------------------------------- */}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <a href={'https://github.com/molumn/jahs-tellme'} target={"_blank"} className={"FIXED"}>
                Github
            </a>
        </>
    )
}

const pages = {
    root: {
        index: root,
        routes
    }
}

export default pages