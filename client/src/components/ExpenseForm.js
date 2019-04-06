import React from 'react';

export default function ExpenseForm(props){

  return(
    <div className='expenseForm'>
      <h2>Enter Monthly Expenses</h2>
        <form onSubmit={props.onSubmit}>
        <div className='form'>
        <label>
        Expense Name
        <input type="text"
        name='name'
        value={props.data.name}
        onChange={props.onChange}
        />
        </label>
      </div>

      <div className='form'>
        <label>
        Expense Amount
        <input type="text"
        name='amount'
        value={props.data.amount}
        onChange={props.onChange}
        />
        </label>
      </div>
      <button type='submit'>Enter Expense</button>
      </form>
    </div>
  )
}
