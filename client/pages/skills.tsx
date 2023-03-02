import { VideoHTMLAttributes } from "react";
import MenuCp from "./cp/_menu";
import PageTitleCp from "./cp/_pageTitle";
import styles from "/styles/skills.module.scss"


const videoProps = {
    children: <source src='/video/home.mp4' type='video/mp4' />,
    autoPlay: true,
    muted: true,
    loop: true
}

const skillsPage = () => {

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
                        <PageTitleCp title="Skills" />

                        <div className={styles.article_box}>

                            <article>

                                <div className={styles.section_box}>
                                    <section>
                                        <div className={styles.section_number}>01</div>
                                        <span>スキル紹介</span>

                                        <div className={styles.text_box}>

                                            <span>
                                                私が使用している技術は以下でございます。<p></p>

                                                フロントエンド : HTML,CSS(Sass),javascript(Typescript)<p></p>
                                                バックエンド : Go言語<p></p>
                                                フレームワーク : Next.js<p></p>
                                                インフラ技術 : AWS,Docker,マイクロサービス開発<p></p>
                                                ソフトウェア : AdobeXD.Photoshop,Illustrator<p></p>
                                                　<p></p>
                                                フロントエンドではNext.jsを使用してWebサイトのSPA(シングルページアプリケーション)化をし、<p></p>
                                                Googleでの検索順位を上位にするSEO対策を施しています。<p></p>
                                                他にも、利用者視点を重視し使用性に着目しながらHP制作を行っております。<p></p>
                                                フルスタックでの制作も可能ですので。<p></p>
                                                ドメインの取得からWebページの公開や運用・保守まですべてお任せ下さい。<p></p>

                                            </span>

                                        </div>
                                    </section>
                                </div>

                                <div className={styles.section_box}>
                                    <section>
                                        <div className={styles.section_number}>02</div>
                                        <span>マイクロサービス</span>

                                        <div className={styles.text_box}>

                                            <span>
                                                Webアプリケーション開発ではサービス間通信をgRPC通信で行っております。<p></p>
                                                gRPC通信とはREST APIとは異なり、データをJSON形式でやりとりするのではなく、<p></p>
                                                シリアライズされたバイナリ形式でデータをやりとりしているので、<p></p>
                                                JSOM形式に比べデータ通信量が少なくかつ、高速にデータをやりとりすることができます。<p></p>
                                                私もこのポートフォリオサイトではgRPC通信を使用して構築致しました。
                                            </span>

                                        </div>
                                    </section>
                                </div>


                                <div className={styles.section_box}>
                                    <section>
                                        <div className={styles.section_number}>03</div>
                                        <span>ホームページ制作</span>

                                        <div className={styles.text_box}>

                                            <span>
                                                ホームページ制作ではクライアント様からの要望に応えるだけでなく、<p></p>
                                                ユーザーの目を引き、使用性に不憫がない満足していただけるようなホームページを<p></p
                                                >作成するため、心の中に眠っている要望をも引き出し、ご提案させて頂きます。<p></p>
                                                最高の品質と感動をお届けするようなホームページを作り上げられるよう全力を尽くします。

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

export default skillsPage;