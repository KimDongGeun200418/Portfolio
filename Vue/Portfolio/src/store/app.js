// `defineStore()`의 반환 값(함수)을 할당할 변수의 이름은 원하는 대로 지정할 수 있지만,
// 스토어 이름을 사용하고 `use`와 `Store`로 묶는 것이 가장 좋습니다.
// 예: `useUserStore`, `useCartStore`, `useProductStore`
// 첫 번째 인자는 앱 전체에서 스토어의 고유 ID입니다.
import { defineStore } from "pinia";
import { ref, computed } from "vue";
/*
//사용법
import { useAppStore } from "./store/app";
import { storeToRefs } from "pinia"; <- 반응성 유지
const appStore = useAppStore();
const { name, doubleCount } = storeToRefs(appStore);
const { increment } = appStore;
*/
/*
//기존 문법
export const useAppStore = defineStore('app', {
  state: () => ({
    //
  }),
})
*/

//Composition API(setup) 문법
//ref() -> state
//computed() -> getters
//function() -> actions
export const useAppStore = defineStore("appStore", () => {
  const count = ref(0);
  const name = ref("Eduardo");
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    console.log("dd");
    count.value++;
  }

  return { count, name, doubleCount, increment };
});
