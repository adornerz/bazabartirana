import React from 'react'
import { PrismaClient } from "@prisma/client";

const Blog = (props) => {
    return (
        <div>
            <br />
            <br />
            !! THIS PAGE IS FOR TESTING FOR NOW // NOT FINISHED!!
            <br />
            <br />
            Title: {props.title}
            <br />
            Body: {props.body}
            <br />
            Author: {props.author}
            <br />
            Image: {props.image}
        </div>
    )
}

export default Blog

export async function getServerSideProps(context) {

    const prisma = new PrismaClient();
    const blogUrl = context.params.url
    const post = await prisma.post.findMany({
        where: {
            url: blogUrl
        }
    });

    return {
        props: {
            title: post[0].title,
            author: post[0].author,
            body: post[0].body,
            image: post[0].image,
        }
    }

}