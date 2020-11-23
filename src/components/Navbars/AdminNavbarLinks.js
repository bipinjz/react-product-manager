
import React, { Component } from "react";
import { NavItem, Nav } from "react-bootstrap";

class AdminNavbarLinks extends Component {
  
  render() {
    return (
      <div>
        {(this.props.userToken !== "") 
        ? <Nav pullRight>
            <NavItem eventKey={3} onClick={() => window.location.reload()}>
            Log out
          </NavItem>
        </Nav>
        : ""
        }
      </div>
    );
  }
}

export default AdminNavbarLinks;
