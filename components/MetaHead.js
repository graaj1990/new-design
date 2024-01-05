import Head from 'next/head';
import React from 'react';
import { useEffect } from 'react';
import { useRouter } from "next/router";


const _PLATFORM_ = process.env.NEXT_PUBLIC_PLATFORM;

const MetaHead = React.memo(({
  title,
  description,
  keywords,
  canonical,
  langFromIndex,
  showFacebookMeta,
  pageImage
}) => { 
  const metaTitle = title ;
  const metaDescription = description ? description : null;
  const metaKeywords = keywords ? keywords : null;
  const canonicalUrl = canonical ? canonical : null;

  const baseDomain = langFromIndex === 'espanol' ? 'https://espanol.rockanddirt.com' : 'https://www.rockanddirt.com';

  //Facebook Domain Verfiication
  let fbVerify = null;
   

  const router = useRouter()
  const asPath = router?.asPath;

  useEffect(() => {
       
  }, [asPath]);

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta key="ogTitle" property='og:title' content={metaTitle} />
      {metaDescription ? <meta key="metaDesc" name="description" content={metaDescription} /> : null}
      {metaKeywords ? <meta key="metaKey" name="keywords" content={metaKeywords} /> : null}

      {/*Meta: Google Site Verification*/}
      <meta key="metaGoogleSV" name="google-site-verification" content="RlI3A1l7TEu4nab0A6pH-xiY-AA2qGttyPCxpssv378" />
      <meta name="google-site-verification" content="uIPgImZmKjreFtMPi0XZGr_uM0hsJYiAap8bwxupIi8" />
      </Head>
    );
    });

  export default MetaHead;