import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Rustopus',
  description: 'Rustopus - 嵌入式 Rust 开发教程',
  icon: '/logo/rustopus.png',
  builderConfig: {
    html: {
      tags: [
        {
          tag: 'link',
          attrs: { rel: 'stylesheet', href: '/custom.css' },
          append: true,
        },
      ],
    },
  },
  logo: {
    light: '/logo/rustopus-light.png',
    dark: '/logo/rustopus-dark.png',
  },
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Toolchain',
        link: '/toolchain/',
      },
      {
        text: 'ESP32',
        link: '/esp32/',
      },
      {
        text: 'STM32',
        link: '/stm32/',
      },
      {
        text: 'RP Pico',
        link: '/rp/',
      },
      {
        text: 'Tools',
        link: '/utils/',
      },
      {
        text: 'NordicSemi',
        link: '/nordicsemi/',
      },
      {
        text: 'HPMicro',
        link: '/hpmicro/',
      },
    ],
    sidebar: {
      '/toolchain/': [
        {
          text: '开发工具链',
          items: [
            {
              text: '概述',
              link: '/toolchain/',
            },
            {
              text: 'Rust开发环境',
              link: '/toolchain/rust_dev_base_env',
            },
            {
              text: 'Cortex-M内核单片机开发环境',
              link: '/toolchain/cortex-m',
            },
            {
              text: 'ESP32环境搭建',
              link: '/toolchain/esp32-dev-setup',
            },
            {
              text: '实用工具安装',
              link: '/toolchain/utils',
            },
          ],
        },
      ],
      '/esp32/': [
        {
          text: 'ESP32系列',
          items: [
            {
              text: '概述',
              link: '/esp32/',
            },
            {
              text: 'ESP32模板工程',
              link: '/esp32/esp-generate-template',
            },
            {
              text: 'ESP32C3读取DHT11',
              link: '/esp32/esp32c3_dht11',
            },
          ],
        },
      ],
      '/stm32/': [
        {
          text: 'STM32系列',
          items: [
            {
              text: '概述',
              link: '/stm32/',
            },
            {
              text: '点亮LED',
              link: '/stm32/blinky',
            },
          ],
        },
      ],
      '/rp/': [
        {
          text: 'RP系列',
          items: [
            {
              text: '概述',
              link: '/rp/',
            },
            {
              text: 'Blinky',
              link: '/rp/blinky',
            },
          ],
        },
      ],
      '/utils/': [
        {
          text: 'Tools',
          items: [
            {
              text: '概述',
              link: '/utils/',
            },
            {
              text: 'NLBN+SEEX 工具',
              link: '/utils/nlbn',
            },
          ],
        },
      ],
      '/nordicsemi/': [
        {
          text: 'NordicSemi',
          items: [
            {
              text: '概述',
              link: '/nordicsemi/',
            },
          ],
        },
      ],
      '/hpmicro/': [
        {
          text: 'HPMicro',
          items: [
            {
              text: '概述',
              link: '/hpmicro/',
            },
          ],
        },
      ],
    },
    socialLinks: [
      {
        icon: 'bilibili',
        mode: 'link',
        content: 'https://space.bilibili.com/3493142393260061',
      },
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/linkyourbin',
      },
    ],
  },
});
