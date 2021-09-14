/*
 * @Author: dell di
 * @Date: 2021-09-14 21:54:52
 * @LastEditTime: 2021-09-15 00:08:54
 * @LastEditors: di
 * @Description:
 * @FilePath: \vue-next-libs\src\components\Form\index.tsx
 */
import { DFormRules, FormContext, FormKey, validDateFunc } from './types'
import { provide, defineComponent, PropType } from '@vue/runtime-core'
import { useExpose } from '@/uses'
import { ValidateError } from 'async-validator'

export default defineComponent({
  name: 'DForm',
  props: {
    model: Object,
    rules: Object as PropType<DFormRules>,
  },
  setup(props, { emit, slots }) {
    provide<Partial<FormContext>>(FormKey, {
      model: props.model || {},
      rules: props.rules,
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
