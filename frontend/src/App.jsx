
import { Container } from 'react-bootstrap'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import ContextProvider from './Context/ContextProvider'
import bg3 from './assets/bg3.jpg'

function App() {


  return (
    <>
      {/* <ContextProvider>
        <Header />
        <main className='py-3' style={{ backgroundColor: 'black' }}  >
          <Container>
            <Outlet />
          </Container>
        </main>
        <Footer />
      </ContextProvider>*/}
      <ContextProvider>

        <Outlet />

      </ContextProvider>
    </>
  )
}

export default App
