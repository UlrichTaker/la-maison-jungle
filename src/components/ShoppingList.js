import { plantList } from "../datas/plantList"
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'
import Categories from './Categories'
import { useState } from 'react'

//Ce composant ShoppingList permet de visualiser les plantes avec la possibilité de les ajouter au panier en fonction des catégories sélectionnées.
function ShoppingList({ cart, updateCart }) { //La fonction ShoppingList est un composant React qui reçoit deux propriétés : cart qui est une liste d'articles ajoutés au panier et updateCart qui met à jour cette liste.
	const [activeCategory, setActiveCategory] = useState('') //Utilisation du hook useState pour créer un état local activeCategory représentant la catégorie sélectionnée. La fonction setActiveCategory permet de mettre à jour cet état.
	const categories = plantList.reduce( //Crée une liste categories en extrayant les catégories uniques à partir de plantList.
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	// Cette fonction permet d'ajouter des plantes au panier. Elle vérifie si une plante est déjà présente dans le panier, puis l'incrémente. Sinon, elle l'ajoute avec une quantité initiale de 1.
	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
			{/* Affiche le composant Categories pour sélectionner les catégories. Il reçoit les propriétés categories, setActiveCategory, et activeCategory. */}
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
			{/*  Crée une liste non ordonnée de classe lmj-plant-list pour afficher les plantes. */}
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) => //Utilise map pour itérer à travers la liste plantList et afficher chaque plante sous forme de PlantItem et un bouton "Ajouter" pour chaque plante.
					!activeCategory || activeCategory === category ? ( //Vérifie si aucune catégorie n'est sélectionnée ou si la catégorie de la plante correspond à la catégorie sélectionnée.
						<div key={id}>
							<PlantItem //Affiche un élément de plante avec ses détails (image, nom, eau, lumière, prix).
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button> {/*Un bouton "Ajouter" qui, lorsqu'il est cliqué, appelle la fonction addToCart pour ajouter cette plante au panier.*/}
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList
