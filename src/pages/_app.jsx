import Head from 'next/head'
import {slugifyWithCounter} from '@sindresorhus/slugify'

import {Layout} from '@/components/Layout'
import useTheme from "@/hooks/useTheme";

import 'focus-visible'
import '@/styles/tailwind.css'

function getNodeText(node) {
  let text = ''
  for (let child of node.children ?? []) {
    if (typeof child === 'string') {
      text += child
    }
    text += getNodeText(child)
  }
  return text
}

function collectHeadings(nodes, slugify = slugifyWithCounter()) {
  let sections = []

  for (let node of nodes) {
    if (node.name === 'h2' || node.name === 'h3') {
      let title = getNodeText(node)
      if (title) {
        node.attributes.id = slugify(title)
        if (node.name === 'h3') {
          if (!sections[sections.length - 1]) {
            throw new Error(
              'Cannot add `h3` to table of contents without a preceding `h2`'
            )
          }
          sections[sections.length - 1].children.push({
            ...node.attributes,
            title,
          })
        } else {
          sections.push({ ...node.attributes, title, children: [] })
        }
      }
    }

    sections.push(...collectHeadings(node.children ?? [], slugify))
  }

  return sections
}

export default function App({ Component, pageProps }) {
  let theme = useTheme()

  let title = pageProps.markdoc?.frontmatter.title

  let pageTitle =
    pageProps.markdoc?.frontmatter.pageTitle ||
    `${pageProps.markdoc?.frontmatter.title} - SUI`

  let description = pageProps.markdoc?.frontmatter.description

  let tableOfContents = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : []

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta property="twitter:title" content={pageTitle} />
        {description && <meta name="description" content={description} />}
        {description && <meta property="twitter:description" content={description} />}
        {description && <meta property="og:description" content={description} />}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sustainableui.github.io/" />
        <meta property="og:image" content="https://sustainableui.github.io/assets/og_image.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sustainableui.github.io/" />
        <meta property="twitter:image" content="https://sustainableui.github.io/assets/twitter_image.png" />
      </Head>
      <Layout title={title} theme={theme} tableOfContents={tableOfContents}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
