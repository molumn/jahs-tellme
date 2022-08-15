import React from "react";
import diets from "../../common/diets";

import './diet.css';

type DietProps = {

}

const diet = (props: DietProps) => {
    const date = new Date()
    const month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    const code = `${date.getFullYear()}${month}${date.getDate() + 1}`
    return (
        <div className={"DIET"}>
            <h1 className={"DIET_HEAD"}>{code}</h1>
            <div className={"DIET_CONTENT"}>
                <h2>조식</h2>
                <b>{(diets[code].breakfast || "NULL")}</b>
            </div>
            <div className={"DIET_CONTENT"}>
                <h2>중식</h2>
                <b>{(diets[code].lunch || "NULL")}</b>
            </div>
            <div className={"DIET_CONTENT"}>
                <h2>석식</h2>
                <b>{(diets[code].dinner || "NULL")}</b>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default diet