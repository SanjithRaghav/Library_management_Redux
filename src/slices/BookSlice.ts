import {createSlice} from "@reduxjs/toolkit"
import { Book } from "../types/BookType"
import { data } from "../Data/data";
import { nanoid } from "nanoid";

export interface BookState {
    books: Book[];
}
  
const initialState:BookState={
    books:data,
};

interface ActionWithData{
    type:String,
    payload:Book,
}
interface actionWithoutData{
    type:String,
    payload:String,
}





export const BookSlice=createSlice({
    name:"Books",
    initialState,
    reducers:{
        addBook:(state:BookState,action:ActionWithData)=>{
            let book:Book=action.payload
            book.id=nanoid()
            state.books.push(book)
        } ,      
        removeBook:(state:BookState,action:actionWithoutData)=>{
            state.books=state.books.filter((book)=>(book.id!=action.payload))

        } ,
        incrementPage:(state:BookState,action:actionWithoutData)=>{
            
            state.books=state.books.map((b)=>{
                if(b.id==action.payload){
                    if(b.current_page<b.total_number_of_pages ){
                        return {...b,current_page:b.current_page+1}
                    }
                }
                return b
                
            })

           
            
        },
        decrementPage:(state:BookState,action:actionWithoutData)=>{
            state.books=state.books.map((b)=>{
            
                if(b.id==action.payload){
                    if(b.current_page>0){
                        return {...b,current_page:b.current_page-1}
                    }
                }
                return b
                
            })
        },

        updateBook:(state:BookState,action:ActionWithData)=>{
            state.books=state.books.map((b)=>{
                if(b.id==action.payload.id){
                    return action.payload
                }
                return b
            })
        }

    }

})





export const {addBook,removeBook,incrementPage,decrementPage,updateBook}=BookSlice.actions

export default BookSlice.reducer