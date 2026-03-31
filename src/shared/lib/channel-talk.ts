'use client';

import { boot, loadScript, shutdown } from '@channel.io/channel-web-sdk-loader';

export function bootChannelTalk() {
  loadScript();
  boot({
    pluginKey: process.env.NEXT_PUBLIC_CHANNEL_TALK_PLUGIN_KEY ?? '',
  });
}

export function shutdownChannelTalk() {
  shutdown();
}
