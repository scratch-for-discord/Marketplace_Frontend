import { expect } from "vitest";

import { mount } from "@vue/test-utils";
import NavBar from "../NavBar.vue";
import { describe, it } from "node:test";

describe("NavBar", () => {
  it("renders properly", () => {
    const wrapper = mount(NavBar, { props: { msg: "Hello NavBar" } });
    expect(wrapper.text()).toContain("NavBar NavBar");
  });
});
