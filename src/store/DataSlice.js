import { createSlice } from "@reduxjs/toolkit";

const data = {
    name: "",
    mail: "",
    phone: "",
    nationality: "-",
    message: ""
}

export const DataSlice = createSlice({
    name: "data",
    initialState: {
        data: data
    },
    reducers:{
        updateMessage: (state, action) => {
            const newMessage = action.payload
            console.log(action.payload)

            state.data = newMessage
        }
    }
})

export const { updateMessage } = DataSlice.actions;
export default DataSlice.reducer