/** @format */
import categories from './categories';
import { number, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
const schema = z.object({
	description: z
		.string({
			required_error: 'Description  is required',
			invalid_type_error: 'Description must be a string',
		})
		.min(3, { message: 'Must be 3 or more characters long' })
		.max(60, { message: 'Must be 60 or less characters long' }),
	amount: number({
		required_error: 'Amount is required',
		invalid_type_error: 'Amount must be a NUMBER',
	})
		.min(0.01, { message: 'Must be 0.01 or more ' })
		.max(100_000, { message: 'Must be 100.009 or less' }),
	category: z.enum(categories, {
		errorMap: () => ({ message: 'Category is required.' }),
	}),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
	onSubmit: () => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

	return (
		<div className='p-4'>
			<form
				onSubmit={handleSubmit((data) => {
					onSubmit(data);
					reset();
				})}>
				<h1>New Expense</h1>
				<div className='p-2'>
					<label
						htmlFor='description'
						className='form-label pb-2'>
						Description
					</label>
					<input
						{...register('description')}
						id='description'
						type='text'
						className='form-control  '
					/>
					{errors.description && (
						<p className='text-danger'>
							{errors.description.message}
						</p>
					)}
					<div className=''>
						<label
							htmlFor='amount'
							className='form-label pb-1 pt-4'>
							Amount
						</label>
						<input
							{...register('amount', { valueAsNumber: true })}
							id='amount'
							type='number'
							className='form-control'
						/>
						{errors.amount && (
							<p className='text-danger'>
								{errors.amount.message}
							</p>
						)}
					</div>

					<div className=''>
						<label
							htmlFor='category'
							className='form-label pb-1 pt-4'>
							Category
						</label>
						<select
							{...register('category')}
							name='category'
							id='category'
							className='form-select mb-4'>
							<option value=''></option>
							{categories.map((category) => (
								<option
									key={category}
									value={category}>
									{category}
								</option>
							))}
						</select>
						{errors.category && (
							<p className='text-danger'>
								{errors.category.message}
							</p>
						)}
						<div className='d-flex justify-content-center'>
							<button className='btn btn-lg  btn-primary'>
								SUBMIT NEW EXPENSE
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ExpenseForm;

