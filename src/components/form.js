import React, { Component }  from 'react';
import calculator from '../service/calculator';

let PERCENT = 100;

class Form extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            nInstallments: 0,
            rateOfReturn: 0,
            partValue: 0
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        let {
            total,
            nInstallments,
            rateOfReturn,
            partValue
        } = this.state;

        let chartData = calculator.generateChartData(total, nInstallments, partValue, rateOfReturn);
        let interest = calculator.generateInterest(total, nInstallments, partValue);

        this.props.handleSubmit({chartData, interest});
    }

    render() {
       return <form onSubmit={this.handleSubmit}>
        <label>
          Valor a vista
          <input
            name="total"
            value={this.state.total}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Número de parcelas
          <input
            name="nInstallments"
            value={this.state.nInstallments}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Valor da parcela
          <input
            name="partValue"
            value={this.state.part_value}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Quanto seu investimento rende ao mês
          <input
            name="rateOfReturn"
            value={this.state.rate_of_return}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    }
}

export default Form;