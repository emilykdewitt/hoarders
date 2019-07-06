import React from 'react';
import './AddItemForm.scss';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';


class AddItemForm extends React.Component {
  nameRef = React.createRef();

  typeRef = React.createRef();

  sizeRef = React.createRef();

  locationRef = React.createRef();

  imageRef = React.createRef();

  createItem = (e) => {
    e.preventDefault();
    const item = {
      name: this.nameRef.current.value,
      type: this.typeRef.current.value,
      size: this.sizeRef.current.value,
      location: this.locationRef.current.value,
      image: this.imageRef.current.value,
    };
    this.props.addItem(item);
  }

  render() {
    return (
      <Form className="create-item" onSubmit={this.createItem}>
        <FormGroup>
          <Label for="name">Name of Item</Label>
          <Input type="text" ref={this.nameRef} name="name" id="exampleName" placeholder="Antique Nutcracker" />
        </FormGroup>
        <FormGroup>
          <Label for="type">Select Type</Label>
          <Input type="select" ref={this.typeRef} name="type" id="type">
            <option value="knick-knack">Knick-Knack</option>
            <option value="toy">Toy</option>
            <option value="decor">Decor</option>
            <option value="miscellaneous">Miscellaneous</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="size">Select Size</Label>
          <Input type="select" ref={this.sizeRef} name="size" id="size">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra-Large</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="location">Location</Label>
          <Input type="text" ref={this.locationRef} name="location" id="location" placeholder="Basement" />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input type="text" ref={this.imageRef} name="image" id="image" placeholder="https://www.trinkets.com/keychains/goldcat.jpg" />
        </FormGroup>
        <Button type="submit">+ Save Item</Button>
      </Form>
    );
  }
}

export default AddItemForm;
