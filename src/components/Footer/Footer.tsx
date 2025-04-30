import './footer.css'
import navigationLinks from '../Nav/navigationLinks'

let navLink = navigationLinks.map(it => {
    const [key, value] = Object.entries(it)[0]
    return <li key={key}><a href={value}>{key}</a></li>
});
navLink.unshift(<li key="Home"><a href=''>Home</a></li>)
navLink.push(<li key="Tips"><a href=''>Tips</a></li>)


export default function Footer() {
    return (
        <>
            <nav aria-label="Bottom Navigation" role="navigation">
                <ul className="bottomNavigation">
                    {navLink}
                </ul>
            </nav>
            <p className='footer'>&copy; 2013 Valet Industries, Inc</p>
        </>
    )
}