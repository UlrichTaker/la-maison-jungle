import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

// Ce composant CareScale permet de représenter visuellement le niveau de soin nécessaire pour une plante en affichant des icônes en fonction de la valeur de l'échelle de soin (scaleValue) et du type de soin (careType).

//quantityLabel est un objet qui associe des valeurs numériques à des niveaux de soin (peu, modérément, beaucoup).
const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

// le composant CareScale rend une série d'icônes (soleil ou eau) en fonction de la scaleValue et du careType, représentant visuellement le niveau de soin nécessaire.
function CareScale({ scaleValue, careType }) {//Cette fonction est un composant React. Elle reçoit deux propriétés : scaleValue, qui indique la valeur de l'échelle, et careType, qui spécifie le type de soin (lumière ou eau).
	const range = [1, 2, 3] //Un tableau de valeurs d'échelle pour le soin, allant de 1 à 3
	const scaleType = //Cette variable scaleType stocke l'icône appropriée en fonction du type de soin passé. Si careType est égal à 'light', l'icône du soleil est utilisée, sinon l'icône de l'eau est utilisée.
		careType === 'light' ? (<img src={Sun} alt='sun-icon' />) : (<img src={Water} alt='water-icon' />)

	return ( //rend un conteneur div contenant une série d'icônes en fonction de la valeur de l'échelle (scaleValue).
		<div
			onClick={() =>
				alert(
					`Cette plante requiert ${quantityLabel[scaleValue]} ${
						careType === 'light' ? 'de lumière' : "d'arrosage"
					}`
				)
			}
			>
			{range.map((rangeElem) => //parcourt le tableau range avec map et affiche l'icône pour chaque élément du tableau s'il est inférieur ou égal à la scaleValue.
				scaleValue >= rangeElem ? (<span key={rangeElem.toString()}>{scaleType}</span>) : null //Attribue une clé unique à chaque élément de la liste pour aider React à identifier les modifications et optimiser le rendu.Lorsque scaleValue est inférieur à la valeur d'une entrée de range, aucune icône n'est affichée (grâce à l'expression ternaire avec null).
			)}
		</div>
	)
}

export default CareScale
