function getCdnUrl() {
  return "https://cdn.discordapp.com/";
}

function getMediaUrl() {
  return "https://media.discordapp.net/";
}

const japiUser = (id, obj, error) => {
  fetch(`https://japi.rest/discord/v1/user/${id}`, {
    method: "GET"
  }).then(res => {
    return res.json();
  }).then(data => {
    return obj(data.data);
  }).catch(er => {
    return error(er);
  })
}

const authUser = (_token, _type, obj, error) => {
  let [_isToken] = "";
  switch (_type) {
    case 0:
      _isToken = ""
      break;
      
    case 1:
      _isToken = "Bearer "
      break;
    
    case 2:
      _isToken = "Bot "
      break;
  }
  fetch("https://discord.com/api/v9/users/@me", {
    method: "GET",
    headers: {
      "Authorization": `${_isToken}${_token}`
    }
  }).then(res => {
    return res.json()
  }).then(data => {
    return obj(data)
  }).catch(er => {
    return error(er)
  })
}


// Support image none response

function getAvatarNone(boolAvatar) {
  if (boolAvatar) {
    return true;
  }
  return false;
}

function getBannerNone(boolBanner) {
  if (boolBanner) {
    return true;
  }
  return false;
}

function getIconNone(boolIcon) {
  if (boolIcon) {
    return true;
  }
  return false;
}

function getAvatar(userId, strAvatar, discriminator, size) {
  let [format] = "";
  let [_size] = "";
  _size = "?size=" + size;
  if (strAvatar) {
    if (strAvatar.includes("a_")) {
      format = ".gif" + _size;
    } else {
      format = ".png" + _size;
    }
    return `avatars/${userId}/${strAvatar}${format}`;
  }
  return `embed/avatars/${discriminator}.png`;
}

function getBanner(userId, strBanner, size) {
  let [format] = "";
  let [_size] = "";
  _size = "?size=" + size;
  if (strBanner.includes("a_")) {
    format = ".gif" + _size;
  } else {
    format = ".png" + _size;
  }
  return `banners/${userId}/${strBanner}${format}`;
}

function getEmoji(emojiId, boolAnim, size, boolean) {
  let [format] = "";
  let [_size] = "";
  if (boolean == true) {
    _size = "?size=" + size;
  } else {
    _size = "?v=1";
  }
  if (boolAnim == true) {
    format = ".gif" + _size;
  } else {
    format = ".png" + _size;
  }
  return `emojis/${emojiId}${format}`;
}

function getIcon(guildId, strIcon, size) {
  let [format] = "";
  let [_size] = "";
  _size = "?size=" + size;
  if (strIcon.includes("a_")) {
    format = ".gif" + _size;
  } else {
    format = ".png" + _size;
  }
  return `icons/${guildId}/${strIcon}${format}`;
}

//discord App for Cdn url & media url & avatar & banner & emoji & icon
//export {getCdnUrl, getMediaUrl, japiUser, authUser, getAvatar, getBanner, getEmoji, getIcon};
