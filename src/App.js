import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      guests: [],
      firstName: '',
      secondName: ''
    }
  }

  updateGuessFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  updateGuessSecondName(e) {
    this.setState({
      secondName: e.target.value
    });
  }

  createGuess(e) {
    e.preventDefault();
    let oldGuests = this.state.guests;
    let newGuess = {id: this.state.guests.length + 1, firstName: this.state.firstName, secondName: this.state.secondName};
    this.setState({
      guests: [...oldGuests, newGuess],
      firstName: '',
      secondName: ''
    });
  }

  render() {
    return (
        <div className="container" id="root">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <form onSubmit={this.createGuess.bind(this)}>
                <div className="form-group">
                  <label htmlFor="first-name">Nombre</label>
                  <input value={this.state.firstName} onChange={this.updateGuessFirstName.bind(this)} type="text" className="form-control" name="first-name" />
                </div>

                <div className="form-group">
                  <label htmlFor="last-name">Apellido</label>
                  <input value={this.state.secondName} onChange={this.updateGuessSecondName.bind(this)} type="text" className="form-control" name="last-name" />
                </div>

                <div className="action">
                  <button type="submit" className="btn btn-primary">Agregar Invitado</button>
                </div>
              </form>

              <table className="table bordered-table table-striped">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                  </tr>
                  {this.state.guests.map((guess, index) =>
                    <tr key={guess.id}>
                      <td>{guess.firstName}</td>
                      <td>{guess.secondName}</td>
                    </tr>
                    )}
                </thead>
                <tbody>

                </tbody>
              </table>
            </div>
          </div>
        </div>
    )
  }
}

export default App


