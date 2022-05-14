import React, { ReactElement, useContext } from 'react';
import { RiShoppingBag3Fill } from 'react-icons/ri'
import { AppContext } from '../store/Context';
const Navbar = () => {
    const { total } = useContext(AppContext) as ContextProps;
    return (
        <header className="w-full bg-sky-600 py-4">
            <nav className="container mx-auto flex justify-center">
                <BagIcon>
                    <span className="absolute -right-3 -top-3 flex justify-center items-center 
                    w-8 h-8 z-50 rounded-full
                    bg-sky-400 text-white text-lg text-center font-bold">{total}</span>
                </BagIcon>
            </nav>
        </header>
    )

}

function BagIcon({ children }: { children: ReactElement }) {
    return (
        <div className='relative w-fit h-fit'>
            <RiShoppingBag3Fill className='relative w-12 h-12 fill-white'>
            </RiShoppingBag3Fill>
            {children}
        </div>

    )
}

export { Navbar } 
