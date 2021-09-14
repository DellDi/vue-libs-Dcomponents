/*
 * @Author: dell di
 * @Date: 2021-07-18 10:12:10
 * @LastEditTime: 2021-09-14 23:48:44
 * @LastEditors: di
 * @Description:
 * @FilePath: \vue-next-libs\src\components\Form\FormItem.tsx
 */
import { defineComponent, PropType, inject, provide, ref } from 'vue'
import './index.scss'
import {
  DntRuleItem,
  FormContext,
  FormItemKey,
  FormKey,
  ValidTrigger,
} from './types'
import Schema, { ValidateError } from 'async-validator'

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
    },
  },
  setup(props, { emit, slots }) {
    const errMsg = ref('')
    const parent = inject<FormContext>(FormKey)
    const getRules = (trigger: ValidTrigger): DntRuleItem[] => {
      const rules = props.rules || parent?.rules[props.prop]
      if (rules) {
        const ruleArr = Array.isArray(rules) ? rules : [rules]
        return ruleArr.filter((item) => item.trigger === trigger)
      }
      return []
    }
    const validate = (
      value: string,
      rules: DntRuleItem[]
    ): Promise<boolean | ValidateError> => {
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
