import React from 'react'
import { useState } from 'react'
import"../../Modal.css";
import ImagesJs from "../../img/Javascript_badge.png"
import ImagesMongo from "../../img/mongodb-logo.png"
import ImagesReact from "../../img/logo-react-js.png"
import ImagesSymfony from "../../img/symfony_black_02.png"
import ImagesMySQL from "../../img/mysql-logo-text-face-symbol-transparent-png-2425830.png"
import ImagesTailwind from "../../img/tailwindcss.png"
import ImagesNode from "../../img/Node.js_logo.svg.png"

export const LanguageModal = ({props}) => {
  const [isOpen, setIsOpen] = useState(true)

    const close =() => {
      setIsOpen(!isOpen)
    }
  return (
    <>
        {isOpen ? (
          <div className='modalBackground'>
            <div className='modalContainer'>
                <h2 className='title'>Languages et technos</h2>
                <button className='titleCloseBtn' onClick={close}>X</button>              
            </div>

            <div className="JS">
              <img className="Images" src={ImagesJs} alt="JS" />
              <p className="techsP">
                C'est le premier vrai langage auquel je me suis frotté, c'est en
                partie pour ça que j'ai vite décidé de me spécialiser dans celui ci au
                lieu de me disperser et me perdre. Je l'utilise encore en brut de
                temps en temps pour développer des petits jeux et programmes
              </p>
            </div>

            <div className="React">
              <img className="Images" src={ImagesReact} alt="React" />

              <p className="techsP">
                {" "}
                La librairie (et non framework contrairement à la croyance populaire)
                de JS sur laquelle j'ai décide de me spécialiser, pour plusieurs
                raisons, déjà, la seconde formation que j'ai éffectué, très axée JS,
                mettait le focus sur cette tech, deuxièmement, je sait qu'elle est
                très utilisée en entreprise, cherchant un CDI, elle me semblait un
                choix judicieux.
              </p>

              <p className="techsP">
                Aussi, elle est pensée pour fonctionner en symbiose avec Node, ce que
                j'ai pu tester et confirmer, elle serait aussi utilisée en combinaison
                avec le framework PHP Symfony, étant un grand amoureux de celui ci,
                j'ai ambition de vérifier ceci par moi-même.
              </p>
            </div>

            <div className="Tailwind">
              <img className="Images" src={ImagesTailwind} alt="Tailwind" />
              <p className="techsP">
                Un frameword de CSS, tout comme bootstrap, mais je vais être honnête,
                dix fois mieux à mes yeux. En effet, si ici aussi il permet de
                facilement gérer le responsive, il permet bien plus de libertés quand
                au design que Bootstrap, qui je trouve en propose un froid et triste,
                là ou tailwind s'est dit qu'il pouvait le gérer et non seulement l'UI.
              </p>
            </div>

            <div className="Node">
              <img className="Images" src={ImagesNode} alt="Node" />

              <p className="techsP">
                Le fameux environnement back-end de Javascript, où quand l'un des plus
                célèbres langage front-end décide de se passer de sa combinaison
                historique avec PHP pour gérer le back-end. React a été pensé, comme
                cité précédemment, pour être en synergie avec Node, même
                l'installation de modules Node lors de la création d'un dossier React
                nous le hurle.
              </p>

              <p className="techsP">
                Et en effet, avec l'usage d'Axios, j'ai pu tester l'ensemble et voir
                qu'un site complet est réalisable de cette manière.
              </p>
            </div>

            <div className="MongoDB">
              <img className="Images" src={ImagesMongo} alt="MongoDB" />

              <p className="techsP">
                Découvert alors que je m'entrainais sur un projet en MERN, je ne l'ai
                encore que peu utilisé, mais son aspect plus moderne/pratique, vis à
                vis de MySQL est assez séduisant, bien que l'installation soit un peu
                technique, contrairement à son usage, d'une facilité étonnante.
                MondoDB a été pensé, pour Python à la base, mais aussi pour Node,
                puisque le module mongoose est celui à utiliser au sein de Node afin
                de créer les tables
              </p>
            </div>

            <div className="MySQL">
              <img className="Images" src={ImagesMySQL} alt="MySQL" />

              <p className="techsP">
                Le système de gestion de base de données avec lequel j'ai commencé le
                back-end, avec MongoDB, c'est le principal traitement de BDD, il
                marche parfaitement avec Symfony notamment. Si j'ai pris l'habitude de
                son usage, je dois reconnaitre aujourd'hui lui préférer MongoDB, me
                spécialisant dans la stack MERN, c'était inévitable.
              </p>
            </div>

            <div className="Symfony">
              <img className="Images" src={ImagesSymfony} alt="symfony" />

              <p className="techsP">
                Avec Laravel, LE framework PHP, si lors de ma première formation, j'ai
                beaucoup utilisé PHP, Je n'ai vraiment pas apprécié travailler avec ce
                langage, et pourtant, l'utilisation de Symfony fut une révélation pour
                moi.
              </p>

              <p className="techsP">
                Avec une bonne utilisation du terminal, Il est aisé de créer des
                fonctionnalités complètes, notamment, pour tout ce qui est Système
                utilisateur, puisque des options natives de paramètrages et sécurité
                vis à vis des comptes utilisateurs existent ici. Lors de mon projet
                axé Symfony, il me fut assez simple de concevoir un système sécurisé
                et agréable pour l'utilisateur.
              </p>
            </div>

          </div>
        ): ""}
    </>
    
  )
}
