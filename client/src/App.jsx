// import "./App.css"
// import { Provider } from 'react-redux'
// import store from './app/store'
// import { Toaster } from 'react-hot-toast'
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import Join from "./components/Join";
// import Chat from "./components/Chat";

// function App() {


//   return (

//     <Switch>
//     <Router>
//         <Route exact path="/" Component={Join}/>
//         <Route path="/chat" Component={Chat}/>
//       </Router>
//     </Switch>
      
    

//   )
// }

// export default App



import "./App.css"
import { Provider } from 'react-redux'
import store from './app/store'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Join from "./components/Join"
import Chat from "./components/Chat"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Join />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        <Toaster />
      </Router>
    </Provider>
    </div>
  )
}

export default App
