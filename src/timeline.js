const timeline_items = [
  {
    "title":"AI Agent 엔지니어",
    "period":"2024.08 ~ 현재",
    "items":[
        "원티드스페이스 AI 에이전트 과정 2기 학습 중",
        "최신 AI 기술 학습 및 프로젝트 진행"
    ]
  },
  {
    "title":"AI 기반 설비진단솔루션 공급회사 운영팀 리더",
    "period":"2022.12 ~ 2024.07",
    "items":[
        "GS화학 설비진단 솔루션 공급 PM"
    ]
  },
  {
    "title":"RPA PM",
    "period":"2018.07 ~ 2022.11",
    "items":[
        "AA, UiPath, A.Works RPA 프로젝트 진행",
        "삼성전자, 현대자동차, 현대해상, 수협은행, 병원 RPA 프로젝트",
        "하나은행 RPA 프로젝트 및 포털 설계"
    ]
  },
  {
    "title":"기업 전산실(정보시스템실)",
    "period":"2002.04 ~ 2018.06",
    "items":[
        "제조(6년) : SAP ERP, 그룹웨어, MES 시스템 구축 및 운영",
        "항공(10년) : 최신 AI 기술 학습 및 프로젝트 진행"
    ]
  },
]

document.querySelector('#timeline').innerHTML = timeline_items.map(prj =>
    `<div class="timeline-item">
        <h3>${prj.title}</h3>
        <p class="period">${prj.period}</p>
        <ul>
            ${prj.items.map(item => '<li">'+item+'</span>').join(' ')}
        </ul>
    </div>
    `
).join(' ') + 
`<div class="timeline-item">
    <h3>자바 엔지니어</h3>
    <p class="period">1998.08 ~ 2002.03</p>
</div>`