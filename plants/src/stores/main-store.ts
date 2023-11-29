import { defineStore } from 'pinia'
import { ref } from 'vue'

export const mainStore = defineStore('main', () => {
  const userId = ref(0)
  const articleId = ref(0)
  function setUser (id: number) {
    userId.value = id
  }
  function setArticle (id: number) {
    articleId.value = id
  }

  return { userId, articleId, setUser, setArticle }
},
{
  persist: true
})
