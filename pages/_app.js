const MyApp = ({Component, pageProps})=>{
    
    const phone = 1;
    return <Component phone={phone} {...pageProps}/>;
}

MyApp.getInitialProps =  async({Component,ctx})=>{
    let pageProps ={};
    if (Component.getInitialProps){
        pageProps = await Component.getInitialProps(ctx);
        console.log(pageProps);
    }
    return {
        pageProps:pageProps
    }
}

export default MyApp;

