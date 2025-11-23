const main_project = [
  {
    "title":"🤖 WanteDash",
    "subtitle":"학원 행정 자동화 AI 솔루션",
    "desc":`LLM, RAG, 구글 Drive API, 디스코드 API를 활용한 학원 행정 자동화 솔루션. 
    구글 API 툴 개발 및 에이전트 백엔드/프론트 구현.`,
    "techs":["LangChain","LangGraph","PostgreSQL","Googel API"],
    "links":[]
  },
  {
    "title":"👁️ 근태의전설",
    "subtitle":"AI 기반 지능형 비접촉식 근태관리 시스템",
    "desc":`YOLO 객체 인식 기술을 활용한 근태 시스템. OpenCV와 PyQT5를 이용한 
    클라이언트 개발 및 Face Recognition 모델 적용.`,
    "techs":["YOLO","OpenCV","PyQT5","Face Recognition"],
    "links":[]
  },
  {
    "title":"🍲 K-Food Demon Hunter",
    "subtitle":"한식 정보 제공 시스템",
    "desc":`CNN 기반 이미지 분류 모델(90% 이상 정확도)과 재료 기반 추천 시스템. 
    React/TypeScript로 웹 서비스 구현 및 배포.`,
    "techs":["CNN","React","TypeScript","Scikit-learn"],
    "links":[{
      "title":"FRONT LINK",
      "link":"https://jwpark363.github.io/kfood/"
    }]
  },
  {
    "title":"📰 CONE",
    "subtitle":"저품질 기사 검증 시스템",
    "desc":`뉴스 데이터 분석을 통한 저품질 기사 현황 파악 및 검증 솔루션. 
    뉴스빅데이터 해커톤 제출 프로젝트.`,
    "techs":["Pandas","Dash","React","OpenAI API"],
    "links":[{
      "title":"FRONT LINK",
      "link":"https://jwpark363.github.io/clickbait/"
    }]
  },
  {
    "title":"REACT APP",
    "subtitle":"React APP Side Project",
    "desc":`React Front Study를 위한 앱개발 연습`,
    "techs":["React","TypeScript","Styled Component","Jotai"],
    "links":[
      {
        "title":"Modern TODO",
        "link":"https://jwpark363.github.io/modern_todo/"
      },
      {
        "title":"Top30 Coin",
        "link":"https://jwpark363.github.io/top30coins/"
      },
      {
        "title":"NewFlix",
        "link":"https://jwpark363.github.io/newflix/"
      }
    ]
  }
]

document.querySelector('#main_project').innerHTML = main_project.map(prj =>
  `<div class="project-card">
  <h3>${prj.title}</h3>
    <p class="subtitle">${prj.subtitle}</p>
    <p class="description">
        ${prj.desc}
    </p>
    <div class="tech-tags">
    ${prj.techs.map(tech => '<span class="tech-tag">'+tech+'</span>').join(' ')}
    ${prj.links.map(item => `<a class="tech-link" href="${item.link}" target="_blank">🔗 ${item.title}</a>`).join(' ')}
    </div>
</div>`
).join(' ')

