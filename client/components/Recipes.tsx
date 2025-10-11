import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'

function RecipesPage() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      recipe_name: 'Grilled Cheese',
      description: 'Cheese between two slices of bread, grilled.',
      cook_time: '30 minutes',
      ingredients: 'Two slices of bread, butter, cheese',
      instructions:
        'Butter both sides of two slices of bread. Then slice some cheese and put that in between the bread. Cook in the oven for 20-25 minutes on medium heat.',
      added_by: 'Korey',
    },
  ])
  const [newRecipe, setNewRecipe] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editingName, setEditingName] = useState('')
  const [editingDescription, setEditingDescription] = useState('')
  const [editingCookTime, setEditingCookTime] = useState('')
  const [editingIngredients, setEditingIngredients] = useState('')
  const [editingInstructions, setEditingInstructions] = useState('')
  const [editingAddedBy, setEditingAddedBy] = useState('')

  // Adding recipes
  const handleAdd = () => {
    if (newRecipe.trim()) {
      setRecipes([
        ...recipes,
        {
          id: Date.now(),
          recipe_name: '',
          description: '',
          cook_time: '',
          ingredients: '',
          instructions: '',
          added_by: '',
        },
      ])
      setNewRecipe('')
    }
  }

  // Start editing recipes
  const handleEdit = (
    id: number,
    recipe_name: string,
    description: string,
    cook_time: string,
    ingredients: string,
    instructions: string,
    added_by: string,
  ) => {
    setEditingId(id)
    setEditingName(recipe_name)
    setEditingDescription(description)
    setEditingCookTime(cook_time)
    setEditingIngredients(ingredients)
    setEditingInstructions(instructions)
    setEditingAddedBy(added_by)
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
                  <span>{recipe.recipe_name}</span>
                  <div>
                    <button
                      className="mr-2 rounded bg-yellow-500 px-2 py-1 text-white"
                      onClick={() => handleEdit(recipe.id, recipe.recipe_name)}
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
