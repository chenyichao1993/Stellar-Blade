'use client'

import { useEffect, useRef } from 'react'

export function AdsterraNativeBanner() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptLoaded = useRef(false)

  useEffect(() => {
    if (scriptLoaded.current || !containerRef.current) return

    const scriptUrl = process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_BANNER_URL
    if (!scriptUrl) return

    const script = document.createElement('script')
    script.async = true
    script.setAttribute('data-cfasync', 'false')
    script.src = scriptUrl

    containerRef.current.appendChild(script)
    scriptLoaded.current = true
  }, [])

  if (!process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_BANNER_URL) return null

  return (
    <div className="my-8 flex justify-center">
      <div ref={containerRef} id="container-173af6f3439e83f36667d1030ed917dd" />
    </div>
  )
}
