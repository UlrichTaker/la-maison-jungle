import { useState } from 'react'
import '../styles/Footer.css'

//La fonction Footer est définie comme un composant React. Elle utilise un hook useState pour gérer l'état local du composant.
function Footer() {
	const [inputValue, setInputValue] = useState('') //inputValue est un état local créé par useState, initialisé avec une chaîne vide. Il stocke la valeur du champ de saisie d'e-mail.

	function handleInput(e) { //La fonction handleInput est déclenchée à chaque changement dans le champ de saisie. Elle met à jour inputValue avec la valeur actuelle du champ.
		setInputValue(e.target.value)
	}

	function handleBlur() { //handleBlur est déclenchée lorsque le champ de saisie perd le focus (lorsqu'on clique en dehors du champ).
		if (!inputValue.includes('@')) { // vérifie si l'adresse e-mail saisie contient un "@" et si ce n'est pas le cas, affiche une alerte.
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input //Un élément <input> pour la saisie de l'adresse e-mail :
				placeholder='Entrez votre mail' //placeholder affiche un message d'exemple dans le champ de saisie.
				onChange={handleInput} //onChange appelle handleInput à chaque modification de l'entrée.
				value={inputValue} //value est lié à inputValue, permettant l'affichage de la valeur du champ de saisie en temps réel.
				onBlur={handleBlur} //onBlur appelle handleBlur lorsque le champ de saisie perd le focus.
			/>
		</footer>
	)
}

export default Footer