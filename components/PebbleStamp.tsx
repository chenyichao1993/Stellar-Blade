export function PebbleStamp({ label, size = 'md' }: { label: string; size?: 'sm' | 'md' }) {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs'

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border-2 border-dashed border-sage/60 bg-cream/80 font-semibold uppercase tracking-wider text-forest ${sizeClasses}`}
    >
      <svg
        aria-hidden="true"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M6 1C6 1 3 3 3 6C3 8.5 4.5 10 6 11C7.5 10 9 8.5 9 6C9 3 6 1 6 1Z"
          fill="currentColor"
        />
        <path d="M6 3V9" stroke="#FDF8F0" strokeWidth="1" strokeLinecap="round" />
      </svg>
      {label}
    </span>
  )
}
