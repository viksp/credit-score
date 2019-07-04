import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Card from "../card/Card";
import Typography from "@material-ui/core/Typography";
import { SingleScoreDataSet } from "../../data/single/SingleScoreData";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    flexBasis: 200
  },
  button: {
    margin: "15px"
  },
  pageHeader: {
    fontSize: "1.5rem",
    margin: "0 0 30px 0",
    color: "#999"
  },
  overview: {
    padding: "40px 0"
  },
  overviewHeader: {
    fontSize: "1.5rem",
    color: "#333",
    margin: "30px 0"
  },
  chartWrapper: {
    width: "400px",
    height: "350px"
  },
  barChartWrapper: {
    width: "500px",
    height: "350px"
  },
  myScore: {
    position: "absolute",
    marginLeft: "126px",
    marginTop: "132px",
    fontSize: "20px",
    width: "116px",
    textAlign: "center"
  },
  subWrapper: {
    borderLeft: "1px solid rgba(0,0,0,.125)",
    padding: "0 20px"
  },
  profileFields: {
    height: "50px",
    textAlign:"center",
    marginTop:"8px",
  },
  avatar: {
    width: 70,
    height: 70
  },
  fieldLabel: {
    color: "#999",
    fontSize: "16px",
    fontWeight: 300
  },
  fieldValue: {
    color: "#000",
    fontSize: "16px",
    fontWeight: 300
  },
  section: {
    margin: "20px 10px"
  },
  userSection: {
    margin: "80px 55px",
    width: "100%",
  },
  userLabel:{
    color: "#999",
    fontSize: "16px",
    fontWeight: 300
  },
  userValue: {
    color: "#000",
    fontSize: "16px",
    fontWeight: 300,
    position: "absolute",
    marginTop: "-20px",
  },
  userInfo: {
    position:"relative",
  }
});

