
import { useRouter } from "next/router"
import styles from "../../../styles/bash/bashcreate.module.scss"
import {parseCookies} from "nookies"

import {BlogServiceClient} from "../../../pb/BlogServiceClientPb"
import {CreateRequest} from "../../../pb/blog_pb"
import { ChangeEvent, MouseEvent, useState } from "react"
import { GetServerSideProps } from "next"
import Head from "next/head"

const client = new BlogServiceClient("https://kimuraryotaportfolio.link",null,null)


type Props ={
    user_name : string;
    user_pwd : string;
}

const BashCreate = ({user_name,user_pwd}:Props) =>{

    const router = useRouter()
    const [inputTitle,setInputTitle] = useState("")
    const [inputDetail,setInputDetail] = useState("")

    const onChangeTitle = (e:ChangeEvent<HTMLInputElement>) =>{
        setInputTitle(e.target.value)
    }

    const onChangeDetails = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        setInputDetail(e.target.value)
    }


    const onClickRegister = (e:MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()

        const request = new CreateRequest()
        request.setTitle(inputTitle)
        request.setDetail(inputDetail)

        client.createMethod(request,{},()=>{
            router.push("/bash/top")
        })
    }


    const onClickTop = (e:MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        router.push("/bash/top")
    }

    return(
        <>
        <Head>
        <title>管理者ページ</title>
        <meta name="description" content="管理者ページ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        </Head>
        <div>
            <div>管理者</div>
            <div>名前:{user_name}</div>
            <div>pwd:{user_pwd}</div>
        </div>
        <div className={styles.container}>
        <label htmlFor="title">タイトル:</label>
        <input type="text" id="title" value={inputTitle} onChange={onChangeTitle}/>

        <div className={styles.detailes_box}>
            <textarea value={inputDetail} onChange={onChangeDetails}></textarea>
        </div>

        <div className={styles.btn_box}>
            <button onClick={onClickRegister}>登録</button>
            <button onClick={onClickTop}>Top</button>
        </div>
        </div>
        </>
    )
}
export default BashCreate



export const getServerSideProps:GetServerSideProps= async(context)=>{
    const cookie = parseCookies(context)
    const CookieData=cookie.userCookie

    if (!CookieData) {
        return {
          redirect: {
            destination: '/', // リダイレクト先のパス
            permanent: false, // リダイレクトをキャッシュするかどうか
          },
        };
      }

    const {user_name,user_pwd}=JSON.parse(CookieData)

       return{
        props:{
            user_name,
            user_pwd
        }
    }
}