const fetch = require("node-fetch");

async function search(name) {
	if (!name) throw new Error('TypeError: you must previod a username');
	const req = await fetch(`https://www.instagram.com/web/search/topsearch/?context=user&count=0&query=${encodeURIComponent(name)}`);
	const res = await req.json();
	
	return res.users;
}


module.exports = {
    search
}
