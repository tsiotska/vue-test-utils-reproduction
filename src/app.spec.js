import { shallowMount } from '@vue/test-utils'
import App from './App.vue'
import Layout from "ant-design-vue/es/layout";


describe('App', () => {

  function factory() {
    /*
    Warning description:
    Failed setting prop "tagName" on <a-layout-stub>: value  is invalid.
    TypeError: Cannot set property tagName of [object Element] which has only a getter
    */
    return shallowMount(App, {
      global: {
        plugins: [Layout],
        // TODO: !!! Unstubbing 'a-layout' should have made it appear in html DOM
        stubs: {
          // Layout: false
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
