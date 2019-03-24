import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import './App.css';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import Form from './components/Form';
import Expenses from './components/Expenses';
import ExpenseForm from './components/ExpenseForm';


class App extends Component {
  constructor(props){
    super(props);

    this.state={
        savings: '',
        savingsEntered: true,

      expensesList: [
        {
          name: 'food',
          amount: 200,
        },
        {
          name: 'internet',
          amount: 100,
        },
        {
          name: 'rent',
          amount: 800,
        },
      ],
      expenses:
        {
          name: '',
          amount: '',
        },


    }

  }


  // this.setState(prevState => ({
  //    ...prevState,
  //         preferences: {
  //             ...prevState.preferences,
  //             [key]: newValue
  //         }
  // }));



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


  render() {
    return (
      <div className="App">

      <Form
        data={this.state.savings}
        onChange={this.handleChange}
        onSubmit={this.handleSavings}
        savings={this.state.savingsEntered}

        />

        <ExpenseForm
        data={this.state.expenses}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        />

        <BarChart data={this.state.expensesList}/>
        <PieChart savings={this.state.savings}
              expenses={this.state.expensesList}/>




      </div>
    );
  }
}

export default App;
//
// <BarChart data={this.state.data}/>
// <PieChart data={this.state.data}/>
