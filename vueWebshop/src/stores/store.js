import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            cart: [],
        };
    },
    mutations: {
        addToCart(state, product) {
            state.cart.push(product);
        },
        removeFromCart(state, product) {
            // filter out the product from state.cart 
            state.cart = state.cart.filter((p) => p.product_id !== product.product_id);
        },
        clearCart(state) {
            state.cart = [];
        }
    },

});


export default store;
