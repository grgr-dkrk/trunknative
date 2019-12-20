import { Provider } from 'react-redux'
import NavContainer from './src/screens'
import store from './src/store'

const App = () => {
  return (
    <Provider store={store}>
      <NavContainer />
    </Provider>
  )
}

export default App
