export default function Bloc({bloc}) {

    // Affichage des tuiles à partir du bloc du JSON
  let tuiles = [];
    if (bloc && bloc.tuiles) {
      tuiles = bloc.tuiles.map((tuile, idx) => (
        <Tuile tuile={tuile} key={tuile.nom || idx} />
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

export function Tuile({tuile}) {
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

  return (
    <div className="tuile">
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