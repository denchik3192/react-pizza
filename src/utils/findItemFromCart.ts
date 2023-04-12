import { TCartItem } from "../redux/reducers/cartSlice";
import { RootState } from "../redux/store";

export const findItemFromCart = ((state: any, action: any) => {
    // console.log(state.cart.items);
    console.log(state.cart.items)

    // return state.cart.items.find((pizza: TCartItem) => {
    //     return pizza.id === action.payload.id &&
    //         pizza.sizes.includes(String(...action.payload.sizes)) &&
    //         pizza.types.includes(String(...action.payload.types))
    // })
});