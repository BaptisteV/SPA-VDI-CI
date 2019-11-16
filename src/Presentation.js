import React from "react";
import EmptySpacer from "./parts/EmptySpacer";
import PageTopImage from "./parts/PageTopImage";
import portraitImage from "./images/portrait-moto.jpg";
import externalLinkIcon from "./images/external-link-icon-small.png";
import "./css/presentation.css";

class Presentation extends React.Component {
  constructor() {
    super();
    this.content = {
      presentation: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu nunc, molestie sit amet velit sit amet, tempus tincidunt leo. Morbi sit amet ullamcorper felis. Pellentesque sollicitudin lorem vel semper ultrices. Donec id erat eu nibh mattis aliquet. Morbi ut auctor eros.`,
        `Nullam varius justo eget odio tempor placerat. Vivamus nulla velit, congue ut nibh et, luctus ullamcorper augue. Vestibulum finibus, diam ac venenatis blandit, nibh metus consectetur felis, ut mollis lorem ex suscipit augue. Praesent fringilla eu orci vitae hendrerit. Maecenas finibus in erat sed gravida. Vivamus molestie lorem dui, tincidunt molestie turpis condimentum aliquet. Praesent sollicitudin non lectus ut euismod. Proin feugiat neque eu enim molestie venenatis. Fusce varius laoreet quam, a maximus eros`
      ],
      disagnostics: [
        {
          title: `Diagnostic de performance énergétique`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
        },
        {
          title: `Constat de risque d'exposition au plomb`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla velit, congue ut nibh et, luctus ullamcorper augue.`
        },
        {
          title: `État d'amiante`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
        },
        {
          title: `État relatif à la présence de termites`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
        },
        {
          title: `État de l'installation intérieure de gaz`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
        },
        {
          title: `État de l'installation intérieure d'électricité`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu nunc, molestie sit amet velit sit amet, tempus tincidunt leo. Maecenas finibus in erat sed gravida. Vivamus molestie lorem dui, tincidunt molestie turpis condimentum aliquet. Praesent sollicitudin non lectus ut euismod. Proin feugiat neque eu enim molestie venenatis. Fusce varius laoreet quam, a maximus eros.`
        },
        {
          title: `État de l'installation d'assainissement non collectif`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
        },
        {
          title: `État des servitudes "risques" et d'information sur les sols`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
        }
      ],
      links: [
        {
          display: `Institut national de la consommation: Tout savoir sur les diagnostics immobiliers`,
          link: `https://www.inc-conso.fr/content/logement/tout-savoir-sur-les-diagnostics-immobiliers`
        },
        {
          display: `Quels sont les diagnostics immobiliers à fournir en cas de vente ?`,
          link: `https://www.service-public.fr/particuliers/vosdroits/F10798`
        },
        {
          display: `Quels sont les diagnostics immobiliers à fournir en cas de location ?`,
          link: `https://www.service-public.fr/particuliers/vosdroits/F33463`
        }
      ]
    };
  }
  render() {
    return (
      <div className="container quick-fadein">
        <PageTopImage src={portraitImage} alt="Portrait" />
        <div className="row">
          <div className="col">
            <h3>Présentation</h3>
            <hr />
            {this.content.presentation.map((paragraph, i) => {
              return <p key={i}>{paragraph}</p>;
            })}
          </div>
        </div>
        <EmptySpacer />
        <h3>Diagnostics</h3>
        <hr />
        <div className="row">
          <ul className="list-group">
            {this.content.disagnostics.map((diag, i) => {
              return (
                <ol key={i}>
                  <h5>{diag.title}</h5>
                  <p>{diag.text}</p>
				  <EmptySpacer />
                </ol>
              );
            })}
          </ul>
        </div>
        <EmptySpacer />
        <h3>Liens utiles</h3>
        <hr />
        <div className="row">
          <ul className="list-group col">
            {this.content.links.map((linksItem, i) => {
              return (
                <li className="list-group-item" key={i}>
                  <a
                    href={linksItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {linksItem.display}
                    <span className="external-link-icon">
                      <img alt="External link icon" src={externalLinkIcon} />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <EmptySpacer />
      </div>
    );
  }
}

export default Presentation;
