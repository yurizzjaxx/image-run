
function firebaseAdd(name, _json) {
  firebase.database().ref(name).set(_json)
}

function firebasePushAdd(name, _json) {
  var _refPush = firebase.database().ref(name).push();
  _refPush.set(_json)
}


function firebaseRes(name, funValue, _value) {
  var _ref = firebase.database().ref(name);
  _ref.on(funValue, (snapshot) => {
    _value(snapshot.val())
  })
}

function firebaseUpdate(name, _json, _value, _error) {
  var refd = firebase.database().ref(name);
  refd.update(_json, (_ers) => {
    if(_ers) {
    return _error(_ers)
    }
    refd.once("value", (snapshot) => {
      _value(snapshot.val())
    })
  })
}

function firebaseDelete(name, _value, _error) {
  var _refDelete = firebase.database().ref(name);
  _refDelete.remove().then(suc => {
    return _value("")
  }).then(er => {
    return _error("")
  })
}


/*
function getFireChlid(name, value) {
  var _refChlid = firebase.database().ref(name);
  _refChlid.on("value", (snapshot) => {
    snapshot.forEach((chlid) => {
      value (chlid.val())
    })
  })
}
*/


function getFireKeyUid() {
  return "child_added"
}

function getFireValue() {
  return "value"
}

//export {firebaseLoad, firebasePushLoad, firebaseRes, firebaseUpdate, getFireValue, getFireKeyUid}
