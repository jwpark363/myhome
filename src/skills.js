const skills = [
  {
    "title":"AI/ML",
    "items":[
        "LangChain, LangGraph",
        "OpenAI, RAG, Vector DB",
        "YOLO, OpenCV",
        "CNN, Face Recognition"
    ]
  },
  {
    "title":"Backend",
    "items":[
        "Python, FastAPI",
        "PostgreSQL, Malvus",
        "NodeJS",
        "JAVA"
    ]
  },
  {
    "title":"Frontend",
    "items":[
        "React, TypeScript",
        "HTML/CSS/JavaScript",
        "PyQT5",
        "Vite"
    ]
  },
  {
    "title":"Tools & Others",
    "items":[
        "Google Drive/Sheet API",
        "Discord API",
        "RPA (UiPath, AA)",
        "Git, Docker"
    ]
  },
]

document.querySelector('#skills').innerHTML = skills.map(prj =>
    `<div class="skill-category">
        <h3>${prj.title}</h3>
        <ul>
            ${prj.items.map(item => '<li>'+item+'</li>').join(' ')}
        </ul>
    </div>
    `
).join(' ')