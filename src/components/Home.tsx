import { useSelector } from "react-redux"
import { Book } from "../types/BookType"
import { BookState } from "../slices/BookSlice"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card } from "./Card"

export const Home=()=>{
    const books_data:Book[]=useSelector((state:BookState)=>(state.books))
    const [search,setSearch]=useState('')
    const books=(search?books_data.filter((b)=>(b.title.toLowerCase().includes(search))):books_data)

    const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setSearch(e.target.value)
    }
    const navigate=useNavigate()
    const book_cards=books.map((bk)=>{
        return (
            <Card book={bk}/>
        )
    })
    return (
        <>
        <div className="h-screen w-[30%] bg-[#FDFCF7] fixed top-0 -z-10">

        </div>
        <div className="flex mt-[2rem] ml-[6rem]">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 translate-y-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            <input className=" placeholder:text-[0.8rem] placeholder:text-slate-500 ml-3 focus:outline-none" value={search} placeholder="Search book name" onChange={handleChange} />
        </div>

        <div className="ml-[6rem] mt-[2rem]">
            <p className="text-[3rem] font-[Lora] font-semibold">
                Keep The Story Going ..
            </p>
            <p className="text-[0.9rem] mt-[1.8rem]">
                Don't let the story end just yet. Continue Reading yout last Book and immerse yourself in the world of literature.
            </p>
            <div className="flex w-[20%] justify-between mt-[2rem]">
                <div onClick={()=>{navigate(`/books/${books[0].id}`)}} className="px-8 mt-[1.8rem] py-2 bg-black rounded-full text-white flex cursor-pointer ">
                    <p className="mr-2">Explore</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="translate-y-1 size-[1rem]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </div>
                <div onClick={()=>{navigate(`/books/create`)}} className="px-8 mt-[1.8rem] py-2 border-[1px] border-slate-600 rounded-full flex cursor-pointer ">
                    <p className="mr-2">Add Book</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 translate-y-[0.5px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>

                </div>

            </div>

        </div>
        <div className="grid w-[90%] mt-[4rem] gap-y-[5rem] mx-auto grid-cols-4">
           
            {book_cards}
        </div>

        </>

    )
} 