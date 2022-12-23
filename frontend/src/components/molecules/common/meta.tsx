import { NextComponentType, NextPageContext } from 'next';
import Head from 'next/head';
import { ConstraintMetaConfig as Default } from '@/configs';

type Props = {
  pageFullPath: string; // page full path
  pageAsPath: string; //  page as path
  pageTitle?: string; // pageのtitle
  pageDesc?: string; // そのpageのdescription
  ogpImage?: string; // そのpageでの指定画像
  noIndex?: boolean; // googleに追わせない。
};

/**
 * @desc 各pageでincludeし使用する（defaultを使用する場合は引数に含めないこと）
 */
export const Meta: NextComponentType<NextPageContext, null, Props> = ({
  pageFullPath,
  pageAsPath,
  pageTitle,
  pageDesc,
  ogpImage,
  noIndex = false,
}) => {
  const title = pageTitle ?? Default.PAGE_TITLE;
  const description = pageDesc ?? Default.PAGE_DESCRIPTION;
  const type = pageAsPath === '/' ? 'blog' : 'article';
  const url = pageFullPath ?? Default.PAGE_URL;
  const siteName = 'Naohito-T Blog';
  const ogImg = ogpImage ?? Default.PAGE_OG_IMAGE;
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      {/* pageのタイトル */}
      <meta property='og:title' content={title} />
      {/* ページの概要として表示される説明文を記述します。 */}
      <meta property='og:description' content={description} />
      {/* pageのタイプを指定する トップページの場合websiteまたはblog、下層ページはarticle */}
      <meta property='og:type' content={type} />
      {/* ページのURLを記述します。絶対パスで指定してください。 */}
      <meta property='og:url' content={url} />
      {/* サイト名を記述します。 */}
      <meta property='og:site_name' content={siteName} />
      {/* SNSでシェアされた場合に表示される画像を設定します。
      ここで画像を設定しない場合は、ページ内で使用されている画像からランダムで画像が選ばれて表示されます。 */}
      <meta property='og:image' content={ogImg} />
      <meta property='og:locale' content='ja_JP' />
      {/* サイトやブログの管理者をFacebookに伝えるためのタグだそうですが、この記述がなくても上記のみでページの情報は表示されます。 */}
      {/* この記述をすることによって、Facebookからサイトへのトラフィック分析ができるFacebookインサイトを利用できるようになるようです。 */}
      <meta property='fb:app_id' content='' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      {/* iPhone Safariは文書内の電話番号を検出して自動的にリンクにしてしまうため無効（a要素のtel:を使用した方が確実 */}
      <meta name='format-detection' content='telephone=no' />
      {/* faviconの設定 */}
      <link rel='shortcut icon' type='image/svg+xml' href='/favicon.svg' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      {/* @see https://www.symmetric.co.jp/blog/archives/93 */}
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='black'></meta>
      {/* noIndex === true の場合のみ noindex 有効化 */}
      {noIndex && <meta name='robots' content='noindex' />}
    </Head>
  );
};
