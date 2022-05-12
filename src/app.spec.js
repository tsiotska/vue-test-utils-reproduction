import { shallowMount } from '@vue/test-utils'
import App from './App.vue'
import { Layout } from "ant-design-vue";


describe('App', () => {

  function factory() {
    return shallowMount(App, {
      global: {
        plugins: [Layout],
        stubs: {
          Layout: false
          // 'a-layout': false
        }
      }
    })
  }

  test('it works', () => {
    const wrapper = factory()

    console.log("html");
    console.log(wrapper.html());

    expect(wrapper.html()).toContain('Content')
  })
})
