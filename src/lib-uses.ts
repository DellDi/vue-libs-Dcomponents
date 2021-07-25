import { App } from 'vue'
import Input from './components/input/input'
import FormItem from './components/Form/FormItem'

const components = [Input, FormItem]

export default function(app: App): void {
  components.forEach((item) => app.component(item.name, item))
}
