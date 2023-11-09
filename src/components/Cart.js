import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) { //La fonction Cart est une fonction qui prend les propriétés cart et updateCart.
	const [isOpen, setIsOpen] = useState(true) //Initialise un état local isOpen à true et une fonction setIsOpen pour modifier cet état. Cela gère l'affichage du panier.
	const total = cart.reduce( //Calcule le montant total des éléments du panier en multipliant la quantité de chaque plante par son prix et en accumulant les valeurs.
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	//La fonction useEffect est un hook de gestion des effets dans React. Il permet d'effectuer des actions annexes après le rendu initial et après chaque mise à jour du composant.
	useEffect(() => { //le useEffect est utilisé pour mettre à jour le titre du document HTML en fonction de la valeur de total. Lorsque total change, le titre de la page est modifié pour afficher le montant total des achats avec le préfixe "LMJ: "
		document.title = `LMJ: ${total}€ d'achats`
	}, [total]) //L'effet sera déclenché à chaque modification de total, et le document affichera le titre mis à jour pour refléter la nouvelle valeur du montant total des achats.
	
	// Le code utilise une condition ternaire pour vérifier si le panier est ouvert (isOpen). Si c'est le cas, il affiche le contenu du panier sous forme de liste avec le total et un bouton pour vider le panier. Sinon, il affiche un message indiquant que le panier est fermé et un bouton pour l'ouvrir.
	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
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
