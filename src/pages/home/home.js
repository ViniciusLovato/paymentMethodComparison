import React, { Component } from 'react';
import './home.css';
import Form from './components/form';
import SimpleBarChart from '../../components/chart/barchart';
import InterestTextBox from './components/interestTextBox';
import ChartCard from './components/chartCard';
import calculator from '../../service/calculator';

import { Container, Grid, Statistic } from 'semantic-ui-react';
import SimplePieChart from '../../components/chart/pieChart';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        bar: [],
        pie: []
      },

      interest: 0,
      event: null,
      months: 0
    }
  }

  handleSubmit = (event) => {
    console.log(event);

    let {
      total,
      nInstallments,
      rateOfReturn,
      partValue
    } = event;

    let chartData = calculator.generateChartData(total, nInstallments, partValue, rateOfReturn);
    let interest = calculator.generateInterest(total, nInstallments, partValue);
    let months = calculator.generateTaxMonths(total, nInstallments, partValue);

    let bar = chartData.map((value, i) => {
      return {
        name: 'Mês ' + i,
        'Acumulado': value.total,
        'Absoluto': value.absolute
      }
    })

    let pie = 
       [
        { name: 'Valor do produto', value: parseFloat(total) },
        { name: 'Juros pago', value:  (nInstallments * partValue) - total },
      ];
    

    let data = {
      bar,
      pie
    }

    this.setState({ data, interest, event, months });
  }

  render() {

    let { months } = this.state;
    let { nInstallments, partValue } = this.state.event || {};
    let total = nInstallments * partValue || 0;

    return (
      <div className="App">
        <Form handleSubmit={this.handleSubmit}></Form>
        <InterestTextBox value={this.state.interest * 100}></InterestTextBox>
        <Container>
          <Grid divided='vertically'>
            <Grid.Row columns={1}>
              <Grid.Column>
                <ChartCard title="Acumulado" >
                  <SimpleBarChart data={this.state.data.bar}></SimpleBarChart>
                </ChartCard>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={2}>
              <Grid.Column>
                <ChartCard title="Juros vs Valor" >
                 <SimplePieChart data={this.state.data.pie}></SimplePieChart>
                </ChartCard>
              </Grid.Column>
              <Grid.Column>
                <ChartCard title="Valor total" >
                <Statistic>
                  <Statistic.Value>R$ {total.toFixed(2)}</Statistic.Value>
                </Statistic>
                </ChartCard>
                <ChartCard title="Meses pagando juros" >
                <Statistic>
                  <Statistic.Value>{months}</Statistic.Value>
                </Statistic>
                </ChartCard>

                
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Container>

      </div>
    );
  }
}

export default Home;