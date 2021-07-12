/*
 * @Author: dell di
 * @Date: 2021-07-08 09:43:19
 * @LastEditTime: 2021-07-12 10:29:10
 * @LastEditors: di
 * @Description:
 * @FilePath: \micro_enginerd:\myFront\vue-libs-Dcomponents\src\components\Form\types.ts
 */
import { InjectionKey } from 'vue'

// type InjectProp =  (T:string() => void)
interface handleControlBlur {
  (a: string): void
}
interface handleControlChange {
  (a: string): void
}

export interface InjectionFunc {
  handleControlChange: handleControlChange
  handleControlBlur: handleControlBlur
}

// type InjectionFunc = handleControlBlur | handleControlChange

export const FormItemKey: InjectionKey<InjectionFunc> = Symbol('form-item-key')
