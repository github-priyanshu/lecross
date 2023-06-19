var log=console.log;
function op(elem){return document.querySelector(elem)}
function opp(elem){return document.querySelectorAll(elem)}

function resetFormat(){
  let keys={
    col: "color",
    fs: "fontSize",
    ff: "fontFamily",
    fw: "fontWeight",
  }
  for(let val in keys){
    opp(`*[${val}]`).forEach(elem=>{
      elem.style[keys[val]]=elem.getAttribute(val);
      elem.removeAttribute(val);
    })
  }

  opp(`*[ico]`).forEach(elem=>{
    elem.innerHTML=elems[elem.getAttribute('ico')];
    elem.removeAttribute('ico');
  })
  
opp(".lineMargin").forEach(val=>{
  val.style.margin=val.getAttribute("m") || 0;
  val.style.height=val.getAttribute("h") || 0;
  val.style.width=val.getAttribute("w") || 0;
  val.style.background=val.getAttribute("bg") || 0;
})

}

resetFormat();

function makeLoader(elem){
  var id='_'+Math.ceil(Math.random()*1000);
  var html=`
    <div class="loader flex c" id="${id}" style="width: 100%; height: 100vh;" >
    <style>
      .loader {
        --size: 1em;
        background: var(--curBg);
        transition: all .25s;
        font-family: 'sans-serif;';
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 100000;
      }
      .loader .loadLogo .dot{
        width: var(--size);
        aspect-ratio: 1/1;
      }
      .loader .loadLogo .dot::after{
        content: '';
        position: absolute;
        width: 30%;
        background: var(--col);
        border-radius: 999px;
        box-shadow: 0 0 20px var(--col);
        animation: long .175s ease 12 alternate calc((7 - var(--i)) * -.3s);
      }
      @keyframes long {
        0%{
          width: 20%;
          height: 20%;
        }
        100%{
          width: 20%;
          height: 300%;
        }
      }
      .loader .loadLogo .dot span{
        opacity: 0;
        font-size: var(--size);
        font-weight: bold;
        color: var(--col);
        text-shadow: 0 0 35px var(--col),0 0 10px var(--col);
        animation: showLoader .175s ease forwards calc(var(--i)*.3s);
      }
      @keyframes showLoader {
        0%{
          opacity: 0;
          transform: scale(0,0);
        }
        100%{
          opacity: 1;
          transform: scale(1,1.3);
        }
      }
    </style>

    <div class="loadLogo flex">
      <div class="dot d1 flex" style="--i: 1;--col: #d52fff;">
        <span>L</span>
      </div>
      <div class="dot d2 flex" style="--i: 2;--col: #fc2fff;">
        <span>E</span>
      </div>
      <div class="dot d3 flex" style="--i: 3;--col: #fc2fff;">
        <span>C</span>
      </div>
      <div class="dot d4 flex" style="--i: 4;--col: #ff00f3;">
        <span>R</span>
      </div>
      <div class="dot d5 flex" style="--i: 5;--col: #ff00d4;">
        <span>O</span>
      </div>
      <div class="dot d6 flex" style="--i: 6;--col: #ff008f;">
        <span>S</span>
      </div>
      <div class="dot d7 flex" style="--i: 7;--col: #ff07a0;">
        <span>S</span>
      </div>
    </div>
    <div class="loadLoadt" style="margin-top: calc(5% + 10px); color: #fff2">Loading...</div>
  </div>

  `
  elem.insertAdjacentHTML('afterbegin',html);
  setTimeout(()=>{
    var curLoadE=op("#"+id);

    curLoadE.style.opacity=0;
    setTimeout(()=>{
      curLoadE.remove();
    },500)
  },3000)

}
