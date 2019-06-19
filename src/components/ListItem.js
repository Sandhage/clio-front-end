import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeRelease } from '../actions';

class ListItem extends Component {
  handleRemove = removeRelease => {
    const { removeRelease } = this.props;
    removeRelease(removeRelease);
  };

  render() {
    const {releaseId, release} = this.props;
    return (
      <div key="releaseName">
        <h4>
          {release.title}
          <span onClick={() => this.handleRemove(releaseId)}>
            <i>Remove</i>
          </span>
        </h4>
      </div>
    );
  }
};

export default connect(null, {removeRelease})(ListItem);
