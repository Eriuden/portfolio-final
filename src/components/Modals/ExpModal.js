import React, { useState } from 'react';
import"../../Modal.css";

export const ExpModal = ({props}) => {
    const [isOpen, setIsOpen] = useState(true)

    const close =() => {
        setIsOpen(!isOpen)
    }
  return (
    <>
        {isOpen ? (
            <div className=' m-x-[50%] modalBackground'>
                <div className='modalContainer'>
                    <h2>Mes créations</h2>
                    <button onClick={close}>X</button>
                </div>

                <div className='Projets'>

                    <h3>Gunplaza</h3>
                    <p>
                        Projet de fin de formation pour ma première formation. Crée avec
                        Symfony majoritairement (comporte du JS et CSS/bootstrap).
                    </p>
                    <p>
                        Site d'e commerce sur le thème des maquettes gunpla, comporte un
                        système de communication avec la base de données, d'affichage
                        des articles, tri des articles par pages, CRUD, et système
                        utilisateurs sécurisé.
                    </p>

                    <h3>Carte Age</h3>
                    <a href='https://github.com/Eriuden/MERN-carte-age'>Lien Github</a>
                    <p>
                        "Remake" en MERN du projet de fin de la seconde formation.
                    </p>
                    <p>
                        Site d'e commerce à propos des cartes à jouer et collectionner,
                        comporte un système d'inscription/connexion, un CRUD, un système
                        d'affichage des articles, et une section utilisateurs où ces
                        derniers peuvent créer des sujets de discussion. Le site originel m'a
                        nottament permis de tester les hooks, et expérimenter en design.
                    </p>

                    <h3 className="NomProjet">Trouve ton toit</h3>

                    <p className="ProjetP">
                        Un projet en équipe, plus précisément, pour un Hackathon, à
                        savoir que nous avons terminé sur le podium (3ème). Le projet
                        fut réalisé à l'aide de RedwoodJS et tailwind, et eut l'intérêt
                        d'améliorer mes softskills de travail en équipe.
                    </p>

                    <p className="ProjetP">
                        Il s'agissait de créer une plateforme permettant la recherche
                        d'emploi et de logements. L'idée finale était de relier les
                        deux, au sens où; si l'on consulte un logement, les emplois
                        proches s'afficheront, et inversement.
                    </p>

                    <h3>Beowulf: Kaijus observator</h3>
                    <a href='https://github.com/Eriuden/Beowulf-Kaijus-Observator'>Lien github</a>
                    <p>
                        Juste un projet personnel comme ça, j'avais envie de continuer
                        après un gros gain de motivation suite à un hackathon triomphal.
                        Crée avec React et NodeJs, BDD en mongoDB.
                    </p>
                    <p>
                        Site d'une agence secrète fictive, Beowulf, le nom vient d'un
                        héros de la mythologie scandinave connu pour sa propension au
                        meurtre de monstre. L'agence est chargé de la surveillance
                        (voire traque dans le cas des menaces) des kaijus, au cas où
                        vous ne savez pas ce qu'est un kaiju, un monstre géant du cinéma japonais,
                        dites vous que Godzilla
                        est le plus célèbre (d'ou son surnom de roi des kaijus). Un
                        formulaire de connexion rend impossible l'accès du site à
                        n'importe qui, et pas de formulaire d'inscription ici, il faut
                        respecter la logique, on ne va pas donner au premier quidam des
                        dossiers top secrets ! Une fois connecté, la page se charge, on
                        voit des cartes qui, si l'on clique dessus, affiche le profil de
                        la bète, dans lequel on trouve des informations primordiales,
                        notamment, si il est une menace pour l'humanité et/ou la nature.
                        Un agent à la possibilité de créer un dossier, si l'on observe
                        un nouveau kaiju, il peut mettre à jour les informations à son
                        sujet, enfin, si l'animal est tué par l'agence où un autre
                        kaiju, il est possible d'effacer le dossier.
                    </p>
                </div>
            </div>
        ): ""}
    </>
    
  )
}
