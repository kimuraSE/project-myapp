import Link from "next/link"
import { useState } from "react"
import styles from "../../styles/component/menu.module.scss"

const MenuCp =()=>{

    const [btnMenuFlg,setBtnMenuFlg] = useState(false)


    const openMenu = () =>{
        setBtnMenuFlg(!btnMenuFlg)
    }

    return(

        <div className={`${styles.header_box} ${btnMenuFlg ? styles.menu_open : ""}`}>

       
            <div className={styles.cntainer_box}>

            <button onClick={openMenu}>
                <div></div>
                <div></div>
                <div></div>
            </button>

            <nav>
                <ul>
                <li><Link href="/">Top</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/skills">Skills</Link></li>
                <li><Link href="/project">Project</Link></li>
                <li><Link href="/news">News</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>

            <div className={styles.menu_back}>

            </div>

            </div>

         </div>

    )
}

export default MenuCp