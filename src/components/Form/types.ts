import { RuleItem } from 'async-validator'
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

export type ValidTrigger = 'change' | 'blur'
export interface DntRuleItem extends RuleItem {
  trigger?: ValidTrigger
}
