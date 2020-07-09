import React from 'react';
import getKanyeQuote from '../api/getKanyeQuote'

class KanyeQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: '',
      favorites: []
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.updateCurrentQuote();
  }

  componentDidMount() {
    this.updateCurrentQuote();
  }

  updateCurrentQuote() {
    getKanyeQuote().then((quote) => {
      this.setState({currentQuote: quote.quote})
    })
  }

  render() {
    return (
      <div className="kanyequote" >
        <h1>Kanye-West Quote</h1>
        <p>{this.state.currentQuote}</p>
        <button onClick={this.handleClick} >Get Quote</button>
        <button>Add</button>
      </div>
    )
  }
}

export default KanyeQuote