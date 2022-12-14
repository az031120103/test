import {
  defineComponent
} from 'vue'
import {Form} from 'ant-design-vue'

export default defineComponent({
  name: 'ItSchemaForm',

  setup() {
    return () => (
      <Form>
        测试
      </Form>
    )
  }
})
