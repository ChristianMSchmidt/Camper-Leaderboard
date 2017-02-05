import React from "react";

class FirstRow extends React.Component {
  /*Table_Row creates the First Row and responds to clicking*/
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    var clickedCol = e.target.id.replace("Heading", "");
    this.props.changeSorting(clickedCol);
  }
  render() {
    var rHClass = this.props.actual == "recent" ? "active" : "inactive";
    var atHClass = this.props.actual == "alltime" ? "active" : "inactive";
    return (    
          <thead><tr>
            <th>Rank</th>
            <th>Camper</th>
            <th id="recentHeading" className={rHClass} onClick={this.handleClick}>
              <div className={rHClass}></div>Points made <br/> last 30 Days
            </th>
            <th id="alltimeHeading" className={atHClass} onClick={this.handleClick}>
              <div className={atHClass}></div>All Time Points
            </th>
          </tr></thead>
    );
  }
}

module.exports = FirstRow;