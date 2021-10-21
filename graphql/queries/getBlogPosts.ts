/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const GET_BLOG_POSTS = gql`
  query getBlogPosts(
    $action: String!
    $filter: PostsFilterInput
    $authorName: String
    $tagName: String
    $topicId: Int
    $categoryId: Int
    $categoryKey: String
    $postId: Int
    $pageSize: Int = 10
    $currentPage: Int = 1
  ) {
    mpBlogPosts(
      action: $action
      filter: $filter
      authorName: $authorName
      tagName: $tagName
      topicId: $topicId
      categoryId: $categoryId
      categoryKey: $categoryKey
      postId: $postId
      pageSize: $pageSize
      currentPage: $currentPage
    ) {
      items {
        allow_comment
        author_id
        created_at
        enabled
        image
        import_source
        in_rss
        layout
        meta_description
        meta_keywords
        meta_robots
        meta_title
        name
        post_content
        post_id
        publish_date
        short_description
        updated_at
        url_key
      }
      pageInfo {
        currentPage
        endPage
        hasNextPage
        hasPreviousPage
        pageSize
        startPage
      }
      total_count
    }
  }
`
