/*
 * @Author: dell di
 * @Date: 2021-06-18 00:17:01
 * @LastEditTime: 2021-09-14 22:40:16
 * @LastEditors: di
 * @Description: 
 * @FilePath: \vue-next-libs\src\lib-uses.ts
 */
import { App } from 'vue'
import Input from './components/input/input'
import FormItem from './components/Form/FormItem'
import DForm from './components/Form'

const components = [Input, FormItem, DForm]

export default function(app: App): void {
  components.forEach((item) => app.component(item.name, item))
}
