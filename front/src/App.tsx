import './App.css'
import { Provider } from 'react-redux';
import store from './store'; 
import Map from './components/map/map'


function App() {

  return (
    <>
      <Provider store={store}>
          <Map/>
      </Provider>,
    </>
  )
}

export default App
