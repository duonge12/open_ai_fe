
import { useSelector } from 'react-redux'
import './App.css'
import { FormURL } from './components/form'
import { useEffect } from 'react'
import { FormLyDoViral } from './components/formLyDoViral'

const App=()=> {
  const step=useSelector(store=> store.listStep)
  useEffect(()=>{
    console.log(step)
  })
  return(
    <div>
      <FormURL/>
      <FormLyDoViral/>

    </div>
  )
}

export default App
