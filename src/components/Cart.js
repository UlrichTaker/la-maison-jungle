import { useState } from 'react'
import '../styles/Cart.css'

// Ce code définit un composant Cart en React. Ce composant gère un panier virtuel avec des fonctionnalités pour ajouter des articles et visualiser le total.
function Cart() {
	const monsteraPrice = 8
	//Deux états (cart et isOpen) sont gérés via le hook useState. cart stocke le nombre d'articles actuellement dans le panier (initialement à zéro), tandis que isOpen contrôle l'état d'ouverture ou de fermeture du panier (initialement ouvert).
	const [cart, updateCart] = useState(0)
	const [isOpen, setIsOpen] = useState(true)

	return isOpen ? ( //La logique conditionnelle avec isOpen est utilisée pour déterminer le contenu à afficher. Si le panier est ouvert (isOpen est vrai), le contenu à afficher est la liste des articles dans le panier.
		<div className='lmj-cart'>
			{/* Un bouton "Fermer" est présent pour fermer le panier lorsqu'il est ouvert. */}
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
			<div>Monstera : {monsteraPrice}€</div>
			<button onClick={() => updateCart(cart + 1)}>Ajouter</button>
			<h3>Total : {monsteraPrice * cart}€</h3>
			{/* Un bouton "Vider le panier" est présent pour réinitialiser le panier (cart à 0). */}
			<button onClick={() => updateCart(0)}>Vider le panier</button> 
		</div>
	) : ( //Si le panier est fermé (isOpen est faux), un message de confirmation et un bouton "Ouvrir le Panier" sont affichés.
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart
