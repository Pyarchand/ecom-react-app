import React, { useContext, } from 'react'
import { Data } from '../../Context/DataProvider'

const Contact = () => {
    const context = useContext(Data)

  return (
    <div>Count: {context.count}</div>
  )
}

export default Contact