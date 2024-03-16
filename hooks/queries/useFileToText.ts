import { useQuery } from '@tanstack/react-query'

import axios from 'axios'

const API_BASE = process.env.NEXT_PUBLIC_COREML_HOST

export type ParseResponseData = {
  text: string
}

const fileToText = async (file: File | null) => {
  if (!file) {
    return { text: '' }
  }
  let formData = new FormData()
  formData.append('file', file)

  const { data } = await axios.post<ParseResponseData>(
    `${API_BASE}/api/files/convert`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  )

  return data
}

export const useFileToText = (file: File | null) => {
  return useQuery({
    queryKey: ['file-to-text', file],
    queryFn: () => fileToText(file),
    enabled: false, // we want to manually trigger this query
  })
}
