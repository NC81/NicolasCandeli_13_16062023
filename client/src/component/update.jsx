import { useState } from 'react'
import { handleUpdate } from '../services/handle-update'
import { useSelector, useDispatch } from 'react-redux'
import {
  firstNameSelector,
  lastNameSelector,
  isLoadingSelector,
  loadingClassSelector,
} from '../utils/selector'
import { updateDisplay } from '../features/profile'
import LoadingSpinner from './loading-spinner'

export default function Update() {
  const dispatch = useDispatch()
  const firstName = useSelector(firstNameSelector)
  const lastName = useSelector(lastNameSelector)
  const isLoading = useSelector(isLoadingSelector)
  const loadingClass = useSelector(loadingClassSelector)
  const [newFirstName, setNewFirstName] = useState(`${firstName}`)
  const [newLastName, setNewLastName] = useState(`${lastName}`)

  return (
    <form id="update-form">
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
          onClick={(e) => dispatch(handleUpdate(e, newFirstName, newLastName))}
          disabled={isLoading}
          type="submit"
          className={`sign-in-button update-button ${loadingClass}`}
        >
          {isLoading ? <LoadingSpinner /> : 'Save'}
        </button>
        <button
          onClick={() => dispatch(updateDisplay(false))}
          type="button"
          className="sign-in-button update-button"
        >
          Cancel{' '}
        </button>
      </div>
    </form>
  )
}
