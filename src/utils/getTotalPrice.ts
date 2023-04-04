import { TCartItem } from "../redux/reducers/cartSlice";

export const getTotalPrice = (items: TCartItem[]) => {
    return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
}