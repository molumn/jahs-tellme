import React from "react";
import diets from "../../common/diets";

import './diet.css';

type DietProps = {
    delay?: number
}

const diet = (props: DietProps) => {
    const date = new Date()
    const month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    const code = `${date.getFullYear()}${month}${date.getDate() + (props.delay || 0)}`
    const diet = diets[code]

    if (diet === undefined || diet === null) {
        return (
            <div className={"DIET"}>
                <h1 className={"DIET_HEAD"}>{code}</h1>
                <div className={"DIET_CONTENT"}>
                    <h2>조식</h2>
                    <b>NULL</b>
                </div>
                <div className={"DIET_CONTENT"}>
                    <h2>중식</h2>
                    <b>NULL</b>
                </div>
                <div className={"DIET_CONTENT"}>
                    <h2>석식</h2>
                    <b>NULL</b>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }

    return (
        <div className={"DIET"}>
            <h1 className={"DIET_HEAD"}>{code}</h1>
            <div className={"DIET_CONTENT"}>
                <h2>조식</h2>
                <b>{(diet.breakfast || "NULL")}</b>
            </div>
            <div className={"DIET_CONTENT"}>
                <h2>중식</h2>
                <b>{(diet.lunch || "NULL")}</b>
            </div>
            <div className={"DIET_CONTENT"}>
                <h2>석식</h2>
                <b>{(diet.dinner || "NULL")}</b>
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