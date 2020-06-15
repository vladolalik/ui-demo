import { mount } from "@vue/test-utils";
import Header from "../Header.vue";

describe("Header", () => {
  it("should render proper name in header", () => {
    const wrapper = mount(Header);
    expect(wrapper.find(".book-list-menu-item").text()).toBe("Zoznam kníh");
  });
});
