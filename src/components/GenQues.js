import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFinish } from "../features/quiz";
import Stmt from "./Stmt";

// generate question using form
// store questions

function GenQues({ setGen, setQues, setAns}) {

    const [val1, setVal1] = useState(10)
    const [val2, setVal2] = useState(10)
    const [idx, setIdx] = useState(-1)
    const [score, setScore] = useState(0)
    const dispatch = useDispatch()
    const arr = ["+", "-", "*", "/"]

    const computeAns = () => {

        console.log("Befor set", val1, val2)
        let op ; 
        if(idx === -1) {

            op = arr[Math.floor(Math.random()*4)]
        }
        else {

            op = arr[idx]
        }
        const num1 = Math.floor(Math.random()*val1)
        const num2 = Math.floor(Math.random()*val2)

        if(op === "+") {

            setAns(num1+num2)
        }
        else if(op === "-") {
            
            setAns(num1-num2)
        }
        else if(op === "*") {
            
            setAns(num1*num2)
        }
        else {

            setAns(num1/num2)
        }
       
        setGen(false)
        
        setQues(prev => [...prev, num1 + " " + op + " " + num2 + " " ])
    }

    return(
        <div>

            
                <input type="number" min="0" max="15" placeholder="number 1" value={val1} onChange={(e)=>setVal1(e.target.value)} />
                <select onChange={(e) => setIdx(e.target.value)}>
                    <option value="0" >+</option>
                    <option value="1" >-</option>
                    <option value="2" >*</option>
                    <option value="3" >/</option>
                    
                </select>
                <input type="number" min="0" max="15" placeholder="number 2" value={val2} onChange={(e)=>setVal2(e.target.value)}/>

                <button onClick={computeAns}>Generate the question</button>
                <button onClick={()=>dispatch(setFinish(true))}>Finish</button>

        </div>
    )
}



export default GenQues