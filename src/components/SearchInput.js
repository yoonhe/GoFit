import React from 'react';
import * as videoAction from '../reducers/video';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const searchTerm = this.state.searchTerm;
    console.log('searchTerm :', searchTerm);
    const { VideoAction } = this.props;
    VideoAction.loadVideo(searchTerm);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.searchTerm}
            placeholder='운동 검색'
            onChange={this.handleInputChange}
          />
          <button type='submit'>검색</button>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    VideoAction: bindActionCreators(videoAction, dispatch)
  })
)(SearchInput);
