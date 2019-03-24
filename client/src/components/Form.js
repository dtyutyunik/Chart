import React from 'react';

export default function Form(props){
  const {data}=props;

  return(
    <div>

    {!!props.savings?<form onSubmit={props.onSubmit}>
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


    </form>:null}

    total is {props.data}
    </div>
  )
}
