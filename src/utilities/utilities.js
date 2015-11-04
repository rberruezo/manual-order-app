
var utilities = {

	copyObjectAttributes: function(objDest, objSrc) {
		var objSrcClone = JSON.parse(JSON.stringify(objSrc));
		for (var key in objSrcClone) {
			objDest[key] = objSrcClone[key];
		}
	}

}

export default utilities;