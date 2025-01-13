void(0)

firebase.initializeApp(firebaseConfig);
var database = firebase.database();


var param = new URLSearchParams(location.hash);

run(param.get("access_token"))

function run(uri) {
  if (!uri) {
    var txt = document.createElement("h1")
    txt.textContent = "No Failed sign !"
    txt.id = "text"
    document.body.appendChild(txt)
    console.warn("failed")
    return;
  }
  var txt = document.createElement("h1")
  txt.textContent = "Discord loading wait..."
  txt.id = "text"
  document.body.appendChild(txt)
  dis(uri)
}

function dis(token) {
  authUser(token, 1, (user) => {
    if (user.message) {
      document.getElementById("text").remove()
      var txt = document.createElement("h1")
      txt.textContent = "Error discord Support 401"
      txt.id = "text"
      document.body.appendChild(txt)
      return;
    }
    
    let obj = {}
    obj["userID"] = user.id
    obj["valToken"] = en64_utf8(token)
    localStorage.setItem("userUid", en64_utf8(user.id))
    firebaseAdd("dis/user/" + user.id, obj)
    firebaseRes("dis/user", getFireKeyUid(), (s) => {
      if (localStorage.getItem("userUid") == en64_utf8(s.userID)) {
        firebaseRes("dis/user/player/" + user.id, getFireValue(), (ss) => {
          if (!ss) {
            let userplay = {}
            userplay["id"] = user.id
            userplay["name"] = user.username
            userplay["coins"] = 10
            firebaseAdd("dis/user/player/" + user.id, userplay)
            setTimeout(successUser, 6000)
          } else {
            if (localStorage.getItem("userUid") == en64_utf8(ss.id)) {
              setTimeout(successUser, 6000)
            }
          }
        })
      }
    })
    document.getElementById("text").remove()
    var txt = document.createElement("h1")
    txt.textContent = "Success Update..."
    txt.id = "text"
    document.body.appendChild(txt)
  }, (er) => {
    
  })
}


function successUser() {
  window.location.originf
}


