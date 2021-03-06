import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "../../views/design/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Label } from "../../views/design/Label";
import { InputField } from "../../views/design/InputField";
import { ButtonContainer } from "../../views/design/ButtonContainer";
import { api, handleError } from "../../helpers/api";
import UserStatusEnum from "../shared/UserStatusEnum";
import Header from "../../views/Header";

class TournamentCode extends React.Component {
  constructor() {
    super();
    this.state = {
      displayCode: "",
      tournamentCode: "",
      personalInfo: {
        vorname: null,
        nachname: null,
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  logout() {
    try {
      const requestBodyStatus = JSON.stringify({
        userStatus: UserStatusEnum.OFFLINE,
        token: localStorage.getItem("token"),
      });
      api.put(
        `/participants/${localStorage.getItem("ParticipantID")}`,
        requestBodyStatus
      );

      localStorage.removeItem("token");
      localStorage.removeItem("ParticipantID");
      localStorage.removeItem("TournamentCode");
      this.props.history.push("/home");
    } catch (error) {
      alert(`Something went wrong during the logout: \n${handleError(error)}`);
    }
  }

  async join() {
    try {
      const requestBody = JSON.stringify({
        tournamentCode: this.state.tournamentCode,
        participantID: this.state.participantID,
      });
      await api.put(
        `/tournaments/${this.state.tournamentCode}/${localStorage.getItem(
          "ParticipantID"
        )}`,
        requestBody
      );
      localStorage.setItem("TournamentCode", this.state.TournamentCode);
      this.props.history.push(
        `/participant/${this.state.tournamentCode}/participantMenu`
      );
    } catch (error) {
      alert(
        `Something went wrong during the check-in with your tournamentCode: \n${handleError(
          error
        )}`
      );
    }
  }

  mask(e) {
    let tmpCode = "";
    tmpCode += e.target.value.toString();

    if (this.checkInputOnlyDigits(tmpCode)) {
      if (tmpCode.length < 4) {
        return tmpCode;
      }
      switch (tmpCode.length) {
        case 4:
          return tmpCode.replace(/^(\d{4}).*/, "$1-");
        case 5:
          return tmpCode.replace(/^(\d{4})(\d).*/, "$1-$2");
        case 6:
          return tmpCode.replace(/^(\d{4})(\d{2}).*/, "$1-$2");
        case 7:
          return tmpCode.replace(/^(\d{4})(\d{3}).*/, "$1-$2");
        case 8:
          return tmpCode.replace(/^(\d{4})(\d{4}).*/, "$1-$2");
        case 9:
          return tmpCode.replace(/^(\d{4})(\d{4}).*/, "$1-$2");
        default:
          alert("The tournament code must be 8 digits!");
          return tmpCode.substring(0, tmpCode.length - 1);
      }
    } else {
      return "";
    }
  }

  checkInputOnlyDigits(input) {
    let digits = new RegExp("^[0-9]+$");
    if (digits.test(input) || input.includes("-")) {
      return true;
    } else {
      alert("The tournament code can only contain digits");
      return false;
    }
  }

  handleInputChange(key, value) {
    this.setState({ [key]: value });
    // Also sets the original code with dash
    if (value !== "") {
      this.setState({ tournamentCode: value.replace("-", "") || "" });
    }
  }

  async componentDidMount() {
    try {
      const response = await api.get(
        `/participants/${localStorage.getItem("ParticipantID")}`
      );
      this.setState({ personalInfo: response.data });
    } catch (error) {
      alert(`Something went wrong fetching your data: \n${handleError(error)}`);
    }
  }

  render() {
    return (
      <Container className="custom-container2">
        <Row className="justify-content-md-center">
          <Col md="auto" />
          <Col xs={12} sm={12} md={8}>
            <Header />
            <Form
              style={{ margin: "auto", textAlign: "center", marginTop: "50px" }}
            >
              <Form.Group>
                <h5 style={{ color: "#2F80ED", marginBottom: "50px" }}>
                  "Insert the code that was given to you by the Manager to join
                  a tournament"
                </h5>
                <Label>TournamentCode: </Label>
                <InputField
                  placeholder="(e.g. 1234-4567)"
                  maxlength="10"
                  value={this.state.displayCode || ""}
                  onChange={(e) => {
                    this.handleInputChange("displayCode", this.mask(e));
                  }}
                />
              </Form.Group>

              <ButtonContainer>
                <Button
                  type="button"
                  disabled={!this.state.displayCode}
                  width="70%"
                  onClick={() => {
                    this.join();
                  }}
                >
                  Join
                </Button>
              </ButtonContainer>
              <ButtonContainer>
                <Button
                  type="button"
                  width="70%"
                  onClick={() => {
                    this.logout();
                  }}
                >
                  Logout
                </Button>
              </ButtonContainer>
            </Form>
          </Col>
          <Col md="auto" />
        </Row>
      </Container>
    );
  }
}

/**
 * You can get access to the history object's properties via the withRouter.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 */
export default withRouter(TournamentCode);
