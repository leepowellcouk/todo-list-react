import React from 'react';
import uuid from 'node-uuid';

import Items from 'ToDoListItems';
import Form from 'ToDoListForm';
import Actions from 'ToDoListActions';
import Datastore from 'ToDoListDatastore';


const ToDoList = React.createClass({
  getInitialState: function () {
    return {
      items: this.props.datastore.get() || []
    };
  },

  createNewItem: function (description) {
    const items = this.state.items;
    const item = {
      id: uuid.v1(),
      description: description,
      isCompleted: false,
      dateCreated: new Date().toString(),
      dateCompleted: null
    };
    items.unshift(item);
    this.setState({ items: items }, () => this.saveItems());
  },

  saveItems: function () {
    this.props.datastore.set(this.state.items);
  },

  handleClearAll: function () {
    this.setState({ items: [] }, () => this.saveItems());
  },

  handleItemCompleted: function (itemID, isCompleted) {
    var items = this.state.items;

    items
      .filter((item) => item.id === itemID)
      .map((item) => {
        item.isCompleted   = isCompleted;
        item.dateCompleted = isCompleted ? new Date().toString() : null;
      });

    this.setState({ items: items }, () => this.saveItems());
  },

  handleItemDeleted: function (itemID) {
    const items = this.state.items.filter((item) => item.id !== itemID);
    this.setState({ items: items }, () => this.saveItems());
  },

  handleSubmit: function (val) {
    if (val !== '') this.createNewItem(val);
  },

  render: function () {
    const formProps = {
      handleSubmit: this.handleSubmit
    };

    const itemsProps = {
      items: this.state.items,
      handleItemCompleted: this.handleItemCompleted,
      handleItemDeleted: this.handleItemDeleted
    };

    const actionsProps = {
      handleClearAll: this.handleClearAll
    };

    return (
      <div>
        <div className="row">
          <Form { ...formProps } />
        </div>
        <div className="row">
          <Items { ...itemsProps } />
        </div>
        <div className="row">
          <Actions { ...actionsProps } />
        </div>
      </div>
    );
  }
});

ToDoList.Datastore  = Datastore;

export default ToDoList;
