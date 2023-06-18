import React from 'react'
import { useState } from 'react'
import"../../Modal.css";
import Photo from '../../img/photo-profil.jpg'

export const StoryModal = ({props}) => {
    const [isOpen, setIsOpen] = useState(true)

    const close =() => {
        setIsOpen(!isOpen)
    }
  return (
    <>
        {isOpen ? (
          <div className='modalBackground'>
            <div className='modalContainer'>
                <h2 className='title'>StoryModal</h2>
                <button onClick={close}>X</button>
            </div>

            <img className='photo-profil' src={Photo} alt="profil" />

            <section className='quiSuisJeSection'>
              <article className='quiSuisJeArticle'>

                <h3 className='quiSuisJeH3'> introduction</h3>
                <p className='quiSuisJeP'>Antoine Carrette, 33 ans au moment où j'écris ces lignes, originaire du Nord et résidant à l'heure actuelle à Marseille.
                </p>

              </article>

              <article className='quiSuisJeArticle'>
                <h3 className='QuiSuisJeH3'>Pourquoi le développement web ?</h3>

                <p className='quiSuisJeP'> Ce fut un bien long cheminement, c'est pourquoi je vais expliquer ici mon parcours professionnel.
                  A l'origine, j'ai fait des études de comptabilité, je dispose d'un bep, bac pro, et bts dans ce secteur.
                  Quand je suis arrivé sur le marché du travail, le secteur comptable était totalement bouché, la fameuse question de l'expérience forme dans ce secteur,
                  le plus parfait des cercles vicieux ! 
                </p>

                <p className='quiSuisJeP'> N'ayant trouvé que très peu d'emplois, constat empiré par le cercle vicieux du manque de pratique, j'ai du me
                  faire violence et me rendre compte que j'avais perdu 6 ans d'études et plusieurs autres dans la recherche d'emplois pour quasiment rien.
                </p>

                <p className='quiSuisJeP'>
                  N'ayant d'autre choix que de me réorienter, une réflexion simple m'est assez rapidement venu, littéralement " mais antoine, t'est un geek, t'as un corps de métier tout trouvé pour les geeks ".
                  j'ai eu la chance d'être contacté par l'organisme Code4Marseille, une association qui est là pour parrainner des personnes au rsa résidant dans le département, dans le but de leur trouver une formation en dévellopement web.
                </p>

                <p className='quiSuisJeP'>
                  J'ai donc effectué deux formations, si la première m'avait insatisfait car assez chaotique et s'étant trop attardé sur PHP,
                  langage qui ne m'a guère séduit (malgré Symfony que je trouve excellent), la seconde était pleinement orienté sur JS, et surtout,
                  introduisait Node et React. 
                </p>

          

              </article>

              <article className='quiSuisJeArticle'>

                <h3 className='quiSuisJeH3'>En dehors de l'emploi</h3>

                  <p className='quiSuisJeP'>Concerning the foreign languages, I fluently speak english, I often read texts in Shakespeare language,
                  or even talk it with some friends, just for pleasure (and some training).
                  Also, it happens to me to spoke with native english speakers, well, some of my family come's from England and California after all !</p>

                  <p className='quiSuisJeStrongP'><strong>En ce qui concerne mes passions :</strong></p>

                  <p className='quiSuisJeP'>Je l'ai dit précédemment, mais je baigne dans la culture geek depuis mon plus jeune âge,
                  je touche régulièrement aux ordinateurs depuis l'age de deux ans, et j'ai connu internet à la fin des années 90.
                  Je suis un grand amoureux du jeu vidéo et je carresse l'espoir d'en créer un, un jour.</p>

                  <p className='quiSuisJeP'>En ce qui concerne la culture générale, je tiens fortement à toujours me cultiver, je suis toujours curieux à propos
                  de philosophie, d'histoire et cinéma surtout.</p>

                  <p className='quiSuisJeP'>Question musique, j'écoute majoritairement de la musique orchestrale (bo de films/jeux vidéos), classique, et du rock britannique.</p>

                  <p className='quiSuisJeP'>Je pratique régulièrement la musculation, inspiré par le fameux dicton "mens sana in corpore sana"
                  il s'agit selon moi du meilleur moyen de calmer un stress intense.</p>

                  <p className='quiSuisJeP'>Enfin, je pratique régulièrement le cosplay, celà me permet de combiner le sport, la culture geek,
                  tout en apprenant diverses compétences annexes.
                  </p>

              </article>
            </section>

          </div>
        ): ""}
    </>
    
  )
}
