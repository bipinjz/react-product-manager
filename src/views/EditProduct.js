
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel
} from "react-bootstrap";

import { Card } from "components/Card/Card.js";
import { FormInputs } from "components/FormInputs/FormInputs.js";
import { UserCard } from "components/UserCard/UserCard.js";
import Button from "components/CustomButton/CustomButton.js";
import parse from 'html-react-parser';

//import image from "assets/img/loan.jpg";

class EditProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      
        title: "",
        intRate: "",
        compRate: "",
        image:"",
        desc:"",
        viewLink: "",
        applyLink:""
    };
  }  

  componentDidMount() {
     this.getProducts();
  }


  updateForm(e, type){

    console.log(type);
    
    if(type !== ""){
      this.setState({[type]: e.target.value})
    }
  }
  

  getProducts = () => {

    const id = this.props.location.state.id;

    fetch("https://bipinbajracharya.com/portfolio/react-product-manager-admin/wp-json/wp/v2/posts/"+id)
      .then(res => res.json())
      .then(
        (result) => {


          this.setState({
            isLoaded: true,
            title: result.title.rendered,
            desc: result.content.rendered,
            intRate: result.acf.interest_rate,
            compRate: result.acf.comparison_rate,
            image: result.acf.image,
            viewLink: result.acf.view_link,
            applyLink: result.acf.label_link
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



  savePost(pTitle, intRate, compRate, image, viewLink,applyLink) {
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
        body: JSON.stringify({ title: pTitle, status : 'publish' , 
        fields : {
          comparison_rate : compRate, 
          interest_rate: intRate,
          image: image,
          view_link: viewLink,
          label_link: applyLink
        }  })
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
                          placeholder: "",
                          defaultValue: this.state.intRate,
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
                          placeholder: "",
                          defaultValue: this.state.compRate,
                          onChange : (event) => this.updateForm(event, "compRate")
                        }
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Description</ControlLabel>
                          <textarea id="noter-text-area" className="form-control" rows="5" name="textarea" 
                          onChange={(event) => this.updateForm(event, "desc")} 
                          value={this.state.desc} />
          
                        </FormGroup>
                       
                      </Col>
                    </Row>

                   
                    <FormInputs 
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Apply Link",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue:
                            this.state.applyLink,
                            onChange : (event) => this.updateForm(event, "applyLink")
                        }
                      ]}
                    />

<FormInputs 
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "View Link",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue:
                            this.state.viewLink,
                            onChange : (event) => this.updateForm(event, "viewLink")
                        }
                      ]}
                    />
                    <Button bsStyle="info" onClick={() => this.savePost(
                      this.state.title, this.state.intRate, this.state.compRate,
                      this.state.image, this.state.viewLink, this.state.applyLink
                      )} pullRight fill >
                      Save Product
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
                    {parse(this.state.desc)}<br/>
                    Int: {this.state.intRate} <br/>
                  Comp: {this.state.compRate} <br/>
                  </span>
                  
                }
                socials={
                  <div>
                    <a href={this.state.viewLink}  target="_blank" rel="noopener noreferrer">
                      View Details
                    </a> &nbsp; &nbsp;
                    <a href={this.state.applyLink} target="_blank" rel="noopener noreferrer">
                      Apply
                    </a>
                    
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
