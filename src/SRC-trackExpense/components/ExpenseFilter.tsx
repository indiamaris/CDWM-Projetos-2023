/** @format */
import categories from './categories';
// import React from 'react';
interface Props {
	onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: Props) => {
	return (
		<>
			<div className='expenseFilter p-4'>
				<h1>Expense Filter</h1>

				<select
					name='expenseSelect'
					id='expenseSelect'
					className='form-select mt-4'
					onChange={(event) => onSelectCategory(event.target.value)}>
					<option value='All-Categories'>All Categories</option>
					{categories.map((category) => (
						<option
							key={category}
							value={category}>
							{category}
						</option>
					))}
				</select>
			</div>
		</>
	);
};

export default ExpenseFilter;

