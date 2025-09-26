import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App.tsx'
import ChoresPage from './components/ChoresPage.tsx'
import ProfilePage from './components/ProfilePage.tsx'

export default createRoutesFromElements(
  <>
    <Route path="/" element={<App />} />
    <Route path="/chores" element={<ChoresPage />} />
    <Route path="/profile" element={<ProfilePage />} />
  </>,
)
