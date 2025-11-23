(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const r=[{title:"🤖 WanteDash",subtitle:"학원 행정 자동화 AI 솔루션",desc:`LLM, RAG, 구글 Drive API, 디스코드 API를 활용한 학원 행정 자동화 솔루션. 
    구글 API 툴 개발 및 에이전트 백엔드/프론트 구현.`,techs:["LangChain","LangGraph","PostgreSQL","Googel API"],links:[]},{title:"👁️ 근태의전설",subtitle:"AI 기반 지능형 비접촉식 근태관리 시스템",desc:`YOLO 객체 인식 기술을 활용한 근태 시스템. OpenCV와 PyQT5를 이용한 
    클라이언트 개발 및 Face Recognition 모델 적용.`,techs:["YOLO","OpenCV","PyQT5","Face Recognition"],links:[]},{title:"🍲 K-Food Demon Hunter",subtitle:"한식 정보 제공 시스템",desc:`CNN 기반 이미지 분류 모델(90% 이상 정확도)과 재료 기반 추천 시스템. 
    React/TypeScript로 웹 서비스 구현 및 배포.`,techs:["CNN","React","TypeScript","Scikit-learn"],links:[{title:"FRONT LINK",link:"https://jwpark363.github.io/kfood/"}]},{title:"📰 CONE",subtitle:"저품질 기사 검증 시스템",desc:`뉴스 데이터 분석을 통한 저품질 기사 현황 파악 및 검증 솔루션. 
    뉴스빅데이터 해커톤 제출 프로젝트.`,techs:["Pandas","Dash","React","OpenAI API"],links:[{title:"FRONT LINK",link:"https://jwpark363.github.io/clickbait/"}]},{title:"REACT APP",subtitle:"React APP Side Project",desc:"React Front Study를 위한 앱개발 연습",techs:["React","TypeScript","Styled Component","Jotai"],links:[{title:"Modern TODO",link:"https://jwpark363.github.io/modern_todo/"},{title:"Top30 Coin",link:"https://jwpark363.github.io/top30coins/"},{title:"NewFlix",link:"https://jwpark363.github.io/newflix/"}]}];document.querySelector("#main_project").innerHTML=r.map(t=>`<div class="project-card">
  <h3>${t.title}</h3>
    <p class="subtitle">${t.subtitle}</p>
    <p class="description">
        ${t.desc}
    </p>
    <div class="tech-tags">
    ${t.techs.map(i=>'<span class="tech-tag">'+i+"</span>").join(" ")}
    ${t.links.map(i=>`<a class="tech-link" href="${i.link}" target="_blank">🔗 ${i.title}</a>`).join(" ")}
    </div>
</div>`).join(" ");const c=[{title:"AI Agent 엔지니어",period:"2024.08 ~ 현재",items:["원티드스페이스 AI 에이전트 과정 2기 학습 중","최신 AI 기술 학습 및 프로젝트 진행"]},{title:"AI 기반 설비진단솔루션 공급회사 운영팀 리더",period:"2022.12 ~ 2024.07",items:["GS화학 설비진단 솔루션 공급 PM"]},{title:"RPA PM",period:"2018.07 ~ 2022.11",items:["AA, UiPath, A.Works RPA 프로젝트 진행","삼성전자, 현대자동차, 현대해상, 수협은행, 병원 RPA 프로젝트","하나은행 RPA 프로젝트 및 포털 설계"]},{title:"기업 전산실(정보시스템실)",period:"2002.04 ~ 2018.06",items:["제조(6년) : SAP ERP, 그룹웨어, MES 시스템 구축 및 운영","항공(10년) : 최신 AI 기술 학습 및 프로젝트 진행"]}];document.querySelector("#timeline").innerHTML=c.map(t=>`<div class="timeline-item">
        <h3>${t.title}</h3>
        <p class="period">${t.period}</p>
        <ul>
            ${t.items.map(i=>'<li">'+i+"</span>").join(" ")}
        </ul>
    </div>
    `).join(" ")+`<div class="timeline-item">
    <h3>자바 엔지니어</h3>
    <p class="period">1998.08 ~ 2002.03</p>
</div>`;const a=[{title:"AI/ML",items:["LangChain, LangGraph","OpenAI, RAG, Vector DB","YOLO, OpenCV","CNN, Face Recognition"]},{title:"Backend",items:["Python, FastAPI","PostgreSQL, Malvus","NodeJS","JAVA"]},{title:"Frontend",items:["React, TypeScript","HTML/CSS/JavaScript","PyQT5","Vite"]},{title:"Tools & Others",items:["Google Drive/Sheet API","Discord API","RPA (UiPath, AA)","Git, Docker"]}];document.querySelector("#skills").innerHTML=a.map(t=>`<div class="skill-category">
        <h3>${t.title}</h3>
        <ul>
            ${t.items.map(i=>"<li>"+i+"</li>").join(" ")}
        </ul>
    </div>
    `).join(" ");
