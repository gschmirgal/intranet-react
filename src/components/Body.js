/**
 * Body component that loads JSON data and displays a list of Bloc components.
 *
 * - Fetches data from '/sites.json' on mount.
 * - Renders a CheckBox to expand/collapse all Bloc components.
 * - Maps over the loaded blocs and renders each as a Bloc component.
 *
 * @component
 * @returns {JSX.Element} The rendered Body component.
 */
import { useEffect, useState } from 'react';

import Bloc from './Bloc.js';
import { SearchExpandProvider } from './SearchExpandContext.js';

function Body() {
  let [dataJson, setDataJson] = useState();
  
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
      <Bloc bloc={bloc} expanded={true} key={bloc.titre || idx} />
    ));
  }

  return (<div className="main">
      <SearchExpandProvider>
        {blocs}
      </SearchExpandProvider>
    </div>
  );
}
export default Body;
