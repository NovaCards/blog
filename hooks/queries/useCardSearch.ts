import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const API_BASE = process.env.NEXT_PUBLIC_COREML_HOST

export type Payload = {
  card_body: string
  card_body_clean: string
  deck: string
  hash: string
  nid: number
}

export type Hit = {
  id: string
  version: number
  score: number
  payload: Payload
  vector: null
}

export type ResultMapped = {
  sentence: string
  sentence_number: number
  hits: Hit[]
}

export type CardFinderResults = {
  results: ResultMapped[]
  total_sentences: number
  total_hits: number
}

export const useCardSearch = (
  text: string,
  deck: string,
  n: number,
  similarity: number,
  exact: boolean = false
) => {
  const query = useQuery({
    queryKey: ['card-search'],
    queryFn: async () => {
      const { data } = await axios.post<CardFinderResults>(
        `${API_BASE}/api/cards/search`,
        {
          text,
          limit: n,
          deck,
          specificity: similarity,
          exact,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      return data
    },
    enabled: false, // TODO: enable this when we have a good way to debounce
  })
  return query
}
