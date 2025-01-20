
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var _sc = document.createElement("script");
_sc.src = "mode/prompt.js"
document.head.appendChild(_sc)

var _sc = document.createElement("script");
_sc.src = "discordEasy.js"
document.head.appendChild(_sc)



let timError;
let coi = false;
let discordUrl = "https://discord.com/oauth2/authorize?client_id=1290159325045592146&response_type=token&redirect_uri=https%3A%2F%2Fyurizzjaxx.github.io%2Fimage-run%2Flogin.html&scope=email+identify+guilds.join"
let buttonTo = 0;
let seedNum = 50;
let tagText = "";
let promptVal = "";

/*
function maine() {
  var searchText= new URLSearchParams(location.search);
  var qText = searchText.get("meg");
  if (!qText) {
    var text1 = document.createElement("p");
    text1.textContent = "NONE"
    document.getElementById("_t").appendChild(text1)
    return
  }
  var addImg = new Image()
  addImg.id = "_ai"
  document.getElementById("_t").appendChild(addImg)
  fileBlob(getPrompt(qText, 1024, 1024, 42), (e) => {
    document.getElementById("_ai").src = e
  })
}
maine();
*/


var table = document.createElement("table");
var tbody = document.createElement("tbody");
var tr = document.createElement("tr");
var td = document.createElement("td");

tr.id = "pic";

tbody.appendChild(tr)
table.appendChild(tbody)
table.className = "_tabTop"
document.getElementById("_top").appendChild(table)

function login(uid) {
japiUser(uid, (api) => {
  if (document.getElementById("lin")) {
    document.getElementById("lin").remove()
    document.getElementById("bo").style.padding = "0px 0px"
  }
  
  var td = document.createElement("td")
  var h3 = document.createElement("h3")
  var h4 = document.createElement("h4")
  
  h3.textContent = api.global_name;
  h3.style.fontFamily = "fontFamily"
  h3.style.padding = "0vh 1vh"
  h4.textContent = "@" + api.username;
  h4.style.fontFamily = "fontFamily"
  h4.style.padding = "0vh 1vh"
  
  var avatar = new Image();
  avatar.width  = 90
  avatar.style.borderRadius = "100px";
  avatar.style.border = "2px solid #FF0000"
  let getImage;
  if (api.avatar) {
    getImage = getMediaUrl() + getAvatar(api.id, api.avatar, null, 128)
  } else {
    getImage = getCdnUrl() + getAvatar(api.id, null, 0, null)
  }
  
  avatar.src = getImage;
  td.appendChild(h3)
  td.appendChild(h4)
  document.getElementById("pic").appendChild(avatar)
  document.getElementById("pic").appendChild(td)
  var valCoins = 0;
  firebaseRes("dis/user/player", getFireKeyUid(), (s) => {
  if (localStorage.getItem("userUid") == en64_utf8(s.id)) {
    valCoins = s.coins
    var valUserId = s.id;
    if (!coi) {
      coi = true;
      main(valCoins, valUserId)
    }
  }
})
}, (er) => {
  
})
}


