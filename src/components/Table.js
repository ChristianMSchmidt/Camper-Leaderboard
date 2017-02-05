import React from "react";
import FirstRow from "./FirstRow.js";
import TableRows from "./TableRows.js";

class Table extends React.Component {
  /*Table does the API-Calls and passes the Data to its children*/
  constructor() {
    super();
    this.changeSorting = this.changeSorting.bind(this);
    this.loadAndSort = this.loadAndSort.bind(this);
    
    this.recent = ["https://fcctop100.herokuapp.com/api/fccusers/top/recent", "recent"];
    this.alltime = ["https://fcctop100.herokuapp.com/api/fccusers/top/alltime", "alltime"];
    
    this.state = {
      actual: "recent", //Default sorting is by "Points made last 30 Days"
      campers_recent: [],
      campers_alltime: [],
    };
  }
  loadAndSort (url, sortby) {
    var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => { 
            /*Instead of Arrow-Syntax I could use:
              xhr.onload = function() {...}.bind(this); */
            var arr = JSON.parse(xhr.response);
            arr.sort((a,b) => a[sortby] > b[sortby] ? -1 :
                              a[sortby] < b[sortby] ? 1 : 0);
            
            if(sortby === "recent") this.setState({campers_recent: arr,});
            else if(sortby === "alltime") this.setState({campers_alltime: arr,});
        };
        xhr.send();
  }
  changeSorting(sortby) {
    this.setState({actual: sortby,});
  }
  componentDidMount() {
    /*Store both APIs simultaneously so I don't need an API-Call on every click*/
    this.loadAndSort(...this.recent);
    this.loadAndSort(...this.alltime);
  }
  render() {
    /*Choose the correct Data-Array, dependent on the actual chosen sorting method*/
    var campers = this.state.actual == "recent" ? this.state.campers_recent : this.state.campers_alltime;
    return (
        <table>
          <FirstRow actual={this.state.actual} changeSorting={this.changeSorting} />
          <TableRows data={campers} />
        </table>
    );
  }
}

module.exports = Table;