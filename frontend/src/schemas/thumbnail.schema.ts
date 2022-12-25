import { z } from 'zod';

/**
 * @note CMSから取得した画像には以下が自動でセットされている。
 */
export const ThumbnailSchema = z.object({
  /**
   * @desc サムネイル
   */
  url: z.string(),
  /**
   * @desc サムネイル高さ
   */
  height: z.number(),
  /**
   * @desc サムネイル幅
   */
  width: z.number(),
  /**
   * @desc 代替テキスト
   */
  alt: z.string().optional(),
  /**
   * @desc link
   */
  link: z.string().optional(),
});

export type Thumbnail = z.infer<typeof ThumbnailSchema>;
