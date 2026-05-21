# 📱 تيمة الأواني — تطبيق الجوال

مستودع تحويل الموقع [taima-alwani.pages.dev](https://taima-alwani.pages.dev) لتطبيق أندرويد باستخدام **Capacitor** + **Codemagic CI/CD**.

## 🔗 المستودع الأصلي
[github.com/taiomaalwani1234-eng/taima-alwani](https://github.com/taiomaalwani1234-eng/taima-alwani)

## 🏗️ البنية

```
taima-alwani-mobile/
├── capacitor.config.ts    # إعدادات Capacitor
├── codemagic.yaml         # إعدادات البناء السحابي
├── package.json           # الاعتماديات
├── dist/                  # ملفات الويب (تُنسخ من الموقع)
└── android/               # مشروع أندرويد (يُولّد تلقائياً)
```

## 📋 معلومات التطبيق

| الخاصية | القيمة |
|---------|--------|
| App ID | `com.taima.alwani` |
| الاسم | تيمة الأواني - أكاديمية الأمن السيبراني |
| الموقع | https://taima-alwani.pages.dev |
| الحزمة | Android APK |

## ⚠️ ملاحظة مهمة

هذا المستودع **منفصل تماماً** عن كود الموقع الأصلي ولا يعدل فيه أي شيء. التطبيق يعرض الموقع عبر WebView.
