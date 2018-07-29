import * as React from 'react';
import './styles.scss';

export class Streams extends React.Component {
  public render() {
    if (!this.props.children) {
      return null;
    }

    return (
      <div className="streamers">
        {this.props.children}
      </div>
    );
  }
}
