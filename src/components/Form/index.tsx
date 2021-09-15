/*
 * @Author: dell di
 * @Date: 2021-09-14 21:54:52
 * @LastEditTime: 2021-09-15 23:18:01
 * @LastEditors: di
 * @Description:
 * @FilePath: \docs-pressc:\Users\di\Desktop\myStudy\vue-next-libs\src\components\Form\index.tsx
 */
import {
  DFormRules,
  FormContext,
  FormItemContext,
  FormKey,
  validDateFunc,
} from './types'
import {
  provide,
  defineComponent,
  PropType,
  getCurrentInstance,
} from '@vue/runtime-core'
import { useExpose } from '@/uses'
import { ValidateError } from 'async-validator'

export default defineComponent({
  name: 'DForm',
  props: {
    model: Object,
    rules: Object as PropType<DFormRules>,
  },
  setup(props, { emit, slots }) {
    const instance = getCurrentInstance()
    const items = slots.default!()
    items.forEach((i) => {
      console.log('🚀 ~ file: index.tsx ~ line 30 ~ setup ~ i', i)
    })

    const formItems: FormItemContext[] = []
    const addItem = (item: FormItemContext) => {
      formItems.push(item)
    }
    const removeItem = (id: string) => {
      if (formItems.length) {
        const index = formItems.findIndex((item) => item.id === id)
        formItems.splice(index, 1)
      }
    }

    provide<Partial<FormContext>>(FormKey, {
      model: props.model || {},
      rules: props.rules,
      addItem,
      removeItem,
    })
    const validate = (
      callback?: (valid: boolean) => void
    ): Promise<boolean | ValidateError> => {
      console.log('🚀 ~ file: index.tsx ~ line 31 ~ setup ~ true', true)

      return Promise.resolve(true)
    }

    useExpose<{ validate: validDateFunc }>({ validate })
    return () => {
      return <div>{slots.default!()}</div>
    }
  },
})
