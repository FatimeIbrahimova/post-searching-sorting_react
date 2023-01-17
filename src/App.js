
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ROUTES from './routes/route';

function App() {
  const router=createBrowserRouter(ROUTES)
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
