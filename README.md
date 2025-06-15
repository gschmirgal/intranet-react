# Intranet React

Ce projet est une application d’intranet réalisée avec [React](https://react.dev/) et bootstrappée avec [Create React App](https://github.com/facebook/create-react-app).

## Fonctionnalités

- Affichage de blocs et de tuiles dynamiques à partir d’un fichier JSON (`public/sites.json`)
- Styles personnalisés avec gestion centralisée des couleurs (`src/css/App_colors.css`)
- Responsive et moderne grâce à Flexbox et CSS custom
- Facilement personnalisable via le JSON et les fichiers CSS

## Structure du projet

```
intranet-react/
├── public/
│   └── sites.json           # Données des blocs/tuiles (JSON)
├── src/
│   ├── components/
│   │   ├── Body.js          # Composant principal qui gère l'affichage global
│   │   ├── Bloc.js          # Composant pour chaque bloc
│   ├── css/
│   │   ├── App_common.css   # Styles communs à toute l'application
│   │   ├── App_colors.css   # Couleurs centralisées (variables CSS)
│   │   └── App_screen.css   # Styles spécifiques à l'affichage écran
│   ├── components/          # Images statiques (backgrounds, logos, etc.)
│   ├── index.js             # Point d’entrée React
└── README.md
```

- Place tes images dans `src/images/` si tu utilises des backgrounds ou des logos.
- Les composants sont rangés dans `src/components/` 
- Les fichiers CSS sont regroupés dans `src/css/` pour séparer les styles du code.

## Structure du fichier JSON (`public/sites.json`)

Le fichier `sites.json` contient la liste des blocs et des tuiles à afficher sur l’intranet.

### Exemple de structure

```json
{
  "blocs": [
    {
      "titre": "Bloc 1",
      "couleur": "vert",           // (optionnel) Nom d’une couleur définie dans App_colors.css
      "tuiles": [
        {
          "nom": "Application A",  // Nom affiché sur la tuile
          "lien": "http://app-a.example.com/", // (optionnel) Lien principal de la tuile
          "lignes": [              // (optionnel) Liste de sous-liens ou d’informations
            { "lien": "http://env-a1.example.com/", "nom": "Environnement 1" },
            { "lien": "http://env-a2.example.com/", "nom": "Environnement 2" }
          ]
        }
      ]
    }
  ]
}
```

### Champs principaux

- `blocs` : Tableau de blocs à afficher.
  - `titre` : Titre du bloc.
  - `couleur` : (optionnel) Nom d’une couleur CSS (ex : `vert`, `bleu_fonce`, etc.).
  - `tuiles` : Tableau de tuiles dans le bloc.
    - `nom` : Nom de la tuile.
    - `lien` : (optionnel) Lien principal de la tuile.
    - `lignes` : (optionnel) Tableau d’objets avec :
      - `nom` : Nom du sous-lien ou de l’information.
      - `lien` : (optionnel) Lien associé.

**Remarques :**
- Les champs `couleur`, `lien` et `lignes` sont optionnels.
- Les couleurs doivent correspondre à celles définies dans `App_colors.css`.
- Vous pouvez ajouter ou retirer des blocs/tuiles selon vos besoins.

## Ajouter une couleur personnalisée

Pour ajouter une nouvelle couleur utilisable dans vos blocs :

1. **Ouvrez** le fichier `src/css/App_colors.css`.
2. **Ajoutez** une nouvelle variable de couleur dans la section `:root`, par exemple :
   ```css
   :root {
     --ma-couleur-bg: 210,210,255;
     --ma-couleur-p: 60,60,200;
     /* ...autres couleurs... */
   }
   ```
3. **Ajoutez** une classe pour cette couleur :
   ```css
   .ma_couleur {
     --color-bg: var(--ma-couleur-bg);
     --color-p: var(--ma-couleur-p);
   }
   ```
4. **Utilisez** le nom de la couleur (`ma_couleur`) dans le champ `couleur` de votre bloc dans le JSON.

**Exemple d’utilisation dans le JSON :**
```json
{
  "titre": "Bloc personnalisé",
  "couleur": "ma_couleur",
  "tuiles": [ ... ]
}
```

## Installation

1. **Cloner le dépôt**
   ```sh
   git clone <url-du-repo>
   cd intranet-react
   ```

2. **Installer les dépendances**
   ```sh
   npm install
   ```

3. **Lancer l’application**
   ```sh
   npm start
   ```
   L’application sera accessible sur [http://localhost:3000](http://localhost:3000).

## Personnalisation

- **Données** : Modifiez `public/sites.json` pour changer les blocs, tuiles, liens, etc.
- **Styles** : Adaptez les fichiers dans `src/css/` pour personnaliser l’apparence.
- **Composants** : Ajoutez ou modifiez les composants React dans `src/`.

## Scripts disponibles

- `npm start` : Démarre le serveur de développement.
- `npm run build` : Génère la version de production dans le dossier `build`.
- `npm test` : Lance les tests unitaires (si présents).
- `npm run eject` : Éjecte la configuration Create React App (opération irréversible).

## Dépendances principales

- [React](https://react.dev/)
- [Create React App](https://github.com/facebook/create-react-app)

## Contribution

Les contributions sont les bienvenues !  
N’hésitez pas à ouvrir une issue ou une pull request.

## Licence

Ce projet est sous licence MIT.

---
