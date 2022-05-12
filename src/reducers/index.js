import changeTheNmuber from "./UpDown";
import { combineReducers } from "@reduxjs/toolkit";
import changeTodoText from './AddListReducer';

const rootreducer = combineReducers({
    changeTheNmuber,
    changeTodoText
})

export default rootreducer