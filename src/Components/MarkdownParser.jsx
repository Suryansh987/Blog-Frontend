import React from 'react'
import Markdown from 'react-markdown'

const ReactMarkdownParser = (props) => {
    const {markdownValue} = props
  return (
    <div>
      <Markdown
      components={{
        // Customize the rendering of headers
        h1: ({ node, ...props }) => <h1 className='text-4xl font-bold'{...props} />,
        h2: ({ node, ...props }) => <h2 className='text-3xl font-bold' {...props} />,
        h3: ({ node, ...props }) => <h3 className='text-2xl font-bold' {...props} />,
        h4: ({ node, ...props }) => <h4 className='text-xl font-bold' {...props} />,
        h5: ({ node, ...props }) => <h5 className='text-lg font-bold' {...props} />,
        h6: ({ node, ...props }) => <h6 className='text-base font-bold' {...props} />,

        // Customize the rendering of links
        a: ({ node, ...props }) => <a className='text-blue-500 hover:underline underline-offset-8' {...props} />,

        // Customize the rendering of other elements as needed
        // For example, you can customize 'em' (italic) and 'strong' (bold) elements:
        em: ({ node, ...props }) => <em className='italic' {...props} />,
        strong: ({ node, ...props }) => <strong className='font-bold' {...props} />,
      }}
    >{markdownValue}</Markdown>
    </div>
  )
}

export default ReactMarkdownParser
