import { createContext, useState } from 'react';

import CheckBox from './CheckBox.js';
import Filter from './Filter.js';

// Création du contexte pour partager l'état de recherche et d'expansion dans l'application
export const SearchExpandContext = createContext();

/**
 * Fournisseur de contexte pour la recherche et l'expansion des blocs
 * Gère l'état du filtre de recherche et l'état d'expansion globale
 * Fournit ces états et leurs setters aux composants enfants via le contexte
 * Affiche aussi les composants Filter (input) et CheckBox (toggle)
 *
 * @param {Object} props - Propriétés React
 * @param {ReactNode} props.children - Composants enfants qui auront accès au contexte
 */
export function SearchExpandProvider({ children }) {
    // État pour savoir si tous les blocs sont étendus ou non
    let [expanded, setExpanded] = useState(false);
    // État pour la valeur du filtre de recherche
    let [filter, setFilter] = useState('');

    // Met à jour l'état d'expansion (true/false)
    const handleExpand = (value) => {
        setExpanded(value);
    };
    // Met à jour la valeur du filtre à chaque saisie utilisateur
    const handleFilter = (e) => {
        setFilter(e.target.value);
    };


    // Si un filtre est actif, on force l'expansion de tous les blocs
    if (filter) {
        filter = filter.toLowerCase();
        expanded = true; // Si un filtre est appliqué, on étend tous les blocs
    }


    return (
        // Fournit le contexte {filter, expanded} à tous les enfants
        <SearchExpandContext.Provider value={{filter, expanded}}>
            <div id="header">
                {/* Champ de filtre texte contrôlé */}
                <Filter
                    value={filter}
                    onChange={handleFilter}
                    label="Filter"
                    id="filter-input"
                />
                {/* Case à cocher pour étendre/réduire tous les blocs */}
                <CheckBox
                    checked={expanded}
                    onChange={handleExpand}
                    label="Expand all"
                    id="expand-all-checkbox"
                />
            </div>
            {/* Rendu des enfants qui consomment le contexte */}
            {children}
        </SearchExpandContext.Provider>
    );
}