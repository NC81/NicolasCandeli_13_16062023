import { Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  hasInitialDataSelector,
  fullNameSelector,
  updateDisplaySelector,
} from '../utils/selector'
import Update from '../component/update'
import { updateDisplay } from '../features/profile'

export default function Profile() {
  const fullName = useSelector(fullNameSelector)
  const hasInitialData = useSelector(hasInitialDataSelector)
  const isUpdateDisplayed = useSelector(updateDisplaySelector)
  const dispatch = useDispatch()
  console.log('hasInitialData', hasInitialData)

  return hasInitialData ? (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {fullName}!
        </h1>
        {isUpdateDisplayed ? (
          <Update />
        ) : (
          <button
            onClick={(e) => dispatch(updateDisplay(true))}
            className="edit-button"
          >
            Edit Name
          </button>
        )}
      </div>
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
