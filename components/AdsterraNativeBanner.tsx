export function AdsterraNativeBanner() {
  const scriptUrl = process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_BANNER_URL
  if (!scriptUrl) return null

  return (
    <div className="my-8 flex justify-center">
      <script async data-cfasync="false" src={scriptUrl} />
      <div id="container-173af6f3439e83f36667d1030ed917dd" />
    </div>
  )
}
