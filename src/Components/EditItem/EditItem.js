import React from 'react';

class EditItem extends React.Component {
  render() {
    const editId = this.props.match.params.id;
    return (
      <div className="EditItem">
        <h1>Edit Item</h1>
        <h2>The editId is {editId}</h2>
      </div>
    );
  }
}

export default EditItem;
