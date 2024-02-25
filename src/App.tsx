import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { store } from './store/index';
import { Provider as ReduxProvider } from 'react-redux'


export function App() {
  return (
    <BrowserRouter>
      <ReduxProvider store={store}>
        <Router />
      </ReduxProvider>
    </BrowserRouter>
  )

  
}
