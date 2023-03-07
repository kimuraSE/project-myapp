import { GetServerSideProps } from "next"
import { useEffect, useState, VideoHTMLAttributes } from "react"
import styles from "../../styles/newsid.module.scss"
import MenuCp from "../cp/_menu"
import PageTitleCp from "../cp/_pageTitle"
import {BlogServiceClient} from "../../pb/BlogServiceClientPb"
import {DetailesRequest} from "../../pb/blog_pb"
import { useRouter } from "next/router"
import Head from "next/head"

const client = new BlogServiceClient("http://localhost:8080",null,null) 


const videoProps = {
    children: <source src='/video/home.mp4' type='video/mp4' />,
    autoPlay: true,
    muted: true,
    loop: true
}

interface Props {
    numericId:number
  }

const NewsIdPage = ({numericId}:Props) => {

    const router = useRouter()

    const [title,setTitle] = useState("")
    const [details,setDetails] = useState("")

    useEffect(()=>{

        const request = new DetailesRequest()
        request.setId(numericId)
        
        client.readDetails(request,{},(err,response)=>{
            
            if(err){
                router.push("/")
                
            }else{
                setTitle(response.getTitle())
                setDetails(response.getDetails())
            }
            
        })
        
    },[])


    return (
        <>
        <Head>
        <title>Kimura Ryotaのportfolio | news | blog</title>
                <meta name="description" content="ブログ記事です" />
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
                        <PageTitleCp title="News" />

                        <div className={styles.article_box}>

                            <article>

                                <div className={styles.section_box}>
                                    <section>

                                        <div className={styles.title}>
                                            {title}
                                        </div>

                                        <div className={styles.text_box}>
                                        {details}
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

export default NewsIdPage

export const getServerSideProps : GetServerSideProps =async(context)=>{

    const { params } = context;
    const id = params?.id

    let title,details

    if (!id) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        };
      }

      const numericId = /^\d+$/.test(id as string) ? parseInt(id as string, 10) : null;

      if (!numericId) {
        return {
          notFound: true,
        };
      }




    return{
        props:{
            numericId
        }
    }
}