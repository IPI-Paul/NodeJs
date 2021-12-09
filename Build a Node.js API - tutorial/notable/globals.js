const  fs = require('fs');
const path = require('path');
const global = require('child_process').execSync('npm root -g').toString().trim().replace(/\\/g, '\\\\') + '\\\\';

let public = __dirname + '\\public\\';
let gz = public + 'gz\\';
let html = public + 'html\\';
let images = public + 'images\\';
let json = public + 'json\\';
let routes = public + 'routes\\';
let scripts = public + 'scripts\\';
let styles = public + 'styles\\';
let txt = public + 'txt\\';

let dirFile = function(dir, idx) {
	let file = fs.readdirSync(dir, (err, files) => {
		if (err)
			return '';
		else
			return files; 
	})[idx];
	if (file)
		return path.join(dir, file);
}

let fileName = function(filePath) {
	return filePath.replace(__dirname + '\\', '').replace('.js', '');
}

let filePath = function(dir, filename, fileext) {
	return path.join(dir, fileName(filename)) + `.${fileext}`;
}

module.exports = {
	dirFile: dirFile,
	fileName: fileName,
	filePath: filePath,
	global: global,
	gz: gz,
	html: html,
	json: json,
	public: public,
	routes: routes,
	scripts: scripts,
	styles: styles,
	txt: txt,
}