import * as React from 'react';
import './styles.scss';

import { Placeholder } from 'src/components/Placeholder';

interface PublicProps {
  streamerName: string;
  focused?: boolean;
}

export interface State {
  loaded: boolean;
}

type Props = PublicProps;

export class Stream extends React.Component<Props, State> {
  public state = {
    loaded: false,
  };

  public render() {
    const frameClassModifier = this.state.loaded ? 'shown' : 'hidden';
    const streamClassModifier = this.props.focused ? 'focused' : 'default';
    return (
      <div className={`stream stream--${streamClassModifier}`}>
        <Placeholder fullWidth fullHeight hidden={this.state.loaded} />
        <div className="stream__container">
          <iframe
              className={`stream__frame stream__frame--${frameClassModifier}`}
              onLoad={this.handleOnLoad}
              src={`//player.twitch.tv/?channel=${this.props.streamerName}&muted=true`}
              height="100%"
              width="100%"
              scrolling="no"
          />
        </div>
      </div>
    );
  }

  private handleOnLoad = () => {
    this.setState({ loaded: true });
  }
}
