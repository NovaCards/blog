import { Database } from '@/types_db'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const useAnalyticsSubscribeMutation = (id: string) => {
  const supabase = useSupabaseClient<Database>()
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (new_preference: boolean) => {
      const { data, error } = await supabase
        .from('users')
        .update({ log_searches: new_preference })
        .eq('id', id)
        .single()

      if (error) {
        throw error
      }

      return data
    },
    onSuccess: () => {
      toast.success('Analytics settings successfully updated.')
      queryClient.invalidateQueries({
        queryKey: ['user-data', id],
      })
    },
    onError: (error) => {
      toast.error('Error updating analytics settings. Check the console.')
      console.log('Error updating analytics settings', error)
    },
  })
  return mutation
}
