import { getTotalPrice } from "./getTotalPrice";


export const getCartFromLS = () => {
    const data = localStorage.getItem('cart')
    const items = data ? JSON.parse(data) : [];
    const totalPrice = getTotalPrice(items);

    return {
        items,
        totalPrice,
    }
}
