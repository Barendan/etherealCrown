import { 
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
import GetMoney from './containers/GetMoney';
import TodoApp from './containers/TodoApp';
import TradeStop from './containers/TradeStop';
import Calendar from './containers/CalendarPage';
import BlogPage from './containers/BlogPage';
import './App.css';


const Home = () => <>
    <h1 style={{ padding: "1.2rem", fontSize: "42px"}}> Portal Directory</h1>
    <ul>
      <li style={{padding: "1.5rem", fontSize: "24px"}}>  
        <NavLink to="calendar">
          Calendar
        </NavLink> 
      </li>
      <li style={{padding: "1.5rem", fontSize: "24px"}}>  
        <NavLink to="blog">
          Blog Page
        </NavLink> 
      </li>
      <li style={{padding: "1.5rem", fontSize: "24px"}}>  
        <NavLink to="trade">
          TradeStop
        </NavLink> 
      </li>
      <li style={{padding: "1.5rem", fontSize: "24px"}}>  
        <NavLink to="million">
          Quick Milly
        </NavLink> 
      </li>
      <li style={{padding: "1.5rem", fontSize: "24px"}}>  
        <NavLink to="todo">
          Mini Todo App
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
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}
