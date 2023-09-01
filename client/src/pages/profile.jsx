import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { store } from '../utils/store'
import { handleUpdate } from '../services/handle-update'
import {
  isConnectedSelector,
  hasErrorSelector,
  isErrorDisplayedSelector,
  firstNameSelector,
  lastNameSelector,
  isLoadingSelector,
  loadingClassSelector,
  isUpdateDisabledSelector,
} from '../utils/selector'
import { errorDisplayToggle } from '../features/error'
import LoadingSpinner from '../component/loading-spinner'
import ErrorBox from '../component/error-box'

export default function Profile() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isConnected = useSelector(isConnectedSelector)
  const hasError = useSelector(hasErrorSelector)
  const isErrorDisplayed = useSelector(isErrorDisplayedSelector)
  const firstName = useSelector(firstNameSelector)
  const lastName = useSelector(lastNameSelector)
  const isLoading = useSelector(isLoadingSelector)
  const loadingClass = useSelector(loadingClassSelector)
  const [newFirstName, setNewFirstName] = useState(`${firstName}`)
  const [newLastName, setNewLastName] = useState(`${lastName}`)
  const [isUpdateDisplayed, setUpdateDisplayed] = useState(false)
  const isUpdateDisabled = useSelector(
    isUpdateDisabledSelector(newFirstName, newLastName)
  )

  return isConnected ? (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {firstName} {lastName}!
        </h1>
        {isUpdateDisplayed ? (
          <form
            onSubmit={async (e) => {
              await dispatch(handleUpdate(e, newFirstName, newLastName))
              const storeHasAuthError = store.getState().error.name === 401
              storeHasAuthError
                ? navigate('../login')
                : setUpdateDisplayed(false)
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
                  minLength={2}
                  required
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
                  minLength={2}
                  required
                />
              </div>
            </div>
            <div className="update-group buttons-group">
              <button
                disabled={isUpdateDisabled}
                type="submit"
                className={`form-button update-button ${loadingClass}`}
              >
                {isLoading ? <LoadingSpinner /> : 'Save'}
              </button>
              <button
                onClick={() => setUpdateDisplayed(false)}
                type="button"
                className="form-button update-button"
              >
                Cancel{' '}
              </button>
              {hasError === 'update' && !isErrorDisplayed && (
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
      {hasError === 'update' && isErrorDisplayed && <ErrorBox />}
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
