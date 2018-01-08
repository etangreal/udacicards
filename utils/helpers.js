import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

// ------------------------------------------------------------------------------------------------
// DECLARATIONS
// ------------------------------------------------------------------------------------------------

const NOTIFICATION_KEY = 'UdaciCards:notifications'

// ------------------------------------------------------------------------------------------------
// FUNCTIONS
// ------------------------------------------------------------------------------------------------

export const omit = (omitKey, obj) => Object.keys(obj)
  .filter((key) => key !== omitKey)
  .reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {})

// ------------------------------------------------------------------------------------------------
// NOTIFICATIONS
// ------------------------------------------------------------------------------------------------

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
  return {
    title: 'Remember to study!',
    body: "👋 don't forget take a quiz today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelScheduledNotificationAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(createNotification(), {
                time: tomorrow,
                repeat: 'day'
              })
            }

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
          })
      }
    })
}

// ------------------------------------------------------------------------------------------------
// END
// ------------------------------------------------------------------------------------------------
