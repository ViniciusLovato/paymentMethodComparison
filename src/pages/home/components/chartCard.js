import React from 'react'
import { Card } from 'semantic-ui-react'

const ChartCard = (props) => (
  <Card fluid>
    <Card.Content>
      <Card.Header style={{paddingTop: '20px'}}>{props.title}</Card.Header>
      <Card.Meta>
        {props.children}
      </Card.Meta>
      <Card.Description>{props.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      {props.extra}
    </Card.Content>
  </Card>
)

export default ChartCard
