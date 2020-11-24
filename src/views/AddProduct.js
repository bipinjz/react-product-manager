
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


class AddProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      
        title: "",
        intRate: "",
        compRate: "",
        image: "http://bipinbajracharya.com/portfolio/react-product-manager-admin/files/2020/11/fixed-rate-home-loan-oo.jpg",
        desc: "",
        viewLink: "",
        applyLink:""
      
    };
  }  


  updateForm(e, type){
    
    if(type == "title"){
      this.setState({title: e.target.value})
    }
    if(type == "intRate"){
      this.setState({intRate: e.target.value})
    }
    if(type == "compRate"){
      this.setState({compRate: e.target.value})
    }
    if(type == "image"){
      this.setState({image: e.target.value})
    }
    if(type == "desc"){
      this.setState({desc: e.target.value})
    }
    if(type == "viewLink"){
      this.setState({viewLink: e.target.value})
    }
    if(type == "applyLink"){
      this.setState({applyLink: e.target.value})
    }

  }
  

  savePost(pTitle, intRate, compRate, image, viewLink,applyLink) {
    
    const token = this.props.userToken;

    const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token 
        },
        body: JSON.stringify({ title: pTitle, status : 'publish' , 
        fields : {
          comparison_rate : compRate, 
          interest_rate: intRate,
          image: image,
          view_link: viewLink,
          label_link: applyLink
        }  })
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

            window.alert("Added!");
            this.props.history.push('/admin/productsList')

            //this.setState({ postId: data.id })
        })
        .catch(error => {
           // this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
      }



  render() {

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
                            onChange : (event) => this.updateForm(event, "title")
                        }
                      ]}
                    />
                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Image</ControlLabel>
                          <select className="form-control" onChange={(event) => this.updateForm(event, "image")}>
                          <option value="http://bipinbajracharya.com/portfolio/react-product-manager-admin/files/2020/11/fixed-rate-home-loan-oo.jpg">Image 1</option>
                          <option value="http://bipinbajracharya.com/portfolio/react-product-manager-admin/files/2020/11/media-2046-personal-loan-summary-page.jpg">Image 2</option>
                          <option value="http://bipinbajracharya.com/portfolio/react-product-manager-admin/files/2020/10/loan.jpg">Image 3</option>
                        </select>
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormInputs
                      ncols={["col-md-6"]}
                      properties={[
                        {
                          label: "Interest Rate",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Enter Interest Rate",
                          defaultValue: "",
                          onChange : (event) => this.updateForm(event, "intRate")
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
                          onChange : (event) => this.updateForm(event, "compRate")
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
                            defaultValue="" onChange = {(event) => this.updateForm(event, "desc")}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                
                    <FormInputs
                      ncols={["col-md-6"]}
                      properties={[
                        
                        {
                          label: "Apply Link",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Enter Apply Link",
                          defaultValue: "",
                          onChange : (event) => this.updateForm(event, "applyLink")
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6"]}
                      properties={[
                        
                        {
                          label: "Learn More Link",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Enter Learn More",
                          defaultValue: "",
                          onChange : (event) => this.updateForm(event, "viewLink")
                        }
                      ]}
                    />
                    <Button bsStyle="info" onClick={() => this.savePost(
                      this.state.title, this.state.intRate, this.state.compRate,
                      this.state.image, this.state.viewLink, this.state.applyLink
                      
                      )} pullRight fill >
                      Add Product
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage={this.state.image}
                avatar=""
                name={this.state.title}
                userName=""
                description={
                  <span>
                    <span>Int Rate: {this.state.intRate} % p.a <br/></span>
                    <span>Comp Rate: {this.state.compRate} % p.a <br/></span>
                    <span>{this.state.desc}</span>
                    
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
