const routers = [{
    path: '/',
    meta: {
        title: '云快修'
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
}];
export default routers;