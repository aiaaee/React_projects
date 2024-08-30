import React from 'react'
import Header from './Header'
import InputSection from './InputSection'
import ListSection from './ListSection'
import Main from './Main'
import './index.css'
function App() {
  return (
    <div className='App bg-secondary'>
      <div className=''>
          <Header/> 
          <Main />
          <div className='d-flex'>
            <div className='h-25'>
              <InputSection /> 
            </div>
            <div className='h-25'>
              <ListSection /> 
            </div>
          </div>
      </div>
    </div>
  )
}

export default App