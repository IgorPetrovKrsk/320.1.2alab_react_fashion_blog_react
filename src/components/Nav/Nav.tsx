import './nav.css'
import topNavigationLinks from "./topNavigationLinks"

export default function Nav() {

    const navLink = topNavigationLinks.map(it => {
        const [key, value] = Object.entries(it)[0]
        return <li><a href={value}>{key}</a></li>
    })    

    return (
        <>
            <nav aria-label="Main Navigation" role="navigation">
                <ul className="topNavigation">
                    {navLink}
                </ul>
            </nav>
        </>
    )
}