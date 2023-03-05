import Head from 'next/head'
import styles from "../styles/home.module.scss"
import { VideoHTMLAttributes } from "react"
import Link from 'next/link'


const videoProps = {
  children: <source src='/video/home.mp4' type='video/mp4' />,
  autoPlay: true,
  muted: true,
  loop: true
}

export default function Home() {


  return (
    <>
      <Head>
        <title>Kimura Ryotaのportfolio</title>
        <meta name="description" content="kimura ryotaのportfolioのTopページ項目です。どういった技術を使っているのか？など公開しております。みなさんに私の人物像が伝わって頂けたら幸いです。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="kimuraryota portfolio" />
        <meta property="og:title" content="kimura ryotaのportfolio" />
        <meta property="og:description" content="kimura ryotaのportfolioのTopページ項目です。どういった技術を使っているのか？など公開しております。みなさんに私の人物像が伝わって頂けたら幸いです。" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://kimuraportfolio.link" />
        <meta property="og:image" content="https://kimuraportfolio.link/icon/page_img.jpg" />
        <meta property="og:site_name" content="kimuraryotaのportfolio" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Webweb1K" />
        <meta name="twitter:title" content="kimura ryotaのportfolio" />
        <meta name="twitter:description" content="kimura ryotaのportfolioのTopページ項目です。どういった技術を使っているのか？など公開しております。みなさんに私の人物像が伝わって頂けたら幸いです。" />
        <meta name="twitter:image" content="https://kimuraportfolio.link/icon/page_img.jpg" />
      </Head>

      <div className="global_container">


        <div className={styles.video_box}>
          <video {...(videoProps as VideoHTMLAttributes<HTMLVideoElement>)}>
            <source src="/video/home.mp4" type="video/mp4" />
          </video>
        </div>



        <div className="normal_container">

          <div className={styles.eyecatchtext_box}>

            <h1>感動と喜びを<p />
              届けられる技術者に
            </h1>
            <h3>/ kimura ryotaのポートフォリオ</h3>
            <h2>Full-Stack Developer</h2>

          </div>




          <div className={styles.header_box}>
            <header>
              <nav>
                <ul>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/skills">Skills</Link></li>
                  <li><Link href="/project">Project</Link></li>
                  <li><Link href="/news">News</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </nav>
            </header>
          </div>
        </div>

        <div>
        </div>

      </div>
    </>
  )
}
