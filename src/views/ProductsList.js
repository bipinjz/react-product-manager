
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.js";
import { thArray, tdArray } from "variables/Variables.js";

class ProductsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }  


  componentDidMount() {
    fetch("http://bipinbajracharya.com/portfolio/react-product-manager-admin/wp-json/wp/v2/posts/")
      .then(res => res.json())
      .then(
        (result) => {

          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {

    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Products"
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {items.map(item => {
                        return (
                          <tr key={item.id}>
                        <td >{item.id}</td>  
                        <td >{item.title.rendered}</td>
                        <td >{item.acf.interest_rate}</td>
                        <td >{item.acf.comparison_rate}</td>
                        <td ><a href="#">Edit</a> <a href="">Delete</a></td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>

          </Row>
        </Grid>
      </div>
    );
  }
}
}

export default ProductsList;
