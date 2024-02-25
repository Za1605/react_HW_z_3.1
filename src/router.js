


import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";
import TodosPage from "./pages/TodosPage";

const router = createBrowserRouter([
    {
        path:'', element: MainLayout, children:[

            {
                path:'albums', element:<AlbumsPage/>
            },
            {
                path:'comments', element:<CommentsPage/>
            },
            {
                path:'todos', element:<TodosPage/>
            }
        ]
    }
    ]);
export {
    router
};