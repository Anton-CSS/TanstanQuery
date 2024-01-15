import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import PostsPage from "./components/Posts/PostsPage.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import FormAddPost from "./components/Posts/FormAddPost.tsx";

const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {
                path: 'posts',
                element: <PostsPage/>
            },
            {
                path: 'form',
                element: <FormAddPost/>
            }
        ]
    }

])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
)
