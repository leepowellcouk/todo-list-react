import React from 'react';

const ItemGroup = React.createClass({
  render: function () {
    const className = 'panel panel-default items ' + this.props.className;
    var items;

    if (this.props.items.length) {
      items = <ul className="list-group">{ this.props.items.map((item) => <li className="list-group-item" key={ item.props.id }>{ item }</li>) }</ul>;
    } else {
      items = <div className="panel-body">No Items</div>;
    }

    return (
      <div className="col-xs-12">
        <section className={ className }>
          <div className="panel-heading">
            <b>{ this.props.heading }</b>
          </div>
          { items }
        </section>
      </div>
    );
  }
});

export default ItemGroup;
