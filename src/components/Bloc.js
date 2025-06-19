/**
 * Composant Bloc
 * Affiche un bloc contenant un titre et une liste de tuiles, avec une couleur de fond personnalisée.
 *
 * @param {Object} props - Propriétés du composant
 * @param {Object} props.bloc - Objet bloc (titre, couleur, tuiles)
 * @param {boolean} props.expanded - Indique si les tuiles sont en mode étendu
 * @param {string} props.search - Texte de recherche pour filtrer les tuiles/lignes
 * @returns {JSX.Element}
 */
export default function Bloc({bloc, expanded, search}) {
  // Génère la liste des tuiles à partir du bloc JSON
  let tuiles = [];
  if (bloc && bloc.tuiles) {
    tuiles = bloc.tuiles.map((tuile, idx) => (
      <Tuile 
        tuile={tuile} 
        expanded={expanded}
        search={search}
        key={tuile.nom || idx} 
      />
    ));
  }
  // Définit la couleur par défaut si absente
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

/**
 * Composant Tuile
 * Affiche une tuile avec un titre (lien ou texte simple) et une liste optionnelle de sous-éléments (lignes).
 * Filtre les lignes selon la recherche, et masque la tuile si rien ne correspond.
 *
 * @param {Object} props - Propriétés du composant
 * @param {Object} props.tuile - Objet tuile (nom, lien, lignes)
 * @param {boolean} props.expanded - Mode étendu ou réduit
 * @param {string} props.search - Texte de recherche
 * @returns {JSX.Element}
 */
export function Tuile({tuile, expanded, search}) {
  let subs = [];
  // Vérifie si le titre de la tuile correspond à la recherche
  let titlematch = testSearchElement(tuile, false,search);
  if (tuile.lignes) {
    // Filtre les lignes selon la recherche (ou affiche tout si le titre matche)
    subs = tuile.lignes
      .filter(testSearchElementFilter(titlematch, search))
      .map((sub, idx) => (
        <Ligne ligne={sub} key={sub.lien || idx} />
      ));
  }
  // Si aucune ligne ne matche et le titre non plus, masque la tuile
  if (subs.length === 0 && !titlematch) {
    return <></>;
  }
  // Affiche le titre comme lien si présent
  let titre = tuile.lien
    ? <a href={tuile.lien} target='_blank' rel='noreferrer'>{tuile.nom}</a>
    : tuile.nom;
  // Si on a des lignes, les affiche dans une liste
  if (subs.length > 0) {
    subs = (<ul>{subs}</ul>);
  }
  // Gère la classe CSS selon l'état d'expansion
  let className = "tuile ";
  className += expanded ? "expanded" : "collapsed";
  return (
    <div className={className}>
      <p>{titre}</p>
      {subs}
    </div>
  );
}

/**
 * Composant Ligne
 * Affiche une ligne sous forme de liste, avec un lien si disponible.
 *
 * @param {Object} props - Propriétés du composant
 * @param {Object} props.ligne - Objet ligne (nom, lien)
 * @returns {JSX.Element}
 */
export function Ligne({ligne}) {
  if( ligne.lien) {
    return (<li><a href={ligne.lien} target='_blank' rel='noreferrer'>{ligne.nom}</a></li>)
  }else{
    return (<li>{ligne.nom}</li>)
  }
}

/**
 * Génère une fonction de filtre pour les lignes selon la recherche
 * @param {boolean} alreadyGood - Si le titre de la tuile matche déjà la recherche
 * @param {string} search - Texte de recherche
 * @returns {function}
 */
function testSearchElementFilter(alreadyGood, search){
  return function(element) {
    return testSearchElement(element, alreadyGood, search);
  }
}

/**
 * Teste si un élément (tuile ou ligne) matche la recherche
 * @param {Object} element - Objet à tester (doit avoir .nom et éventuellement .lien)
 * @param {boolean} alreadyGood - Si le parent matche déjà
 * @param {string} search - Texte de recherche
 * @returns {boolean}
 */
function testSearchElement(element, alreadyGood, search) {
  return (
    alreadyGood ||
    (!search) ||
    (element.nom.toLowerCase().includes(search)) ||
    (element.lien && element.lien.toLowerCase().includes(search))
  );
}