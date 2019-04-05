import React from 'react';

export default function Form(props){
  const {data}=props;

  return(
    <div className='Savings'>

    {!!props.savings?<div>
      <h2>Step 1 Enter Your Monthly Income</h2>
      <form onSubmit={props.onSubmit}>
    <label>
    Enter Monthly Income
      <input type='text'
      placeholder='Enter Monthly Total'
      name='savings'
      value={props.data}
      onChange={props.onChange}
      />
      </label>
      <button type='submit'>Enter</button>
    </form>
    </div>:null}
    </div>
  )
}
