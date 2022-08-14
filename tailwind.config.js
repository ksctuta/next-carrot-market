/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  // [자동]시스템 소프트웨어 특성 [다크모드,라이트모드] 따라갈지 media
  darkMode:"media", // media, class
  // [수동] 다크모드 활성화 아닌 class 속성 사용할지 이 속성 사용시 .dark 라는 부모 요소의 클래스 속성자를 따라감

  plugins: [
    require('@tailwindcss/forms'),
  ],
}
