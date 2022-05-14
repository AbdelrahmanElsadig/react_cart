import { useContext, useEffect, useState } from 'react';
import { GoArrowUp, GoArrowDown } from 'react-icons/go'
import { AppContext } from '../store/Context';
import { v4 } from 'uuid';

const DATA_URL = "https://course-api.com/react-useReducer-cart-project";

const BagItem = ({ props, index }: { props: bagItem, index: number }) => {
    const { dispatch } = useContext(AppContext) as ContextProps;

    return (
        <>
            <div className="flex items-center justify-start gap-6 w-full mx-auto">
                <img src={props.img} alt="" className="w-20 h-20" />
                <div className="flex flex-col gap-4">
                    <h1 className="text-xl capitalize font-semibold text-cyan-900">
                        {props.title}
                    </h1>
                    <span className="text-slate-600 text-lg">${props.price}</span>
                    <button onClick={() => dispatch({ type: 'REMOVE', payload: index })} className="text-cyan-600 p-0 m-0 text-lg text-left font-bold opacity-80 hover:opacity-100">remove</button>
                </div>
                <div className="flex ml-auto items-center flex-col gap-6">
                    <div className='relative z-50 cursor-pointer' onClick={() => { dispatch({ type: 'ADD ITEM', payload: index }) }}>
                        <GoArrowUp className='fill-sky-600 pointer-events-none text-2xl hover:text-cyan-900 cursor-pointer' />
                    </div>
                    <span className="text-2xl font-semibold">{props.amount}</span>
                    <button className='relative z-50 cursor-pointer' onClick={() => { dispatch({ type: 'REMOVE ITEM', payload: index }) }}>
                        <GoArrowDown className='fill-sky-600 pointer-events-none text-2xl hover:text-cyan-900 cursor-pointer' />
                    </button>
                </div>
            </div>
        </>
    )
}

const Bag = () => {
    const { items, dispatch, total_price } = useContext(AppContext) as ContextProps;
    const [loading, setLoading] = useState<boolean>(true)
    async function getItems() {
        const req = await fetch('https://course-api.com/react-useReducer-cart-project');
        const res: bagItem[] = await req.json();
        setLoading(false)
        dispatch({ type: 'NEW ITEMS LIST', payload: res });
    }
    useEffect(() => {
        getItems()
    }, [])
    if (loading) return (
        <h1 className="text-4xl text-center text-cyan-900 font-bold">Loading...</h1>
    )
    if (items.length == 0) return (
        <span className="text-gray-600 font-bold text-2xl text-center">is currently empty...</span>
    )
    return (
        <>
            <div className="w-[90%] max-w-[768px] mx-auto flex flex-col gap-6">
                {items.map((item, i) => {
                    return (
                        <BagItem key={v4()} props={item} index={i} />
                    )

                })}
                <div className="flex border-t-2 py-2 border-solid border-cyan-900 w-full justify-between">
                    <span className="text-xl font-bold text-cyan-900">Total</span>
                    <span className="text-xl font-bold text-cyan-900">${total_price}</span>
                </div>
                <button onClick={() => dispatch({ type: 'CLEAR', payload: [] })} className="px-4 w-fit mx-auto py-2 text-xl rounded-md font-semibold border-2 border-red-700 opacity-70 text-red-700 hover:opacity-100">
                    Clear All Items
                </button>
            </div>
        </>
    )
}

export { Bag }








