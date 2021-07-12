/*
 * @Author: dell di
 * @Date: 2021-07-07 08:46:13
 * @LastEditTime: 2021-07-12 10:39:37
 * @LastEditors: di
 * @Description:
 * @FilePath: \micro_enginerd:\myFront\vue-libs-Dcomponents\src\components\Input\index.tsx
 */
import { defineComponent, inject } from 'vue'
import { FormItemKey, InjectionFunc } from '../Form/types'
import './index.scss'
export default defineComponent({
  name: 'DInput',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    type: {
      validator: (value: string) => {
        return ['text', 'number', 'tel', 'textarea', 'time'].includes(value)
      },
      default: 'text',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit, attrs }) {
    const formItemCtx = inject(FormItemKey) as InjectionFunc
    console.log('🚀 ~ file: index.tsx ~ line 6 ~ setup ~ emit', emit)
    console.log('🚀 ~ file: index.tsx ~ line 6 ~ setup ~ props', props)
    const onInput = (event: Event) => {
      const value = (event.target as HTMLInputElement).value
      if (value !== props.modelValue) {
        emit('update:modelValue', value)
        formItemCtx.handleControlChange(value)
      }
    }

    const onBlur = () => {
      formItemCtx.handleControlBlur(props.modelValue)
    }
    return () => {
      return (
        <div class="ant-field-wrap">
          <input
            class="ant-field"
            type="text"
            placeholder={attrs.placeholder as string}
            onInput={onInput}
            onBlur={onBlur}
          />
        </div>
      )
    }
  },
})
