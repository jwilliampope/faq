const dataArray = [
  {
    title: "Why is JavaScript cool?",
    detail: "Originally launched as ‘Mocha’ by Brendan Eich at Netscape in 1995 in only 10 (likely mocha-fuelled) days and nights. Mocha was then rebranded to JavaScript after Netscape inked a partnership agreement with Sun Microsystems. ’ Through annual updates to the ECMAscript standard, JavaScript became the universal language for web interactivity."
  },
  {
    title: "What is JavaScript?",
    detail: "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. "
  },
  {
    title: "How do I learn JavaScript?",
    detail: "Whether you’re just starting out or are a seasoned professional, we are dedicated to helping you succeed. As you prepare to start, switch, or upgrade your career, we will support your learning journey with unparalleled services and resources, and we will continue to support you in your professional life. No previous programming skills are required to apply."
  },
  {
    title: "What are the best things about JavaScript?",
    detail: "JavaScript is so versatile that you can use it to easily add cool design elements such as animation, interactive maps, and scrolling video. Organizations and clients want web designers who can not only put together a technically sound page but one that also will lure visitors. If you know JavaScript, you can deliver."
  }
]

const makeHTML = data => {
  return `<details> 
      <summary>${data.title}</summary>
      <p>${data.detail}</p>
  </details>`
}

const container = document.getElementById("faq-container")

container.innerHTML = dataArray.map(data => makeHTML(data)).join("")
