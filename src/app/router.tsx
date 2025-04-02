import { Route, Routes, BrowserRouter } from 'react-router-dom'
import RQProvider from './providers/RQProvider'

import Main from '../pages/main/ui/main'
import Champions from '../pages/champions/ui/champions'
import Colors from '../pages/colors/ui/colors'

import { AuthLayout } from '../widgets/auth/ui/authLayout'
import SignUp from '../pages/signup/ui/signup'
import Login from '../pages/login/ui/login'
import Detail from '../pages/detail/ui/detail'

export default function Router() {

  return (
    <RQProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} >
            <Route path="champions" element={<Champions />} />
            <Route path="champions/:id" element={<Detail />} />
            <Route path="colors" element={<Colors />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RQProvider>
  )
}

