import React from 'react'
import { Spinner } from 'reactstrap'

const PageSpinner = () => {
  return (
    <div>
        <div className='vh-100 bg-dark d-flex justify-content-center align-items-center'>
            <Spinner animition='border' color='light'/>
        </div>
    </div>
  )
}

export default PageSpinner