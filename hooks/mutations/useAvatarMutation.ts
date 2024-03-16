import { Database } from '@/types_db'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { Crop } from 'react-image-crop'

const getFileExtension = (filename: string) => {
  return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2)
}

export const useAvatarMutation = (id: string, crop: Crop) => {
  const supabase = useSupabaseClient<Database>()
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (newAvatar: File) => {
      const session = supabase.auth.getSession()
      if (!session) {
        throw new Error('You must be logged in to upload an avatar.')
      }
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(`${id}.${getFileExtension(newAvatar.name)}`, newAvatar, {
          upsert: true,
        })

      if (uploadError) {
        console.log('Error uploading avatar', uploadError)
        throw uploadError
      }

      // get the public url
      const { data: publicURL } = supabase.storage
        .from('avatars')
        .getPublicUrl(uploadData.path)

      // point to the new avatar url
      const { data, error } = await supabase
        .from('users')
        .update({ avatar_url: publicURL.publicUrl })
        .eq('id', id)
        .single()

      if (error) {
        console.log('Error updating avatar', error)
        throw error
      }

      return data
    },
    onSuccess: () => {
      toast.success('Avatar succesfully updated.')
      queryClient.invalidateQueries({
        queryKey: ['user-data', id],
      })
    },
    onError: (error) => {
      // checkk for 413 error
      if (error.message.includes('413')) {
        toast.error('Image too large. Please try again.')
        return
      }
      toast.error('Error updating avatar. Check the console.')
      console.log('Error updating avatar', error)
    },
  })
  return mutation
}
