import Head from "next/head";
import { VideoHTMLAttributes } from "react";
import MenuCp from "./cp/_menu";
import PageTitleCp from "./cp/_pageTitle";
import styles from "/styles/skills.module.scss";
import img1 from "../public/img/about/myapp-cluster.png";
import img2 from "../public/img/skills/micro-img.jpg";
import img3 from "../public/img/skills/myapp-webesign.png";
import Image from "next/image";

const videoProps = {
  children: <source src="/video/home.mp4" type="video/mp4" />,
  autoPlay: true,
  muted: true,
  loop: true,
};

const skillsPage = () => {
  return (
    <>
      <Head>
        <title>Kimura Ryotaのportfolio | skills</title>
        <meta
          name="description"
          content="kimura ryotaのportfolioのskills項目です"
        />
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
            <PageTitleCp title="Skills" />

            <div className={styles.article_box}>
              <article>
              

                <div className={styles.section_box}>
                  <section>
                    <div className={styles.section_number}>01</div>
                    <span>ホームページ制作</span>

                    <div className={styles.text_box}>
                      <span>
                        ホームページ制作ではクライアント様からの要望に応えるだけでなく、
                        <p></p>
                        ユーザーの目を引き、使用性に不憫がない満足していただけるようなホームページを作成するため、心の中に眠っている要望をも引き出し、ご提案させて頂きます。
                        <p></p>
                        最高の品質と感動をお届けするようなホームページを作り上げられるよう全力を尽くします。
                      </span>
                    </div>

                    <Image src={img3} alt="ホームページを作成するHTMLの画像" />
                  </section>
                </div>

                <div className={styles.section_box}>
                  <section>
                    <div className={styles.section_number}>02</div>
                    <span>マイクロサービス</span>

                    <div className={styles.text_box}>
                      <span>
                        Webアプリケーション開発ではサービス間通信をgRPC通信で行っております。
                        <p></p>
                        gRPC通信とはREST
                        APIとは異なり、データをJSON形式でやりとりするのではなく、
                        <p></p>
                        シリアライズされたバイナリ形式でデータをやりとりしているので、
                        <p></p>
                        JSOM形式に比べデータ通信量が少なくかつ、高速にデータをやりとりすることができます。
                        <p></p>
                        私もこのポートフォリオサイトではgRPC通信を使用して構築致しました。
                      </span>
                    </div>

                    <Image src={img2} alt="マイクロサービスを表す画像" />
                  </section>
                </div>

                


              </article>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default skillsPage;
