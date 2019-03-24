import React from 'react';

export default function ExpenseForm(props){

  return(
    <div className='expenseForm'>
      <form onSubmit={props.onSubmit}>
      <input type="text"
      name='name'
      value={props.data.name}
      onChange={props.onChange}
      placeholder="name of expense"
      />
      <input type="text"
      name='amount'
      value={props.data.amount}
      onChange={props.onChange}
      placeholder="amount of expense"
      />
      <button type='submit'>Enter Expense</button>
      </form>
    </div>
  )
}
