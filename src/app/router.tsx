import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Main from '../pages/main/ui/main'
import SignUp from '../pages/signup/ui/signup'
import Champions from '../pages/champions/ui/champions'

export default function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/champions" element={<Champions />} />
      </Routes>
    </BrowserRouter>
  )
}

