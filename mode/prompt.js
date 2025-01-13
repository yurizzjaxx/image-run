function getUrl(strText, strUrl) {
  return encodeURIComponent("Flux-v2. " + strText + "") + "?" + new URLSearchParams(strUrl).toString();
}

function getPrompt(promptText, width1, height1, seed1) {
  const _prompt = {
		width: width1,
		height: height1,
		model: "flux",
		private: true,
		seed: seed1,
		nologo: true
		};
	return 'https://image.pollinations.ai/prompt/' + getUrl(promptText, _prompt);
}


function fileBlob(url, value, _error) {
  fetch(url,).then(res => {
    return res.blob()
  }).then(data => {
    return value(URL.createObjectURL(data))
  }).catch(error => {
    return _error(error)
  })
}

function fileDownloadURL(url, name) {
  fetch(url).then(res => {
    return res.blob()
  }).then(dataObj => {
  const _read = new FileReader()
  
  _read.addEventListener("load", (e) => {
    var _base64 = e.target.result;
    var _link = document.createElement("a");
    _link.href = _base64;
    _link.download = name;
    _link.click()
  })
  _read.readAsDataURL(dataObj)
 })
}
