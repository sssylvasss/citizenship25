import { createSlice } from '@reduxjs/toolkit';

const productData = [
	{
		id: 3,
		title: 'Soap',
		description: 'Essential item. Should be used daily',
		price: 30,
		ranking: 0.5,
		image: 'soap.jpg',
	},
	{
		id: 4,
		title: 'Toilet paper',
		description: 'Essential item. Should be used daily',
		price: 20,
		ranking: 0.5,
		image: 'toilet-paper.jpg',
	},
	{
		id: 5,
		title: 'Vitamin-D',
		description: 'One a day keeps the doctor away',
		price: 80,
		ranking: 1,
		image: 'vitamins.jpg',
	},
	{
		id: 6,
		title: 'Vacuum cleaner',
		description: 'A tidy home is a happy home',
		price: 500,
		ranking: 4,
		image: 'vacuumcleaner1.jpg',
	},

	{
		id: 2,
		title: 'Overall',
		description: 'One size fits all',
		price: 100,
		ranking: 1.2,
		image: 'overall.jpg',
	},
	{
		id: 7,
		title: 'Blancet',
		description: '100% paper. Reusable.',
		price: 80,
		ranking: 1,
		image: 'blancets1.jpg',
	},
	{
		id: 8,
		title: 'Slippers',
		description: 'One size fits all',
		price: 60,
		ranking: 0.8,
		image: 'slipper.jpg',
	},
	{
		id: 1,
		title: 'Socks',
		description: 'One size fits all',
		price: 30,
		ranking: 0.5,
		image: 'sock.jpg',
	},
	{
		id: 9,
		title: 'Citizens Little Red One',
		description: 'The only reading needed',
		price: 120,
		ranking: 1,
		image: 'book1.jpg',
	},
	{
		id: 10,
		title: 'Noise reducer',
		description: 'Get the 14h beauty sleep that you deserve',
		price: 250,
		ranking: 2.5,
		image: 'noisereducer.jpg',
	},
	{
		id: 11,
		title: 'Happy-pills',
		description: 'Just for emergencies',
		price: 150,
		ranking: 1.8,
		image: 'happy.jpg',
	},
];

export const products = createSlice({
	name: 'products',
	initialState: productData,
});
