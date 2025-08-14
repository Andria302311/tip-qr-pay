import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.4aecea090d91429a9500c254c0b13108',
  appName: 'Chai',
  webDir: 'dist',
  server: {
    url: 'https://4aecea09-0d91-429a-9500-c254c0b13108.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;