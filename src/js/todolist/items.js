import React from 'react';
import Item from 'ToDoListItem';
import ItemsGroup from 'ToDoListItemsGroup';

const Items = React.createClass({
  render: function () {
    const items = this.props.items;

    var notCompleted = items.filter((item) => !(item.isCompleted)).map((item) => {
      return (<Item { ...item } handleItemCompleted={ this.props.handleItemCompleted } handleItemDeleted={ this.props.handleItemDeleted } />);
    });

    var completed = items.filter((item) => item.isCompleted).map((item) => {
      return (<Item { ...item } handleItemCompleted={ this.props.handleItemCompleted } handleItemDeleted={ this.props.handleItemDeleted } />);
    });

    return (
      <div>
        <ItemsGroup heading="Not Completed" items={ notCompleted } className="items-not-completed" />
        <ItemsGroup heading="Completed" items={ completed } className="items-completed" />
      </div>
    );
  }
});

export default Items;
