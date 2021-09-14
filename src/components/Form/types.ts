/*
 * @Author: dell di
 * @Date: 2021-07-18 10:12:10
 * @LastEditTime: 2021-09-14 23:59:37
 * @LastEditors: di
 * @Description:
 * @FilePath: \vue-next-libs\src\components\Form\types.ts
 */
import { RuleItem, ValidateError } from 'async-validator'
import { InjectionKey } from 'vue'

// type InjectProp =  (T:string() => void)
interface handleControlBlur {
  (a: string): void
}
interface handleControlChange {
  (a: string): void
}

export type ValidTrigger = 'change' | 'blur'

export interface DntRuleItem extends RuleItem {
  trigger?: ValidTrigger
}
export interface DFormRules {
  [key: string]: DntRuleItem | DntRuleItem[]
}
export interface FormItemContext {
  handleControlChange: handleControlChange
  handleControlBlur: handleControlBlur
}

export type validDateFunc = (
  callback: (valid: boolean) => void
) => Promise<boolean | ValidateError>

export interface FormContext {
  model: Record<string, any>
  rules: DFormRules
  validate: validDateFunc
}

export const FormItemKey: InjectionKey<FormItemContext> =
  Symbol('form-item-key')

export const FormKey: InjectionKey<FormContext> = Symbol('form-key')
