<template>
  <div class="demo-box">
    <d-form ref="DForm" :model="formModel" :rules="nameRules">
      <d-form-item prop="name" label="姓名" :rules="nameRules">
        <d-input v-model="formModel.name" placeholder="请输入姓名"></d-input>
      </d-form-item>
      <d-form-item label="密码" prop="password" :rules="nameRules">
        <d-input
          v-model="formModel.password"
          type="password"
          placeholder="请输入密码"
        ></d-input>
      </d-form-item>
      <d-form-item>
        <button @click="submit">提交</button>
      </d-form-item>
    </d-form>
  </div>
</template>
<script lang="tsx">
import { DntRuleItem, FormContext } from './types';
import { ref, defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'DemoForm',
  setup() {
    const formModel = reactive({
      name: '',
      password: '',
    })
    const nameRules = ref<DntRuleItem | DntRuleItem[]>([
      { trigger: 'blur', required: true, message: '你的名字怎么没有输入' },
      { trigger: 'blur', max: 6, message: '不能超过6位' }
    ])
    const DForm = ref<FormContext | null>(null)
    const submit = () => {
      // 这里因为可能没传，需要强制类型断言
      DForm.value!.validate((valid:boolean)=> {
        console.log("🚀 ~ file: demo.vue ~ line 40 ~ submit ~ valid", valid)
      })
    }

    return {
      formModel,
      nameRules,
      submit,
      DForm
    }
  }
})
</script>
