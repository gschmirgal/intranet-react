/**
 * Bloc component
 * 
 * Affiche un bloc contenant un titre et une liste de tuiles, avec une couleur de fond personnalisée.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.bloc - Objet représentant le bloc, contenant les propriétés suivantes :
 * @param {string} props.bloc.titre - Le titre du bloc affiché en haut.
 * @param {string} [props.bloc.couleur="bleu"] - La couleur du bloc (par défaut "bleu" si non spécifiée).
 * @param {Array<Object>} [props.bloc.tuiles] - Liste des objets tuiles à afficher dans le bloc.
 * @param {boolean} props.expanded - Indique si les tuiles doivent être affichées en mode étendu.
 * @returns {JSX.Element} Un élément JSX représentant le bloc avec ses tuiles.
 */

/**
 * Tuile component
 * 
 * Affiche une tuile avec un titre (lien ou texte simple) et une liste optionnelle de sous-éléments (lignes).
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.tuile - Objet représentant la tuile, contenant les propriétés suivantes :
 * @param {string} props.tuile.nom - Le nom de la tuile affiché comme titre.
 * @param {string} [props.tuile.lien] - Lien associé à la tuile (ouvre dans un nouvel onglet si présent).
 * @param {Array<Object>} [props.tuile.lignes] - Liste des sous-éléments (lignes) à afficher sous la tuile.
 * @param {boolean} props.expanded - Indique si la tuile doit être affichée en mode étendu ou réduit.
 * @returns {JSX.Element} Un élément JSX représentant la tuile.
 */

/**
 * Ligne component
 * 
 * Affiche une ligne sous forme de liste, avec un lien si disponible.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.ligne - Objet représentant la ligne, contenant les propriétés suivantes :
 * @param {string} props.ligne.nom - Le nom de la ligne affiché.
 * @param {string} [props.ligne.lien] - Lien associé à la ligne (ouvre dans un nouvel onglet si présent).
 * @returns {JSX.Element} Un élément JSX représentant la ligne.
 */
export default function Bloc({bloc, expanded}) {

  // Affichage des tuiles à partir du bloc du JSON
  let tuiles = [];
    if (bloc && bloc.tuiles) {
      tuiles = bloc.tuiles.map((tuile, idx) => (
        <Tuile 
          tuile={tuile} 
          expanded={expanded}
          key={tuile.nom || idx} 
        />
      ));
    }

  if (!bloc.couleur) {
    bloc.couleur = "bleu";
  }

  return (
    <div className={"bloc " + bloc.couleur+ " color-block"}>
      <h1>{bloc.titre}</h1>
      {tuiles}
    </div>
  );
}

export function Tuile({tuile, expanded}) {
  let subs = [];
    if (tuile && tuile.lignes) {
      subs = tuile.lignes.map((sub, idx) => (
        <Ligne ligne={sub} key={sub.lien || idx} />
      ));
    }
  let titre = "";
  if (tuile.lien) {
    titre = <a href={tuile.lien} target='_blank' rel='noreferrer'>{tuile.nom}</a>;

  }else{
    titre = tuile.nom;
  }

  if (subs.length !== 0) {
    subs = (
      <ul>
        {subs}
      </ul>
    );
  }

  let className = "tuile ";
  if (expanded) {
    className += "expanded";

  } else {
    className += "collapsed";

  }

  return (
    <div className={className}>
      <p>{titre}</p>
      {subs}
    </div>
  );
}

export function Ligne({ligne}) {
  if( ligne.lien) {
    return (<li><a href={ligne.lien} target='_blank' rel='noreferrer'>{ligne.nom}</a></li>)
  }else{
    return (<li>{ligne.nom}</li>)
  }
}