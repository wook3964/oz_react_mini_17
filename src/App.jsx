import './App.css'
import movieListData from '../data/movieListData.json'
import MovieCard from './components/MovieCard'
import MovieDatail from './components/MovieDatail'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function Home() {
  
  return (
    <>
     <div className='grid grid-cols-2 md:grid-cols-5 gap-4 p-8 bg-gray-100 min-h-screen content-start'>
      {movieListData.results.map((item) => {
        return (
          <>
            <MovieCard
              key={item.id}
              {...item} 
              // title={item.title}
              // poster_path={item.poster_path}
              // vote_average={item.vote_average}
          />
            {/* <MovieDatail /> */}
          </>
        )
      })}
     </div>
    </>
  )
}
function App(){
  return(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = { <Home /> }/>
      <Route path = "/movie/:title" element = { < MovieDatail /> }/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
