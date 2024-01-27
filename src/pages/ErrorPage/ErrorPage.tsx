import { DefaultLayout } from '../../components/DefaultLayout/DefaultLayout'
import './ErrorPage.css'

export const ErrorPage = () => (
  <DefaultLayout>
    <div className="error-container">
      <h1 className="error-title">Oops! Something went wrong</h1>
      <p className="error-message">
        We apologize for the inconvenience. Please try refreshing the page or .
      </p>
    </div>
  </DefaultLayout>
)
