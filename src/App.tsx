import "./styles/global.sass"
import "./styles/_containers.sass"
import { ToastContainer } from 'react-toastify';

import { RoutesMain } from "./routes"


export const App = () => {

  return (
    <> 
      <ToastContainer />
      <RoutesMain />

    </>
  )
}

