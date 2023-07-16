import { useDispatch, useSelector } from 'react-redux'
import { errorContentSelector } from '../utils/selector'
import { errorDisplayToggle } from '../features/error'

export default function ErrorBox() {
  const dispatch = useDispatch()
  const errorContent = useSelector(errorContentSelector)

  return (
    <>
      <section className={`login-block-content error-content`}>
        <button
          onClick={() => dispatch(errorDisplayToggle(false))}
          type="button"
          className="error-button close-error-button"
        >
          <i className="fa fa-close"></i>
        </button>
        <i className="fa fa-warning"></i>
        <p className="error-message">
          <i>Sorry, an unexpected error has occurred</i>
          <br />
          <b>{errorContent}</b>
        </p>
      </section>
    </>
  )
}
