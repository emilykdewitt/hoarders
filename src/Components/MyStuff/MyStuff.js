import React from 'react';
import { Link } from 'react-router-dom';

class MyStuff extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const orderId = '12345';
    this.props.history.push(`/edit/${orderId}`);
  }

  render() {
    const singleLink = '/single/12345';
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <button className="btn btn-danger" onClick={this.editEvent}>Edit</button>
        <Link to={singleLink}>Single</Link>
      </div>
    );
  }
}

export default MyStuff;
