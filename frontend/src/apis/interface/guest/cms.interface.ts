import { MicroCMSQueries, MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';
import { Timeline } from '@/schemas';

/**
 * @desc Moderato APIs. this is docs.
 */
export interface IGuestCMSService {
  /**
   * @desc タイムライン一覧を取得する
   */
  fetchTimelineList(
    queries?: MicroCMSQueries,
    limit?: number,
    offset?: number,
  ): Promise<(Timeline & MicroCMSContentId & MicroCMSDate)[]>;
}
