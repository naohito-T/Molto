import { MicroCMSQueries, MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';
import { CMSService } from '@/apis/services/cms';
import { Timeline } from '@/schemas';
import { IGuestCMSService } from '@/apis/interface/guest';
import { CMSRouterConfig } from '@/configs';

export class GuestCMSResource extends CMSService implements IGuestCMSService {
  public fetchTimelineList = async (
    queries: MicroCMSQueries = {},
    limit: number = 10,
    offset: number = 0,
  ): Promise<(Timeline & MicroCMSContentId & MicroCMSDate)[]> => {
    const data = await this.mCMSClient.getList<Timeline>({
      endpoint: CMSRouterConfig.TIMELINE,
      queries: { ...queries, limit, offset },
    });
    return data.contents;
  };
}
