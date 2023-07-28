import { createContext, useContext, useReducer, useEffect } from "react"

const notificationReducer = (state, action) => {
  console.log('state:', state, 'action:', action);
  switch (action.type) {
    case "NEW_NOTE":
      console.log('inside new_note action');
      return `Anecdote: '${action.content}' created`
    case "UPVOTE":
      return `Anecdote '${action.content}' voted`
    case "RESET":
      return ''
      case "ERROR":
        return `Error: ${action.content}`
    default:
      return state
  }
}

export const NotificationContext = createContext("")

export const useNotificationValue = () => {
  const notificationAndDispatch = useContext(NotificationContext)
  return notificationAndDispatch[0]
}

export const useNotificationDispatch = () => {
  const notificationAndDispatch = useContext(NotificationContext)
  return notificationAndDispatch[1]
}

const NotificationProvider = ({ children }) => {
  const [notification, dispatchNotification] = useReducer(
    notificationReducer, ""
  )

  useEffect(() => {
    setTimeout(() => {
      dispatchNotification({ type: 'RESET'})
    }, 5000)
  }, [notification])

  return <NotificationContext.Provider value={[notification, dispatchNotification]}>{children}</NotificationContext.Provider>
}

export default NotificationProvider
