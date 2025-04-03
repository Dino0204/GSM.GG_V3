import { Route, Routes, BrowserRouter } from 'react-router-dom'
import RQProvider from './providers/RQProvider'

import Main from '../pages/main/ui'
import Champions from '../pages/champions/ui'
import Colors from '../pages/colors/ui'

import { AuthLayout } from '../widgets/authLayout/ui'
import SignUp from '../pages/signup/ui'
import Login from '../pages/login/ui'
import Detail from '../pages/detail/ui'
import Profile from '../pages/profile/ui'

export default function Router() {

  return (
    <RQProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} >
            <Route path="champions" element={<Champions />} />
            <Route path="champions/:id" element={<Detail />} />
            <Route path="colors" element={<Colors />} />
            <Route path="profile" element={<Profile />} />
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

