import React from 'react'

function App() {
  let r = '<B>React</B>'
  let rn = 'React Native'
  const el =(
    <>
      Creat Web & Mobile App<br/>
      with <span dangerouslySetInnerHTML={{__html:r}}/> & {rn}
    </>
  )
  return el
}

export default App;