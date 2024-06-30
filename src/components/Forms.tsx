
import { addBook, updateBook } from "../slices/BookSlice"
import { useDispatch } from "react-redux"
import '../index.css'
import { useNavigate } from "react-router-dom"
import { Book } from "../types/BookType"

interface formInterface{
    book:Book,
    type:String,
    setBook: React.Dispatch<React.SetStateAction<Book>>;
}

export const Forms=({book,setBook,type}:formInterface)=>{


    const navigate=useNavigate()
    const dispatch=useDispatch()


   
    const handleChange= (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {name,value}=e.target
        if(book!=undefined)
            setBook({
                ...book,
                [name]:value
            })
    }
    const handleSubmit = ()=>{
        if(book!=undefined){
            if(type=="update"){

                dispatch(updateBook(book))
                navigate(`/books/${book.id}`)
            }
            else{

                dispatch(addBook(book))
                navigate(`/`)
            }
        }
        
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
                            <input className="border-b bg-transparent focus:outline-none border-black text-[3rem] font-[Lora] font-medium" onChange={handleChange} name="title" value={book.title} type="text" placeholder="title"/>
                            <input className="border-b bg-transparent focus:outline-none border-black mt-[2rem] text-[1.2rem]" onChange={handleChange} name="author" value={book.author} type="text" placeholder="author"/>
                            <textarea className="border-b block w-[80%] h-[5rem] bg-transparent focus:outline-none border-black mt-[2rem] text-[0.95rem] italic" onChange={handleChange} name="teaser" value={book.teaser}  placeholder="teaser"/>
                    </div>

                </div>
            </div>
            <div className="z-10 w-[80%] h-[60%] bg-[#FDFCF7] left-[50%] -translate-x-[50%]  bottom-0 absolute ">
                <div className="flex justify-end">
                    <div className="w-[35%] mr-[15%] h-[7.8rem] border-b-2 border-[#EBE8D9] flex items-center justify-between">
                        <div onClick={handleSubmit} className="px-8 py-2 bg-black rounded-full text-white flex cursor-pointer">
                            <p className="mr-2">Submit</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="translate-y-1 size-[1rem]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </div>

                        <div className="flex justify-end">
                           
                            <p> Total Number Of pages:</p>
                            <input  className="focus:outline-none border-b border-black w-[15%] text-center" onChange={handleChange} name="total_number_of_pages" value={book.total_number_of_pages} type="number" />
                            

                        </div>

                       


                    </div>

                </div>
                <div className="w-[80%] mx-auto grid grid-cols-2">
                    <div>
                        <p className="mb-[2rem] mt-[7rem] text-[1.5rem] font-medium">
                         Description
                        </p>
                        <textarea className="h-[8rem] text-wrap border-b bg-transparent focus:outline-none border-black font-light text-[1.1rem] w-[80%]" onChange={handleChange} name="description" value={book.description} placeholder="description"/>
                        
                    </div>
                    <div>
                        <div>
                            <p className="mb-[2rem] mt-[7rem] text-[1.5rem] font-medium">
                                Editors
                            </p>
                            <input className="focus:outline-none w-[100%] border-b border-black" onChange={handleChange} name="editors" value={book.editors} type="text" placeholder="editors"/>
                        </div>
                        <div>
                            <p className="mb-[2rem] mt-[2rem] text-[1.5rem] font-medium">
                                Language
                            </p>
                            <input  className="focus:outline-none w-[100%] border-b border-black" onChange={handleChange} name="language" value={book.language} type="text" placeholder="language"/>
                                
                        </div>
                        <div>
                            <p className="mb-[0.5rem] mt-[2rem] text-[1.5rem] font-medium">
                                Image URL
                            </p>
                            <input className="focus:outline-none w-[100%] border-b border-black" onChange={handleChange} name="image_url" value={book.image_url} type="text" placeholder="image URL"/>
                                
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
    
}

