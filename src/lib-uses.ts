import { App } from 'vue'
import Input from './components/input/index'

const components = [Input]

export default function(app: App): void {
  components.forEach((item) => app.component(item.name, item))
}
