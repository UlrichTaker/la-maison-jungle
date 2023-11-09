import '../styles/Banner.css'
import logo from '../assets/logo.png'//on déclare en fait une variable logo à laquelle on assigne le contenu de notre image.

function Banner() {
    const title = 'La maison jungle'
    return <div className='lmj-banner'> {/* L'attribut classname remplace l'attribut class pour l'appel de propriétes en react */}
    <img src={logo} alt = 'La maison jungle' className='lmj-logo'></img>
    <h1 className='lmj-title'>{title}</h1>
    </div>
}

export default Banner //Vous remarquez la notation  export default   ? Il s'agit d'une syntaxe prévue dans l'ES6, qui vous épargnera d'utiliser les accolades au moment de l'import.