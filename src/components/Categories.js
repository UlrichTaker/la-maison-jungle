import '../styles/Categories.css'

// composant Categories qui affiche une liste déroulante pour sélectionner des catégories spécifiques
function Categories({ setActiveCategory, categories, activeCategory }) { //Cette fonction est un composant React qui prend trois propriétés : setActiveCategory, categories, et activeCategory.
	return (
		<div className='lmj-categories'>
			{/* Crée une liste déroulante HTML. La valeur sélectionnée est définie par la propriété activeCategory, et lorsqu'elle change, la fonction setActiveCategory est appelée pour mettre à jour la catégorie sélectionnée. */}
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='lmj-categories-select'
			>
				<option value=''>---</option> {/*Un premier élément de la liste déroulante pour afficher un sélecteur vide, généralement utilisé comme option par défaut.*/}
				{categories.map((cat) => ( //Utilise la méthode map pour parcourir la liste categories et crée des éléments <option> pour chaque catégorie.
					<option key={cat} value={cat}> {/*Pour chaque élément cat dans la liste des catégories, crée un élément <option> avec value défini sur la catégorie cat. La key est définie pour aider React à identifier chaque élément de manière unique.*/}
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory('')}>Réinitialiser</button> {/* Un bouton qui, lorsqu'il est cliqué, appelle la fonction setActiveCategory avec une valeur vide, effaçant la catégorie sélectionnée.*/}
		</div>
	)
}

export default Categories