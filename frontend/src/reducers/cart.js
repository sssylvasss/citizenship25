import { createSlice } from '@reduxjs/toolkit';

export const cart = createSlice({
	name: 'cart',
	initialState: {
		items: [],
	},
	reducers: {
		addItem: (store, action) => {
			const exsistingProducts = store.items.find(
				(item) => item.id === action.payload.id
			);

			if (exsistingProducts) {
				exsistingProducts.quantity += 1;
			} else {
				store.items.push({ ...action.payload, quantity: 1 });
			}
		},
		removeItem: (store, action) => {
			const exsistingProducts = store.items.find(
				(item) => item.id === action.payload.id
			);

			if (exsistingProducts && exsistingProducts.quantity === 1) {
				store.items = store.items.filter((item) => item.id !== action.payload.id);
			} else if (exsistingProducts) {
				exsistingProducts.quantity -= 1;
			}
		},
		emptyCart: () => {
			return { items: [] }
		}
	},
});
