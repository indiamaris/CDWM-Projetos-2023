/** @format */
import 'bootstrap/dist/css/bootstrap.css';
import './appTrack.css';
import ExpenseList from './components/ExpenseList';
import { useState } from 'react';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseForm from './components/ExpenseForm';
const title = 'Track Expense';

function AppTrack() {
	const [selectedCategory, setSelectedCategory] = useState('');
	const [expenses, setExpenses] = useState([
		{ id: 1, description: 'aaassss', amount: 29, category: 'Utilities' },
		{ id: 2, description: 'bbbssss', amount: 92, category: 'Groceries' },
		{ id: 3, description: 'aaassss', amount: 29, category: 'Utilities' },
		{ id: 4, description: 'bbbssss', amount: 92, category: 'Groceries' },
		{ id: 5, description: 'aaassss', amount: 29, category: 'Utilities' },
		{ id: 6, description: 'bbbssss', amount: 92, category: 'Groceries' },
	]);
	const visibleExpenses = selectedCategory
		? expenses.filter((e) => e.category === selectedCategory)
		: expenses;

	return (
		<>
			<div className='container m-5 '>
				<div className='d-flex justify-content-center'>
					<h1 className='title'>{title.toUpperCase()}</h1>
				</div>

				<div className='expense-form m-4 card'>
					<ExpenseForm
						onSubmit={(expense: Expense[]) =>
							setExpenses([
								...expenses,
								{ ...expense, id: expenses.length + 2 },
							])
						}
					/>
				</div>

				<div className='tfilter m-4 card'>
					<ExpenseFilter
						onSelectCategory={(category) =>
							setSelectedCategory(category)
						}
					/>
				</div>

				<div className='m-4 card'>
					<ExpenseList
						expenses={visibleExpenses}
						onDelete={(id) =>
							setExpenses(expenses.filter((e) => e.id !== id))
						}
					/>
				</div>
			</div>
		</>
	);
}

export default AppTrack;

