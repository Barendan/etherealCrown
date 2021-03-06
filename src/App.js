import { 
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
import GetMoney from './containers/GetMoney';
import TodoApp from './containers/TodoApp';
import People from './containers/People';
import TradeStop from './containers/TradeStop';
import Calendar from './containers/CalendarPage';
import BlogPage from './containers/BlogPage';
import NoAuth from './containers/NoAuth';
import './App.css';

import { signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import { auth, provider } from './firebase'; // update path to your firestore config

const googleHandler = async () => {
  provider.setCustomParameters({ prompt: 'select_account' });

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log('worked perfectly');
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // redux action? --> dispatch({ type: SET_USER, user });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        
        console.log('didnt work cause:', errorCode || errorMessage);
        console.log('credential used:', email && credential);
    });
};

// googleHandler()

// signOut(auth)
// .then(() => {
//     console.log('logged out');
//     // navigate('/');
// })
// .catch((error) => {
//     console.log(error);
// });


const Home = () => <>
    <h1 style={{ padding: "1.2rem", fontSize: "42px"}}> Portal Directory</h1>
    <ul style={{display: 'inline-block', listStyle: 'devanagari', color: '#fff' }}>
      <li style={{padding: "1.5rem", fontSize: "1.3rem"}}>  
        <NavLink to="calendar">
          Calendar
        </NavLink> 
      </li>
      <li style={{padding: "1.5rem", fontSize: "1.3rem"}}>  
        <NavLink to="blog">
          Blog Page
        </NavLink> 
      </li>
      <li style={{padding: "1.5rem", fontSize: "1.3rem"}}>  
        <NavLink to="people">
          People Page
        </NavLink> 
      </li>
      <li style={{padding: "1.5rem", fontSize: "1.3rem"}}>  
        <NavLink to="trade">
          TradeStop
        </NavLink> 
      </li>
      <li style={{padding: "1.5rem", fontSize: "1.3rem"}}>  
        <NavLink to="million">
          Quick Milly
        </NavLink> 
      </li>
      <li style={{padding: "1.5rem", fontSize: "1.3rem"}}>  
        <NavLink to="todo">
          Mini Todo App
        </NavLink> 
      </li>
      <li style={{padding: "1.5rem", fontSize: "1.3rem"}}>  
        <NavLink to="noauth">
          No Auth
        </NavLink> 
      </li>
    </ul>
</>

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/trade" element={<TradeStop />} />
          <Route path="/million" element={<GetMoney />} />
          <Route path="/people" element={<People />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/noauth" element={<NoAuth />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}
