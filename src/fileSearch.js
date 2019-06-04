import glob from 'glob';
import fs from 'fs';

export default (appDir) => {
	appDir || '**/*(.vue|.html)';
	const regex = new RegExp( /(?:[^:]class=)(?:["']\W+\s*(?:\w+)\()?["']([^'"]+)['"]/, 'g');
	let classList = [];
	let files = glob.sync(appDir);

	function getMatches(string, regex) {
		let matches = [];
		let match;
		while (match = regex.exec(string)) {
		  matches.push(match[1]);
		}
		return matches;
	}

	if (files) {
		classList = files.map( (file) => {
			return getMatches(fs.readFileSync(file, 'utf-8'), regex);
		});
	}

	return classList;
};
