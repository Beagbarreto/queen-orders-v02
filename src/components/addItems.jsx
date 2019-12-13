import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order_name: '',
      notes: '',
      item: '',
      price: '',
      quantity: 0,
      total: 0
    }

    this.add = this.add.bind(this);
    this.updateNotes = this.updateNotes.bind(this);
    this.updateName = this.updateName.bind(this);

  }

  updateNotes(e) {
    this.setState({
      notes: e.target.value
    })
  }

  updateName(e) {
    this.setState({
      order_name: e.target.value
    })
  }

  add() {
    this.props.addItem(this.state.notes, this.state.order_name);
    this.setState({
      notes: '',
      order_name: ''
    })
  }

  render () {
    return (
      <div>
        <span>Nombre de la orden:
          <input
            onChange={this.updateName}
            value={this.state.order_name}>
          </input>
        </span>
        <div>
          <span>
            <p>List of products belong here</p>
            {this.state.count}
            <button class="waves-effect waves-light btn-small">+</button>
          </span>
        </div>
        <span>
          Notas de la orden:
          <input
            onChange={this.updateNotes}
            value={this.state.notes}>
          </input>
        </span>
        <button onClick={this.add}>Enviar Orden</button>
    </div>);
  }
}

export default AddItem;
