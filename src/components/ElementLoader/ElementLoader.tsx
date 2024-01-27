import ContentLoader from 'react-content-loader'

interface ElementLoader {
  width: number
  height: number
}
export const ElementLoader = (props: ElementLoader) => (
  <ContentLoader
    speed={2}
    {...props}
    viewBox={`0 0 ${props.width} ${props.height}`}
  >
    <rect x="0" y="0" rx="0" ry="0" {...props} />
  </ContentLoader>
)
