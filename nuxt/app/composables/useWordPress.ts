// composables/useWordPress.ts
export const useWordPress = () => {
  const config = useRuntimeConfig()
  const wpApiBase = config.public.wpApiBase

  /**
   * Fetch a page by slug
   */
  const getPageBySlug = async (slug: string) => {
    const { data, error } = await useFetch(`${wpApiBase}/pages`, {
      params: {
        slug,
        _fields: 'id,title,content,excerpt,acf,featured_media'
      },
      transform: (data: any[]) => data[0]
    })

    return { data, error }
  }

  /**
   * Fetch a page by ID
   */
  const getPageById = async (id: number) => {
    const { data, error } = await useFetch(`${wpApiBase}/pages/${id}`, {
      params: {
        _fields: 'id,title,content,excerpt,acf,featured_media'
      }
    })

    return { data, error }
  }

  /**
   * Fetch all posts
   */
  const getPosts = async (params = {}) => {
    const { data, error } = await useFetch(`${wpApiBase}/posts`, {
      params: {
        _fields: 'id,title,excerpt,slug,date,featured_media,acf',
        ...params
      }
    })

    return { data, error }
  }

  /**
   * Fetch a single post by slug
   */
  const getPostBySlug = async (slug: string) => {
    const { data, error } = await useFetch(`${wpApiBase}/posts`, {
      params: {
        slug,
        _fields: 'id,title,content,excerpt,date,featured_media,acf'
      },
      transform: (data: any[]) => data[0]
    })

    return { data, error }
  }

  /**
   * Fetch custom post type (e.g., 'projects')
   */
  const getCustomPosts = async (postType: string, params = {}) => {
    const { data, error } = await useFetch(`${wpApiBase}/${postType}`, {
      params: {
        _fields: 'id,title,content,excerpt,slug,acf,featured_media',
        ...params
      }
    })

    return { data, error }
  }

  /**
   * Fetch media by ID
   */
  const getMedia = async (mediaId: number) => {
    if (!mediaId) return { data: null, error: null }
    
    const { data, error } = await useFetch(`${wpApiBase}/media/${mediaId}`, {
      params: {
        _fields: 'id,source_url,alt_text,media_details'
      }
    })

    return { data, error }
  }

  /**
   * Search content
   */
  const search = async (query: string, postType = 'posts') => {
    const { data, error } = await useFetch(`${wpApiBase}/${postType}`, {
      params: {
        search: query,
        _fields: 'id,title,excerpt,slug'
      }
    })

    return { data, error }
  }

  return {
    getPageBySlug,
    getPageById,
    getPosts,
    getPostBySlug,
    getCustomPosts,
    getMedia,
    search
  }
}