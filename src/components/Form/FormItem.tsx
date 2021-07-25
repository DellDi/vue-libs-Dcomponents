import { defineComponent, PropType, provide, ref } from 'vue'
import './index.scss'
import { DntRuleItem, FormItemKey, ValidTrigger } from './types'
import Schema from 'async-validator'

export default defineComponent({
  name: 'DFormItem',
  props: {
    label: [String],
    prop: {
      type: String,
      default: '',
    },
    rules: {
      type: [Object, Array] as PropType<DntRuleItem | DntRuleItem[]>,
      default: () => ({}),
    },
  },
  setup(props, { emit, slots }) {
    const errMsg = ref('')
    const getRules = (trigger: ValidTrigger): DntRuleItem[] => {
      const rule = props.rules
      const ruleArr = Array.isArray(rule) ? rule : [rule]

      const trueRules = ruleArr.filter((item) => {
        const trig = item?.trigger || 'change'
        return trig === trigger
      })

      return trueRules
    }
    const validate = (value: string, rules: DntRuleItem[]): Promise<any> => {
      if (rules && props.prop) {
        const schema = new Schema({
          [props.prop]: rules,
        })
        schema
          .validate({ [props.prop]: value })
          .then(() => {
            errMsg.value = ''
            return true
          })
          .catch(({ errors }) => {
            errMsg.value = errors[0].message
            return errMsg
          })
      }
      return Promise.resolve(true)
    }

    const handleControlChange = (value: string) => {
      const trueRules = getRules('change')
      if (trueRules) {
        if (trueRules.length) {
          validate(value, trueRules)
        }
      }
    }
    const handleControlBlur = (value: string) => {
      const trueRules = getRules('blur')
      if (trueRules) {
        if (trueRules.length) {
          validate(value, trueRules)
        }
      }
    }

    const renderLabel = () => {
      return slots.label ? (
        slots.label()
      ) : (
        <label class="item-label">{props.label}</label>
      )
    }

    provide(FormItemKey, {
      handleControlChange,
      handleControlBlur,
    })

    return () => {
      return (
        <div class="ant-form-item">
          {renderLabel()}
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
