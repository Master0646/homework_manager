import config from '@/config'


function deepTravel(config, fun) {
    if (Array.isArray(config)) {
        config.forEach((subConfig) => {
            deepTravel(subConfig, fun)
        })
    } else if (config.children) {
        config.children.forEach((subConfig) => {
            deepTravel(subConfig, fun)
        })
    } else {
        fun(config)
    }
}

let homeRouter = []
deepTravel(config.stageConfig, (viewConfig) => {
    const viewRouter = {}
    let path = viewConfig.path
    if (viewConfig.params) {
        viewConfig.params.forEach(item => {
            path = path.concat(`/:${item}?`)
        })
    }
    viewRouter.path = path
    viewRouter.name = viewConfig.name
    viewRouter.component = () => import(`@/${viewConfig.file}`)
    viewRouter.meta = {
        parent: viewConfig.parent,
        auth: viewConfig.auth,
        inNav: viewConfig.inNav
    }
    homeRouter.push(viewRouter)
})


export default homeRouter