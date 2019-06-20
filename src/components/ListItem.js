import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeRelease } from '../actions';

class ListItem extends Component {
  handleRemove = data => {
    const { removeItem } = this.props;
    removeRelease(removeItem);
  };

  render() {
    const {releaseId, release} = this.props;
    return (
      <div key="releaseName">
        <h4>
          {release.title}
        </h4>
        <button onClick={() => this.handleRemove(releaseId)}>
          <i>Remove</i>
        </button>
      </div>
    );
  }
};

export default connect(null, {removeRelease})(ListItem);
