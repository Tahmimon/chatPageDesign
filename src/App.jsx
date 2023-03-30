import React from 'react'
import FirstBar from './components/FirstBar';
import SecondBar from './components/SecondBar';
import ThirdBar from './components/ThirdBar';

const App = () => {
  return (
    <div className='container flex w-full h-[1080px]'>
      <div>
        <FirstBar />
      </div>
      <div>
        <SecondBar />
      </div>
      <div>
        <ThirdBar />
      </div>
    </div>
  )
}

export default App