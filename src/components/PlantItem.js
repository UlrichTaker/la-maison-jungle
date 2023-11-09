import CareScale from './CareScale'
import '../styles/PlantItem.css'

//Cette fonction est un composant React qui affiche un élément de plante.
function PlantItem({ cover, name, water, light }) {//Les paramètres destructurés { id, cover, name, water, light } représentent les propriétés de la plante.
	return ( //Le composant retourne un élément de liste (<li>) avec une clé key={id}.
	<li className='lmj-plant-item' onClick={() => handleClick(name)}> {/*Lorsque cet élément est cliqué (onClick), il appelle la fonction handleClick(name).*/}
			{/* affiche le nom de la plante ({name}) suivi d'une section représentant les échelles de soin pour l'eau et la lumière (<CareScale>). */}
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} /> {/*Affiche l'image de la plante (en utilisant la propriété cover) avec un texte alternatif qui décrit l'image.*/}
			{name} {/*Affiche le nom de la plante.*/}
			<div>
				<CareScale careType='water' scaleValue={water} /> {/*Affiche une échelle de soin pour l'eau en utilisant le composant CareScale. La propriété careType='water' indique qu'il s'agit de l'échelle de soin pour l'eau, et scaleValue={water} transmet la valeur de soin pour l'eau.*/}
				<CareScale careType='light' scaleValue={light} /> {/*Affiche une échelle de soin pour la lumière, similaire à l'échelle de soin pour l'eau, mais spécifique à la lumière.*/}
			</div>
		</li>
	)
}

//Cette fonction est appelée lorsqu'un élément de plante est cliqué (onClick).
function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}


export default PlantItem
