import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import './Errorpage.css'
const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <div className="errorpags">
    <section className='d-flex align-items-center justify-content-center p-5 bg-gray text-gray'style={{height:"700px"}}>
      <div className='container d-flex flex-col align-items-end justify-content-center px-5 mx-auto my-5'>
       <div>
        <div className=' text-center'>
         
          <Link
            to='/'
            className='px-5 py-3 text-white btn rounded  text-decoration-none 'style={{fontWeight:"bold",background:"pink"}}
          >
            Back to homepage
          </Link>
        </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default ErrorPage