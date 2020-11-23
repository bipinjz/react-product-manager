
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.js";
import { thArray } from "variables/Variables.js";
import { Link } from 'react-router-dom';

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

    let c = window.confirm("Are you sure?");
   if(!c){

     return;
   }

    const token = this.props.userToken;

    var url = "http://bipinbajracharya.com/portfolio/react-product-manager-admin/wp-json/wp/v2/posts/"+id;

      const requestOptions = {
          method: 'DELETE',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token 
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
      return <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
            <div className="card" style={{"minHeight":"150px"}}><div className="header">
              <h4 className="title">Products</h4>
              <p className="category"></p>
              </div>
              <div style={{"paddingLeft":"15px", "paddingTop":"5px"}}>
                <i className="fa fa-spinner  fa-spin"></i>  
              </div></div>
            </Col>
            </Row>
            </Grid>
      </div>;
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
                        <td ><img alt="" src={item.acf.image} style={{width:'100px' , height:'auto'}} /></td>  
                        <td >{item.title.rendered}</td>
                        <td >{item.acf.interest_rate}</td>
                        <td >{item.acf.comparison_rate}</td>
                        <td >
                        <Link to={{ pathname: '/admin/editProduct/', state: { id: item.id} }} > Edit  </Link>
                        <a href="/" onClick={(event) => this.deleteProduct(item.id, event)}>Delete</a></td>
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
