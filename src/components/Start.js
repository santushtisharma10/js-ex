import React from "react";
import {useDispatch} from "react-redux"
import { setStart } from "../features/quiz";

function Start() {

    const dispatch = useDispatch()

    const handleChange = () => {

        dispatch(setStart(true))
    }

    return (

        <div>
            <button className="btn" onClick={handleChange}>Start the quiz </button>  
        </div>
    )
}
 export default Start