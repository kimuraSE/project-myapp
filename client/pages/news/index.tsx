
import { useEffect, useState, VideoHTMLAttributes } from "react"
import styles from "../../styles/news.module.scss"
import NewsCp from "../cp/_news"
import MenuCp from "./../cp/_menu"
import PageTitleCp from "./../cp/_pageTitle"
import {BlogServiceClient} from "../../pb/BlogServiceClientPb"
import {ListBlogsRequest,Blog} from "../../pb/blog_pb"
import Head from "next/head"


const videoProps = {
    children: <source src='/video/home.mp4' type='video/mp4' />,
    autoPlay: true,
    muted: true,
    loop: true
}

const NewsPage = () => {
    const [blogLists,setblogLists]= useState<Blog[]>([])

    useEffect(() => {
        const client = new BlogServiceClient("http://localhost:8080",null,null)
        const request = new ListBlogsRequest()
    
        client.listBlogs(request,{},(err,response)=>{
    
            if(err){
                console.log(err)
            }else{
                setblogLists(response.getBlogsList())
            }
    
        })
    
          }, []);
    


    return (
        <>
        <Head>
        <title>Kimura Ryotaのportfolio | news</title>
        <meta name="description" content="kimura ryotaのportfolioのnews項目です" />
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

                                        {blogLists.map((item) => (
                                            <NewsCp key={item.getId()} id={item.getId()} title={item.getTitle()} />
                                        ))}


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

export default NewsPage