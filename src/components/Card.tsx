import { Book } from "../types/BookType";

import { Progress } from "../@/components/ui/progress"
import { useNavigate } from "react-router-dom";




export const Card=({book}:{book:Book})=>{
    const navigate=useNavigate()

    return (
        <div onClick={()=>{navigate(`/books/${book.id}`)}} className="hover:border-[1px] border-black py-[2rem] hover:cursor-pointer hover:-translate-y-2">
            <img src={book.image_url} className="shadow-custom w-[13rem] h-[20rem] mx-auto"></img>
            <div className="w-[50%] mx-auto"> 
            <p className="mt-[2.5rem] font-medium">{book.title}</p>

            <p className="font-medium text-[#B6B6B6]">{book.author}</p>
            <p className="mt-[0.5rem] text-[0.8rem] mb-[0.5rem]"><span className="text-red-500 text-[1.2rem]">{book.current_page}</span> / {book.total_number_of_pages} pages</p>
            <Progress value={(book.current_page/book.total_number_of_pages)*100} />


            </div>
            

        </div>
    )
}   