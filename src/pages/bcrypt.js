
import * as React from "react";
import Layout from "../components/layout";
import {
    heroEncrypt,
    article
  } from '../components/layout.module.css'
import encrypt from '../images/encrypt.png'



const Bcrypt = () =>{
    return (
        <Layout pageTitle="Password Hashing">
            <header className={heroEncrypt}>
                <img src={encrypt} alt="Main Image" />
            </header>
            <article className={article}>If you dont know hashing I will describe it really quick and its importance. Hashing is used to make it really hard to reverse engineer a password. Hashing's definition is basically a function that assigns your password to a random value of numbers and letters. the importance of using this for large websites is self explanatory but its for protection. I have started using bcrypt (a hashing pre made service) and it stays at the top of the market for hashing.
            </article>
        </Layout>
    )
};

export const Head = () => <title>Password Hashing</title>

export default Bcrypt;