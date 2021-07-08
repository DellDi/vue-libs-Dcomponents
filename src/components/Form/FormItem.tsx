import { defineComponent, provide, ref } from 'vue'
import './index.scss'
import { FormItemKey } from './types'


export default defineComponent({
  name: 'DFormItem',
  props: {
    label: [String],
  },
  setup(props, { emit, slots }) {
    const errMsg = ref('')
    const handleValueChange = () => {
      
    }

    // provide(FormItemKey, {

    // })
    const renderLabel = () => {
      return slots.label ? (
        slots.label()
      ) : (
        <label class="item-label">{props.label}</label>
      )
    }
    return () => {
      return (
        <div class="ant-form-item">
          { renderLabel() }
          <div class="item-control-wrap">
            {/* <d-input type="text"></d-input> 类型断言!*/}
            {slots.default!()}
          </div>
          <p class="item-error" v-show="errMsg">
            {errMsg.value}
          </p>
        </div>
      )
    }
  },
})
