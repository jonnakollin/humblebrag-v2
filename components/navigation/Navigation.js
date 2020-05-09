import React from 'react'
import Link from 'next/link'
import links from '../../helper/links';
import styles from './Navigation.less';

const Navigation = () => (
    <header className={styles.header}>
        <h1 className={styles.title}><Link href="/"><a>jonna kollin</a></Link></h1>
        <nav className={styles.desktopMenu}>
            {links.map((link, index) => {
                return link.external ? <a className={styles.menuItem} key={index} href={link.path}>{link.name}</a> : <Link key={index} href={link.path}><a className={styles.menuItem}>{link.name}</a></Link>
            })}
        </nav>
    </header>

)

export default Navigation;