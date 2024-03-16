import { Database } from '@/types_db'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const useEmailSubscriptionMutation = (id: string) => {
  const supabase = useSupabaseClient<Database>()
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (new_preference: boolean) => {
      const { data, error } = await supabase
        .from('users')
        .update({ is_subscribed: new_preference })
        .eq('id', id)
        .single()

      if (error) {
        throw error
      }

      return data
    },
    onSuccess: () => {
      toast.success('Email subscription settings updated.')
      queryClient.invalidateQueries({
        queryKey: ['user-data', id],
      })
    },
    onError: (error) => {
      toast.error('Error updating email preferencdes. Check the console.')
      console.log('Error updating email preferencdes', error)
    },
  })
  return mutation
}
