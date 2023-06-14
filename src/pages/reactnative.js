import * as React from "react";
import Layout from "../components/layout";
import {
    heroNative,
    article
  } from '../components/layout.module.css'
import native from '../images/native.png'



const ReactNative = () =>{
    return (
        <Layout pageTitle="Looking into React Native">
            <header className={heroNative}>
                <img src={native} alt="Main Image" />
            </header>
            <article className={article}>It's amusing that we're starting React Native this week in class (Wednesday, June 14th, 2023), especially because my brother was just talking about how much he hated React Native. His complaints sounded valid, and it doesn't deter me from the subject; I just found it funny. As for what he was complaining about, he said he was running into a bug that he had to fix, and he hated that it took so long to load up an environment to test the bug. I'm not sure yet if that means it is inherently hard to test for mobile bugs on the computer, but I will find out this week, one way or another. One thing that is going to be easy for me is that it's JavaScript-based, which is great as a JS developer, such as myself.
            </article>
        </Layout>
    )
};

export const Head = () => <title>React Native</title>

export default ReactNative;