
let tweets = [
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
    attachments: [
      { url: "./img/1.jpg" }
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
      { url: "./img/2.jpg" }
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
    attachments: [
      { url: "./img/3.jpg" }
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
    attachments: [
      { url: "./img/4.jpg" }
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
    attachments: [
      { url: "./img/5.jpg" }
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
      { url: "./img/6.jpg" }
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
      { url: "./img/7.jpg" }
    ]
  },
  {
    id: 8,
    content: "Tip rápido: usá const siempre que no reasignes valores.",
    author_name: "JSBestPractices",
    likes: 410,
    retweets: 103,
    comments: [
      { author_name: "CodeMaster", content: "Buen consejo." },
      { author_name: "DevJunior", content: "Lo voy a aplicar." }
    ],
    attachments: [
      { url: "./img/8.jpg" }
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
      { url: "./img/9.jpg" }
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
      { url: "./img/10.jpg" }
    ]
  }
];


/* crear una funcion que agregue un tweet
recibe
id
author_name
contnent 
deberera crear eñ tweet y agregarlo al array*/

/* 
agregarComentario(tweet_id, author_name, comment)
    Agregar un comentario a un tweet si el tweet existe

modifcarContenidoTweet(tweet_id, nuevo_contenido)
    Modificar el content de un tweet si existe

agregarLike(tweet_id) 
    incrementar en 1 la cantidad de likes de ese tweet si existe
    el boton de 'like' debe decir ahora likeado

retweetear(tweet_id) 
    incrementar en 1 la cantidad de retweets de ese tweet si existe
    el boton de 'retweet' debe decir ahora retweeteado

dislikeTweet(tweet_id)
    decrementar en 1 la cantidad de likes de ese tweet si existe
    

quitarRetweet(tweet_id) 
    decrementar en 1 la cantidad de retweets de ese tweet si existe
*/


const feed_HTML = document.getElementById('contenedor-tweets')
const btnReTweet_HTML = document.getElementById('btn-retweet')
const btnLike_HTML = document.getElementById('btn-like')
let ArrayEstadoRetweets = []
let ArrayEstadoLikes = []

document.addEventListener("DOMContentLoaded", function () {
if (feed_HTML) {
  feed_HTML.innerHTML = renderFeed()
}
})


function setEstadoLikes(nuevoEstado) {
  ArrayEstadoLikes = nuevoEstado
  feed_HTML.innerHTML = renderFeed()
}
// logica para actualizar el estado de los retweets
function setEstadoRetweets(nuevoEstado) {
  ArrayEstadoRetweets = nuevoEstado
  feed_HTML.innerHTML = renderFeed()
}

// logica para actualizar el estado de los tweets
function setEstadoTweets(nuevoEstado) {
  tweets = nuevoEstado
  console.log(tweets)
  feed_HTML.innerHTML = renderFeed()
}
const existeId = id => {
  for (let tweet of tweets) {
    if (tweet.id === id) {
      return true
    }
  }
  return false
}
const devolverTweet = id => {
  for (let tweet of tweets) {
    if (tweet.id === id) {
      return tweet
    }
  }
}

const devolverTweetIndex = id => {
  const indice = tweets.findIndex(tweet => tweet.id === id)
  return indice
}
function agregarTweet(id, author_name, content) {
  if (!id || !author_name || !content) {
    return;
  }
  const tweet = {
    id: id,
    content: content,
    author_name: author_name,
    likes: 0,
    retweets: 0,
    comments: [],
    attachments: []
  }
  let clone_tweets = [...tweets, tweet]
  setEstadoTweets(clone_tweets)
}
const renderFeed = () => {
  let feed = ``
  for (let tweet of tweets) {
    feed +=
      `<article class="tweet">
            <h2>@${tweet.author_name}</h2>
                <p class="content-tweet">
                   ${tweet.content}
                </p>    
          ${renderAttachments(tweet.attachments, tweet.author_name)}
          <div class="btns-interaccion">
              <button 
                  id="like-btn${tweet.id}" 
                  class="btn-like"
                  data-tweet-id="${tweet.id}">
                  ${ ArrayEstadoLikes.includes(tweet.id) ? 'likeado❤' : 'like🤍'} ${tweet.likes}
              </button>
              <button 
                  id="retweet-btn${tweet.id}" 
                  class="btn-retweet"
                  data-tweet-id="${tweet.id}">
                  ${ ArrayEstadoRetweets.includes(tweet.id)? 'retweeteado🔄' : 'retweet🔂'} ${tweet.retweets}
              </button>
          </div>
          <div class="comentarios">
            <h3>Comentarios</h3>
            <ul>
              ${renderComment(tweet.comments)}
            </ul>
          </div>
        </article>`
  }
  return feed
}

const renderComment = (Arraycomments) => {
  let comments = ``
  for (let comment of Arraycomments) {
    comments +=
      `<li class="comment">
         <h4 class="comment-author">
             <a href="#">@${comment.author_name}</a>
          </h4>
            <p class="comment-content">
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
      `<div class="img-container">
      <img src=${attachment.url} alt="Imagen del tweet generado por el usuario ${author_name}">
    </div>`
  }
  return attachments
}
const agregarComentario = (tweet_id, author_name, comment) => {
  if (!existeId(tweet_id)) { return }
  let clone_tweets = [...tweets]
  const indice = devolverTweetIndex(tweet_id)
  clone_tweets[indice].comments.push({
    author_name: author_name,
    content: comment
  })
  setEstadoTweets(clone_tweets)
}
const modificarContenidoTweet = (tweet_id, nuevo_contenido) => {
  if (!existeId(tweet_id)) { return }
  const indice = devolverTweetIndex(tweet_id)
  let clone_tweets = [...tweets]
  clone_tweets[indice].content = nuevo_contenido
  setEstadoTweets(clone_tweets)

}
const eliminarTweet = (tweet_id) => {
  if (!existeId(tweet_id)) { return }
  const indice = devolverTweetIndex(tweet_id)
  let clone_tweets = [...tweets]
  clone_tweets.splice(indice, 1)
  setEstadoTweets(clone_tweets)
}


const BtnLike = (tweet_id) => {
  if (!existeId(tweet_id)) { return }
  const clone_Arraylikes = [...ArrayEstadoLikes]
  const indice = clone_Arraylikes.indexOf(tweet_id)
  if (indice !== -1) {
    eliminarLike(tweet_id)
    clone_Arraylikes.splice(indice, 1)

  } else {
    clone_Arraylikes.push(tweet_id)
    agregarLike(tweet_id)
  }
  setEstadoLikes(clone_Arraylikes)
}

const BtnRetweet = (tweet_id) => {
  if (!existeId(tweet_id)) { return }
  const clone_ArrayRetweets = [...ArrayEstadoRetweets]
  const indice = clone_ArrayRetweets.indexOf(tweet_id)
  if (indice !== -1) {
    quitarRetweet(tweet_id)
    clone_ArrayRetweets.splice(indice, 1)

  } else {
    clone_ArrayRetweets.push(tweet_id)
    retweetear(tweet_id)
  }
  setEstadoRetweets(clone_ArrayRetweets)
}

const agregarLike = (tweet_id) => {
  const indice = devolverTweetIndex(tweet_id)
  let clone_tweets = [...tweets]
  clone_tweets[indice].likes += 1
  setEstadoTweets(clone_tweets)
}
const eliminarLike = (tweet_id) => {
  const indice = devolverTweetIndex(tweet_id)
  let clone_tweets = [...tweets]
  clone_tweets[indice].likes -= 1
  setEstadoTweets(clone_tweets)
}

const quitarRetweet = (tweet_id) => {
  const indice = devolverTweetIndex(tweet_id)
  let clone_tweets = [...tweets]
  clone_tweets[indice].retweets -= 1
  setEstadoTweets(clone_tweets)

}

const retweetear = (tweet_id) => {
  if (!existeId(tweet_id)) { return }
  const indice = devolverTweetIndex(tweet_id)
  let clone_tweets = [...tweets]
  clone_tweets[indice].retweets += 1
  setEstadoTweets(clone_tweets)
}
