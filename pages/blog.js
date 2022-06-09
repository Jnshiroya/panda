import React,{ useEffect,useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const blog = () => {
    const [blog, setblog] = useState([]);
    useEffect(() => {
    fetch('http://localhost:3000/api/blogs').then((a)=>{
        return a.json();
    }).then((parsed)=>{
       setblog(parsed)
    })
    }, [])
    
    return (
        <div className={styles.container}>
            {
                blog.map((blogitem)=>{
                    return <div className={styles.blogitem} key={blogitem.slug}>
                    <Link href={`/blogpost/${blogitem.slug}`}><h1>{blogitem.title}</h1></Link>
                    <p>{blogitem.description}</p>
                </div>
                })
            }
        </div>
    )
}

export default blog