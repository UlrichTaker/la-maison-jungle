import Banner from './Banner'
import logo from '../assets/logo.png'//On déclare en fait une variable logo à laquelle on assigne le contenu de notre image.
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import '../styles/Layout.css'
import { useState, useEffect } from 'react'

// Ce code crée une application en utilisant des composants React. Il initialise l'état du panier (cart) en tant que tableau vide, puis structure l'application en utilisant des composants réutilisables comme <Banner>, <Cart>, <ShoppingList>, et <Footer>.
function App() {
	//utilise le hook useState pour gérer l'état du panier de l'application. Il récupère les données du panier depuis le stockage local du navigateur et les initialise. Si aucune donnée n'est trouvée, il initialise un tableau vide.
	const savedCart = localStorage.getItem('cart') //récupère le contenu associé à la clé 'cart' depuis le stockage local du navigateur.Si des données sont présentes, savedCart contiendra une chaîne de caractères correspondant à ces données. Sinon, savedCart sera null.
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []) //utilise le hook useState pour initialiser l'état du panier. Si savedCart (le contenu du panier dans le stockage local) existe, il est converti en tableau JavaScript à l'aide de JSON.parse(). Sinon, un tableau vide est utilisé comme valeur initiale pour le panier. cart représente l'état actuel du panier, tandis que updateCart est une fonction qui permet de mettre à jour l'état du panier.
	useEffect(() => { //Ce hook useEffect surveille les changements sur cart, c'est-à-dire chaque fois que le panier est modifié. Lorsque le panier change, le contenu actuel du panier est enregistré dans le stockage local du navigateur sous la clé 'cart' à l'aide de localStorage.setItem(), après avoir été transformé en chaîne JSON à l'aide de JSON.stringify(cart). Cela assure la persistance des données du panier entre les rechargements de la page ou les sessions de navigation.
		localStorage.setItem('cart', JSON.stringify(cart)) //
	}, [cart])
	return (
		<div>
			{/* Composant Banner : affiche le logo et le titre de l'application */}
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			{/* Div contenant les éléments principaux de l'application */}
			<div className='lmj-layout-inner'>
				{/* Composant Cart : affiche le panier et fournit les données de panier et la fonction pour le mettre à jour */}
				<Cart cart={cart} updateCart={updateCart} />
				{/* Composant ShoppingList : affiche la liste des plantes disponibles et fournit les données de panier et la fonction pour le mettre à jour */}
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			{/* Composant Footer : affiche le pied de page de l'application */}
			<Footer />
		</div>
	)
}


export default App