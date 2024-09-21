import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    title:"This is Welcome Form",
    description:"This is a description of the form",
    buttonText:"Start",
    imageUrl:"",
    emailForms:[]
}

const welcomeFormSlice = createSlice({
    name:"Welcome Form",
    initialState,
    reducers:{
        changeTitle: (state, action)=>{
            const newTitle = action.payload;
            state.title = newTitle;
        },
        changeDescription: (state, action)=>{
            const newDescription = action.payload;
            state.description = newDescription;
        },
        changeButtonText: (state, action)=>{
            const newButtonText = action.payload;
            state.buttonText = newButtonText;
        },
        changeImageUrl: (state, action)=>{
            const newImageUrl = action.payload;
            state.imageUrl = newImageUrl;
        },
        addEmailForms: (state, action)=>{
            if(state.emailForms.length == 0){
                state.emailForms.push({...action.payload, id:1});
            }else{
                const id = state.emailForms[state.emailForms.length - 1].id + 1;
                state.emailForms.push({...action.payload, id});
            }
        },
        removeFormByID: (state, action)=>{
            state.emailForms = state.emailForms.filter((form)=>{
                return action.payload != form.id;
            })
        },
        changeTitleOfEmailForm:(state, action)=>{
            state.emailForms = state.emailForms.map((form)=> {
                if(form.id == action.payload.id){
                    form.title = action.payload.title;
                }

                return form;
            })
        },
        changeDescriptionOfEmailForm: (state, action)=> {
            state.emailForms = state.emailForms.map((form)=> {
                if(form.id == action.payload.id){
                    form.description = action.payload.description;
                }

                return form;
            })
        } 
    }
})

export const {changeTitle, changeDescription, changeButtonText, changeImageUrl, addEmailForms, removeFormByID, changeTitleOfEmailForm, changeDescriptionOfEmailForm} = welcomeFormSlice.actions;
export default welcomeFormSlice.reducer;