function main(getValCoins, ids) {
  console.log("success")
var pBr1 = document.createElement("p")
var pBr2 = document.createElement("p")
var table = document.createElement("table");
var tr = document.createElement("tr");
var td1 = document.createElement("td")
var bodya = document.createElement('tbody');
var edit = document.createElement("input");
var sel = document.createElement("select")
var optsGr = document.createElement("optgroup")
var but = document.createElement("button");
var txt = document.createElement("h1")
var sp = document.createElement("p")

tr.id = "_List"
tr.style.textAlign = "center"
bodya.style.display = "grid"
bodya.style.justifySelf = "center"
edit.type = "text"
edit.id = "_val"
edit.className = "textEdit"
sel.style.marginRight = "5px"
optsGr.label = "Prompt v2 tudo ⚙️"
but.textContent = "Send imagem"
but.id = "_open"
txt.textContent = "Prompt to imagem"
txt.style.fontFamily = "fontFamily"
txt.style.textAlign = "center";
pBr2.className = "_sp"

table.id = "_cus"


sel.appendChild(optsGr)

tr.appendChild(edit)
tr.appendChild(pBr1)
tr.appendChild(sel)
tr.appendChild(but)
tr.appendChild(pBr2)
bodya.appendChild(txt)
bodya.appendChild(tr)
table.appendChild(bodya)
//table.border = 1
table.style.display = "grid"
table.style.justifyContent = "center"
table.className = "tab";

document.getElementById("bo").style.minWidth = "auto"
document.getElementById("bo").appendChild(table)
/*
document.body.style.display = "grid"
document.body.style.minHeight = "50vh"
console.log("%c Success", "color:purple; font-size:20px")
*/

var ss = document.createElement("h4");
ss.textContent = "Coins: " + getValCoins;
ss.id = "_coins"
ss.style.textAlign = "center"
ss.style.fontFamily = "fontFamily"

document.getElementById("bo").appendChild(ss)


var ss = document.createElement("h2");
ss.textContent = "Github por yurizzjaxx ❤️😊"
ss.style.textAlign = "center"
ss.style.fontFamily = "fontFamily"

document.getElementById("bo").appendChild(ss)


var ss = document.createElement("h5");
ss.textContent = "Não Braixen - Ai GPT-4 para discord bot"
ss.style.textAlign = "center";
ss.style.fontFamily = "fontFamily";

document.getElementById("bo").appendChild(ss)


let items = [];
let obj;


obj = {};
obj["text"] = "Normal";
obj["val"] = "";
items.push(obj)

obj = {};
obj["text"] = "Anime";
obj["val"] = ", [anime]";
items.push(obj)

obj = {};
obj["text"] = "Anime 3D";
obj["val"] = ", [anime-3D]";
items.push(obj);

obj = {};
obj["text"] = "Minecraft";
obj["val"] = ", [mine-craft]";
items.push(obj);

obj = {};
obj["text"] = "Random rainbow";
obj["val"] = ", [random-rainbow], [random-color]";
items.push(obj);


items.forEach(s => {
  const opt = new Option()
  opt.textContent = s.text
  opt.value = en64_utf8(s.val)
  sel.appendChild(opt)
})

sel.addEventListener("change", () => {
  promptVal = de64_utf8(sel.value)
})



document.getElementById("_open").addEventListener("click", (e) => {
  if (document.getElementById("_val").value.length > 5) {
    if (getValCoins > 0) {
  if (buttonTo == 0) {
    var tagTextNew = document.getElementById("_val").value;
    if(document.getElementById("er_1")) {
      document.getElementById("er_1").remove()
    }
    if (!tagTextNew.includes(tagText)) {
      seedNum = 50;
    }
    tagText = tagTextNew;
    seedNum++
  var strVal = document.getElementById("_val").value;
  fileBlob(getPrompt(strVal + promptVal, 1024, 1024, seedNum), (res) => {
    console.log(promptVal)
    document.getElementById("_dele1").remove()
    document.getElementById("_dele2").remove()
    var resName = `${res}`.split(".io/")[1]
    var imgAi = new Image()
    imgAi.id = "view_" + resName;
    imgAi.src = res;
    imgAi.width = 250;
    document.getElementById("_List").appendChild(imgAi)
    document.getElementById("view_" + resName).onclick = function() {
      window.open(res, "_blank")
    }
    
    let valueCoi = {}
    getValCoins--
    valueCoi["coins"] = getValCoins;
    firebaseUpdate("dis//user/player/" + ids, valueCoi, (c) => {
      document.getElementById("_coins").textContent = "Coins: " + getValCoins;
    }, (er) => {
      
    })
    buttonTo = 0
  }, (er) => {
    if (document.getElementById("_dele1")) {
      document.getElementById("_dele1").remove()
      document.getElementById("_dele2").remove()
    }
    
    var ss = document.createElement("p");
    ss.textContent = "Falha na resposta 5 segundos"
    ss.style.textAlign = "center";
    ss.style.fontFamily = "fontFamily";
    ss.style.color = "#FF0000"
    ss.id = "er_1"
    document.getElementById("_List").appendChild(ss)
    console.error("errou no prompt Network body")
    buttonTo = 0
    seedNum--
  })
  
  
  if (document.getElementById("_dele1")) {
    document.getElementById("_dele1").remove()
    document.getElementById("_dele2").remove()
    document.getElementById("er_1").remove()
  }
  var loadImg = new Image()
  loadImg.src = "loading/suc.gif"
  loadImg.id = "_dele1";
  var div = document.createElement("div")
  div.style.display = "grid";
  div.style.alignContent = "center";
  div.style.justifyItems = "center"
  div.id = "_dele2"
  div.appendChild(loadImg)
  document.getElementById("_List").appendChild(div)
  }
  buttonTo = 1
    } else {
      var ed = document.getElementById("_coins")
      ed.textContent = "Coins: 0 | Desculpe volta"
      ed.style.textAlign = "center";
      ed.style.fontFamily = "fontFamily";
      ed.style.color = "#FF0000"
      ed.id = "_coins"
    }
  } else {
    if (document.getElementById("er_1")) {
      document.getElementById("er_1").remove()
    }
    var textLength = document.getElementById("_val").value.length;
    var ss = document.createElement("p");
    ss.textContent = `Falha no comprimento ${textLength} - 5 com entrada`
    ss.style.textAlign = "center";
    ss.style.fontFamily = "fontFamily";
    ss.id = "er_1"
    document.getElementById("_List").appendChild(ss)
  }
});
//console.log(document.body)
}

