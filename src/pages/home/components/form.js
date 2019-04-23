import React, { Component }  from 'react';

class Form extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            total: 4000,
            nInstallments: 12,
            rateOfReturn: 0.05,
            partValue: 400
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

        this.props.handleSubmit({
          total, nInstallments, rateOfReturn, partValue
        });
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
            value={this.state.partValue}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Quanto seu investimento rende ao mês
          <input
            name="rateOfReturn"
            value={this.state.rateOfReturn}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    }
}

export default Form;