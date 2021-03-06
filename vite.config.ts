import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    
    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),
  ]
})
