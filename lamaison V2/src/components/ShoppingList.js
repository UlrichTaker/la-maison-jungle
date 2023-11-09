import { plantList } from "../datas/plantList"
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'

//La fonction ShoppingList crée une liste de plantes à vendre.
function ShoppingList() {
    // Constituer une nouvelle liste de manière dynamique qui extrait les catégories uniques de plantes. categories est un tableau des catégories uniques extraites des éléments de plantList à l'aide de reduce. Il s'agit d'un processus pour filtrer les catégories uniques.
    const categories = plantList.reduce(
        (acc,plant) => acc.includes(plant.category) ? acc: acc.concat(plant.category),
        []
    )
    return ( //Le retour (return) de la fonction contient deux listes ordonnées :
        <div>
            {/* Afficher la liste des catégories de plantes au-dessus de la liste des plantes à vendre. Génère une liste <ul> en utilisant la méthode map pour afficher chaque catégorie (cat) dans une balise <li>. Chaque élément est accompagné d'une clé unique key pour identifier les éléments de la liste.*/}
            <ul> 
                {categories.map((cat) => (//La méthode  map()  permet facilement d'itérer sur des données et de retourner un tableau d'éléments.Elle passe sur chaque élément d'un tableau. Elle lui applique une fonction, et renvoie un nouveau tableau contenant les résultats de cette fonction appliquée sur chaque élément. Dans notre cas, elle va nous permettre de prendre une liste de données, et de la transformer en liste de composants.
                    <li key={cat}>{cat}</li>//les  key   (clés) aident React à identifier quels éléments d’une liste ont changé, ont été ajoutés ou supprimés. Vous devez donner une clé à chaque élément dans un tableau, afin d’apporter aux éléments une identité stable.
                    ))}
            </ul>
            {/* Crée une autre liste <ul> avec la classe CSS lmj-plant-list. Cette fois-ci, il utilise la méthode map pour générer une liste de composants <PlantItem> basée sur les éléments de plantList. Chaque composant <PlantItem> reçoit des propriétés (id, cover, name, water, light) issues de chaque élément de plantList. */}
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}
			</ul>
        </div>
    )
}

export default ShoppingList
