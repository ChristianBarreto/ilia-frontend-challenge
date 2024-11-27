import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { PokeballProvider } from './context/PokeballContext';

function App() {
  return (
    <PokeballProvider>
      <RouterProvider router={routes} />
    </PokeballProvider>
  );
}

export default App;
