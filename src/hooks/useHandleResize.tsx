import { useEffect, useState } from "react"

export const useHandleResize = () => {
  const [width, setWidth] = useState<number>(window.document.documentElement.clientWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.document.documentElement.clientWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return {
    width
  }
}