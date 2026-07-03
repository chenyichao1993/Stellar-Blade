import Link from 'next/link'
import { slugify } from '@/lib/slugify'

function Heading({
  level,
  children,
  ...props
}: {
  level: 2 | 3
  children?: React.ReactNode
  // eslint-disable-next-line
  [key: string]: any
}) {
  const text = children?.toString() || ''
  const id = slugify(text)
  const Tag = `h${level}` as const
  return (
    <Tag id={id} {...props}>
      {children}
    </Tag>
  )
}

export const mdxComponents = {
  // eslint-disable-next-line
  a: ({ href, children, ...props }: any) => {
    if (href?.startsWith('/')) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      )
    }
    return (
      <a href={href} rel="nofollow noopener" {...props}>
        {children}
      </a>
    )
  },
  // eslint-disable-next-line
  img: ({ src, alt }: any) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className="rounded-2xl shadow-md" loading="lazy" />
  ),
  h2: (props: { children?: React.ReactNode }) => <Heading level={2} {...props} />,
  h3: (props: { children?: React.ReactNode }) => <Heading level={3} {...props} />,
}
