import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import Cart from './components/Cart';

const root = ReactDOM.createRoot(document.getElementById('root')); //Cette ligne crée un point d'entrée de rendu pour l'application React. Elle sélectionne l'élément HTML ayant l'ID "root" sur la page et crée un "root" ou un nœud racine à partir de cet élément. Ce nœud racine sera utilisé pour le rendu principal de l'application.
root.render( //Cette ligne indique au nœud racine de commencer le rendu des éléments React.
  <React.StrictMode> {/*C'est un composant de React qui aide à identifier les problèmes potentiels dans l'application. Il n'a pas de représentation visuelle dans le DOM mais enveloppe les composants enfants pour les aider à détecter des problèmes comme des avertissements de dépréciation, etc. */}
    <App /><Cart/> {/*C'est le contenu à rendre dans le DOM. Ici, <App /> est un composant principal de l'application, et <Cart /> est un composant qui affiche le panier. Ces composants sont rendus dans le strict mode de React. Les composants peuvent contenir d'autres composants et du contenu à afficher dans la page.*/}
  </React.StrictMode>
);
