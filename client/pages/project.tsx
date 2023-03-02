import { VideoHTMLAttributes } from "react"
import styles from "../styles/project.module.scss"
import MenuCp from "./cp/_menu"
import PageTitleCp from "./cp/_pageTitle"


const videoProps = {
    children: <source src='/video/home.mp4' type='video/mp4' />,
    autoPlay: true,
    muted: true,
    loop: true
}

const ProjectPage = () => {

    return (
        <>
            <div className="global_container">

                <div className={styles.video_box}>
                    <video {...(videoProps as VideoHTMLAttributes<HTMLVideoElement>)}>
                        <source src="/video/home.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="normal_container">


                    <MenuCp />

                    <main>

                        <PageTitleCp title="Project" />


                        <div className={styles.article_box}>

                            <article>

                                <div className={styles.section_box}>
                                    <section>
                                        <div className={styles.section_number}>01</div>
                                        <span>制作手順</span>

                                        <div className={styles.text_box}>

                                            <span>
                                                完成し次第更新致します。
                                            </span>

                                        </div>
                                    </section>
                                </div>

                                <div className={styles.section_box}>
                                    <section>
                                        <div className={styles.section_number}>2</div>
                                        <span>実績一覧</span>

                                        <div className={styles.text_box}>

                                            <span>
                                                完成し次第更新致します。
                                            </span>

                                        </div>
                                    </section>
                                </div>




                            </article>
                        </div>
                    </main>


                </div>


            </div>


        </>
    )
}

export default ProjectPage