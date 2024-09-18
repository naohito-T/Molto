import { z } from 'zod';

/**
 * @note CMSから取得した値に自動でセットされている値
 */
export const CMSAutoSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string(),
  revisedAt: z.string(),
});

export type CMSAuto = z.infer<typeof CMSAutoSchema>;
