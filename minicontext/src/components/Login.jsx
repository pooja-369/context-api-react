import React,{useState , useContext} from 'react'
import UserContext from '../assets/context/UserContext'

function Login() {
    const [username , setusername] = useState(" ")
    const [password,setpassword] = useState(" ")

    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
       e.preventDefault()
       setUser({username,password})
    }

  return (
    <div>
        <h2 class='text-green-500'>login</h2>
        <input type="text"
        class="m-2
        ring-offset-1 ring-1"
        value={username}
        onChange={(e)=>setusername(e.target.value)}
         placeholder='username'/>

        <input type="text" 
        class="m-2
        ring-offset-1 ring-1"
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
        placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login