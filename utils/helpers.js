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
  return AsyncStorage
    .removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function notificationMessage() {
  return {
    title: 'Remember to study!',
    body: "👋 don't forget take a quiz today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
    }
  }
}

function createNotification() {
  let tomorrow = new Date()

  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrow.setHours(20)
  tomorrow.setMinutes(0)

  Notifications
    .scheduleLocalNotificationAsync(notificationMessage(), {
      time: tomorrow,
      repeat: 'day'
    })

  AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions
          .askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              AsyncStorage
                .removeItem(NOTIFICATION_KEY)
                .then(Notifications.cancelAllScheduledNotificationsAsync)
                .then(createNotification)
            } else {
              console.log('Could not set notification. Status: ', status)
            }
          })
      } else {
        // console.log('Notification already set.')
      }
    })
}

// ------------------------------------------------------------------------------------------------
// END
// ------------------------------------------------------------------------------------------------
