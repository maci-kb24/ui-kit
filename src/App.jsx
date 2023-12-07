
import './App.css'
import "../src/styles/normalize.css";
import Rectangle from "../src/assets/images/Rectangle4.png";
import Rectangle1 from "../src/assets/images/Rectangle5.png";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Button from './components/Button';


const navLinks = [
    { id: 1, text: 'Buttons', path: '/buttons' },
    { id: 2, text: 'Badge', path: '/badge' },
    { id: 3, text: 'ContextMenu', path: '/contextmenu' },
    { id: 4, text: 'Checkbox', path: '/checkbox' },
    { id: 5, text: 'Files', path: '/files' },
    { id: 6, text: 'Filter', path: '/filter' },
    { id: 7, text: 'Notifications', path: '/notifications' },
    { id: 8, text: 'Icon', path: '/icon' },
    { id: 9, text: 'Input', path: '/input' },
    { id: 10, text: 'Popup', path: '/popup' },
    { id: 11, text: 'Tab', path: '/tab' },
    { id: 12, text: 'Tag', path: '/tag' },
    { id: 13, text: 'Tooltip', path: '/tooltop' },
    { id: 14, text: 'Toggle', path: '/toggle' },
    { id: 15, text: 'Search', path: '/search' },
    { id: 16, text: 'Select', path: '/select' },
    { id: 17, text: 'Radio', path: '/radio' },






  ];


function App() {

  return (
    <Router>
    <div id="app">
      <div className='header'>
        <div className='header-logos'>
        <img className='rectangle' src={Rectangle1} alt={Rectangle1} width={'45px'} />
        <img className='rectangle1' src={Rectangle} alt={Rectangle} width={'45px'} />
        </div>
        <div className="title">
          <h3>UI Web components developed with React & Storybook</h3>
        </div>
      </div>
      <div className='main'>
        <div className='sidebar'>
          <nav>
            <ul>
            {navLinks.map(link => (
                  <li key={link.id}>
                    <Link to={link.path}>{link.text}</Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
        <div className='right-content'>
        <Routes>
          <Route path='/buttons' element={<Button />} />
          {/* <Route path='/about' element={<About />} /> */}
          {/* <Route path='/contact' element={<Contact />} /> */}
        </Routes>
        </div>
      </div>
    </div>
    </Router>
  )
}

export default App
