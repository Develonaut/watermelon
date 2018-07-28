import * as React from 'react';
import './styles.scss';

export interface PublicProps {
    fullWidth?: boolean;
    fullHeight?: boolean;
    hidden?: boolean;
}

type Props = PublicProps;

export class Placeholder extends React.Component<Props> {
  public render() {
    let className = 'placeholder';
    if (this.props.fullHeight) {
        className += ' placeholder--fullHeight';
    }

    if (this.props.fullWidth) {
        className += ' placeholder--fullWidth';
    }

    if (this.props.hidden) {
        className += ' placeholder--hidden';
    }

    return (
      <div className={className} />
    );
  }
}
