import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.taima.alwani',
  appName: 'تيمة الأواني - أكاديمية الأمن السيبراني',
  webDir: 'dist',
  server: {
    url: 'https://taima-alwani.pages.dev',
    androidScheme: 'https'
  },
  android: {
    backgroundColor: '#D6EBF3',
    allowMixedContent: false
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#D6EBF3',
      showSpinner: true,
      spinnerColor: '#447F98',
      androidScaleType: 'CENTER_CROP'
    }
  }
};

export default config;
