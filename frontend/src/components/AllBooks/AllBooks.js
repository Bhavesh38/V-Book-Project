import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { fetchCardDatas } from '../../redux/actions/CardAction';
import DynamicCard from '../DynamicCards/DynamicCard';

import "./AllBooks.css"
const AllBooks = () => {
	const dispatch = useDispatch();
	const { dynamicCardData } = useSelector((state) => state.dynamicCardReducer)
	console.log(dynamicCardData);
	//fetching card data
	useEffect(() => {
		dispatch(fetchCardDatas());
	}, [])
	return (

		<div className='allBooks'>
			<div className='allBooks_cards'>
				<div className='allBooks_cards_heading'>
					<h1>
						Class 11 Chemistry
					</h1>
					<span>View All</span>
				</div>
				<DynamicCard dynamicCardData={dynamicCardData?.Class_11_Chemistry} />
			</div>
			<div className='allBooks_cards'>
				<div className='allBooks_cards_heading'>
					<h1>
						Class 11 Physics
					</h1>
					<span>View All</span>
				</div>

				<DynamicCard dynamicCardData={dynamicCardData?.Class_11_Physics} />
			</div>
			<div className='allBooks_cards'>
				<div className='allBooks_cards_heading'>
					<h1>
						Class 11 Mathematics
					</h1>
					<span>View All</span>
				</div>

				<DynamicCard dynamicCardData={dynamicCardData?.Class_11_Maths} />
			</div>
			<div className='allBooks_cards'>
				<div className='allBooks_cards_heading'>
					<h1>
						Class 12 Chemistry
					</h1>
					<span>View All</span>
				</div>

				<DynamicCard dynamicCardData={dynamicCardData?.Class_12_Chemistry} />
			</div>
			<div className='allBooks_cards'>
				<div className='allBooks_cards_heading'>
					<h1>
						Class 12 Physics
					</h1>
					<span>View All</span>
				</div>
				<DynamicCard dynamicCardData={dynamicCardData?.Class_12_Physics} />
			</div>
			<div className='allBooks_cards'>
				<div className='allBooks_cards_heading'>
					<h1>
						Class 12 Mathematics
					</h1>
					<span>View All</span>
				</div>
				<DynamicCard dynamicCardData={dynamicCardData?.Class_12_Maths} />
			</div>
		</div>

	)
}

export default AllBooks
