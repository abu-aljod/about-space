import './App.css'

import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  useNavigate
} from 'react-router-dom'
import { useState } from 'react'

import NavBar from './NavBar'
import HomePage from './HomePage'
import NavigateBackButton from './NavigateBackButton'
import NavigateForwardButton from './NavigateForwardButton'
import ContentPage from './ContentPage'

// My layout
function Layout() {
  const [ history, setHistory ] = useState(['/']);
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const navigate = useNavigate()

  const isBackHistory = currentIndex > 0;
  const isForwardHistory = currentIndex < history.length - 1;

  const handleClick = (page) => {
    if (page === history[currentIndex]) return;

    const updatedHistory = [...history.slice(0, currentIndex + 1), page];
    setHistory(updatedHistory);
    setCurrentIndex(updatedHistory.length - 1);
  }

  const handleBackClick = () => {
     if (!isBackHistory) return;
    
    let prevIndex = currentIndex - 1;
    setCurrentIndex(prevIndex);
    navigate(history[prevIndex]);
  }

  const handleForwardClick = () => {
    if (!isForwardHistory) return;

    let nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    navigate(history[nextIndex]);
  }

  return (
    <>
    <header>
      <h1><i>Cosmic Encyclopedia</i></h1>

      <div className='buttons'>
        <NavigateBackButton onClick={handleBackClick} disabled={isBackHistory} />
        <NavigateForwardButton onClick={handleForwardClick} disabled={isForwardHistory} />
      </div>

      <NavBar handleClick={handleClick} />
    </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route index element={<HomePage />} />
      <Route path='/:id' element={<ContentPage />} />
    </Route>
  )
)

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
