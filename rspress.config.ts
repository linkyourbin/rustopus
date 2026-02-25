import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Rustmcu',
  description: 'Rust for MCU - 嵌入式 Rust 开发教程',
  icon: '/logo/rustmcu-icon.png',
  globalStyles: path.join(__dirname, 'docs/styles/custom.css'),
  logo: {
    light: '/logo/rustmcu-light.png',
    dark: '/logo/rustmcu-dark.png',
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
        text: 'KiCAD',
        link: '/kicad/',
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
              text: 'STM32环境搭建',
              link: '/toolchain/stm32-dev-env-setup',
            },
            {
              text: 'ESP32环境搭建',
              link: '/toolchain/esp32-dev-setup',
            },
            {
              text: 'RP Pico环境搭建',
              link: '/toolchain/rpx-picox-dev-setup',
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
      '/kicad/': [
        {
          text: 'KiCAD',
          items: [
            {
              text: '概述',
              link: '/kicad/',
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
        content: 'https://space.bilibili.com/3493142393260061?spm_id_from=333.1007.0.0',
      },
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/linkyourbin',
      },
    ],
  },
});
