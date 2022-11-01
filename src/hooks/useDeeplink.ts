import { useEffect } from 'react'
import { Linking } from 'react-native'

export const useDeeplink = () => {
  const handleDeeplink = (url: string | null) => {
    if (!url) return
  }

  useEffect(() => {
    // Handle deeplink for not open app
    Linking.getInitialURL()
      .then((url) => {
        handleDeeplink(url)
      })
      .catch((error) => console.log('error get deeplink', error))

    // Handle deeplink for already open app
    Linking.addEventListener('url', ({ url }) => handleDeeplink(url))
  }, [])
}
