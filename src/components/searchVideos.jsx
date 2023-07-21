import axios from 'axios'

const YOUTUBE_API_KEY = 'AIzaSyAk7SRjN8fig94Eq5VKi5AgpXbVqOD8ZnM'

const searchVideos = async (searchTerm) => {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: searchTerm,
        key: YOUTUBE_API_KEY,
        part: 'snippet',
        maxResults: 10, // 변경 가능한 결과 수
        type: 'video',
      },
    })

    return response.data.items
  } catch (error) {
    console.error('Error fetching YouTube data:', error)
    return []
  }
}

export default searchVideos
