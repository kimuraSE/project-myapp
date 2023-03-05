import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { VideoHTMLAttributes } from "react";

import styles from "../styles/404.module.scss"

import PageTitleCp from "./cp/_pageTitle";

const videoProps = {
    children: <source src='/video/home.mp4' type='video/mp4' />,
    autoPlay: true,
    muted: true,
    loop: true
}

const NotFound: NextPage = () => {

    return (
        <>

        <Head>
        <title>Not Found</title>
        <meta name="description" content="Not Foundページ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <div className="global_container">

            <div className={styles.video_box}>
                <video {...(videoProps as VideoHTMLAttributes<HTMLVideoElement>)}>
                    <source src="/video/home.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="normal_container">
            

                <main>
                    <PageTitleCp title="Not Found" />

                    <div className={styles.article_box}>

                        <article>

                            <div className={styles.section_box}>
                                <section>

                                    <div className={styles.text_box}>該当するページが見つかりません。<p></p><Link href="/">ホーム</Link>に戻る。</div>

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

export default NotFound;