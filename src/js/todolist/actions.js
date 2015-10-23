import React from 'react';

const Actions = React.createClass({
  render: function () {
    return (
      <div className="btn-group col-xs-12">
        <button className="btn btn-danger" onClick={ this.props.handleClearAll }>Clear All</button> <button className="btn btn-default" onClick={ this.props.handleClearCompleted }>Clear Completed</button>
      </div>
    );
  }
});

export default Actions;
