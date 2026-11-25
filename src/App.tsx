
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './pages/Layout'
import Crud from './Crud'
import Home from './pages/Home'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Crud />
            },
            {
                path: 'home',
                element: <Home />
            }
        ]
    }
])

function App() {
    return <RouterProvider router={router} />
}

export default App
