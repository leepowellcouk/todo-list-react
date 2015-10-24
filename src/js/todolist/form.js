import React from 'react';
import _ from 'lodash';

const Form = React.createClass({
  handleSubmit: function (event) {
    const input = this.refs.input;
    const val   = _.trim(input.value);
    this.props.handleSubmit(val);
    input.value = '';
    event.preventDefault();
  },

  render: function () {
    return (
      <form className="col-xs-12 form-horizontal item-form" onSubmit={ this.handleSubmit }>
        <div className="form-group">
          {/* Uncontrolled input - http://buildwithreact.com/article/form-elements */}
          <label className="sr-only">Description</label>
          <span className="col-xs-12 col-sm-9">
            <input className="form-control item-form__control" type="text" ref="input" placeholder="e.g. Collect the shopping" />
          </span>
          <span className="col-xs-12 col-sm-3">
            <button className="btn btn-primary btn-block" type="submit"><span className="glyphicon glyphicon-pencil"></span> Create</button>
          </span>
        </div>
      </form>
    );
  }
});

export default Form;
