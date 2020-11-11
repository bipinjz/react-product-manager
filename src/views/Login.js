
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

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false
      
    };
  }  

  
  login() {
    // POST request using fetch with error handling


    const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        }
    };
    fetch('http://bipinbajracharya.com/portfolio/react-product-manager-admin/wp-json/jwt-auth/v1/token?username=reacteditor&password=kErwI8At5%A)YsrAkCMxi!!p', requestOptions)
        .then(async response => {
            const data = await response.json();

            console.log(data)
            this.props.getToken(data);

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
       
        })
        .catch(error => {
           // this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
      }



  render() {

    console.log(this.state);

    console.log("fff",this.props);

    return (
      <div >
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Login"
                content={
                  <form>
                    
                                        <FormInputs 
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Username",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Enter Username",
                          defaultValue:
                            "reacteditor"
                            
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6"]}
                      properties={[
                        {
                          label: "Password",
                          type: "password",
                          bsClass: "form-control",
                          placeholder: "Enter password",
                          defaultValue: "************",
                          
                        }
                      ]}
                    />

                  

                    <Button bsStyle="info" onClick={() => this.login()} pullRight fill >
                      Login
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Login;
