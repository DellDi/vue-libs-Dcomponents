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
        return [
          'text',
          'number',
          'tel',
          'password',
          'textarea',
          'time',
        ].includes(value)
      },
      default: 'text',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit, attrs }) {
    const formItemCtx = inject(FormItemKey) as InjectionFunc
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

    return () => (
      <div class="ant-field-wrap">
        <input
          class="ant-field"
          type={props.type}
          autocomplete="new-password"
          placeholder={attrs.placeholder as string}
          onInput={onInput}
          onBlur={onBlur}
        />
      </div>
    )
  },
})
