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
            Your score is {score}
            <button onClick={reGame}>Restart the game</button>
            

        </div>
    )
}

export default Score