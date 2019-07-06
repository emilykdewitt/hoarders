import React from 'react';
import AddItemForm from '../AddItemForm/AddItemForm';
import newItemData from '../../helpers/data/newItemData';
import './NewItem.scss';

class NewItem extends React.Component {
  state = {
    items: {},
  }

  addItem = (item) => {
    const items = { ...this.state.items };
    items[`item${Date.now()}`] = item;
    this.setState({ items });
    newItemData.addNewItem(item);
    // .then(() => {
    //   this.setState({
    //     dogId: '',
    //     employeeId: '',
    //     date: '',
    //   });
    // })
    // .catch(err => console.error('no new movie for you', err));
  }

  render() {
    return (
      <div className="NewItem">
        <h1>New Stuff</h1>
        <AddItemForm addItem={this.addItem}/>
      </div>
    );
  }
}

export default NewItem;
