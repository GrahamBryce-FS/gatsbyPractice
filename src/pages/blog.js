import * as React from "react";
import Layout from "../components/layout";
import { Link } from 'gatsby';

const Blog = () => {
    return(
        <Layout pageTitle="My Blog Posts">
            <h2><Link to="/ai">Artificial Intelligence</Link></h2>
                <p>Wednesday, June 12th 2022</p>
            <h2><Link to="/cybersecurity">Cyber Security</Link></h2>
                <p>Wednesday, August 14th 2021</p>
            <h2><Link to="/vr">VR</Link></h2>
                <p>Saturday, June 15th 2022</p>
        </Layout>
    )
}

export const Head = () => <title>Blog</title>

export default Blog;