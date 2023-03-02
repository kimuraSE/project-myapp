
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import {parseCookies} from "nookies"
import styles from "../../../styles/bash/bashtop.module.scss"
import { destroyCookie } from "nookies"
import { useEffect, useState } from "react"
import {BlogServiceClient} from "../../../pb/BlogServiceClientPb"
import {Blog,ListBlogsRequest} from "../../../pb/blog_pb"
import BlogList from "./_bloglist"




interface Props {
      user_name : string;
      user_pwd : string
  }



const BashTop = ({user_name,user_pwd}:Props) =>{

    const router = useRouter()
    const [blogLists,setblogLists]= useState<Blog[]>([])


    useEffect(() => {
    const client = new BlogServiceClient("http://localhost:9000",null,null)
    const request = new ListBlogsRequest()

    client.listBlogs(request,{},(err,response)=>{

        if(err){
            console.log(err)
        }else{
            setblogLists(response.getBlogsList())
        }

    })

      }, []);


    const onClickCreate = () =>{
        router.push("/bash/top/create")
    }

    const onClickLogout = () =>{
        destroyCookie(null,'userCookie',{
            path: '/',
          })
        router.push("/")
    }


    return(
        <>
        <div>
            <div>管理者</div>
            <div>{user_name}</div>
            <div>{user_pwd}</div>
        </div>

        
        <div className={styles.btn_box}>
            <button onClick={onClickCreate}>作成</button>
            <button onClick={onClickLogout}>ログアウト</button>
        </div>



        {blogLists.map((blog)=>(

            <BlogList key={blog.getId()} id={blog.getId()} title={blog.getTitle()}/>

        ))}

        
        
        </>
    )
}

export default BashTop

export const getServerSideProps:GetServerSideProps= async(context)=>{
    const cookie = parseCookies(context)
    const CookieData=cookie.userCookie

    if (!CookieData) {
        return {
          redirect: {
            destination: '/', 
            permanent: false, 
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