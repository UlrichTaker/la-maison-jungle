import '../styles/Banner.css'

/*Cette fonction Banner est un composant React. Elle renvoie un élément <div> qui affiche un contenu dynamique grâce à la propriété children.
Banner est un composant avec une prop spéciale nommée children. Les composants React peuvent avoir des enfants (autres composants ou éléments HTML) qui sont passés à l'intérieur en tant que children. Cela permet au composant Banner d'être plus flexible quant à son contenu.
Lorsque le composant Banner est utilisé, le contenu placé à l'intérieur des balises <Banner> sera représenté par la variable children à l'intérieur du composant.
Dans ce cas, le composant Banner affiche une <div> avec une classe CSS lmj-banner, mais le contenu spécifique qui sera affiché à l'intérieur sera déterminé par les enfants passés à ce composant lors de son utilisation.*/ 
function Banner({ children }) {
    return <div className='lmj-banner'> {/* L'attribut classname remplace l'attribut class pour l'appel de propriétes en react */}
        {children}
    </div>
}

export default Banner //Vous remarquez la notation  export default   ? Il s'agit d'une syntaxe prévue dans l'ES6, qui vous épargnera d'utiliser les accolades au moment de l'import.