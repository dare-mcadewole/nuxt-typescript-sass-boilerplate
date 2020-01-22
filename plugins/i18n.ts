import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { baseStore } from '~/store'

Vue.use(VueI18n)

export default (context: any) => {
    context.app.i18n = new VueI18n({
        locale: baseStore.locale,
        fallbackLocale: baseStore.fallbackLocale,
    
        // Register locales
        messages: {
            'en': require('~/locales/en.json'),
            'fr': require('~/locales/fr.json')
        }
    })
}
