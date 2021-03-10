import React from 'react'
import './style.css'

export default function Navbar() {

    /*
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false); 
    */

    return (
        <header className="experienceBar">

            <nav className="nav bdGrid">
                <div>
                    <a href="#" className="navLogo">
                    <img className="menuIcon" src="icons/logo-3.svg" alt="Menu"/>
                    Eduardo Gomes
                    </a>
                </div>
            
                {/* <ul className={click ? `${styles.navMenu} ${styles.active}` : `${styles.navMenus}`}>
                        <li className={styles.navItem} onClick={closeMobileMenu}><a href="#home" className={`${styles.navLink} ${styles.show}`}>Home</a></li>
                        <li className={styles.navItem} onClick={closeMobileMenu}><a href="#about" className={styles.navLink}>About</a></li>
                        <li className={styles.navItem} onClick={closeMobileMenu}><a href="#skills" className={styles.navLink}>Skills</a></li>
                        <li className={styles.navItem} onClick={closeMobileMenu}><a href="#portfolio" className={styles.navLink}>Portifolio</a></li>
                        <li className={styles.navItem} onClick={closeMobileMenu}><a href="#contacts" className={styles.navLink}>Contacts</a></li>
                    </ul>

                <div className={styles.navToggle} id="nav-toggle" onClick={handleClick}>
                {click ? (
                        <img className={styles.menuIcon} src="icons/close.svg" alt="Menu"/>
                    ) : (
                        <img className={styles.menuIcon} src="icons/menu.svg" alt="Menu"/>
                        )}
                </div> */}
            </nav>
        </header>
    )
}
