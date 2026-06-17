
const tweets = [
  {
    id: 1,
    content: "Acabo de terminar mi primer proyecto usando JavaScript puro 🚀",
    author_name: "FedericoDev",
    likes: 128,
    retweets: 24,
    comments: [
      { author_name: "AnaCode", content: "¡Felicitaciones!" },
      { author_name: "JuanJS", content: "¿Lo tenés en GitHub?" }
    ],
    attachments:[
      {url:"https://picsum.photos/id/1/600/400"}
    ]  
  },
  {
    id: 2,
    content: "CSS Grid me está salvando la vida en este diseño responsive.",
    author_name: "MariaFrontend",
    likes: 215,
    retweets: 41,
    comments: [
      { author_name: "PedroUI", content: "Grid es increíble." }
    ],
    attachments: [
    {url:"https://picsum.photos/id/20/600/400"}
    ]
  },
  {
    id: 3,
    content: "¿Cuál es su editor de código favorito?",
    author_name: "CodeMaster",
    likes: 89,
    retweets: 12,
    comments: [
      { author_name: "LucasDev", content: "VS Code sin dudas." },
      { author_name: "SofiaTech", content: "WebStorm para proyectos grandes." }
    ],
    attachments:[
    {url:"https://picsum.photos/id/30/600/400"}
    ]
  },
  {
    id: 4,
    content: "Hoy aprendí sobre closures en JavaScript.",
    author_name: "NicoCoder",
    likes: 173,
    retweets: 28,
    comments: [
      { author_name: "AnaCode", content: "Un concepto fundamental." }
    ],
    attachments:[
      {url:"https://picsum.photos/id/40/600/400"} 
      ]       
  },
  {
    id: 5,
    content: "Compartiendo algunos recursos gratuitos para aprender React.",
    author_name: "ReactGuru",
    likes: 342,
    retweets: 97,
    comments: [
      { author_name: "DevArg", content: "Gracias por compartir." },
      { author_name: "FrontendFan", content: "Muy útiles." }
    ],
    attachments:[
      {url:"https://picsum.photos/id/50/600/400"}
    ]
  },
  {
    id: 6,
    content: "Nada mejor que un café y una buena sesión de debugging ☕",
    author_name: "DebugKing",
    likes: 201,
    retweets: 35,
    comments: [
      { author_name: "MateDev", content: "Yo prefiero mate 😄" }
    ],
    attachments: [
      {url:"https://picsum.photos/id/60/600/400"}
    ]
  },
  {
    id: 7,
    content: "Acaban de lanzar una nueva versión de mi portfolio.",
    author_name: "PortfolioPro",
    likes: 154,
    retweets: 19,
    comments: [
      { author_name: "WebDesigner", content: "Se ve genial." }
    ],
    attachments: [
      {url:"https://picsum.photos/id/70/600/400"}
    ]
  },
  {
    id: 8,
    content: "Tip rápido: usá const siempre que no reasignes valores.",
    author_name: "JSTips",
    likes: 410,
    retweets: 103,
    comments: [
      { author_name: "CodeMaster", content: "Buen consejo." },
      { author_name: "DevJunior", content: "Lo voy a aplicar." }
    ],
    attachments: [
      {url:"https://picsum.photos/id/80/600/400"}
    ]
  },
  {
    id: 9,
    content: "¿Qué framework están usando actualmente?",
    author_name: "TechTalk",
    likes: 267,
    retweets: 44,
    comments: [
      { author_name: "ReactGuru", content: "React." },
      { author_name: "VueFan", content: "Vue.js." }
    ],
    attachments: [
      {url:"https://picsum.photos/id/90/600/400"},
      {url:"https://picsum.photos/id/90/600/400"}

    ]
  },
  {
    id: 10,
    content: "Subiendo avances de mi clon de Twitter hecho en JavaScript.",
    author_name: "FedericoDev",
    likes: 512,
    retweets: 120,
    comments: [
      { author_name: "AnaCode", content: "¡Quedó espectacular!" },
      { author_name: "NicoCoder", content: "Esperando el deploy." }
    ],
    attachments: [
      {url:"https://picsum.photos/id/100/600/400"}
    ]
  }
];


const renderFeed = (tweets) => {
  let feed = ``
  for (let tweet of tweets) {
      feed += 
      `<Article>
          <h2>${tweet.author_name}</h2>
              <p>
                 ${tweet.content}
              </p>    
        ${renderAttachments(tweet.attachments, tweet.author_name)}
        <div>
            <button>
                Likes ${tweet.likes}
            </button>
            <button>
                Retweets ${tweet.retweets}
            </button>
        </div>
        <ul>
          ${renderComment(tweet.comments)}
        </ul>
      </article>`
  }
  return feed
}

const renderComment = (Arraycomments) => {
  let comments = ``
  for (let comment of Arraycomments) {
    comments +=
     `<li>
         <h3>${comment.author_name}</h3>
            <p>
              ${comment.content}
            </p>
      </li>`
  }
  return comments
}

const renderAttachments = (ArrayAttachments, author_name) => {
  let attachments = ``
  for (let attachment of ArrayAttachments) {
    attachments += 
    `<div>
      <img src=${attachment.url} alt="Imagen del tweet generado por el usuario ${author_name}">
    </div>`
  }
  return attachments
}


const feed_HTML = document.getElementById('contenedor-tweets')
if (feed_HTML) {
  feed_HTML.innerHTML = renderFeed(tweets)
}