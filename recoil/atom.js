import { atom } from "recoil";

const demoState = atom({
  key: "demoState",
  default: "Demo",
});
const dempArrayState = atom({
  key: "arrayState",
  default: [1, 2, 3, 4],
});

export { demoState, dempArrayState };
