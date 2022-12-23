import 'styled-components';

export const variables = {
  black: '#000',
  white: '#fff',
  descColor: '#FFFFDD',
} as const;

type Variables = typeof variables;

/**
 * @see https://qiita.com/Takepepe/items/eec6e1d2101570e7e241
 * @desc props.theme.xxx 以降に型が効くようになる。
 * 型定義の注入テクニックです。DefaultTheme として用意された空っぽの interface * に対し、宣言結合拡張することで、プロジェクト固有の型定義を注入することが出来る
 */
declare module 'styled-components' {
  export interface DefaultTheme extends Variables {}
}
