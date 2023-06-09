
import * as React from "react";
import Layout from "../components/layout";
import {
    hero,
  } from '../components/layout.module.css'
import react from '../images/react.png'



const ApiPost = () =>{
    return (
        <Layout pageTitle="Best API React Practices">
            <header className={hero}>
                <img src={react} alt="Main Image" />
            </header>
            <article>When it comes to best Practices for ReactJS and API's, i think i speak for everyone when i say dotenv is one of (If not the BEST) tool in our arsenal. Hiding my API keys and API endpoints and not being forced to hardcode them into my standard code is super useful! Even though That is more of a lazy man's benefit, It also helps with security as well so double benefit!</article>
        </Layout>
    )
};

export const Head = () => <title>Api React Practices</title>

export default ApiPost;