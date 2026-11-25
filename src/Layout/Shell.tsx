import Header from '../components/Header'
import { Outlet } from 'react-router'
import "../App.css";



const Shell = () => {
  return (
    <>
        <div className="shell">
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
    </>
  )
}

export default Shell