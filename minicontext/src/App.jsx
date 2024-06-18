import Login from './components/Login';
import Profile from './components/Profile';
import './App.css'
import UserContextProvider from './assets/context/UserContextProvider'

function App() {


  return (
   <div Classname="bg-black"> 
    <UserContextProvider >
   <Login/>
   <Profile/>
    </UserContextProvider>
    </div>
  )
}

export default App;
