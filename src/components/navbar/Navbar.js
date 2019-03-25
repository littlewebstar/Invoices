import React from 'react';

class Navbar extends React.Component {

  render() {
    return (
      <div>
        <div className="ui inverted segment">
          <div className="ui inverted secondary menu">
            <a className="active item" href="http://localhost:3000/">Home</a>
            <a className="item" href="http://localhost:3000/customers">Customers</a>
            <a className="item" href="http://localhost:3000/invoices">Invoices</a>
          </div>
        </div>
      </div>
    );
  }
};

export default Navbar;
