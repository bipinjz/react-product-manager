
import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.js";
import { StatsCard } from "components/StatsCard/StatsCard.js";
import { Link } from 'react-router-dom';


import {
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.js";

class Dashboard extends Component {

  constructor(props){
    super(props)
    this.state = {
      productsCount:"",
      products:[]
    }
  }

  componentDidMount(){
    this.getProducts();
  }

  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  getProducts = () => {
    fetch("https://bipinbajracharya.com/portfolio/react-product-manager-admin/wp-json/wp/v2/posts/")
      .then(res => res.json())
      .then(
        (result) => {

          console.log(result);

          this.setState({
            isLoaded: true,
            productsCount: result.length,
            products: result
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

  getProductList(){
    
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-list text-info" />}
                statsText="Products"
                statsValue={this.state.productsCount}
                statsIcon={<i className="fa fa-chevron-right" />}
                statsIconText={<Link to="/admin/productsList">Manage All Products</Link>}
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-loop text-warning" />}
                statsText="Campaigns"
                statsValue="3"
                statsIcon={<i className="fa fa-chevron-right" />}
                statsIconText={<Link to="/admin/campaignList">Manage All Compaigns</Link>}
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-check-circle text-success" />}
                statsText="Completed "
                statsValue="2"
                statsIcon={<i className="fa fa-chevron-right" />}
                statsIconText="Details "
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-calendar-check-o text-danger" />}
                statsText="Scheduled"
                statsValue="1"
                statsIcon={<i className="fa fa-chevron-right" />}
                statsIconText="Details "
              />
            </Col>
            
          </Row>
          <Row>
          <Col md={4}>
              <Card
                title="Products"
                category=""
                stats="Updated 1 sec ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table"><tbody>
                      {this.state.products.map((item) => {
                        return(
                        <tr key={item.id}><td>{item.title.rendered}</td></tr>
                        )
                        
                      })}</tbody>
                    </table>
                  </div>
                }
              />
            </Col>
            <Col md={8}>
              <Card
                id="chartActivity"
                title="Visits"
                category=""
                stats=""
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />
            </Col>

            
          </Row>

        </Grid>
      </div>
    );
  }
}

export default Dashboard;
