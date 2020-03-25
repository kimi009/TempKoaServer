const koaRouter = require('koa-router')

const router = new koaRouter({
  prefix: '/home'
})

router.get('/navInfo', async (ctx) => {
  const res = [
    {
      key: 'cloudProduct',
      name: '云产品',
      children: [
        {
          key: 'calc',
          name: '计算',
          children: [
            '弹性伸缩',
            '云容器实例',
            '云容器引擎',
            '镜像服务',
            '裸金属服务器',
            '弹性云服务器'
          ]
        },
        {
          key: 'store',
          name: '存储',
          children: ['弹性文件服务', '云硬盘']
        },
        {
          key: 'network',
          name: '网络',
          children: ['弹性公网Ip', '云专线']
        }
      ]
    },
    {
      key: 'cloudService',
      name: '云管理服务',
      children: []
    },
    {
      key: 'cloudSolution',
      name: '云解决方案',
      children: []
    },
    {
      key: 'cloudTrain',
      name: '云培训',
      children: [
        {
          key: 'tixi',
          name: '培训体系设计服务',
          children: ['']
        },
        {
          key: 'tixi6',
          name: '培训体系设计服务',
          children: ['']
        },
        {
          key: 'tixi8',
          name: '培训体系设计服务',
          children: ['']
        }
      ]
    },
    {
      key: 'help',
      name: '帮助与支持',
      children: []
    }
  ]
  let list = await new Promise((resolve) => {
    resolve(res)
  })
  ctx.body = { code: 1000, data: { list } }
})

router.get('/productInfo', async (ctx) => {
  const data = {
    title: '稳定安全 全球服务的华为云计算产品',
    subTitle: '120+云产品，助力业务敏捷上云',
    items: [
      {
        key: 1,
        icon:
          'https://icloud.jfh.com/broker/base-service/api/home/icons/1582894400839.svg',
        title: '弹性云服务器',
        description:
          '弹性云服务器（Elastic Cloud Server）是一种可随时自助获取、可弹性伸缩的云服务器，帮助用户打造可靠、安全、灵活、高效的应用环境，确保服务持久稳定运行，提升运维效率。'
      },
      {
        key: 3,
        icon:
          'https://icloud.jfh.com/broker/base-service/api/home/icons/1582894324555.svg',
        title: '弹性伸缩',
        description:
          '弹性伸缩（Auto Scaling）可根据用户的业务需求和预设策略，自动调整计算资源，使云服务器数量自动随业务负载增长而增加，随业务负载降低而减少，保证业务平稳健康运行。'
      },
      {
        key: 5,
        icon:
          'https://icloud.jfh.com/broker/base-service/api/home/icons/1582894453244.svg',
        title: '虚拟私有云',
        description:
          '虚拟私有云（Virtual Private Cloud）是用户在华为云上申请的隔离的、私密的虚拟网络环境。用户可以自由配置VPC内的IP地址段、子网、安全组等子服务，也可以申请弹性带宽和弹性IP搭建业务系统。'
      },
      {
        key: 17,
        icon:
          'https://icloud.jfh.com/broker/base-service/api/home/icons/1582894400839.svg',
        title: '弹性云服务器',
        description:
          '弹性云服务器（Elastic Cloud Server）是一种可随时自助获取、可弹性伸缩的云服务器，帮助用户打造可靠、安全、灵活、高效的应用环境，确保服务持久稳定运行，提升运维效率。'
      },
      {
        key: 32,
        icon:
          'https://icloud.jfh.com/broker/base-service/api/home/icons/1582894324555.svg',
        title: '弹性伸缩',
        description:
          '弹性伸缩（Auto Scaling）可根据用户的业务需求和预设策略，自动调整计算资源，使云服务器数量自动随业务负载增长而增加，随业务负载降低而减少，保证业务平稳健康运行。'
      },
      {
        key: 33,
        icon:
          'https://icloud.jfh.com/broker/base-service/api/home/icons/1582894324555.svg',
        title: '弹性伸缩',
        description:
          '弹性伸缩（Auto Scaling）可根据用户的业务需求和预设策略，自动调整计算资源，使云服务器数量自动随业务负载增长而增加，随业务负载降低而减少，保证业务平稳健康运行。'
      },
      {
        key: 54,
        icon:
          'https://icloud.jfh.com/broker/base-service/api/home/icons/1582894453244.svg',
        title: '虚拟私有云',
        description:
          '虚拟私有云（Virtual Private Cloud）是用户在华为云上申请的隔离的、私密的虚拟网络环境。用户可以自由配置VPC内的IP地址段、子网、安全组等子服务，也可以申请弹性带宽和弹性IP搭建业务系统。'
      }
    ]
  }
  let product = await Promise.resolve(data)
  ctx.body = {
    code: 1000,
    data: { product }
  }
})
module.exports = router
