import React from 'react'

class QuoteList extends React.Component {
  render() {
    const quoteItems = this.props.quotes.map((quote, index) => {
      return <li key={index}>{quote}</li>
    })
    return (
      <ol>{quoteItems}</ol>
    )
  }
}

export default QuoteList;