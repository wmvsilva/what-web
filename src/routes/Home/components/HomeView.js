import React from 'react'
import './HomeView.scss'
import PropTypes from 'prop-types'

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item : "dog"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <form className="form-horizontal">
          <input type="text" name="title" onChange={this.handleChange.bind(this)} />
        </form>
        <button type="button" onClick={() => this.onClick()} className="btn">Search</button>
        <div>
          {this.props.results}
        </div>
      </div>
    );
  }

  onClick() {
    console.log(this.state);
    this.props.search(this.state.item);
  }

  handleChange(event) {
    this.setState({'item': event.target.value})
  }
}

HomeView.propTypes = {
  results     : PropTypes.string.isRequired
}

HomeView.defaultProps = {
  results: "a"
};
