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
  let inFewMinutes = new Date()
  inFewMinutes.setDate(inFewMinutes.getDate())
  inFewMinutes.setHours(inFewMinutes.getHours())
  inFewMinutes.setMinutes(inFewMinutes.getMinutes()+10)
  return {
    time:inFewMinutes,
    repeat:'hour'
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
