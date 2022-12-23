import 'styled-components';

export const theme = {
  black: '#000',
  black2: '#333',
  blackRgb: '0, 0, 0',
  white: '#fff',
  whiteRgb: '255, 255, 255',
  gray: '#a1a1af', // tags pageで使っている
  lightGray1: '#dadada',
  lightGray2: '#dedede',
  lightGray3: '#e9e9e9',
  lightGray4: '#a1a1a1',
  lightGray5: '#f1f1f1',
  lightGray6: '#f5f5f5',
  red: '#D80505',
  navy: '#2d4b70',
  verticalLine: '#555555', // top page center line color
  rainbow: `linear-gradient(84.75deg, #00E8A2 0%, #00A3FF 23.7%, #B61CFF 57.86%, #EA193E 87.24%, #FDC500 100%)`,
  rainbowHover: `linear-gradient(84.75deg, #00FFB2 0%, #0085D0 53.65%, #B833F7 72.4%, #FF0935 89.06%, #FFC701 100%)`,
  descColor: '#FFFFDD', // descriptionによく使用
  tagsPageBackColor: '#17141d', // /tags page内で使用
  techCategoryColor6: '#6127DB',
  techCategoryColor8: '#6127DBA6',
  designCategoryColor6: '#B51792',
  designCategoryColor8: '#B51792A6',
  frontCategoryColor6: '#17B5AB',
  frontCategoryColor8: '#17B5ABA6',
  serverCategoryColor6: '#B5A517',
  serverCategoryColor8: '#B5A517A6',
  infraCategoryColor6: '#2DB517',
  infraCategoryColor8: '#2DB517A6',
} as const;

type Theme = typeof theme;

/**
 * @see https://qiita.com/Takepepe/items/eec6e1d2101570e7e241
 * @desc props.theme.xxx 以降に型が効くようになる。
 * 型定義の注入テクニックです。DefaultTheme として用意された空っぽの interface * に対し、宣言結合拡張することで、プロジェクト固有の型定義を注入することが出来る
 */
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
