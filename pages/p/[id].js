import {useRouter} from 'next/router';
import Layout from '../../components/Layout';

const Post = ()=>{
    const router = useRouter();

    return(
        <Layout>
            <h1>{router.query.id}</h1>
            <p>This is the blog post content</p>
            <style jsx>{`
                h1{
                    margin-top:160px;
                }
            `}</style>
        </Layout>
    );
}

export default Post;