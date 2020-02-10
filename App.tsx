import * as React from 'react'
import { Provider } from 'react-redux'
import { AppContainer } from './src/screens'
import store from './src/store'

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default App
