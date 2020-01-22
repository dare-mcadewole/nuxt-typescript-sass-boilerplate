import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'

// Import icons that will be used and should be bundled with Snippets
import {
    faUser,
    faPlus,
    faSearch,
    faHeart,
    faCircle,
    faArrowRight,
    faHourglassStart,
    faComment,
    faLock
} from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add icons to app library
library.add(
    faUser,
    faPlus,
    faSearch,
    faHeart,
    faCircle,
    faArrowRight,
    faHourglassStart,
    faComment,
    faLock
)
library.add(faFontAwesome)

// Register the font-awesome-icon component
Vue.component(FontAwesomeIcon)
