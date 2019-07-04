import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "../card/Card";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { batchDataList } from "../../data/batch/BatchData";

const styles = theme => ({
  pageHeader: {
    fontSize: "1.5rem",
    margin: "0 0 30px 0",
    color: "#999"
  },
  tableWrapper: {
    margin: "30px 0"
  }
});

class Batch extends React.Component {
  state = {
    batchArr: [],
    fileSelected: false,
    loading: false,
    isError: false,
  };

  handleFileSelect = event => {
    let fileObj = event.target.files,
      file;
    if (!fileObj || fileObj.length == 0) return;
    file = fileObj[0];
    console.log("file", file)
    if (file && file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      this.setState({ fileSelected: true, loading: true, isError:false });
      let _this = this;
      setTimeout(function() {
        _this.setState({ batchArr: batchDataList }, () => {
          _this.setState({ loading: false });
        });
      }, 2000 * batchDataList.length);
    }else{
      this.setState({isError:true})
    }
  };

  render() {
    const { classes } = this.props;
    const { batchArr, loading, fileSelected, isError } = this.state;
    return (
      <React.Fragment>
        <Typography variant="h2" className={classes.pageHeader}>
          Batch Request
        </Typography>
        <TextField
          id="batch-file"
          error={isError}
          type="file"
          label="File"
          helperText={isError?'File type not supported only xlsx files are supported':''}
          onChange={this.handleFileSelect}
        />
        {fileSelected ? (
          <div className={classes.tableWrapper}>
            <Card title="Credit Score Report">
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>National IDs</TableCell>
                    <TableCell align="center">Score</TableCell>
                    <TableCell align="center">Subscriber Active</TableCell>
                    <TableCell align="center">Subscriber Type</TableCell>
                    <TableCell align="center">Average Revenue</TableCell>
                    <TableCell align="center">Socio Economic Status</TableCell>
                    <TableCell align="center">Manufacturer</TableCell>
                    <TableCell align="center">Model</TableCell>
                    <TableCell align="center">Handset Type</TableCell>
                    <TableCell align="center">Valid IMEI</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      {" "}
                      <TableCell align="center" colspan={9}>
                        Calculating credit score for uploaded data please
                        wait ....
                      </TableCell>
                    </TableRow>
                  ) : (
                    <React.Fragment>
                      {batchArr.map(row => (
                        <TableRow key={row.id}>
                          <TableCell component="th" scope="row" align="center">
                            {row.nationalId}
                          </TableCell>
                          <TableCell align="center">{row.score}</TableCell>
                          <TableCell align="center">{row.subActive}</TableCell>
                          <TableCell align="center">{row.subType}</TableCell>
                          <TableCell align="center">
                            {row.subAvgRevenue}
                          </TableCell>
                          <TableCell align="center">
                            {row.subSocioStatus}
                          </TableCell>
                          <TableCell align="center">
                            {row.Manufacturer}
                          </TableCell>
                          <TableCell align="center">
                            {row.handsetModel}
                          </TableCell>
                          <TableCell align="center">{row.handsetType}</TableCell>
                          <TableCell align="center">{row.validIMEI}</TableCell>
                        </TableRow>
                      ))}
                    </React.Fragment>
                  )}
                </TableBody>
              </Table>
            </Card>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

Batch.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Batch);
