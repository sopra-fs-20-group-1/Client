import React from "react";
import { withRouter } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Table from 'react-bootstrap/Table'
import { api } from "../../helpers/api";

class PlayerProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      stats:null
    };
  }

  renderPlayerStats(){
    return(
      <tr>
        <td>{this.state.stats.wins}</td>
        <td>{this.state.stats.loses}</td>
        <td>{this.state.stats.matches}</td>
      </tr>
    )
  }

  async componentDidMount(){
    const playerID = this.props.match.params.playerID;
    const stats = await api.get(`/participants/${playerID}/statistics`)
    this.setState({stats: stats});
  }

  render() {
  return (
    <Container>
      <Row>
        <Col/>
        <Col>
          <div>
            <Table bordered hover size="sm">
              <thead>
                <tr>
                  <th>Wins</th>
                  <th>Loses</th>
                  <th>Matches</th>
                </tr>
              </thead>
              <tbody>
                {this.renderPlayerStats}
              </tbody>
            </Table>
          </div>
        </Col>
        <Col/>
      </Row>
    </Container>
  );
  }
}

export default withRouter(PlayerProfile);
