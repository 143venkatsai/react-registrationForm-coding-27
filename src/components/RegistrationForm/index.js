import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    successMsg: true,
    firstNameErrorMsg: false,
    lastNameErrorMsg: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameErrorMsg: true})
    } else {
      this.setState({firstNameErrorMsg: false})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastNameErrorMsg: true})
    } else {
      this.setState({lastNameErrorMsg: false})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName === '' && lastName === '') {
      this.setState({firstNameErrorMsg: true, lastNameErrorMsg: true})
    } else if (firstName !== '' && lastName === '') {
      this.setState({lastNameErrorMsg: true})
    } else if (firstName === '' && lastName !== '') {
      this.setState({firstNameErrorMsg: true})
    } else {
      this.setState({successMsg: false})
    }
  }

  onSubmitAnotherResponse = () => {
    console.log('registered')
    this.setState(prevState => ({
      successMsg: !prevState.successMsg,
      firstName: '',
      lastName: '',
    }))
  }

  renderRegistrationForm = () => {
    const {
      firstName,
      lastName,
      firstNameErrorMsg,
      lastNameErrorMsg,
    } = this.state
    return (
      <form className="registration-container" onSubmit={this.onSubmitForm}>
        <label className="label-name" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="First name"
          className="input-element"
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
        {firstNameErrorMsg ? <p className="error-message">Required</p> : ''}
        <label className="label-name" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="Last name"
          value={lastName}
          className="input-element"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
        {lastNameErrorMsg ? <p className="error-message">Required</p> : ''}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  renderRegistrationSuccess = () => (
    <div className="registration-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="image"
      />
      <p className="success-text">Submitted Successfully</p>
      <button
        type="button"
        className="button"
        onClick={this.onSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {successMsg} = this.state

    return (
      <div className="bg-container">
        <h1 className="main-heading">Registration</h1>
        {successMsg
          ? this.renderRegistrationForm()
          : this.renderRegistrationSuccess()}
      </div>
    )
  }
}

export default RegistrationForm
