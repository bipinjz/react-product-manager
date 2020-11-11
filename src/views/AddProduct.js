
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.js";
import { FormInputs } from "components/FormInputs/FormInputs.js";
import { UserCard } from "components/UserCard/UserCard.js";
import Button from "components/CustomButton/CustomButton.js";

import image from "assets/img/loan.jpg";

class AddProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      
        title: "bbb",
        intRate: "",
        compRate: ""
      
    };
  }  


  updateTitle(e){
    console.log("11", this.state.props);
    console.log("clicked", e.target.value);
    this.setState({ title: e.target.value});
  }

  updateIntRate(e){
    console.log("clicked", e.target.value);
    this.setState({title: this.state.title, compRate: this.state.compRate, intRate: e.target.value});
  }
  updateCompRate(e){
    console.log("clicked", e.target.value);
    this.setState({ title: this.state.title, intRate: this.state.intRate, compRate: e.target.value});
  }

  savePost(pTitle, intRate, compRate) {
    // POST request using fetch with error handling


    //const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9iaXBpbmJhanJhY2hhcnlhLmNvbVwvcG9ydGZvbGlvXC9yZWFjdC1wcm9kdWN0LW1hbmFnZXItYWRtaW4iLCJpYXQiOjE2MDUwODAxNzYsIm5iZiI6MTYwNTA4MDE3NiwiZXhwIjoxNjA1Njg0OTc2LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxNyJ9fX0.SxN0kpUFZsVzDOBYSC-yqaYqvUQi6Aijl7-g8JtRYqo";

    const token = this.props.userToken;

    const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token 
        },
        body: JSON.stringify({ title: pTitle, status : 'publish' , fields : {comparison_rate : compRate, interest_rate: intRate}  })
    };
    fetch('http://bipinbajracharya.com/portfolio/react-product-manager-admin/wp-json/wp/v2/posts/', requestOptions)
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            //this.setState({ postId: data.id })
        })
        .catch(error => {
           // this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
      }



  render() {

    //console.log("aaaaa",this.props);

    //console.log("this.props.userToken", this.props.userToken);

    return (
      <div className="content">
       -- {this.state.props}
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Add Product"
                content={
                  <form>
                    
                                        <FormInputs 
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Title",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Enter Product Title",
                          defaultValue:
                            "",
                            onChange : (event) => this.updateTitle(event)
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6"]}
                      properties={[
                        {
                          label: "Interest Rate",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Enter Interest Rate",
                          defaultValue: "",
                          onChange : (event) => this.updateIntRate(event)
                        }
                      ]}
                    />

                  <FormInputs
                      ncols={["col-md-6"]}
                      properties={[
                        
                        {
                          label: "Comparison Rate",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Enter Comparison Rate",
                          defaultValue: "",
                          onChange : (event) => this.updateCompRate(event)
                        }
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Description</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Enter Description"
                            defaultValue=""
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" onClick={() => this.savePost(this.state.title, this.state.intRate, this.state.compRate)} pullRight fill >
                      Add Product
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage={image}
                avatar=""
                name="Product Title"
                userName=""
                description={
                  <span>
                    Product Desc
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      View Details
                    </Button>
                    <Button simple>
                      Apply
                    </Button>
                    
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default AddProduct;
