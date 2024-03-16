import { useQuery } from '@tanstack/react-query'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import toast from 'react-hot-toast'
import { Database } from '@/types_db'

export const useUserSubscription = (uid: string) => {
  const supabase = useSupabaseClient<Database>()
  const query = useQuery({
    queryKey: ['user-subscription', uid],
    queryFn: async () => {
      const data = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', uid)
        .single()

      if (data.error) {
        return null
      }
      return data
    },
    enabled: !!uid,
  })
  return query
}
