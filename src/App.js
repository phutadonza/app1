import React from 'react'
import { userContext } from './context';
import Content from './context-content';

function App() {
  return (
    <userContext.Provider value={'Phutadon Phummarin'}>
      <Content/>
    </userContext.Provider>
  )
}


export default App;