import './App.css';
import { RouterProvider } from 'react-router-dom';
import { route } from './Routes/Routes';

function App() {
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
