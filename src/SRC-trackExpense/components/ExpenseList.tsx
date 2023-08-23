/** @format */

interface Expense {
	id: number;
	description: string;
	amount: number;
	category: string;
	// price:number
}

interface Props {
	expenses: Expense[];
	onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
	return (
		<div className='p-4'>
			<h1>Expense List</h1>
			<table className='table table-bordered'>
				<thead>
					<tr>
						<th>Description</th>
						<th>Amount</th>
						<th>Category</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{expenses.map((expense) => (
						<tr key={expense.id}>
							<td>{expense.description}</td>
							<td>{expense.amount}</td>
							<td>{expense.category}</td>
							<td>
								<button
									className='btn btn-outline-danger m-4'
									onClick={() => onDelete(expense.id)}>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr>
						<td>Total</td>
						<td>
							R${' '}
							{expenses
								.reduce(
									(acc, expense) => expense.amount + acc,
									0
								)
								.toFixed(2)}
						</td>
						<td></td>
						<td></td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
};

export default ExpenseList;

