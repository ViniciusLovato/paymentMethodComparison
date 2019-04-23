import React, { Component } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


export default class SimpleBarChart extends Component {

    state = {
      dimensions: null,
    };

    componentDidMount() {
      this.setState({
        dimensions: {
          width: this.container.offsetWidth,
          height: this.container.offsetHeight,
        },
      });
    }

    renderContent() {
      const { dimensions } = this.state;
      const { data } = this.props;

      return (<BarChart
        width={dimensions.width - 50}
        height={500}
        data={data}
        margin={{
          top: 50, right: 20, left: 20, bottom: 5,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Acumulado" fill="#8884d8" />
        <Bar dataKey="Absoluto" fill="#82ca9d" />
      </BarChart>);
    }

  render() {

    const { dimensions } = this.state;

    return (
      <div ref={el => (this.container = el)}>
        {dimensions && this.renderContent()}
      </div>

    );
  }
}
