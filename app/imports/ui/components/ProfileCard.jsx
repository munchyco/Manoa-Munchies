import React from 'react';
import { Card, Image, Button, Container } from 'semantic-ui-react';

export default class ProfileCard extends React.Component {
  render() {
    return (
        <div className={'Cardplacement'}>
          <Container>
        <Card centered>
          <Image src={'https://i.imgur.com/tILqO0L.jpg'}/>
          <Card.Content>
            <Card.Header>Preferences</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2019</span>
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Header>Cuisine Type</Card.Header>
            <Card.Meta>
            <p></p>
            <p></p>
            <div className={'Title'}>
              <p>To-Go</p>
            </div>
            <Button positive floated="left">Yes</Button>
            <Button negative disabled floated="right">No</Button>
          </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Meta>
              <div className={'Title'}>
                <p>Buffet</p>
              </div>
              <Button positive floated="left">Yes</Button>
              <Button negative disabled floated="right">No</Button>
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Meta>
              <div className={'Title'}>
                <p>Food Truck</p>
              </div>
              <Button positive disabled floated="left">Yes</Button>
              <Button negative floated="right">No</Button>
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Meta>
              <div className={'Title'}>
                <p>Made to Order</p>
              </div>
              <Button positive floated="left">Yes</Button>
              <Button negative disabled floated="right">No</Button>
            </Card.Meta>
          </Card.Content>

          <Button><a>Edit Cuisine Type</a></Button>

          <Card.Content>
            <Card.Header>Price Range</Card.Header>
            <Card.Meta>
              <p></p>
              <p></p>
              <Button disabled size="small" floated="left">$0 - $10</Button>
              <Button size="small" >$10-$20</Button>
              <Button disabled size="small">$20+</Button>
            </Card.Meta>
          </Card.Content>

          <Button><a>Edit Price Range</a></Button>

          <Card.Content>
            <Card.Header>Health Options</Card.Header>
            <Card.Meta>
              <p></p>
              <p></p>
              <div className={'Title'}>
                <p>Health Conscious</p>
              </div>
              <Button positive disabled floated="left">Yes</Button>
              <Button negative floated="right">No</Button>
            </Card.Meta>
          </Card.Content>

          <Card.Content>
          <Card.Meta>
            <div className={'Title'}>
              <p>Vegan</p>
            </div>
            <Button positive disabled floated="left">Yes</Button>
            <Button negative floated="right">No</Button>
          </Card.Meta>
        </Card.Content>

          <Card.Content>
            <Card.Meta>
              <div className={'Title'}>
                <p>Gluten Free</p>
              </div>
              <Button positive disabled floated="left">Yes</Button>
              <Button negative floated="right">No</Button>
            </Card.Meta>
          </Card.Content>


        </Card>
          </Container>
        </div>

   )
  }
}