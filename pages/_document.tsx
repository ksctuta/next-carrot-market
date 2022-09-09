import Document, { Html, Head, Main, NextScript } from "next/document";

import { DocumentContext, DocumentInitialProps } from "next/document";

// class CustomDocument extends Document {
//   static async getInitialProps(
//     ctx: DocumentContext
//   ): Promise<DocumentInitialProps> {
//     const initialProps = await Document.getInitialProps(ctx);
// console.log("DOCUMENT IS RUNNING");
//     return initialProps;
//   }
export default function MyDocument(){
    console.log("DOCUMENT IS RUNNING");
    return (
          <Html lang="ko">
            <Head>
              <link
                href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&family=Open+Sans&display=swap"
                rel="stylesheet"
              ></link>
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        );
  }

  //class CustomDocument extends Document {
  //  render(): JSX.Element {
  //    console.log("DOCUMENT IS RUNNING");
  // beforeInteractive : 페이지를 다 불러와서 상호작용 적용하기 전 스크립트 불러오는 전략
  // afterInteractive(Default) : 페이지를 다 불러온 다음 스크립트를 불러오는 전략
  // lazyOnload : 스크립트를 불러오는데 최우선이 아닌 다른 모든 데이터나 소스들을 불러오고나서 불러옴
  // render() {
  //   return (
  //     <Html lang="ko">
  //       <Head>
  //         <link
  //           href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&family=Open+Sans&display=swap"
  //           rel="stylesheet"
  //         ></link>
  //       </Head>
  //       <body>
  //         <Main />
  //         <NextScript />
  //       </body>
  //     </Html>
  //   );
  // }
  // }

// export default MyDocument;
