import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import Footer from "../components/footer";
import React from "react";

export default class MyDocument extends Document {
  
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  
  render() {
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
    const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
    
    return (
      <Html lang="es-CL">
        <Head>
          <meta charSet='utf-8'/>
          <meta name="description" content="DrCheck | Recibe tu nuevo hogar de manos de un experto | Somos parte de Constructora EGT SPA"/>
          <meta name="keywords"
                content="inmobiliarias, departamento, casa, hogar, entrega, proceso de entrega, inspacción, constructoras"/>
          <meta name="author" content="drcheck.cl"/>
          <meta name="copyright" content="drcheck.cl"/>
          <meta httpEquiv="cache-control" content="no-cache"/>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}/>
          <script async
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_ID}');
  gtag('config', '${GTM_ID}');`,
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"/>`,
            }}
          />
        </Head>
        <body className="aselect-none">
          <div className="flex flex-col h-screen">
            <Main/>
            <div className="flex-grow">
              <NextScript/>
            </div>
            <Footer/>
          </div>
        </body>
      </Html>
    );
  }
}
