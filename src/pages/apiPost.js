
import * as React from "react";
import Layout from "../components/layout";
import {
    hero,
    article
  } from '../components/layout.module.css'
import react from '../images/react.png'



const ApiPost = () =>{
    return (
        <Layout pageTitle="Best API React Practices">
            <header className={hero}>
                <img src={react} alt="Main Image" />
            </header>
            <article className={article}>When it comes to best Practices for ReactJS and API's, I think I speak for everyone when I say dotenv is one of (If not the BEST) tool in our arsenal. Hiding my API keys and API endpoints and not being forced to hardcode them into my standard code is super useful! Even though that is more of a lazy man's benefit, It also helps with security as well sooo, double benefit!
            Something else that can be done is that you can use Jest (a testing based software) to see if your API is being handled correctly. Using testing based software will ensure that there is no bugs and that your API operates the way it was intended.
            </article>
        </Layout>
    )
};

export const Head = () => <title>Api React Practices</title>

export default ApiPost;