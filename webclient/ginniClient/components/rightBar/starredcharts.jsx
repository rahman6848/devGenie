import React from 'react';
import { Card, Icon ,Image} from 'semantic-ui-react'


export default class StarredCharts extends React.Component {
    render() {
        return (
            <div>
            <Card>
              <Card.Content>
                <Image floated='right' size='mini' src='../images/react.png' />
                <Card.Header>
                  React
                </Card.Header>
                <Card.Meta>
                  React bot
                </Card.Meta>
                <Card.Description>
                  React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
                </Card.Description>
              </Card.Content>

            </Card>
            <Card>
              <Card.Content>
                <Image floated='right' size='mini' src='../images/node.jpg' />
                <Card.Header>
                  NodeJS
                </Card.Header>
                <Card.Meta>
                  Node bot
                </Card.Meta>
                <Card.Description>
                  Node.js is an open-source, cross-platform JavaScript runtime environment for developing a diverse variety of tools and applications.
                </Card.Description>
              </Card.Content>

            </Card>
            
          </div>
        );
    }
}
