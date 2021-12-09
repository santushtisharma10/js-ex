import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectScore, setScore } from "../features/quiz";

function Stmt({ques, ans, setGen}) {

    const [inpAns, setAns] = useState(0)
    const dispatch = useDispatch()
    const score = useSelector(selectScore)

    const handleSubmit =  (e) => {

        e.preventDefault()
        setGen(true)
        console.log("entered answer", inpAns,"correct answer", ans)
        if(inpAns === ans) {

            console.log("yay correct answer")

            dispatch(setScore(score+1))
            console.log(score)
        }        
    }

    return(

        <div>
            <form onSubmit={handleSubmit}>
                <br/><br/>
            <h1>{ques[ques.length-1]}</h1>
            <br/>
            <input type="number" placeholder="Enter your answer" value={inpAns} onChange={e => setAns(parseInt(e.target.value))} required/>
            <button className="btn1" type="submit">Next</button>
            </form>
            
        </div>
    )
}

export default Stmt