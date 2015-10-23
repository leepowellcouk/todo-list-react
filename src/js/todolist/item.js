import React from 'react';
import Time from 'react-time';

const Item = React.createClass({
  handleToggleCompleted: function () {
    const isChecked = this.refs.input.checked;
    this.props.handleItemCompleted(this.props.id, isChecked);
  },

  handleDelete: function () {
    this.props.handleItemDeleted(this.props.id);
  },

  render: function () {
    const id            = this.props.id;
    const isCompleted   = this.props.isCompleted;
    const description   = this.props.description;
    const format        = 'HH:mm DD/MM/YYYY';
    const dateCreated   = <Time value={ new Date(this.props.dateCreated) } format={ format } />;
    const dateCompleted = this.props.isCompleted ? <Time value={ new Date(this.props.dateCompleted) } format={ format } /> : '-';

    return (
      <article className="item" data-id={ id }>
        <div className="item__control-wrap"><label htmlFor={ id } className="sr-only item__control-label">Mark completed</label> <input className="item__control" type="checkbox" ref="input" checked={ isCompleted } onChange={ this.handleToggleCompleted } id={ id } /></div>
        <div className="item__body-wrap">
          <div className="item__desc"><p><span className="sr-only">Description: </span>{ description }</p></div>
          <div className="item__meta-wrap">
            <div className="item__meta item__meta--created">Date created: { dateCreated }</div>
            <div className="item__meta item__meta--completed">Date completed: { dateCompleted }</div>
          </div>
        </div>
        <div className="item__actions-wrap">
          <button className="btn btn-danger btn-xs item__action item__action--delete" onClick={ this.handleDelete }><span className="glyphicon glyphicon-remove" aria-hidden="true"></span> Delete</button>
        </div>
      </article>
    );
  }
});

export default Item;
