import Script from "next/script";
import "../styles/globals.css";
import Head from "next/head";

const app = ({Component, pageProps}) =>{
    return(
        <>
            <Head>
                <title>Alumnite</title>
            </Head>
            <Component {...pageProps}/>
            <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
            <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
        </>
    )
}

export default app;