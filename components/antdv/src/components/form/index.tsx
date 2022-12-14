import {
  useAttrs,
  defineComponent
} from 'vue'
import {Form} from 'ant-design-vue'

export default defineComponent({
  name: 'ItSchemaForm',

  setup() {
    const attrs = useAttrs()

    return () => (
      <Form {...attrs}>
        测试
      </Form>
    )
  }
})
