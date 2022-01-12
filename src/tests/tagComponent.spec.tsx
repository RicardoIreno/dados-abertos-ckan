
import { render } from '@testing-library/react'
import { TagComponent } from '../components/atoms'

// jest.mock('next/router', () => {
//   return {
//     useRouter() {
//       return {
//         asPath: '/'
//       }
//     }
//   }
// })

describe('Tag Component', () => {

  it('renders', () => {
    const { getByText } = render(
      <TagComponent>
        <p>Test</p>
      </TagComponent>
    )
  
    expect(getByText('Test')).toBeInTheDocument()
  })

})
