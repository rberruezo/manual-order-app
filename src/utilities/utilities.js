
var utilities = {

	copyObjectAttributes: function(objDest, objSrc) {
		for (var key in objSrc) {
			objDest[key] = objSrc[key];
		}
	}

}

export default utilities;