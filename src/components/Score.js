import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectScore, setFinish, setScore, setStart } from "../features/quiz";

function Score() {

    const dispatch = useDispatch()

    const reGame = () => {

        dispatch(setStart(false))
        dispatch(setFinish(false))
        dispatch(setScore(0))
    }
    const score = useSelector(selectScore)

    return(

        <div>
            <br/><br/>
            Your score is {score}
            <br/><br/>
            <button className="btn1" onClick={reGame}>Restart the game</button>
            

        </div>
    )
}

export default Score