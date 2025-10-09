import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'

function RecipesPage() {
  const [recipes, setRecipes] = useState([
    { id: 1, name: 'Grilled Cheese' },
    { id: 2, name: 'Mi Goreng Noodles' },
  ])
  const [newRecipe, setNewRecipe] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editingName, setEditingName] = useState('')

  // Adding recipes
  const handleAdd = () => {
    if (newRecipe.trim()) {
      setRecipes([...recipes, { id: Date.now(), name: newRecipe }])
      setNewRecipe('')
    }
  }

  // Start editing recipes
  const handleEdit = (id: number, name: string) => {
    setEditingId(id)
    setEditingName(name)
  }

  // Save edit
  const handleSave = () => {
    setRecipes(
      recipes.map((r) =>
        r.id === editingId ? { ...r, name: editingName } : r,
      ),
    )
    setEditingId(null)
    setEditingName('')
  }

  const handleDelete = (id: number) => {
    setRecipes(recipes.filter((r) => r.id !== id))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <br></br>
      <div className="app flex flex-grow flex-col items-center">
        <h1 className="mb-4 text-3xl font-bold">Recipes</h1>
        <div className="mb-4 flex gap-2">
          <input
            className="rounded border px-2 py-1"
            value={newRecipe}
            onChange={(e) => setNewRecipe(e.target.value)}
            placeholder="Add new recipe"
          />
          <button
            className="rounded bg-blue-500 px-3 py-1 text-white"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <ul className="w-full max-w-md">
          {recipes.map((recipe) => (
            <li
              key={recipe.id}
              className="mb-2 flex items-center justify-between rounded bg-gray-100 px-3 py-2"
            >
              {editingId === recipe.id ? (
                <>
                  <input
                    className="mr-2 rounded border px-2 py-1"
                    value={editingName}
                    onChange={(e) => setEditingName(e.target.value)}
                  />
                  <button
                    className="mr-2 rounded bg-green-500 px-2 py-1 text-white"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    className="rounded bg-gray-400 px-2 py-1 text-white"
                    onClick={() => setEditingId(null)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span>{recipe.name}</span>
                  <div>
                    <button
                      className="mr-2 rounded bg-yellow-500 px-2 py-1 text-white"
                      onClick={() => handleEdit(recipe.id, recipe.name)}
                    >
                      Edit
                    </button>
                    <button
                      className="rounded bg-red-500 px-2 py-1 text-white"
                      onClick={() => handleDelete(recipe.id)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default RecipesPage
