import React from "react";
import { api, handleError } from "../../helpers/api";
import { withRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import UserStatusEnum from "../shared/UserStatusEnum";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import SingleTournament from "../../views/SingleTournament";
import { Button } from "../../views/design/Button";
import { ButtonContainer } from "../../views/design/ButtonContainer";
import { TipTopTournamentLogo } from "../../views/design/TipTopTournamentLogo";
import { TournamentContainer } from "../../views/design/TournamentContainer";

class ManagerMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      tournaments: null,
    };
  }

  intervalID;

  logout() {
    try {
      const requestBodyStatus = JSON.stringify({
        userStatus: UserStatusEnum.OFFLINE,
        token: localStorage.getItem("token"),
      });
      api.put(
        `/managers/${localStorage.getItem("ManagerID")}`,
        requestBodyStatus
      );

      localStorage.removeItem("token");
      localStorage.removeItem("ManagerID");
      localStorage.removeItem("address");
      localStorage.removeItem("TournamentCode");
      this.props.history.push("/home");
    } catch (error) {
      alert(`Something went wrong during the logout: \n${handleError(error)}`);
    }
  }

  handleClick(tournamentCode) {
    localStorage.setItem("TournamentCode", tournamentCode);
    this.props.history.push(`/emanager/tournaments/${tournamentCode}/`);
  }
  goToCreate() {
    this.props.history.push(
      `/manager/createTournament/${localStorage.getItem("ManagerID")}`
    );
  }

  componentWillUnmount() {
    /*
         --> unmounting this component
         so it does not interfere with other components
        */
    clearTimeout(this.intervalID);
  }

  async getTournaments() {
    try {
      const managerID = this.props.match.params.managerID;
      const response = await api.get(`/managers/${managerID}/tournaments`);
      this.setState({ tournaments: response.data });
      this.intervalID = setTimeout(this.getTournaments.bind(this), 5000);
    } catch (error) {
      alert(
        `Something went wrong while fetching the tournaments: \n${handleError(error)}`
      );
    }
  }
  componentDidMount() {
    this.getTournaments();
    localStorage.removeItem("tournamentCode")
  }

  render() {
    return (
      <Container className="custom-container2">
        <Row>
          <Col />
          <Col>
            <TipTopTournamentLogo
              style={{ marginLeft: "50px", marginTop: "50px" }}
            />
            <h1 style={{ textAlign: "center", color: "#2F80ED" }}>
              TipTopTournament
            </h1>
          </Col>
          <Col />
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto" />
          <Col xs={12} sm={12} md={8}>
            {!this.state.tournaments || this.state.tournaments.length === 0 ? (
              <Form>
                <Form.Group>
                  <h3>My Tournaments: </h3>
                  <h3 style={{ marginTop: "50px" }}>
                    Hey, it looks empty! What about creating a new tournament?
                  </h3>
                  <ButtonContainer style={{ marginTop: "100px" }}>
                    <Button
                      width="100%"
                      onClick={() => {
                        this.goToCreate();
                      }}
                    >
                      Create a new tournament
                    </Button>
                  </ButtonContainer>
                  <ButtonContainer>
                    <Button
                      width="100%"
                      onClick={() => {
                        this.logout();
                      }}
                    >
                      Logout
                    </Button>
                  </ButtonContainer>
                </Form.Group>
              </Form>
            ) : (
              <Form>
                <Form.Group>
                  <h3>My Tournaments: </h3>
                  {this.state.tournaments.map((tournamentData) => {
                    return (
                      <TournamentContainer
                        onClick={() =>
                          this.handleClick(tournamentData.tournamentCode)
                        }
                      >
                        <SingleTournament tournamentData={tournamentData} />
                      </TournamentContainer>
                    );
                  })}
                  <ButtonContainer style={{ marginTop: "30px" }}>
                    <Button
                      width="100%"
                      onClick={() => {
                        this.goToCreate();
                      }}
                    >
                      Create a new tournament
                    </Button>
                  </ButtonContainer>
                  <ButtonContainer>
                    <Button
                      width="100%"
                      onClick={() => {
                        this.logout();
                      }}
                    >
                      Logout
                    </Button>
                  </ButtonContainer>
                </Form.Group>
              </Form>
            )}
          </Col>
          <Col md="auto" />
        </Row>
      </Container>
    );
  }
}

export default withRouter(ManagerMenu);
