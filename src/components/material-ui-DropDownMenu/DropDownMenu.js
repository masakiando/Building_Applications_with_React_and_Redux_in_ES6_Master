import React, {PropTypes} from 'react';
import * as Blueprint from "@blueprintjs/core";

class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="docs-card-example">
        <div className="pt-card pt-elevation-0 pt-interactive">
          <h5><a href="#">Trader Profile</a></h5>
          <p>Overview of employee activity, including risk model, scores and scenario alert history.</p>
        </div>
        <div className="pt-card pt-elevation-1 pt-interactive">
          <h5><a href="#">Desk Profile</a></h5>
          <p>Desk-level summary of trading activity and trading profiles.</p>
        </div>
        <div className="pt-card pt-elevation-2 pt-interactive">
          <h5><a href="#">Dataset Dashboards</a></h5>
          <p>Stats of dataset completeness and reference data join percentages.</p>
        </div>
      </div>
    );
  }
}

export default DropDownMenu;
