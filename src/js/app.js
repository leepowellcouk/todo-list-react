import React from 'react';
import ReactDOM from 'react';
import ToDoList from 'todolist';

const datastore = ToDoList.Datastore.create('ToDoItems');

const App = React.createClass({
  render: function () {
    return (
      <ToDoList datastore={ datastore } />
    );
  }
});

const element = document.getElementById('app');

if (element)
  ReactDOM.render(<App />, document.getElementById('app'));
