import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import './bootswatch/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginScreen from './Screens/LoginScreen.jsx';
import SignUpScreen from './Screens/SignUpScreen.jsx';

import PredictionApp from './components/Prediction.jsx';
import UserProfile from './Screens/UserProfile.jsx';
import Hero from './Screens/Hero.jsx';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    // {
    //   path: "",
    //   element: <PredictionApp />
    // },
    {
      path: "",
      element: <Hero />
    },
    {
      path: '/login',
      element: <LoginScreen />
    },
    {
      path: '/signup',
      element: <SignUpScreen />
    },
    {
      path: '/profile',
      element: <UserProfile />
    },


  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
