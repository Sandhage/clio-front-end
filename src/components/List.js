import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import ListItem from './ListItem';

class List extends Component {
  state = {
    showForm: false,
    formValue: ""
  };

  inputChange = e => {
    this.setState({formValue: e.target.value});
  };

  formSubmit = e => {
    const { formValue } = this.state,
          { addRelease } = this.props;

    e.preventDefault();

    addRelease({title: formValue});
    this.setState({formValue: ""});
  };

  renderForm = () => {
    const { showForm, formValue } = this.state;

    if (showForm) {
      return (
        <div>
          <form onSubmit={this.formSubmit}>
            <div>
              <i>Add</i>
              <input id="newRelease" value={formValue} onChange={this.inputChange} />
              <label htmlFor="newRelease">What next?</label>
            </div>
          </form>
        </div>
      );
    }
  };

  renderRelease() {
    const { data } = this.props,
          releases = _.map(data, (value, key) => {
            return <ListItem key={key} releaseId={key} release={value} />
          });

    // If there are releases to return, return them.
    if (releases.length > 0) {
      return releases;
    }

    // Otherwise, return No Releases JSX.
    return (
      <div>
        <h4>You have no releases that I can find!</h4>
      </div>
    );
  };

  componentWillMount() {
    this.props.fetchReleases();
  };

  render() {
    const { showForm } = this.state;

    return (
      <div>
        <div>
          {this.renderForm()}
          {this.renderRelease()}
        </div>
        <div>
          <button onClick={() => this.setState({showForm: !showForm})}>
            {showForm ? (<i>Close</i>) : (<i>Add</i>)}
          </button>
        </div>
      </div>
    );
  };
}

const mapStateToProps = ({ data }) => {
  return { data }
}

export default connect(mapStateToProps, actions)(List);
