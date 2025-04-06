import axios from "axios"

interface UploadFileToStorageParams {
  file: File
  onProgress: (sizeInBytes: number) => void
}

interface uploadFileToStorageOptions {
  signal?: AbortSignal
}

export async function uploadFileToStorage(
  { file, onProgress }: UploadFileToStorageParams,
  options?: uploadFileToStorageOptions
) {
  const data = new FormData()

  data.append("file", file)

  const response = await axios.post<{ url: string }>(
    "http://localhost:3333/uploads",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      signal: options?.signal,
      onUploadProgress(progressEvent) {
        onProgress(progressEvent.loaded)
      },
    }
  )

  return { url: response.data.url }
}