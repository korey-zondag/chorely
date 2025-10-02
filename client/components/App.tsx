import Header from './Header'
import Footer from './Footer'
import Calendar from './Calendar'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <br></br>
      <div className="app flex flex-grow flex-col items-center px-4">
        <h1 className="text-3xl font-bold">Welcome to Chorely</h1>
        <br></br>
        <Calendar
          onDateSelect={(date) => console.log('Selected date:', date)}
        />
      </div>

      <Footer />
    </div>
  )
}

export default App
