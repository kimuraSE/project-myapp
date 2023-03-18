import { useRouter } from "next/router"
import { ChangeEvent, MouseEvent, useState } from "react"
import { BlogServiceClient } from "../../../pb/BlogServiceClientPb"
import { LoginRequest } from "../../../pb/blog_pb"
import {setCookie} from "nookies"
import Head from "next/head"

const client = new BlogServiceClient("https://kimuraryotaportfolio.link",null,null)

const Login = ()=>{

    const router = useRouter()
    const [inputName,setInputName] = useState("")
    const [inputPwd,setInputPwd] = useState("")

    const onChangeName = (e:ChangeEvent<HTMLInputElement>) =>{
        setInputName(e.target.value)
    }

    const onChangePwd = (e:ChangeEvent<HTMLInputElement>) =>{
        setInputPwd(e.target.value)
    }

    const onClickLogin = (e:MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()

        const request = new LoginRequest()
        request.setName(inputName)
        request.setPwd(inputPwd)

        client.loginMethod(request,{},(err,res)=>{

            if(res.getLoginmessage() === "jdkfetw3"){

                const maxAge = 69 * 60
           
            const cookieData={
                user_name:inputName,
                user_pwd:inputPwd
            }

            setCookie(null,"userCookie",JSON.stringify(cookieData),{
                maxAge,
                path:'/'
            })

            router.push("/bash/top")

            }else if(err){
                alert("ログイン失敗")
            }
        })


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
        <label htmlFor="name">名前：</label>
        <input type="text" id="name" value={inputName} onChange={onChangeName}/>
        <p></p>
        <label htmlFor="pwd">パスワード:</label>
        <input type="text" id="pwd" value={inputPwd} onChange={onChangePwd}/>
        <p></p>
        <button onClick={onClickLogin}>Login</button>
        </div>
        </>
    )
}
export default Login