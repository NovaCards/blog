import { useQuery } from '@tanstack/react-query'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '@/types_db'

export const useUserData = (uid: string | undefined) => {
  const supabase = useSupabaseClient<Database>()
  const query = useQuery({
    queryKey: ['user-data', uid],
    queryFn: async () => {
      const data = await supabase
        .from('users')
        .select('*')
        .eq('id', uid ?? '')
        .single()

      if (data.error) {
        return null
      }
      return data
    },
    refetchOnWindowFocus: false,
    enabled: !!uid,
  })
  return query
}
