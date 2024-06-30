
import { useSelector } from "react-redux"
import { BookState, decrementPage, incrementPage, removeBook } from "../slices/BookSlice"
import { useDispatch } from "react-redux"
import '../index.css'
import { useNavigate, useParams } from "react-router-dom"
export const Books=()=>{

    const params=useParams()
    const current_book_id =params.book_id
    const navigate=useNavigate()
    const dispatch=useDispatch()


    const books=useSelector((state:BookState)=>((state.books)))
    console.log(books)
    const book=books.find((b)=>{
        if(b.id==current_book_id)
            return true
        return false
    })

    // const book=books[0]
    const handleInc=()=>{
        console.log("gello")
        if(book!=undefined)
        dispatch(incrementPage(book.id))
    }
    const handleDec=()=>{
        if(book!=undefined)
        dispatch(decrementPage(book.id))
    }

    const handleDelete=()=>{
        if(book!=undefined)
        dispatch(removeBook(book.id))
        navigate("/")
    }
    const handleUpdate=()=>{
        if(book!=undefined)
        navigate(`/books/${book.id}/update`)
        else
        navigate('/')
    }
    if(book==undefined){
        return (<p>Invalid URL</p>)
    }

    return (
        <div className="relative w-screen h-screen">
            <div className="z-20 w-[80%] mx-auto pt-[4rem]">
                <div className="w-[100%] grid grid-cols-2">
                    <div className="  justify-self-end">
                        <img src={book.image_url} className="shadow-custom z-20 w-[18rem] h-[27rem] mr-[10rem] relative" />
                    </div>
                    <div className="w-[70%]">
                            <p className="text-[3rem] font-[Lora] font-medium">{book.title}</p>
                            <p className="mt-[2rem] text-[1.2rem]">{book.author}</p>
                            <p className="mt-[2rem] text-[0.95rem] italic">{book.teaser}</p>
                    </div>

                </div>
            </div>
            <div className="z-10 w-[80%] h-[60%] bg-[#FDFCF7] left-[50%] -translate-x-[50%]  bottom-0 absolute ">
                <div className="flex justify-end">
                    <div className="w-[35%] mr-[15%] h-[7.8rem] border-b-2 border-[#EBE8D9] flex items-center justify-between">
                        <div onClick={handleUpdate} className="px-8 py-2 bg-black rounded-full text-white flex cursor-pointer">
                            <p className="mr-2">Update Book</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="translate-y-1 size-[1rem]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </div>

                        <div className="flex">
                            <svg onClick={handleDec}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hover:cursor-pointer size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                            <p className="px-3"><span className="text-red-500">{book.current_page}</span> / {book.total_number_of_pages} pages</p>
                            <svg onClick={handleInc} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hover:cursor-pointer size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                        </div>

                        <svg onClick={handleDelete} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-black hover:stroke-red-400 hover:cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>


                    </div>

                </div>
                <div className="w-[80%] mx-auto grid grid-cols-2">
                    <div>
                        <p className="mb-[2rem] mt-[7rem] text-[1.5rem] font-medium">
                         Description
                        </p>
                        <p className="font-light text-[1.1rem] w-[80%]">
                            {book.description}
                        </p>
                    </div>
                    <div>
                        <div>
                            <p className="mb-[2rem] mt-[7rem] text-[1.5rem] font-medium">
                                Editors
                            </p>
                            <p>
                                {book.editors}
                            </p>
                        </div>
                        <div>
                            <p className="mb-[2rem] mt-[2rem] text-[1.5rem] font-medium">
                                Language
                            </p>
                            <p>
                                {book.language}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
    
}

