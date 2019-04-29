import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Container, Form, Grid, Header, Message, Segment, Dropdown } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { Meteor } from 'meteor/meteor';
import AutoForm from 'uniforms-semantic/AutoForm';

/**
 * Signup component is similar to signin component, but we attempt to create a new user instead.
 */

const roleOption = [
  {
    text: 'Vendor',
    value: 'vendor',
  },
  {
    text: 'Customer',
    value: 'customer',
  },
]

export default class Signup extends React.Component {
  /** Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '', role: '', finished: false};
    // Ensure that 'this' is bound to this component in these two functions.
    // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /** Update the form controls each time the user interacts with them. */
  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  /** Handle Signup submission using Meteor's account mechanism. */
  handleSubmit() {
    const { email, password, role } = this.state;
    Accounts.createUser({ email, username: email, password}, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        //Landing.push('/login');
      }
      //Need to add call to update roles for user based on role.
    });
    Meteor.call('updatingRole', {
      role: this.state.role
    }, (err) => {
      if (err) {
        alert(err);
      } else {
        console.log('success');// success!
        this.setState({finished: true});
      }
    });
  }



  /** Display the signup form. */
  render() {
    const { value } = this.state;
    if(this.state.finished)
    {
      return <Redirect to="/"/>;
    }
    return (
        <Container className="signup-format">
          <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
            <Grid.Column>
              <Header as="h2" textAlign="center" inverted>
                <p className="consistent-font">Register your account</p>
              </Header>
              <Form onSubmit={this.handleSubmit} color='black' inverted>
                <Segment stacked inverted>
                  <Form.Input
                      label="Email"
                      icon="user"
                      iconPosition="left"
                      name="email"
                      type="email"
                      placeholder="E-mail address"
                      onChange={this.handleChange}
                  />
                  <Form.Input
                      label="Password"
                      icon="lock"
                      iconPosition="left"
                      name="password"
                      placeholder="Password"
                      type="password"
                      onChange={this.handleChange}
                  />
                  <Form.Field>
                    <Dropdown placeholder='Are you a customer or a vendor?'
                              name="role"
                              type="role"
                              fluid
                              selection
                              options={roleOption}
                              value={value}
                              onChange={this.handleChange}/>
                  </Form.Field>
                  <Form.Button content="Submit"/>
                </Segment>
              </Form>
              <Message className="consistent-font" color='black' inverted>
                Already have an account? Login <Link to="/signin">here</Link>
              </Message>
              {this.state.error === '' ? (
                  ''
              ) : (
                  <Message
                      error
                      header="Registration was not successful"
                      content={this.state.error}
                  />
              )}
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}
