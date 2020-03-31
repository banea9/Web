import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";
import { setSearchField, requestRobots } from "../actions";

// import { robots } from "./robots";
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};
class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: []
  //     //searchField: ""
  //   };
  // }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(users => {
    //     this.setState({ robots: users });
    //   });
    this.props.onRequestRobots();
  }

  // onSearchChange = event => {
  //   this.setState({ searchField: event.target.value });
  // };

  //-------------Without Redux-------------

  // render() {
  //   const { robots, searchField } = this.state;
  //   const filteredRobots = robots.robots.filter(robot => {
  //     return robot.name
  //       .toLowerCase()
  //       .includes(searchField.searchField.toLowerCase());
  //   });
  //   return (
  //     <div className="tc">
  //       <h1 className="f2">RoboFriends</h1>
  //       <SearchBox searchChange={this.onSearchChange} />
  //       <Scroll>
  //         <ErrorBoundary>
  //           <CardList robots={filteredRobots} />
  //         </ErrorBoundary>
  //       </Scroll>
  //     </div>
  //   );
  // }
  // ------------------------------------

  //With Redux
  render() {
    const { searchField, onSearchChange, robots } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
