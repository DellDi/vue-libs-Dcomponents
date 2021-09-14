
/*
 * @Author: dell di
 * @Date: 2021-09-14 23:51:44
 * @LastEditTime: 2021-09-15 00:17:23
 * @LastEditors: di
 * @Description:
 * @FilePath: \vue-next-libs\src\uses\index.ts
 */
import { getCurrentInstance } from '@vue/runtime-core'

function useExpose<T>(extra: T) {
  const instance = getCurrentInstance()
  if (instance) {
    Object.assign(instance.proxy, extra)
  }
}
export { useExpose }
