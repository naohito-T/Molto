import { MicroCMSQueries, MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';
import { CMSService } from '@/core/infrastructures/services/cms';
import { Blog, Category, Tag } from '@/core/domains/entities/cms';
import { IGuestCMSService } from '@/core/apps/interfaces/guest/cms.interface';
import { CMSRouterConfig } from '@/configs';

export class GuestCMSUsecase extends CMSService implements IGuestCMSService {
  public fetchBlogDetail = async (contentId: string): Promise<Blog> => {
    const data = await this.cmsClient.getListDetail<Blog>({
      endpoint: CMSRouterConfig.BLOG,
      contentId,
    });
    return data;
  };

  // TODO: これ自動でsortされているのか？例えば最新とか。されないっぽいな
  public fetchBlogList = async (
    queries: MicroCMSQueries = {},
    limit: number = 10, // 制限（defaultで5M超えたらerror）
    offset: number = 0, // 何件目から取得するか
  ): Promise<(Blog & MicroCMSContentId & MicroCMSDate)[]> => {
    const data = await this.cmsClient.getList<Blog>({
      endpoint: CMSRouterConfig.BLOG,
      queries: { ...queries, limit, offset },
    });
    return data.contents;
  };

  public fetchRecommendBlogList = async (): Promise<
    (Blog & MicroCMSContentId & MicroCMSDate)[]
  > => {
    const data = await this.cmsClient.getList<Blog>({
      endpoint: CMSRouterConfig.BLOG,
      queries: { filters: 'recommend[equals]true', orders: '-createdAt' },
    });
    return data.contents;
  };

  public fetchLatestBlogList = async (): Promise<(Blog & MicroCMSContentId & MicroCMSDate)[]> => {
    const limit = 7;
    const data = await this.cmsClient.getList<Blog>({
      endpoint: CMSRouterConfig.BLOG,
      queries: { orders: '-createdAt', limit },
    });
    return data.contents;
  };

  public fetchSameCategoryBlogList = async (
    categoryId: string,
    blogId: string,
  ): Promise<(Blog & MicroCMSContentId & MicroCMSDate)[]> => {
    const limit = 4;
    const data = await this.cmsClient.getList<Blog>({
      endpoint: CMSRouterConfig.BLOG,
      queries: {
        filters: `middleCategory[equals]${categoryId}[and]id[not_equals]${blogId}`,
        orders: '-createdAt',
        limit,
      },
    });
    return data.contents;
  };

  public fetchTagContainBlogList = async (
    tagId: string,
  ): Promise<(Blog & MicroCMSContentId & MicroCMSDate)[]> => {
    const limit = 4;
    const data = await this.cmsClient.getList<Blog>({
      endpoint: CMSRouterConfig.BLOG,
      queries: { filters: `tags[contains]${tagId}`, orders: '-createdAt', limit },
    });
    return data.contents;
  };

  public fetchCategoryDetail = async (contentId: string): Promise<Category> => {
    const data = await this.cmsClient.getListDetail<Category>({
      endpoint: CMSRouterConfig.CATEGORY,
      contentId,
    });
    return data;
  };

  public fetchTopCategoryList = async (): Promise<
    (Category & MicroCMSContentId & MicroCMSDate)[]
  > => {
    const data = await this.cmsClient.getList<Category>({
      endpoint: CMSRouterConfig.CATEGORY,
      queries: { filters: `isShow[equals]true[and]isTop[equals]true` },
    });
    return data.contents;
  };

  public fetchCategoryList = async (
    queries: MicroCMSQueries = {},
    limit: number = 10,
    offset: number = 0,
  ): Promise<(Category & MicroCMSContentId & MicroCMSDate)[]> => {
    const data = await this.cmsClient.getList<Category>({
      endpoint: CMSRouterConfig.CATEGORY,
      queries: { ...queries, limit, offset },
    });
    return data.contents;
  };

  public fetchTagList = async (
    queries: MicroCMSQueries = {},
    limit: number = 20,
    offset: number = 0,
  ): Promise<(Tag & MicroCMSContentId & MicroCMSDate)[]> => {
    const data = await this.cmsClient.getList<Tag>({
      endpoint: CMSRouterConfig.TAG,
      queries: { ...queries, limit, offset },
    });
    return data.contents;
  };
}
