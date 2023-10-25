import { App } from 'vue'

import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElTabPane
} from 'element-plus'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElTabPane,
  ElCheckbox
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
