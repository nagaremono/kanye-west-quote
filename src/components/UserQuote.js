import React from 'react';

class UserQuote extends React.Component {
  render() {
    return (
      <div className="userquote" >
        <h2>My quote</h2>
        <form>
          <input type="text" placeholder="Type your quote" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default UserQuote