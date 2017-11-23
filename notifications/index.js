import { Notifications, Permissions }  from 'expo'
import { AsyncStorage } from 'react-native'
const NOTIFICATION_KEY= 'UdaciCards:notifications'


export function clearLocalNotifications(){
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync())

}
export function createNotifications(){
  return {
    title:'Practice Test Today',
    body:'💁 Remember to practice the Test TODAY!!!',
    ios:{
      sound:true,
    },
    android:{
      sound:true,
      priority:'high',
      vibrate:true,
    }
  }
}
const schedulingOptions = ()=>{
  let desiredDate = new Date()
  desiredDate.setDate(desiredDate.getDate()+1)
  desiredDate.setHours(desiredDate.getHours())
  desiredDate.setMinutes(desiredDate.getMinutes())
  return {
    time:desiredDate,
    repeat:'day'
  }
}
export function setLocalNotifications(){
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) =>{
      if(data ===null){//meaning they haven't set any notifications
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({status})=>{
              if(status=== 'granted'){
                //we'll cancel any notifications an set new ones
                Notifications.cancelAllScheduledNotificationsAsync()

                Notifications.scheduleLocalNotificationAsync(
                  createNotifications(),
                  schedulingOptions(),
                )

                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))

              }
            }
          )
      }
      }
    )
}
