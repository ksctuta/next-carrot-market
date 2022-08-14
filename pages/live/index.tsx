import type { NextPage } from "next";
import Layout from "../../components/layout";

const Live: NextPage = () => {
  return (
    <Layout hasTabBar title="라이브">
      <div className="py-10 space-y-4 divide-y-2">
        {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
          <div key={i} className="pt-4 px-4">
            {/* aspect-video를 사용하면 높이를 딱히 지정해 줄 필요가없다. 비디오처럼 만들어주는 class name*/}
            {/* 높이가 즉시 비율에 맞게 자동으로 조정이 된다. 높이계산을 해줄 필요가 없음. */}
            {/* 자동으로 비디오의 비율을 주는데 16대 9로 되어있음. */}
            {/* 원을 만들때는 aspect-square로 정사각형을 만든 후 다듬어서 사용 rounded-full로 원 만듬. */}
            <div className="w-full bg-slate-300 aspect-video rounded-md shadow-sm" />
            <h3 className="text-gray-700 text-lg mt-2">
              Let&apos;s try potatos
            </h3>
          </div>
        ))}
        ;
        <button className="fixed bottom-24 right-5 bg-orange-400 rounded-full text-white p-4 shadow-xl hover:bg-orange-500 cursor-pointer transition-colors border-transparent">
          {/* heroicons.dev에서 video 검색으로 찾음 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Live;

// Aspect Ratio

// 요소의 종횡비를 제어하기 위한 유틸리티입니다.
// 또는 대괄호를 사용하여 새로운 속성을 생성할 수도 있습니다.
// ```
// aspect-auto => aspect-ratio: auto;
// aspect-square => aspect-ratio: 1 / 1;
// aspect-video => aspect-ratio: 16 / 9;

// iframe class="w-full aspect-[4/3]" src="https://www.youtube.com/...
// ```
// https://tailwindcss.com/docs/aspect-ratio

// aspect-ratio
// 종횡비 CSS 속성은 자동 크기 및 기타 레이아웃 기능 계산에 사용되는 상자의 기본 종횡비를 설정합니다.
// https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio

// video 아이콘 복사할 때 SVG가 아닌 JSX로 복사해오시면 속성 수정하지 않고 바로 사용가능합니다. (Copy JSX)
// https://heroicons.dev

// forms 처럼 official plugin 에 aspect-ratio plugin 도 있습니다.

// "aspect-w-16 aspect-h-9" 이런 식으로 비율을 고정 시킬 수 있네요.
// https://tailwindcss.com/docs/plugins#aspect-ratio
