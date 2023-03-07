import { MouseEvent } from "react";
import styles from "../../../styles/bash/bloglist.module.scss"
import {BlogServiceClient} from "../../../pb/BlogServiceClientPb"
import {DeleteBlogRequest} from "../../../pb/blog_pb" 
import { useRouter } from "next/router";



  interface Props {
    id : number;
    title: string;
  }

const client = new BlogServiceClient("http://localhost:8080",null,null)


const BlogList = ({id,title}:Props) => {

    const router = useRouter()
    
    const onClickDelete = (e:MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()

        const request = new DeleteBlogRequest()
        request.setId(id)
        request.setTitle(title)

        client.deleteBlog(request,{})
        router.reload()

    }

    return (
        <>
            <div className={styles.news_list}>

                <div>

                    <div>{title}</div>
                    

                    <button onClick={onClickDelete}>削除</button>

                </div>

            </div>
        </>
    )
}

export default BlogList