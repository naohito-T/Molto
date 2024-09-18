import { MicroCMSQueries, MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';
import { Blog, Category, Tag } from '@/core/domains/entities/cms';

/**
 * @desc Moderato APIs.
 * this is docs.
 */
export interface IGuestCMSService {
  /**
   * @desc ブログ１件の詳細を取得する
   * @param contentId
   */
  fetchBlogDetail(contentId: string): Promise<Blog>;
  /**
   * @desc カテゴリー/タグ関係なく全てのブログを取得する
   * // TODO（これpagerとかに変えた方がいいかも）
   */
  fetchBlogList(
    queries?: MicroCMSQueries,
    limit?: number,
    offset?: number,
  ): Promise<(Blog & MicroCMSContentId & MicroCMSDate)[]>;
  /**
   * @desc オススメのblogを取得する（作成順）
   */
  fetchRecommendBlogList(): Promise<(Blog & MicroCMSContentId & MicroCMSDate)[]>;
  /**
   * @desc 最新のblogを取得する（cratedAt基準）
   */
  fetchLatestBlogList(): Promise<(Blog & MicroCMSContentId & MicroCMSDate)[]>;
  /**
   * @desc 同じカテゴリーのブログ一覧を取得する（createdAt基準）
   */
  fetchSameCategoryBlogList(
    categoryId: string,
    blogId: string,
  ): Promise<(Blog & MicroCMSContentId & MicroCMSDate)[]>;
  /**
   * @desc 同じタグが設定されているブログ一覧を取得する（createdAt基準）
   */
  fetchTagContainBlogList(tagId: string): Promise<(Blog & MicroCMSContentId & MicroCMSDate)[]>;
  /**
   * @desc カテゴリー詳細を取得する
   * @param contentId
   * TODO: 一つのカテゴリを取得したらそのブログ一覧を取得しないといけないのでは？
   */
  fetchCategoryDetail(contentId: string): Promise<Category>;
  /**
   * @desc 親カテゴリーを取得（Tech, Information etc...）
   * @memo UI/UX、更新情報などのカテゴリーはCMS上に消さずに残してあるためこのapiが必要。
   */
  fetchTopCategoryList(): Promise<(Category & MicroCMSContentId & MicroCMSDate)[]>;
  /**
   * @desc カテゴリー一覧を取得する
   */
  fetchCategoryList(
    queries?: MicroCMSQueries,
    limit?: number,
    offset?: number,
  ): Promise<(Category & MicroCMSContentId & MicroCMSDate)[]>;
  /**
   * @desc タグ一覧を取得する
   */
  fetchTagList(
    queries?: MicroCMSQueries,
    limit?: number,
    offset?: number,
  ): Promise<(Tag & MicroCMSContentId & MicroCMSDate)[]>;
}
