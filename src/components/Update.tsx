
import { useSelector } from "react-redux"
import {  BookState } from "../slices/BookSlice"
import '../index.css'
import {  useParams } from "react-router-dom"
import { useState } from "react"
import { Book } from "../types/BookType"
import { Forms } from "./Forms"
export const Update=()=>{

    const params=useParams()
    const current_book_id =params.book_id


    const books=useSelector((state:BookState)=>((state.books)))

    
    const cur_book=books.find((b)=>{
        if(b.id==current_book_id)
            return true
        return false
    })
     const bk:Book={
        id: "",
        image_url:"",
        title:"",
        author:"",
        teaser:"",
        description:"",
        editors:"",
        language:"",
        total_number_of_pages:0,
        current_page:0,
    }
    const [book,setBook]=useState<Book>(
        cur_book?cur_book:bk
    )

  

    return (
        <Forms book={book} setBook={setBook} type="update"/>
    )
    
}

