import mediaQuery from 'styled-media-query';

/**
 * @see https://github.com/morajabi/styled-media-query
 * default 設定
 * {
 *    huge: '1440px',
 *    large: '1170px',
 *    medium: '768px',
 *    small: '450px',
 * }
 */

/**
 * @desc 1024px以下の小さいPC
 */
// @ts-ignore
export const MediaSmallPC = mediaQuery.lessThan('1024px');

/**
 * @desc 769px以上
 */
// @ts-ignore
export const MediaPC = mediaQuery.greaterThan('769px');

/**
 * @desc 768px以下
 */
// @ts-ignore
export const MediaSP = mediaQuery.lessThan('768px');

/**
 * @desc 365px以下
 */
// @ts-ignore
export const MediaSmallSP = mediaQuery.lessThan('375px');
