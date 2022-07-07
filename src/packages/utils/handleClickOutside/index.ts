import { useEffect } from 'react'

const useOutside = (ref, cb?: () => void) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb?.()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, cb])
}

export default useOutside
