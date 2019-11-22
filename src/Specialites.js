import React from "react";
import PageTopImage from "./parts/PageTopImage";
import certificateIcon from "./images/certificate2.png";
import rickRoll from "./rick-roll.mp3";
import loadingIcon from "./images/loading.gif";
import refreshIcon from "./images/refresh.svg";
import EmptySpacer from "./parts/EmptySpacer";

class Specialite extends React.Component {
  constructor() {
    super();
    this.endpoint =
      "https://api.giphy.com/v1/gifs/random?tag=bike+stunt&api_key=lFu1aiCbnpR2Q3Wcp3baBf7fpO80K9fQ";
    this.state = { gif: null, funToggle: false, loading: false };

    this.content = {
      specialite: [
        `Aenean in elementum nisi. Etiam at ante semper, malesuada nulla eu, tincidunt nunc. Vestibulum sit amet tellus malesuada velit porttitor pharetra quis vitae felis. Cras ornare eros leo, accumsan interdum arcu auctor ac. Suspendisse sit amet sollicitudin sapien. Quisque pretium metus vitae elit viverra bibendum. Duis finibus iaculis tellus, id rhoncus urna porttitor ut. Fusce diam leo, mollis vel ultricies ut, mollis sed nisi. Etiam varius scelerisque leo ut imperdiet.`,
        `Aenean sagittis, purus vitae tristique condimentum, sem ligula dictum eros, faucibus vehicula elit risus a neque. Mauris ac mauris id quam luctus rutrum. Fusce finibus urna id est viverra feugiat. Pellentesque dapibus rutrum ligula in bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ac libero nec mi commodo volutpat. Quisque molestie fermentum eleifend. Sed cursus elit vitae luctus tristique. Phasellus ipsum nunc, ullamcorper et purus vitae, placerat viverra libero. Suspendisse eget nibh a lacus vehicula tempus.`
      ]
    };

    this.getNewGif = this.getNewGif.bind(this);
    this.funToggle = this.funToggle.bind(this);
  }

  async componentDidMount() {
    await this.getNewGif();
  }

  async getNewGif() {
    this.setState({ ...this.state, loading: true });
    const response = await fetch(this.endpoint);
    const body = await response.json();
    const gif = body.data.images.downsized_medium.url;
    this.setState({ ...this.state, gif, loading: false });
  }

  funToggle() {
    this.setState({ ...this.state, funToggle: !this.state.funToggle });
  }

  render() {
    const fun = (
      <div>
        <div className="text-center">
          <LoadingAnimation
            onClick={this.getNewGif}
            isLoading={this.state.loading}
            height="75"
          />
        </div>

        <div className="text-center">
          <img
            src={this.state.gif}
            onClick={this.getNewGif}
            alt=""
            style={{ cursor: "pointer" }}
          />
          <figure>
            <audio controls autoPlay loop src={rickRoll}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </figure>
        </div>
      </div>
    );

    const specialite = (
      <div>
        <PageTopImage src={certificateIcon} />
        <h3>Specialite</h3>
        <hr />
        {this.content.specialite.map((paragraph, i) => {
          return <p key={i}>{paragraph}</p>;
        })}
        <EmptySpacer />
      </div>
    );

    const content = this.state.funToggle ? fun : specialite;
    return (
      <div className="container quick-fadein">
        <div className="row">
          <input
            type="checkbox"
            value={this.state.funToggle}
            onChange={this.funToggle}
          ></input>
        </div>
        {content}
      </div>
    );
  }
}

class LoadingAnimation extends React.Component {
  render() {
    return this.props.isLoading ? (
      <img
        src={loadingIcon}
        alt="Loading..."
		style={{ height: `${this.props.height}px` }}
		onClick={this.props.onClick}
      />
    ) : (
      <img
        src={refreshIcon}
        alt="Refresh"
		style={{ height: `${this.props.height}px` }}
		onClick={this.props.onClick}
      />
    );
  }
}

export default Specialite;
