import Header from './Header'
import Footer from './Footer'

function RecipesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <br></br>
      <div className="app flex flex-grow flex-col items-center">
        <h1 className="text-3xl font-bold">Recipes</h1>
      </div>
      <br></br>
      <Footer />
    </div>
  )
}

export default RecipesPage
