// Getting Started & Installation 02.09.2023
// 1-) Node.js kurulumu ve TypeScript kurulumu yapıldı.
// 2-) npm init --y kullanılarak package.json oluşturuldu.
// 3-) tsconfig.json dosyası oluşturuldu ve compilerOptions tanımlandı.
// 4-) compilerOptions için {
//     "lib": ["ESNext"], ECMAScript ve API'lerinin projeyi kullanmasını ve en son ve en gelişmiş JavaScript özelliklerini kullanılmasına izin verdik.
//      Kütüphane özellikeri içerisinde "DOM" kullanımı tarayıcı yani HTML desteği ekler.
//     "target": "ES6", TS kodunu hangi şekilde derleyeceğini ifade eder burada ECMAScript6 için derleyeceğiniz söyledik.
//     "strict": true, Sıkı bir tür denetimi yapıtık.
//     "module": "CommonJS", TS formatı için modül sistemimizi CommonJS seçtik
//     "alwaysStrict": true, JS kodunun her zmaan use strict modunda çalışmasını sağladık
//     "moduleResolution": "Node", Modülün çalışacağı yeri seçtik
//     "esModuleInterop": true, ES ile CommonJS modülü arasındaki geçişleri kolaylaştırdık
//     "outDir": "./dist", Output directory ayarı için
//     "rootDir": "src", Kaynağı belirledik
//     "noUnusedParameters": true, Parametre kullanımını zorunlu tutar
//     "noUnusedLocals": true Eğerki değer yazılır ve kullanılmazsa hata almamızı sağlar
// } özellikleri girildi

// Basic Types & Type Identification 03.09.2023
// 1-) TS değikenleri tanımlarken tip verilmesine ihtiyaç duymaz otomatik olarak tanımlar
// 2-) === ile tip eşit mi
// 3-) Bir objenin tiplerini eşitledim
// 4-) Generic bir dizi oluşturdum
// 5-) Tuples yaptım