import React from 'react';
import getKanyeQuote from '../api/getKanyeQuote';
import QuoteList from './QuoteList';

class KanyeQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: '',
      favorites: []
    };

    this.handleGetQuote = this.handleGetQuote.bind(this);
    this.handleAddQuote = this.handleAddQuote.bind(this);
  }

  handleAddQuote() {
    this.setState({
      favorites: this.state.favorites.concat([this.state.currentQuote])
    })
  }

  handleGetQuote() {
    this.updateCurrentQuote();
  }

  componentDidMount() {
    this.updateCurrentQuote();
  }

  updateCurrentQuote() {
    getKanyeQuote().then((quote) => {
      this.setState({currentQuote: quote.quote});
    })
  }

  render() {
    return (
      <div className="kanyequote" >
        <h1>Kanye-West Quote</h1>
        <h2>{this.state.currentQuote}</h2>
        <button onClick={this.handleGetQuote}>Get Quote</button>
        <button onClick={this.handleAddQuote}>Add</button>
        <QuoteList quotes={this.state.favorites} />
      </div>
    );
  }
}

export default KanyeQuote;