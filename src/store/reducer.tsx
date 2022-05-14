import React from 'react'

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'NEW ITEMS LIST':
            if (Array.isArray(action.payload)) {
                const total = action.payload.reduce((prev, cur) => {
                    return prev + cur.amount
                }, 0);
                const total_price = action.payload.reduce((prev, cur) => {
                    return prev + parseFloat(cur.price);
                }, 0);
                return { ...state, items: action.payload, total, total_price };
            }
            return state;
        case 'ADD ITEM':
            const id = action.payload as number;
            if (state.items[id].amount >= 9) return state
            state.items[id].amount++
            state.total_price = Math.round((state.total_price + Number(state.items[id].price)) * 100) / 100;
            state.total++;
            return { ...state };
        case 'REMOVE ITEM':
            const index = action.payload as number;
            if (state.items[index].amount <= 1) {
                state.total_price = state.total_price - parseFloat(state.items[index].price);
                state.total--;
                state.items = state.items.filter((val, i) => i !== index);
                return { ...state }
            }
            state.items[index].amount--
            state.total_price = Math.round((state.total_price - Number(state.items[index].price)) * 100) / 100;
            state.total--
            return { ...state }
        case 'REMOVE':
            console.log('reached')
            const ind = action.payload as number;
            state.items = state.items.filter((val, i) => i !== ind);
            const total_price = state.items.reduce((prev, cur) => {
                return prev + parseFloat(cur.price);
            }, 0);
            const total = state.items.reduce((prev, cur) => {
                return prev + cur.amount;
            }, 0);
            state.total_price = total_price;
            state.total = total;
            return { ...state }
        case 'CLEAR':
            state.items = action.payload as Array<bagItem>;
            state.total = 0;
            state.total_price = 0;
            return { ...state }

        default:
            throw Error('Invalid Value');
    }
}

export { reducer } 
