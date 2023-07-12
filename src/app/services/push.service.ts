import { Injectable } from '@angular/core'

import { OneSignal } from '@ionic-native/onesignal/ngx'

@Injectable({
  providedIn: 'root',
})
export class PushService {
  constructor(private oneSignal: OneSignal) {}

  initialConfig() {
    this.oneSignal.startInit('66eac5e4-8ebb-4f9e-a563-b573ea2dd198', '592666765266')

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert)

    this.oneSignal.handleNotificationReceived().subscribe(n => {
      console.log('received', n)
    })

    this.oneSignal.handleNotificationOpened().subscribe(n => {
      console.log('opened', n)
    })

    this.oneSignal.endInit()
  }
}
