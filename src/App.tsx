import { Suspense } from 'react'
import { Route, Routes } from 'react-router'
import Shell from './Layout/Shell'
import PageDettaglioMovie from './pages/PageDettaglioMovie'
import PageElencoMovies from './pages/PageElencoMovies'


const App = () => {
  return (
    <>
        <Suspense fallback={<div>caricando...</div>}>
            <Routes>
                <Route element={<Shell/>}>
                    <Route index element={<PageElencoMovies />}/>
                    <Route path='/movies/:id' element={<PageDettaglioMovie />}/>
                </Route>
            </Routes> 
        </Suspense>
    </>
  )
}

export default App