import { useQuery } from '@tanstack/react-query'
import { Database } from '@/types_db'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export const useCard = (nid: string) => {
  const supabase = useSupabaseClient<Database>()
  return useQuery({
    queryKey: ['card', nid],
    queryFn: async () => {
      const data = await supabase
        .from('cards')
        .select('*')
        .eq('nid', nid)
        .limit(1)
        .single()

      return data
    },
  })
}
