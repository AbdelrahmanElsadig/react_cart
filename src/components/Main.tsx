import React, { useReducer } from 'react'
import { Bag } from './Bag'
import { Navbar } from './Navbar'



const Main = () => {

    return (
        <div className='w-full mb-16 flex flex-col gap-4 min-h-screen'>
            <Navbar />
            <div className="container items-center mx-auto flex mt-12 flex-col gap-8">
                <h1 className="text-cyan-900 uppercase text-5xl font-bold">Your Bag</h1>
            </div>
            <Bag />
        </div>
    )
}

export { Main } 
