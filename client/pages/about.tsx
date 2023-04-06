import {VideoHTMLAttributes} from "react"
import styles from "/styles/about.module.scss"
import MenuCp from "./cp/_menu"
import PageTitleCp from "./cp/_pageTitle"
import Head from "next/head"
import img1 from "../public/img/about/myapp-cluster.png"
import img2 from "../public/img/about/future.jpg"
import img3 from "../public/img/about/kimura.jpg"

import Image from "next/image"


const videoProps ={
    children: <source src='/video/home.mp4' type='video/mp4' />,
    autoPlay:true,
    muted: true,
    loop: true
  }

  
const AboutPage =()=>{


    return(
        <>
        <Head>
        <title>Kimura Ryotaのportfolio | about</title>
        <meta name="description" content="kimura ryotaのportfolioのabout項目です" />
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
        <PageTitleCp title="About"/>

            <div className={styles.article_box}>

            <article>

            <div className={styles.section_box}>
            <section>
                <div className={styles.section_number}>01</div>
                <span>自己紹介</span>

                <div className={styles.text_box}>

                    <span>拝見いただきありがとうございます。<p></p>
                    私は愛知県の某工業大学在住、1年の休学期間を得て現在3年生(21歳)。<p></p>
                    「常に向上していく技術」「誇れる技術」「感動を与える技術」をモットーに、<p></p>
                    HP制作やWebアプリケーション開発、プログラミング学習に日々取り組んでおります。<p></p>
                    
                    </span>

                </div>

                <Image src={img3} alt="kimuraryotaの画像"/>

                
            </section>
            </div>


            <div className={styles.section_box}>
            <section>
                <div className={styles.section_number}>02</div>
                <span>将来の展望</span>

                <div className={styles.text_box}>

                    <span>
                    将来的には、マイクロサービスやモノリシックサービスを構築するためのバックエンドエンジニアとして活躍していきたいと思っています。<p></p>
                    私は誰にも負けない技術を持つ技術者になるために常に成長し続け、より高品質なサービスを提供するエンジニアになります。<p></p>
                    そして、常に新しい技術に挑戦し、情熱と向上心を持って自分自身を向上させていくことを大切にしています。<p></p>
                    </span>

                </div>
                <Image src={img2} alt="将来の展望の画像" />
            </section>
            </div>



            <div className={styles.section_box}>
            <section>
                <div className={styles.section_number}>03</div>
                <span>スキル紹介</span>

                <div className={styles.text_box}>

                    <span>
                        使用言語 : HTML,CSS（Sass）,Javascript（Typescript）,Go<p></p>
                        フレームワーク,ライブラリ : Next.js,React,Gin<p></p>
                        データベース : MySQL,MariaDB<p></p>
                        バージョン管理 : Git,Github
                        ソフトウェア : AdobeXD.Photoshop,Illustrator<p></p>
                        クラウドインフラ : AWS<p></p>
                        コンテナ技術 : Docker<p></p>
                        通信プロトコル : REST,gRPC<p></p>
                        アーキテクチャ : モノリシックサービス,マイクロサービス<p></p>
                        ...以上が私が用いる技術になります。<p></p>
                        HP制作ではGoogleでの検索順位が上位に入りやすくなるSPA(シングルページアプリケーション)技術を
                        可能にするNext.jsフレームワークを使用し制作しております。
                        また、現在もっとも普及しているとされてるREST APIよりも素早いサービス間通信が行える
                        「gRPC」を用いたWebアプリケーション開発を行っております。
                        私のこのポートフォリオサイトも「News」項目にあるブログ機能を実現するためgRPC通信を利用して構築致しました。
                    </span>

                </div>

                <Image src={img1} alt="kimura ryotaのアプリケーションのアーキテクチャ画像"/>
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

export default AboutPage