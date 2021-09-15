/*
 * @Author: dell di
 * @Date: 2021-07-18 10:12:10
 * @LastEditTime: 2021-09-15 23:28:12
 * @LastEditors: di
 * @Description:
 * @FilePath: \docs-pressc:\Users\di\Desktop\myStudy\vue-next-libs\src\components\Form\types.ts
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

export type validDateFunc = (
  callback: (valid: boolean) => void
) => Promise<boolean | ValidateError>

export type validDateItem = (
  value: string,
  rules: DntRuleItem[]
) => Promise<boolean | ValidateError>

export interface FormItemContext {
  id: string
  prop: string
  validate: validDateItem
  handleControlChange: handleControlChange
  handleControlBlur: handleControlBlur
}

export interface FormContext {
  model: Record<string, any>
  rules: DFormRules
  validate: validDateFunc
  addItem(item: Partial<FormItemContext>): void
  removeItem(id: string): void
}

export const FormItemKey: InjectionKey<Partial<FormItemContext>> =
  Symbol('form-item-key')

export const FormKey: InjectionKey<FormContext> = Symbol('form-key')
