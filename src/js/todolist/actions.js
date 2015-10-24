import React from 'react';

const Actions = React.createClass({
  render: function () {
    return (
      <div className="btn-group col-xs-12 col-sm-3 col-sm-offset-9">
        <button className="btn btn-danger btn-block" onClick={ this.props.handleClearAll }><span className="glyphicon glyphicon-trash"></span> Clear All</button>
      </div>
    );
  }
});

export default Actions;
