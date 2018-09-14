import React from "react";
import { Link } from "react-router-dom";
import Page from "../hoc/page";
import Logger from "../components/Logger";
const HomePage = props => {
  return (
    <div className="ui three column grid">
      <div className="stretched row">
        <div className="column">
          <div className="ui segment">
            <div className="ui items">
              <div className="item">
                <div className="ui tiny image">
                  <i aria-hidden="true" className="wpforms icon huge blue circular" />
                </div>
                <div className="content">
                  <div className="header">Formulaires :</div>
                  <div className="meta">
                    <span className="price">En cours de dév</span>
                  </div>
                  <div className="description">
                    <p>
                      Des composants basiques de formulaires ainsi qu'un module agnostique permettant de contrôler et de
                      valider un formulaire. Ce module peut égalment s'interfacer avec un state de type redux ou mobx...
                    </p>
                    <Link to={`/forms`}>
                      <button className="ui primary button">Découvrir</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="ui segment">
            <div className="ui items">
              <div className="item">
                <div className="ui tiny image">
                  <i aria-hidden="true" className="paint brush icon huge orange circular" />
                </div>
                <div className="content">
                  <div className="header">Dessin :</div>
                  <div className="meta">
                    <span className="price">En cours de dév</span>
                  </div>
                  <div className="description">
                    <p className="desc">
                      Un composant permettant de dessiner, d'éditer du texte et de le sauvegarder en type image. Il est
                      également possible de surcharger par un dessin une image ainsi que d'appliquer des filtres. Ce
                      composant focntionne également en mobile.
                    </p>
                    <Link to={`/draw`}>
                      <button className="ui primary button">Découvrir</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="ui segment">
            {" "}
            <div className="ui items">
              <div className="ui items">
                <div className="item">
                  <div className="ui tiny image">
                    <i aria-hidden="true" className="upload icon huge green circular" />
                  </div>
                  <div className="content">
                    <div className="header">Upload :</div>
                    <div className="meta">
                      <span className="price">En cours de dév</span>
                    </div>
                    <div className="description">
                      <p>
                        Un composant permettant d'uploader tous types de fichiers avec un système de drag and drop. Le
                        composant est compatible module. Pour l'upload d'image, une option est disponible pour réduire
                        le poids des images.
                      </p>
                      <button className="ui primary button">Découvrir</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Logger />
      </div>
    </div>
  );
};

export default Page("Draft demo in a real context v/s Storybook")(HomePage);
