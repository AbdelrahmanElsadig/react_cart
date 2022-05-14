interface bagItem {
    id: string,
    title: string,
    price: string,
    img: string,
    amount: number
}

interface State {
    items: Array<bagItem>,
    total: number,
    total_price: number;
}

interface ContextProps {
    items: Array<bagItem>,
    total: number,
    dispatch: React.Dispatch<Action>,
    total_price: number
}

interface Action {
    type: 'NEW ITEMS LIST' | 'ADD ITEM' | 'REMOVE ITEM' | 'REMOVE' | 'CLEAR',
    payload: number | Array<bagItem>

}