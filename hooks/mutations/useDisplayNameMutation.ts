import { Database } from '@/types_db'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const useDisplayNameMutation = (id: string) => {
  const supabase = useSupabaseClient<Database>()
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (newDisplayName: string) => {
      const { data, error } = await supabase
        .from('users')
        .update({ full_name: newDisplayName })
        .eq('id', id)
        .single()

      if (error) {
        throw error
      }

      return data
    },
    onSuccess: () => {
      toast.success('Display name updated.')
      queryClient.invalidateQueries({
        queryKey: ['user-data', id],
      })
    },
    onError: (error) => {
      toast.error('Error updating display name. Check the console.')
      console.log('Error updating display name', error)
    },
  })
  return mutation
}
