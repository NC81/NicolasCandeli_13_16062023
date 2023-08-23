import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleUpdate } from '../services/handle-update'
import { useSelector, useDispatch } from 'react-redux'
import {
  firstNameSelector,
  lastNameSelector,
  isLoadingSelector,
  loadingClassSelector,
  hasErrorSelector,
  errorDisplaySelector,
} from '../utils/selector'
import { updateDisplayToggle } from '../features/tools'
import { store } from '../utils/store'
import LoadingSpinner from './loading-spinner'
import { errorDisplayToggle } from '../features/error'

export default function Update() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const firstName = useSelector(firstNameSelector)
  const lastName = useSelector(lastNameSelector)
  const isLoading = useSelector(isLoadingSelector)
  const loadingClass = useSelector(loadingClassSelector)
  const hasError = useSelector(hasErrorSelector)
  const errorDisplay = useSelector(errorDisplaySelector)
  const [newFirstName, setNewFirstName] = useState(`${firstName}`)
  const [newLastName, setNewLastName] = useState(`${lastName}`)

  return (
    <form
      onSubmit={async (e) => {
        await dispatch(handleUpdate(e, newFirstName, newLastName))
        const isAuthError = store.getState().error.name === 401
        console.log('isAuthError', isAuthError)
        isAuthError && navigate('../login')
      }}
    >
      <div className="update-group">
        <div className="input-wrapper update-wrapper">
          <label className="update-label" htmlFor="first-name">
            First name
          </label>
          <input
            value={newFirstName}
            onChange={(e) => setNewFirstName(e.target.value)}
            name="first-name"
            id="first-name"
            // minLength={3}
            // required
          />
        </div>
        <div className="input-wrapper update-wrapper">
          <label className="update-label" htmlFor="last-name">
            Last name
          </label>
          <input
            value={newLastName}
            onChange={(e) => setNewLastName(e.target.value)}
            name="last-name"
            id="last-name"
            // minLength={3}
            // required
          />
        </div>
      </div>
      <div className="update-group buttons-group">
        <button
          // onClick={async (e) => {
          //   await dispatch(handleUpdate(e, newFirstName, newLastName))
          //   const isAuthError = store.getState().error.name === 401
          //   console.log('isAuthError', isAuthError)
          //   isAuthError && navigate('../login')
          // }}
          disabled={isLoading}
          type="submit"
          className={`sign-in-button update-button ${loadingClass}`}
        >
          {isLoading ? <LoadingSpinner /> : 'Save'}
        </button>
        <button
          onClick={() => dispatch(updateDisplayToggle(false))}
          type="button"
          className="sign-in-button update-button"
        >
          Cancel{' '}
        </button>
        {hasError === 'update' && !errorDisplay && (
          <button
            onClick={() => dispatch(errorDisplayToggle(true))}
            type="button"
            className="error-button open-error-button-update"
          >
            <i className="fa fa-warning"></i>
          </button>
        )}
      </div>
    </form>
  )
}
