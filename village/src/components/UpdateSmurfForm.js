import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSmurf } from '../actions';

class UpdateSmurfForm extends Component {
	constructor(props) {
    super(props);

    this.updateSmurf = this.updateSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
  }

  render() {
  	return (
  		
  	);
  }

  getDefaultState() {
		return {
			name: '',
			age: '',
			height: '',
		};
	}

}

export default connect(null, { updateSmurf })(UpdateSmurfForm);
