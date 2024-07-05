import React from 'react'
import Playground from './Playground'
import SecondPlayground from './SecondPlayground'

const Show = ({theme}) => {
  return (
    <div className='flex flex-col'>
        <Playground theme={theme}/>
        <SecondPlayground theme={theme}/>
    </div>
  )
}

export default Show