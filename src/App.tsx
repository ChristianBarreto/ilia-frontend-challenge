import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { PokeballProvider } from './context/PokeballContext';
import './i18n'

function App() {

  return (
    <PokeballProvider>
      <RouterProvider router={routes} />
    </PokeballProvider>
  );
}

export default App;
