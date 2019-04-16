import React, { Component } from 'react';
import logo from '../../logo.svg';
import './home.css';
import Form from '../../components/form';
import SimpleBarChart from '../../components/chart/barchart';
import InterestTextBox from '../../components/interestTextBox';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            interest: 0
        }
    }
    

    handleClick = () => {
        // ChatService.create({
        //   title: this.state.value
        // })
    }

    handleSubmit = (event) => {
        console.log(event);
        let { interest, chartData } = event;
        let data = chartData.map((value, i) => {
            return {
                name: 'Mês ' + i,
                'Acumulado': value.total,
                'Absoluto': value.absolute
            }
        })

        this.setState({data, interest});
    }

    render(){
        return (
        <div className="App">
            <Form handleSubmit={this.handleSubmit}></Form>
            <SimpleBarChart data={this.state.data}></SimpleBarChart>
            <InterestTextBox value={this.state.interest*100}></InterestTextBox>
        </div>
        );
    }
}

export default Home;