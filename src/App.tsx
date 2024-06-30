import { Route, Routes, useNavigate } from "react-router-dom"
import { Books } from "./components/Books"
import { Create } from "./components/Create"
import { Update } from "./components/Update"
import {Home} from './components/Home'

function App() {
  const navigate=useNavigate()
  return (
    <div className="font-[Inter]">
      <div onClick={()=>{navigate('/')}} className="ml-[2rem]   rounded-full p-2 bg-[#E55F68] fixed top-[1.5rem] hover:cursor-pointer z-20">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/books/create" element={<Create/>}/>
        <Route path="/books/:book_id" element={<Books/>}/>
        <Route path="/books/:book_id/update" element={<Update/>}/>
      </Routes>
      
    </div>
  )
}


export default App
