import Link from "next/link"
import styles from "../../styles/component/newscp.module.scss"


type Props ={
    id : number;
    title : string;
}

const NewsCp = ({id,title}:Props) => {

    return (
        <>
        <div className={styles.news_box}>

            <Link href={`/news/${id}`}>
                <div>

                    <div className={styles.news_title}>{title}</div>

                </div>
            </Link>

        </div>
        </>
    )
}

export default NewsCp