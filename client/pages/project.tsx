import Head from "next/head"
import { VideoHTMLAttributes } from "react"
import styles from "../styles/project.module.scss"
import MenuCp from "./cp/_menu"
import PageTitleCp from "./cp/_pageTitle"
import Image from "next/image"
import img1 from "@/public/img/skills/myapp-webesign.png"

const videoProps = {
    children: <source src='/video/home.mp4' type='video/mp4' />,
    autoPlay: true,
    muted: true,
    loop: true
}

const ProjectPage = () => {

    return (
        <>

            <Head>
                <title>Kimura Ryotaのportfolio | project</title>
                <meta name="description" content="kimura ryotaのportfolioのnews項目です" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
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
                                        <div className={styles.section_number}>1</div>
                                        <span>紹介</span>

                                        <div className={styles.text_box}>

                                            <span>
                                            主にホームページの制作を案件として受注しております。個性豊かなデザインで魅力的なホームページを制作。SEO対策で検索エンジンの上位表示を目指し、
                                            使用性や操作性抜群のサイトでユーザーの満足度を高めます。そして、あなたのビジネスを成功に導くパートナーとして、
                                            最適なソリューションを提供いたします。
                                            </span>

                                        </div>
                                    <Image src={img1} alt="projectページの画像"></Image>
                                    </section>
                                </div>

                                <div className={styles.section_box}>
                                    <section>
                                        <div className={styles.section_number}>2</div>
                                        <span>実績</span>

                                        <div className={styles.text_box}>

                                            <span>
                                                現在制作中。完成次第更新致します
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