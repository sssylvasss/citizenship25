import { createSlice } from '@reduxjs/toolkit';

const housingData = [
	{
		id: 7,
		title: 'Red-X Housing',
		description:
			' Compact living, with access to everything needed! Commute to the mining site in under 25min.',
		price: 400000,
		ranking: 1,
		image: '4patrick-perkins-DP4dLbZdybA-unsplash.jpg',
	},
	{
		id: 4,
		title: 'Esending Dragon',
		description:
			'Top class housing for Citizens carogory 3+. The 58 hours nhight time and only 12 hours daylight this is a perfect fit for you who is an effectiv worker and longing for a hecktic nightlife. ',
		price: 1500000,
		ranking: 0.5,
		image: '1space-5319624_1280.jpg',
	},
	{
		id: 3,
		title: 'Green Valley Compound',
		description:
			'Whit an amazingly stabil carbon dioxide concentrations, Geen Valley Compound is the go to choise for all future seeking settlers. (Only available for Citizens catogory 2+)',
		price: 2200000,
		ranking: 0.5,
		image: '01victor-garcia-VnFGmctBs1s-unsplash.jpg',
	},
	{
		id: 6,
		title: 'Morning Star',
		description:
			' Why not setteling down where living is easy! On hovering Morning Star Island you will enjoy a gravity of only 4.807 m/s².',
		price: 800000,
		ranking: 1,
		image: '11fantasy-2700914_1280.jpg',
	},
	{
		id: 5,
		title: 'Level -15',
		description:
			'Private capsuel, with access to cooking facility and decontamination room.',
		price: 200000,
		ranking: 1,
		image: '11capsule-hotel-tokyo-iStock_chee-gin-tan.jpg',
	},
];

export const housing = createSlice({
	name: 'housing',
	initialState: housingData,
});
