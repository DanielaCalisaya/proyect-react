import './App.css'
/* import '../node_modules/bootstrap/dist/css/bootstrap/bootstrap.min.css'  */
import { AppRoutes } from './routes';
import { MainLayout } from './layouts';

function App() {

  return (

    <MainLayout>
      <AppRoutes/>
    </MainLayout>
    
  )
}

export default App
