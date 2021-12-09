import {createSlice} from "@reduxjs/toolkit"

const quiz = createSlice( {

    name: "quiz", 
    initialState: {

        isStart: false, 
        score:0, 
        quesData: {
            ques:[], 
            corrAns: [],
            ans: []
        }, 
        isFinish: false
    }, 
    reducers: {

        setStart: (state, action) => {

            state.isStart = action.payload;
        }, 
        setQuesData: (state, action) => {

            state.quesData = action.payload;
        },
        setScore: (state, action) => {

            state.score = action.payload;
        },
        setFinish: (state, action) => {

            state.isFinish = action.payload;
        }
    }
});

export const {

    setStart, setQuesData, setScore, setFinish
} = quiz.actions

export const selectStart = (state) => state.quiz.isStart
export const selectQuesData = (state) => state.quiz.quesData
export const selectScore = (state) => state.quiz.score
export const selectFinish = (state) => state.quiz.isFinish


export default quiz.reducer