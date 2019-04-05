import React from 'react';

export default function Form(props){
  const {data}=props;

  return(
    <div >

    {!!props.savings?<div className='Savings'>
      <h1>Step 1</h1>
      <h2>Enter Your Monthly Income</h2>
      <form onSubmit={props.onSubmit}>
      <input type='text'
      placeholder='Enter Monthly Total'
      name='savings'
      value={props.data}
      onChange={props.onChange}
      required
      />
      <button type='submit'>Enter</button>
    </form>
    </div>:null}
    </div>
  )
}
