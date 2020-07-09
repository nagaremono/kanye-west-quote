import React from 'react';
import QuoteList from './QuoteList';

class UserQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      quotes: []
    };

    this.handlechange = this.handlechange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlechange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      quotes: this.state.quotes.concat([this.state.value]),
      value: '',
    })
  }

  render() {
    return (
      <div className="userquote" >
        <h2>My quote</h2>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handlechange} type="text" value={this.state.value} />
          <input type="submit" value="Submit" />
        </form>
        <QuoteList quotes={this.state.quotes} />
      </div>
    )
  }
}

export default UserQuote