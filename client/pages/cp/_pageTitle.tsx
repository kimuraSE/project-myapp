
import styles from "../../styles/component/pagetitle.module.scss"

type Props ={
    title:string;
}

const PageTitleCp = ({title}:Props) =>{

    return(

        <div className={styles.title_text}>
            <span>{title}</span>
        </div>
    )
}

export default PageTitleCp