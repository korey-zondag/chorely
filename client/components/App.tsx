import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <br></br>
      <div className="app flex flex-grow flex-col items-center">
        <h1 className="text-3xl font-bold">Welcome to Chorely</h1>
        <br></br>
      </div>
      <Footer />
    </div>
  )
}

export default App
