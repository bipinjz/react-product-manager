
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

class EditProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      
        title: "",
        intRate: "",
        compRate: ""
      
    };
  }  

  componentDidMount() {
     this.getProducts();
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

  getProducts = () => {

    const id = this.props.location.state.id;

    fetch("http://bipinbajracharya.com/portfolio/react-product-manager-admin/wp-json/wp/v2/posts/"+id)
      .then(res => res.json())
      .then(
        (result) => {

          console.log(result)

          this.setState({
            isLoaded: true,
            title: result.title.rendered,
            intRate: result.acf.interest_rate,
            compRate: result.acf.comparison_rate
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



  savePost(pTitle, intRate, compRate) {
    // POST request using fetch with error handling


    //const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9iaXBpbmJhanJhY2hhcnlhLmNvbVwvcG9ydGZvbGlvXC9yZWFjdC1wcm9kdWN0LW1hbmFnZXItYWRtaW4iLCJpYXQiOjE2MDUwODAxNzYsIm5iZiI6MTYwNTA4MDE3NiwiZXhwIjoxNjA1Njg0OTc2LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxNyJ9fX0.SxN0kpUFZsVzDOBYSC-yqaYqvUQi6Aijl7-g8JtRYqo";

    const id = this.props.location.state.id;

    const token = this.props.userToken;

    const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token 
        },
        body: JSON.stringify({ title: pTitle, status : 'publish' , fields : {comparison_rate : compRate, interest_rate: intRate}  })
    };
    fetch('http://bipinbajracharya.com/portfolio/react-product-manager-admin/wp-json/wp/v2/posts/'+id, requestOptions)
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            window.alert("Updated!");
            this.props.history.push('/admin/productsList')

            //this.setState({ postId: data.id })
        })
        .catch(error => {
           // this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
      }



  render() {

    //console.log("aaaaa",this.props);

    console.log("this.props.ppp", this.props.location.state.id);

    return (
      <div className="content">
       
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Edit Product"
                content={
                  <form>
                    
                                        <FormInputs 
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Title",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue:
                            this.state.title,
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
                          placeholder: "",
                          defaultValue: this.state.intRate,
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
                          placeholder: "",
                          defaultValue: this.state.compRate,
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
                      Save Product
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
                name={this.state.title}
                userName=""
                description={
                  <span>
                    Product Desc <br/>
                    Int: {this.state.intRate} <br/>
                  Comp: {this.state.compRate} <br/>
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

export default EditProduct;
