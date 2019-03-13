import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getSwapi } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getSwapi();
  }

  render() {
    if (this.props.fetching) {
     return <h2>Loading Swapi...</h2>
      // return something here to indicate that you are fetching data
    }
    return (
   
      <div className="CharactersList_wrapper">
      {this.props.characters && (
        <CharacterList characters={this.props.characters} />
      )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.charsReducer.fetching,
  characters: state.charsReducer.characters,
  error: state.charsReducer.error
})

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getSwapi }
)(CharacterListView);
