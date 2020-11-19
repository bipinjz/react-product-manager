
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.js";
import { cthArray, ctdArray } from "variables/Variables.js";
class CampaignList extends Component {

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
      return <div>Loading...</div>;
    } else {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Campaigns"
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {cthArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                    
                        {ctdArray.map((prop, key) => {

                          return ( <tr key={key}>

                                {prop.map((p,k) =>{

                                return ( <td key={k}>{p}</td>)
                                })}
                          </tr>)
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

export default CampaignList;
