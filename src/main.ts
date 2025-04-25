import './assets/main.css'
import './assets/tailwind.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import WorkGatewayHttp from './infra/gateways/WorkGatewayHttp'
import AxiosAdapter from './infra/http/AxiosAdapter'
import ProfessionalGatewayHttp from './infra/gateways/ProfessionalGatewayHttp'
import CompanyGatewayHttp from './infra/gateways/CompanyGatewayHttp'

const app = createApp(App)

app.use(router)
const baseUrl = 'http://localhost:3000'
const axiosAdapter = new AxiosAdapter()
const workGateway = new WorkGatewayHttp(axiosAdapter, baseUrl)
const professionalGateway = new ProfessionalGatewayHttp(axiosAdapter, baseUrl)
const companyGateway = new CompanyGatewayHttp(axiosAdapter, baseUrl)
app.provide('workGateway', workGateway)
app.provide('professionalGateway', professionalGateway)
app.provide('companyGateway', companyGateway)
app.mount('#app')
