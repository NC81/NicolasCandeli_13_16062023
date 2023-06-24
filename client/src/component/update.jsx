import { useState } from 'react'
import handleUpdate from '../services/handle-update'
import { useStore, useSelector, useDispatch } from 'react-redux'
import { firstNameSelector, lastNameSelector } from '../utils/selector'
import { updateDisplay } from '../features/profile'

export default function Update() {
  const firstName = useSelector(firstNameSelector)
  const lastName = useSelector(lastNameSelector)
  const [newFirstName, setNewFirstName] = useState(`${firstName}`)
  const [newLastName, setNewLastName] = useState(`${lastName}`)
  const store = useStore()
  const dispatch = useDispatch()

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
          onClick={async (e) =>
            await handleUpdate(e, newFirstName, newLastName, store)
          }
          type="submit"
          className="sign-in-button update-button"
        >
          Save{' '}
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
