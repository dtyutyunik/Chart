import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import './App.css';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import Form from './components/Form';
import Expenses from './components/Expenses';
import ExpenseForm from './components/ExpenseForm';
import Typist from 'react-typist';


class App extends Component {
  constructor(props){
    super(props);

    this.state={
        savings: '',
        savingsEntered: true,

      expensesList: [
        // {
        //   name: 'food',
        //   amount: 200,
        // },
        // {
        //   name: 'internet',
        //   amount: 100,
        // },
        // {
        //   name: 'rent',
        //   amount: 800,
        // },
      ],
      expenses:

        {
          name: '',
          amount: '',
        },
    }

  }

  handleChange=(e)=>{

     let color=Math.floor(Math.random() * 254) + 1;
     let color1=Math.floor(Math.random() * 254) + 1;
     let color2=Math.floor(Math.random() * 254) + 1;
     const {name,value}= e.target;

    if(name==='savings'){
      this.setState({
        savings: value
      })
    }else{
       this.setState(prevState=>({
        expenses: {
          ...prevState.expenses,
            [name]: value,
            color: `rgb(${color},${color1},${color2})`
        }
      }));
    }
}
handleSavings=(e)=>{
  e.preventDefault();
  this.setState({
    savingsEntered: false
  })
}

  handleSubmit=(e)=>{
    e.preventDefault();


      this.setState(prevState=>({
        expensesList: [...prevState.expensesList, prevState.expenses]
      }))



  }

  removeExpense=(e)=>{
    console.log(e);

    this.setState({
      expensesList: this.state.expensesList.filter((item,index)=>(index!==e))
    })
  }


  render() {
    return (
      <div className="App">

         <Typist
          cursor={{
           show: false,
           hideWhenDone: true}}
           >
         <span>Calculate Your Savings</span>
         <Typist.Backspace count={7} delay={600} />
        <span>Expenses</span>
        <Typist.Backspace count={8} delay={600} />
        <span>Financials</span>
         </Typist>
        <Form
        data={this.state.savings}
        onChange={this.handleChange}
        onSubmit={this.handleSavings}
        savings={this.state.savingsEntered}
        />

        <div className="expenseContainer">
        {!this.state.savingsEntered?<ExpenseForm
        data={this.state.expenses}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        />:null}

        {!this.state.savingsEntered?<Expenses data={this.state.expensesList}
          remove={this.removeExpense}
        />:null}
        </div>
        <div className='charts'>
      {!this.state.savingsEntered?  <BarChart data={this.state.expensesList}/>:null}
      {!this.state.savingsEntered?  <PieChart savings={this.state.savings}
              expenses={this.state.expensesList}/>:null}
              </div>




      </div>
    );
  }
}

export default App;
//
// <BarChart data={this.state.data}/>
// <PieChart data={this.state.data}/>
