
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
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Add Campaign"
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
                            ""
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

                    <FormInputs
                      ncols={["col-md-6"]}
                      properties={[
                        {
                          label: "Start Date",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "Enter Start Date",
                          defaultValue: ""
                        }
                      ]}
                    />

                  <FormInputs
                      ncols={["col-md-6"]}
                      properties={[
                        {
                          label: "End Date",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "Enter End Date",
                          defaultValue: ""
                        }
                      ]}
                    />

                    <Button bsStyle="info" pullRight fill type="submit">
                      Add Campaign
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

export default AddProduct;