class SingleScore extends React.Component {
  state = {
    nationalId: "",
    phone: "",
    isValid: false
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleSubmit = () => {
    const { nationalId, phone } = this.state;
    if (nationalId && phone) {
      this.setState({ isValid: true });
    }
  };

  generateScoreCard() {
    const { classes } = this.props;
    return (
      <div className={classes.chartWrapper}>
        <div className={classes.myScore}>
          {" "}
          User Score {SingleScoreDataSet.creditscore}
        </div>
        <ResponsivePie
          data={SingleScoreDataSet.scoreBucket}
          margin={{ top: 40, right: 80, bottom: 80, left: 50 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={{ scheme: "yellow_green" }}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          radialLabelsSkipAngle={5}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#333333"
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={16}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor={{ from: "color" }}
          slicesLabelsSkipAngle={5}
          slicesLabelsTextColor="#333333"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          enableSlicesLabels={false}
          isInteractive={false}
        />
      </div>
    );
  }

  generateSubscriberProfile() {
    const { classes } = this.props;
    const { phone } = this.state;
    return (
      <div>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <div className={classes.userSection}>
            <FontAwesomeIcon icon={faUserTie} size="6x" />
           <div className={classes.userInfo}>
             <p className={classes.userLabel}>John Doe</p>
             <p className={classes.userValue}>{phone}</p>
           </div>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className={classes.subWrapper}>
              <div className={classes.profileFields}>
                <div className={classes.fieldLabel}>Active</div>
                <div className={classes.fieldValue}>
                  {SingleScoreDataSet.subscriberProfile.active}
                </div>
              </div>
              <Divider />
              <div className={classes.profileFields}>
                <div className={classes.fieldLabel}>Subscription Type</div>
                <div className={classes.fieldValue}>
                  {SingleScoreDataSet.subscriberProfile.type}
                </div>
              </div>
              <Divider />
              <div className={classes.profileFields}>
                <div className={classes.fieldLabel}>Tenure(days)</div>
                <div className={classes.fieldValue}>
                  {SingleScoreDataSet.subscriberProfile.tenure}
                </div>
              </div>
              <Divider />
              <div className={classes.profileFields}>
                <div className={classes.fieldLabel}>
                  Average Revenue per user
                </div>
                <div className={classes.fieldValue}>
                  {SingleScoreDataSet.subscriberProfile.avgRevenue}
                </div>
              </div>
              <Divider />
              <div className={classes.profileFields}>
                <div className={classes.fieldLabel}>Socio Economic status</div>
                <div className={classes.fieldValue}>
                  {SingleScoreDataSet.subscriberProfile.socioStatus}
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }

  generateHandsetProfile() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={8}>
          <Grid item xs={4}>
          <div className={classes.userSection}>
          <FontAwesomeIcon icon={faMobileAlt} size="6x" />
            <div className={classes.userInfo}>
              <p className={classes.userLabel}> {SingleScoreDataSet.handsetProfile.model}</p>
              <p className={classes.userValue}>
                {SingleScoreDataSet.handsetProfile.imeiNumber}
              </p>
            </div>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className={classes.subWrapper}>
              <div className={classes.profileFields}>
                <div className={classes.fieldLabel}>Handset Type</div>
                <div className={classes.fieldValue}>
                  {SingleScoreDataSet.handsetProfile.type}
                </div>
              </div>
              <Divider />
              <div className={classes.profileFields}>
                <div className={classes.fieldLabel}>Handset Age</div>
                <div className={classes.fieldValue}>
                  {SingleScoreDataSet.handsetProfile.age}
                </div>
              </div>
              <Divider />
              <div className={classes.profileFields}>
                <div className={classes.fieldLabel}>Network Technology</div>
                <div className={classes.fieldValue}>
                  {SingleScoreDataSet.handsetProfile.technology}
                </div>
              </div>
              <Divider />
              <div className={classes.profileFields}>
                <div className={classes.fieldLabel}>Multi SIM Card</div>
                <div className={classes.fieldValue}>
                  {SingleScoreDataSet.handsetProfile.multiSim}
                </div>
              </div>
              <Divider />
              <div className={classes.profileFields}>
                <div className={classes.fieldLabel}>Handset Manufacturer</div>
                <div className={classes.fieldValue}>
                  {SingleScoreDataSet.handsetProfile.manufacturer}
                </div>
              </div>
              <Divider />
              <div className={classes.profileFields}>
                <div className={classes.fieldLabel}>Handset Model</div>
                <div className={classes.fieldValue}>
                  {SingleScoreDataSet.handsetProfile.model}
                </div>
              </div>
              <Divider />
              <div className={classes.profileFields}>
                <div className={classes.fieldLabel}>Valid IMEI</div>
                <div className={classes.fieldValue}>
                  {SingleScoreDataSet.handsetProfile.validimei}
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }

  generateScoreHistory() {
    const { classes } = this.props;
    return (
      <div className={classes.barChartWrapper}>
        <ResponsiveBar
          data={SingleScoreDataSet.scoreHistory}
          keys={[
            "novScore",
            "decScore",
            "janScore",
            "febScore",
            "marScore",
            "aprScore",
            "mayScore"
          ]}
          indexBy="month"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.2}
          groupMode="grouped"
          colors={{ scheme: "yellow_green" }}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "month",
            legendPosition: "middle",
            legendOffset: 32
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "score",
            legendPosition: "middle",
            legendOffset: -40
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    const { nationalId, phone, isValid } = this.state;

    return (
      <React.Fragment>
        <Typography variant="h2" className={classes.pageHeader}>
          Individual Request
        </Typography>
        <Grid container spacing={8}>
          <Grid item xs={5}>
            <TextField
              id="outlined-nationalId"
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
              label="National Id"
              type="number"
              value={nationalId}
              fullWidth
              onChange={this.handleChange("nationalId")}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              id="outlined-phone"
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
              label="Phone Number"
              value={phone}
              type="number"
              fullWidth
              onChange={this.handleChange("phone")}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>

        {isValid ? (
          <div className={classes.overview}>
            <Divider />
            <Typography variant="h4" className={classes.overviewHeader}>
              Score Overview
            </Typography>
            <Grid container spacing={24}>
              <Grid item xs={5} className={classes.section}>
                <Card title="Score Card">
                  {isValid ? this.generateScoreCard() : null}
                </Card>
              </Grid>
              <Grid item xs={6} className={classes.section}>
                <Card title="Score History">
                  {isValid ? this.generateScoreHistory() : null}
                </Card>
              </Grid>
              <Grid item xs={6} className={classes.section}>
                <Card title="Subscriber Profile">
                  {isValid ? this.generateSubscriberProfile() : null}
                </Card>
              </Grid>
              <Grid item xs={5} className={classes.section}>
                <Card title="Handset profile">
                  {isValid ? this.generateHandsetProfile() : null}
                </Card>
              </Grid>
            </Grid>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

SingleScore.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SingleScore);
