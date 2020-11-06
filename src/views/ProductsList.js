
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

  deleteProduct = (id, event) => {

    event.preventDefault()

    var url = "http://bipinbajracharya.com/portfolio/react-product-manager-admin/wp-json/wp/v2/posts/"+id;

      const requestOptions = {
          method: 'DELETE',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9iaXBpbmJhanJhY2hhcnlhLmNvbVwvcG9ydGZvbGlvXC9yZWFjdC1wcm9kdWN0LW1hbmFnZXItYWRtaW4iLCJpYXQiOjE2MDQxOTU2NTEsIm5iZiI6MTYwNDE5NTY1MSwiZXhwIjoxNjA0ODAwNDUxLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxNyJ9fX0.Qhm_FZ5unzdMLcZ2jBqJ_FOBoVTJZXlcBAZZoPcIon8' 
          }
      };
      fetch(url, requestOptions).then( () => {
        this.getProducts();
      })
      .catch(error => {
            // this.setState({ errorMessage: error.toString() });
              console.error('There was an error!', error);
              alert(error)
          });
        


  }

  editProduct = (id, event) => {
   event.preventDefault()

    var url = "http://bipinbajracharya.com/portfolio/react-product-manager-admin/wp-json/wp/v2/posts/"+id;

    console.log(url);
    
      const requestOptions = {
          method: 'UPDATE',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9iaXBpbmJhanJhY2hhcnlhLmNvbVwvcG9ydGZvbGlvXC9yZWFjdC1wcm9kdWN0LW1hbmFnZXItYWRtaW4iLCJpYXQiOjE2MDQxOTU2NTEsIm5iZiI6MTYwNDE5NTY1MSwiZXhwIjoxNjA0ODAwNDUxLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxNyJ9fX0.Qhm_FZ5unzdMLcZ2jBqJ_FOBoVTJZXlcBAZZoPcIon8' 
          }
      };
      fetch(url, requestOptions).then( () => {
        //this.getProducts();
      })
      .catch(error => {
            // this.setState({ errorMessage: error.toString() });
              console.error('There was an error!', error);
              alert(error)
          });
        

  }

  getProducts = () => {
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

  componentDidMount() {
    this.getProducts();
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
                        <td >
                        <a href="" onClick={(event) => this.editProduct(item.id, event)}>Edit</a> &nbsp;
                        <a href="" onClick={(event) => this.deleteProduct(item.id, event)}>Delete</a></td>
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
