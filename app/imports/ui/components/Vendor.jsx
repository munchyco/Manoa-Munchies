import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


/** Renders a single row in the List Stuff table. See pages/ListContacts.jsx. */
class Vendor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {

    let content;

    if (this.state.isToggleOn === false) {
        content = <Card centered>
          <Card.Content>
            <p>Item 1</p>
            <p>Item 2</p>
            <p>Item 3</p>
            <p>Item 4</p>
            <p>Item 5</p>
          </Card.Content>
        </Card>;
} else {
      content = '';
    }

    return (
        <Card centered>
          <Card.Content>
            <Card.Header>{this.props.vendor.name} </Card.Header>
            <Image floated='right' size='mini' src={this.props.vendor.image} />
            <Card.Meta>{this.props.vendor.location}</Card.Meta>
            <Card.Description>
              {this.props.vendor.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <p>Cuisine:</p>
            <div className="ui three buttons">
              <Button basic>
                {this.props.vendor.foodTypeOne}
              </Button>
              <Button basic>
                {this.props.vendor.foodTypeTwo}
              </Button>
              <Button basic>
                {this.props.vendor.foodTypeThree}
              </Button>
            </div>
            <div className="mysection">
            <Button centered='true' onClick={this.handleClick}>
              {this.state.isToggleOn ? 'Available Menu Items' : 'Close'}
            </Button>
            </div>
          </Card.Content>

          <Card.Content extra>
            {content}
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Vendor.propTypes = {
  vendor: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Vendor);
