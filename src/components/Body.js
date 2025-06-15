import { useEffect, useState } from 'react';

import Bloc from './Bloc.js';


function Body() {
  const [dataJson, setDataJson] = useState();

  // Chargement du JSON depuis le fichier sites.json
  useEffect(() => {
    fetch('/sites.json')
      .then(response => response.json())
      .then(json => setDataJson(json))
      .catch(error => console.error('Erreur lors du chargement du JSON:', error));
  }, []);

  // Affichage des tuiles à partir des blocs du JSON
  let blocs = [];
  if (dataJson && dataJson.blocs) {
    blocs = dataJson.blocs.map((bloc, idx) => (
      <Bloc bloc={bloc} key={bloc.titre || idx} />
    ));
  }

//console.log('Tuiles:', tuiles);
  return (
    <div class="main">
      {blocs}
    </div>
  );
}

export default Body;
