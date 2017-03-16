import React from "react";
import {PageHeader} from "rebass";
//TODO Add images from portfolio

export default class Photography extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PageHeader
          my={1}
          heading='Photography'
          description='' />
      </div>
    );
  }
}