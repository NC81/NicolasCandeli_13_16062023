import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleUpdate } from '../services/handle-update'
import { Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  hasInitialDataSelector,
  hasErrorSelector,
  errorDisplaySelector,
  firstNameSelector,
  lastNameSelector,
  isLoadingSelector,
  loadingClassSelector,
  updateIsDisabledSelector,
} from '../utils/selector'
import ErrorBox from '../component/error-box'
import { store } from '../utils/store'
import LoadingSpinner from '../component/loading-spinner'
import { errorDisplayToggle } from '../features/error'

export default function Profile() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const hasInitialData = useSelector(hasInitialDataSelector)
  const hasError = useSelector(hasErrorSelector)
  const errorDisplay = useSelector(errorDisplaySelector)
  const firstName = useSelector(firstNameSelector)
  const lastName = useSelector(lastNameSelector)
  const isLoading = useSelector(isLoadingSelector)
  const loadingClass = useSelector(loadingClassSelector)
  const [newFirstName, setNewFirstName] = useState(`${firstName}`)
  const [newLastName, setNewLastName] = useState(`${lastName}`)
  const [updateDisplayed, setUpdateDisplayed] = useState(false)
  const updateIsDisabled = useSelector(
    updateIsDisabledSelector(newFirstName, newLastName)
  )
  console.log('hasInitialData', hasInitialData)

  return hasInitialData ? (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {firstName} {lastName}!
        </h1>
        {updateDisplayed ? (
          <form
            onSubmit={async (e) => {
              await dispatch(handleUpdate(e, newFirstName, newLastName))
              const isAuthError = store.getState().error.name === 401
              console.log('isAuthError', isAuthError)
              isAuthError ? navigate('../login') : setUpdateDisplayed(false)
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
                disabled={updateIsDisabled}
                type="submit"
                className={`sign-in-button update-button ${loadingClass}`}
              >
                {isLoading ? <LoadingSpinner /> : 'Save'}
              </button>
              <button
                onClick={() => setUpdateDisplayed(false)}
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
        ) : (
          <button
            onClick={(e) => setUpdateDisplayed(true)}
            className="edit-button"
          >
            Edit Name
          </button>
        )}
      </div>
      {hasError === 'update' && errorDisplay && <ErrorBox />}
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  ) : (
    <Navigate to="/login" />
  )
}
