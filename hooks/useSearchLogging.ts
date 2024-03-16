import { Database } from '@/types_db'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export const useSearchLogging = () => {
  const supabase = useSupabaseClient<Database>()

  const logUserSearch = async (
    queryText: string,
    queryDeck: string,
    similarity: number,
    exactSearch: boolean,
    sessionId: string
  ) => {
    const userAgent = navigator.userAgent

    const { error } = await supabase.from('card_finder_requests').insert([
      {
        query_text: queryText,
        query_deck: queryDeck,
        similarity,
        exact: exactSearch,
        session_id: sessionId,
        user_agent: userAgent,
      },
    ])

    if (error) {
      console.log('Error logging search', error)
    }
  }

  return { logUserSearch }
}
