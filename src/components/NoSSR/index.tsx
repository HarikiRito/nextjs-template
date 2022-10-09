import dynamic from 'next/dynamic'
import React from 'react'

const Component = (props: any) => (
  <React.Fragment>{props.children}</React.Fragment>
)

export const NoSSR = dynamic(() => Promise.resolve(Component), {
  ssr: false,
})
