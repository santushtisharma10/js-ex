import React from "react";
import { useState } from "react/cjs/react.development";
import GenQues from "./GenQues";
import Stmt from "./Stmt";
import Confetti from "react-confetti"
import Score from "./Score"
import { useSelector } from "react-redux";
import { selectFinish } from "../features/quiz";

function Ques() {

    const [gen, setGen] = useState(true)
    const [ques, setQues] = useState([]) 
    const [ans, setAns] = useState()
    const end = useSelector(selectFinish)    

    return end ? (
        <div>
            <Score />
            <Confetti width={window.innerWidth} height={window.innerHeight} />
        </div>
    )
    : (
        <div>
            {gen ? <GenQues setGen={setGen} setAns={setAns} setQues={setQues} />:<Stmt ques={ques} ans={ans} setGen={setGen} />}
            
        </div>
    )
}

export default Ques