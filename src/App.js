import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './layout/Main';
import Home from './components/Home';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/users')
        },
        {
          path: '/adduser',
          element: <AddUser></AddUser>
        },
        {
          path: 'users/:id',
          element: <UpdateUser></UpdateUser>,
          loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
        }
      ]
    }
  ])

  return (
    <div className="">
      <RouterProvider
        router={router}
      ></RouterProvider>
    </div>
  );
}

export default App;