function tofomta(num) {
  if (num <= 9) {
    return "0" + num;
  }
}


//console.log(document.body)


console.warn(userIp)

firebaseRes("dis/user", getFireKeyUid(), (uses) => {
  if(localStorage.getItem("userUid") == en64_utf8(uses.userID)) {
  authUser(de64_utf8(uses.valToken), 1, (s) => {
    login(s.id)
  }, (er) => {
    
  })
  if (document.getElementById("lin")) {
    document.getElementById("lin").remove()
  }
  var div = document.createElement("div")
  var sup = document.createElement("h1")
  div.id = "lin"
      
  sup.textContent = "Loading...";
  sup.style.fontFamily = "fontFamily";
  div.appendChild(sup)
  div.style.display = "grid"
  document.getElementById("bo").style.padding = "50px 50px"
  document.getElementById("bo").style.minWidth = "auto"
  document.getElementById("bo").appendChild(div)
  
  clearTimeout(timError)
  }
})

if (!localStorage.getItem("userUid")) {
var div = document.createElement("div")
var sup = document.createElement("h1")
var pbr = document.createElement("p")
var but = document.createElement("button")

div.id = "lin"
sup.textContent = "Discord Sgin in";
sup.style.fontFamily = "fontFamily";
sup.id = "txt"
pbr.className = "_sp"
but.textContent = "entre login"
but.style.textAlign = "center"
but.id = "_but"

div.appendChild(sup)
div.appendChild(pbr)
div.appendChild(but)
div.style.display = "grid"

document.getElementById("bo").style.padding = "30px 25px"
document.getElementById("bo").style.minWidth = "auto"
document.getElementById("bo").appendChild(div)

document.getElementById("_but").onclick = function () {
  window.location.href = discordUrl;
}
} else {
  var div = document.createElement("div")
  var sup = document.createElement("h1")
  div.id = "lin"
      
  sup.textContent = "Loading...";
  sup.style.fontFamily = "fontFamily";
  div.appendChild(sup)
  div.style.display = "grid"
  document.getElementById("bo").style.padding = "50px 50px"
  document.getElementById("bo").style.minWidth = "auto"
  document.getElementById("bo").appendChild(div)
  timError = setTimeout(() => {
    localStorage.removeItem("userUid")
    window.location.reload()
  }, 26000)
  
}

// não pode coódigo yuriZzJaxx :v
