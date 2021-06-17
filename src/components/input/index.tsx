import { defineComponent } from 'vue'
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
    console.log('🚀 ~ file: index.tsx ~ line 6 ~ setup ~ emit', emit)
    console.log('🚀 ~ file: index.tsx ~ line 6 ~ setup ~ props', props)
    const onInput = (event: Event) => {
      const value = (event.target as HTMLInputElement).value
      if (value !== props.modelValue) {
        emit('update:modelValue', value)
      }
    }
    return () => {
      return (
        <div class="ant-field-wrap">
          <input
            class="ant-field"
            type="text"
            placeholder={attrs.placeholder as string}
            onInput={onInput}
          />
        </div>
      )
    }
  },
})
