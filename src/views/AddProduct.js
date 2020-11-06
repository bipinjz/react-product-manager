
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
      item: {
        title: "bbb"
      }
    };
  }  


  updateTitle(e){
    console.log("clicked", e.target.value);
    this.setState({item : { title: e.target.value}});
  }

  savePost(pTitle) {
    // POST request using fetch with error handling

    console.log("bbbb");

    const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9iaXBpbmJhanJhY2hhcnlhLmNvbVwvcG9ydGZvbGlvXC9yZWFjdC1wcm9kdWN0LW1hbmFnZXItYWRtaW4iLCJpYXQiOjE2MDQxOTU2NTEsIm5iZiI6MTYwNDE5NTY1MSwiZXhwIjoxNjA0ODAwNDUxLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxNyJ9fX0.Qhm_FZ5unzdMLcZ2jBqJ_FOBoVTJZXlcBAZZoPcIon8' 
        },
        body: JSON.stringify({ title: pTitle, status : 'publish'  })
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

    console.log(this.state);
    return (
      <div className="content">
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
                          defaultValue: ""
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
                          defaultValue: ""
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
                    <Button bsStyle="info" onClick={() => this.savePost(this.state.item.title)} pullRight fill >
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
