import React from "react";
import Start from "./Start";
import Ques from "./Ques";
import {useSelector} from "react-redux"
import { selectStart } from "../features/quiz";

function Main() {

    const start = useSelector(selectStart)
    
    return start ?(
        <div>
            <Ques />
        </div>
    ) : (
        <div>
            <Start />
        </div>
    )
}

export default Main