import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)

// 解決编程式路由住同一地址跳转时会报错的恃观
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
// push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) {
        return originalPush.call(this, location, onResolve, onReject)
    } else {
        return originalPush.call(this, location).catch(err => err)
    }
}
// replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
    if (onResolve || onReject) {
        return originalReplace.call(this, location, onResolve, onReject)
    } else {
        return originalReplace.call(this, location).catch(err => err)
    }
}
const vueRouter = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    component: () => import("../AppMain"),
    name: "main",
    children: [
      {
        path: "/task",
        name: "task",
        component: () => import("../view/taskManage"),
      },
      {
        path: "/test",
        name: "test",
        component: () => import("../view/test"),
      },
      {
        path: "/split",
        name: "split",
        component: () => import("../view/split"),
      },
      {
        path: "/scroll",
        name: "scroll",
        component: () => import("../view/scroll"),
      },
      {
        path: "/vmodel",
        name: "vmodel",
        component: () => import("../view/vModel"),
      },
      {
        path: "/mapSwitching",
        name: "mapSwitching",
        component: () => import("../view/mapSwitching"),
      },
      {
        path: "/venogram",
        name: "venogram",
        component: () => import("../view/venogram"),
      },
      {
        path: "/timeLine",
        name: "timeLine",
        component: () => import("../view/timeLine"),
      },
      {
        path: "/drag",
        name: "drag",
        component: () => import("../view/drag"),
      },
      {
        path: "/acknowledge",
        name: "acknowledge",
        component: () => import("../view/acknowledge"),
      },
      {
        path: "/layout",
        name: "layout",
        component: () => import("../view/layout"),
      },
      {
        path: "/responsive",
        name: "responsive",
        component: () => import("../view/responsive"),
      },
      {
        path: "/convertToPdf",
        name: "convertToPdf",
        component: () => import("../view/convertToPdf"),
      },
      {
        path: "/passValue",
        name: "passValue",
        component: () => import("../view/passValue/index"),
      },
      {
        path: "/collpase",
        name: "collpase",
        component: () => import("../view/collpase"),
      },
    ],
  },
];
const router = new VueRouter({
    mode: "history",
    routes: vueRouter
})
export default router;