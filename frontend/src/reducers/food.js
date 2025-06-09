import { createSlice } from '@reduxjs/toolkit';

const foodData = [
	{
		id: 1,
		title: 'Protein Burger',
		energy: 900,
		protein: 80,
		salt: 2,
		price: 5,
	},
	{
		id: 2,
		title: 'Protein Shake',
		energy: 500,
		protein: 80,
		salt: 2,
		price: 3,
	},
	{
		id: 3,
		title: 'Fish´n Go',
		energy: 600,
		protein: 50,
		salt: 2,
		price: 5,
	},
	{
		id: 4,
		title: 'Mars Pancakes',
		energy: 600,
		protein: 40,
		salt: 4,
		price: 5,
	},

	{
		id: 5,
		title: 'Space Salad',
		energy: 300,
		protein: 10,
		salt: 1,
		price: 4,
	},
	{
		id: 6,
		title: 'Potpourri',
		energy: 200,
		protein: 5,
		salt: 1,
		price: 1,
	},
	{
		id: 7,
		title: 'Breakfast for Champions',
		energy: 800,
		protein: 30,
		salt: 2,
		price: 5,
	},
	{
		id: 8,
		title: 'Stone Soup',
		energy: 500,
		protein: 20,
		salt: 4,
		price: 5,
	},
	{
		id: 9,
		title: 'Message from Home',
		energy: 900,
		protein: 40,
		salt: 4,
		price: 5,
	},
	{
		id: 10,
		title: 'Cosmic Coffee',
		energy: 30,
		protein: 10,
		salt: 1,
		price: 1,
	},
	{
		id: 11,
		title: 'Balance and Moderation',
		energy: 800,
		protein: 50,
		salt: 2,
		price: 5,
	},
];

export const food = createSlice({
	name: 'food',
	initialState: foodData,
});
