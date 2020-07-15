import React, { Component } from 'react';
import { getRSVPS } from '../Components/RSVP/api';
import ReactGoogleSheets from 'react-google-sheets';
import SpreadsheetIntegration from '../Components/RSVP/SaveToSpreadsheet/SpreadsheetIntegration';
import RawResponses from '../Components/RSVP/SaveToSpreadsheet/RawResponses';

class DataComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    const files = await getRSVPS();
    this.setState({
      files,
    })
  }
  render() {
    return (
      <div className="contentContainer">
        <RawResponses files={this.state.files && this.state.files.fileData} />
        {this.state.files && <SpreadsheetIntegration  files={this.state.files && this.state.files.fileData} />}
      </div>
    )
  }
}

export default ReactGoogleSheets.connect(DataComponent);
