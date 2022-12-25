import { z } from 'zod';
import { ThumbnailSchema } from './thumbnail.schema';
import { CMSAutoSchema } from './_cms.auto';

export const TimelineSchema = CMSAutoSchema.extend({
  /**
   * @desc タイトル
   */
  title: z.string(),
  /**
   * @desc 概要
   */
  description: z.string(),
  /**
   * @desc 作者画像
   */
  image: ThumbnailSchema,
  /**
   * @desc 並び替えの基準
   */
  orderBy: z.number(),
  /**
   * @desc 在籍期間
   */
  periodOfEnrollment: z.string(),
  /**
   * @desc プロジェクト期間
   */
  projectPeriod: z.string(),
});

export type Timeline = z.infer<typeof TimelineSchema>;
