import { AppConstraintConfig } from '@/configs';

export const fullPath = (path: string): string => {
  return `${AppConstraintConfig.PUBLIC_URL}${path}`;
};

/**
 * @desc サムネイルが設定されていない時にdefaultで出力する。
 * @todo 期間で設定し、3ヶ月ごとに4つに区切る
 */
// export const pickThumbnail = (blog: Blog): string => {
//   if (blog?.thumbnail?.url) {
//     return blog?.thumbnail.url;
//   }
//   switch (blog.topCategory.name) {
//     case 'tech':
//       switch (blog.middleCategory.name) {
//         case 'design':
//           return AppBlogDefaultConfig.DESIGN_IMAGE;
//         case 'front':
//           return AppBlogDefaultConfig.FRONT_IMAGE;
//         case 'server':
//           return AppBlogDefaultConfig.SERVER_IMAGE;
//         case 'infra':
//           return AppBlogDefaultConfig.INFRA_IMAGE;
//       }
//     case 'information':
//     case 'work':
//     default:
//       return AppBlogDefaultConfig.SERVER_IMAGE;
//   }
// };
