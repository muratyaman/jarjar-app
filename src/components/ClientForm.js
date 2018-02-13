import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

class ClientForm extends Component {

  componentWillReceiveProps = (nextProps) => { // Receive Contact data Asynchronously
    const { client } = nextProps;
    //if(client.id !== this.props.client.id) { // Initialize form only once
      this.props.initialize(client)
    //}
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span className='error'>{error.message}</span>}
    </Form.Field>
  )

  render() {
    const { handleSubmit, pristine, submitting, loading } = this.props;

    const title = this.props.client.id ? 'Edit Client' : 'New Client';

    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <h1 style={{marginTop:"1em"}}>{title}</h1>
          <Form onSubmit={handleSubmit} loading={loading}>
            <Field name='first_name' type='text' component={this.renderField} label='First Name'/>
            <Field name='last_name' type='text' component={this.renderField} label='Last Name'/>
            <Field name='phone' type='text' component={this.renderField} label='Phone'/>
            <Field name='email' type='text' component={this.renderField} label='Email'/>
            <Field name='address' type='text' component={this.renderField} label='Address'/>
            <Field name='town' type='text' component={this.renderField} label='Town'/>
            <Field name='city' type='text' component={this.renderField} label='City'/>
            <Field name='county' type='text' component={this.renderField} label='County'/>
            <Field name='country' type='text' component={this.renderField} label='Country'/>
            <Field name='postcode' type='text' component={this.renderField} label='Postcode'/>
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'client'})(ClientForm);
