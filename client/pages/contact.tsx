import { ChangeEvent, FormEvent,  useState, VideoHTMLAttributes } from "react"
import styles from "../styles/contact.module.scss"
import MenuCp from "./cp/_menu"
import PageTitleCp from "./cp/_pageTitle"
import Image from "next/image";
import twitter_icon from "../public/icon/twittericon.png"

const videoProps = {
    children: <source src='/video/home.mp4' type='video/mp4' />,
    autoPlay: true,
    muted: true,
    loop: true
}

const ContactPage = () => {

    const [select, setSelect] = useState("")
    const [company, setCompany] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [others, setOthers] = useState("")


    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelect(e.target.value)
    }

    const onChangeCompany = (e: ChangeEvent<HTMLInputElement>) => {
        setCompany(e.target.value)
    }
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const onChangEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const onChangeOthers = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setOthers(e.target.value)
    }

    const onClickSend = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(select.trim() === "" ){

            alert("お問い合わせ内容を入力してください")

            return
        }

        if(name.trim() === "" ){

            alert("お名前を入力してください")

            return
        }
        if(email.trim() === "" ){

            alert("メールアドレスを入力してください")

            return
        }


        let data = {
            select : select,
            company : company,
            name : name,
            email : email,
            others : others
        }

        await fetch("api/contact",{
            method : "POST",
            headers:{
                Accept : "application/json, text/plain",
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(data),
        }).then((res)=>{
            if(res.status === 200) alert("送信完了")
        })

        };



       
    

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

                        <PageTitleCp title="Contact" />


                        <div className={styles.article_box}>

                            <article>

                                <div className={styles.section_box}>
                                    <section>
                                        <div className={styles.twitter_box}>
                                            <Image src={twitter_icon}
                                                alt="twitterのアイコン画像"
                                            />

                                            <a href="https://twitter.com/Webweb1K">@Webweb1K</a>

                                            <span>何か気になる点やご質問、お仕事の依頼がありましたら、お気軽にご連絡ください。<p></p>
                                                迅速にご対応させていただきます。
                                            </span>
                                        </div>

                                    </section>
                                </div>



                                <div className={styles.section_box}>
                                    <section>
                                        <div className={styles.form_box}>

                                            <div>お問い合わせ</div>

                                            <form onSubmit={onClickSend}>

                                                <dl>
                                                    <dt>お問い合わせ内容</dt>
                                                    <dd><select value={select} onChange={onChangeSelect}>
                                                        <option value="">選択する</option>
                                                        <option value="質問・ご相談">質問・ご相談</option>
                                                        <option value="お仕事のご依頼">お仕事のご依頼</option>
                                                        <option value="その他">その他</option>
                                                    </select></dd>
                                                </dl>

                                                <dl>
                                                    <dt>御社名</dt>
                                                    <dd><input type="text" value={company} onChange={onChangeCompany} placeholder="例) 株式会社example" /></dd>
                                                </dl>

                                                <dl>
                                                    <dt>お名前</dt>
                                                    <dd><input type="text" value={name} onChange={onChangeName} placeholder="例) 山田 太郎" /></dd>
                                                </dl>
                                                <dl>
                                                    <dt>メールアドレス</dt>
                                                    <dd><input type="email" value={email} onChange={onChangEmail} placeholder="例) example@gmail.com" /></dd>
                                                </dl>
                                                <dl>
                                                    <dt>備考</dt>
                                                    <dd><textarea value={others} onChange={onChangeOthers} placeholder="例) サーバーサイド言語は何を使用していますか？"></textarea></dd>
                                                </dl>
                                                <dl>
                                                    <dt>
                                                        <button type="submit">送信</button>
                                                    </dt>
                                                </dl>

                                            </form>
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

export default ContactPage