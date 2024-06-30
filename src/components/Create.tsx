import { useState } from "react"
import { Book } from "../types/BookType"
import { Forms } from "./Forms"
export const Create=()=>{

    const [book,setBook]=useState<Book>({
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
    })

    return (
        <Forms book={book} setBook={setBook} type="create"/>
    )
    
}

