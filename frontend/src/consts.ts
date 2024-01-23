// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

interface Skill {
  name: string;
  icon: string;
  description: string;
}

interface Project {
  name: string;
	description?: string;
  url: string;
	image?: string;
}

export const SITE_TITLE: string = 'Nikola Milić';
export const SITE_DESCRIPTION: string = 'Frontend web developer based in Đakovo, Croatia.';

export const skills: Skill[] = [
	{
		name: "Javascript",
		icon: "mdi:language-javascript",
		description: "Moj omiljeni"
	},
	{
		name: "Typescript",
		icon: "mdi:language-typescript",
		description: "Javascript je bolji s typescriptom, zna se"
	},
	{
		name: "React.js",
		icon: "mdi:react",
		description: "Ova glava je zapravo React komponenta"
	},
	{
		name: "React Native",
		icon: "mdi:react",
		description: "Odradio sam par aplikacija u React nativeu"
	},
	{
		name: "Ruby on Rails",
		icon: "mdi:language-ruby-on-rails",
		description: "Znam i nešto malo backenda"
	},
	{
		name: "HTML5",
		icon: "mdi:language-html5",
		description: "..."
	},
	{
		name: "CSS3",
		icon: "mdi:language-css3",
		description: "Obožavam CSS (ozbiljno)"
	},
	{
		name: "Sass",
		icon: "mdi:sass",
		description: "Obožavam CSS još više kad je SASS"
	},
	{
		name: "Tailwind CSS",
		icon: "mdi:tailwind",
		description: "Tailwind mi je najbolji kad želim nešto stilizirati na brzinu"
	},
	{
		name: "Shopify",
		icon: "shopify",
		description: "Shopify teme, aplikacije, sve može"
	},
	{
		name: "Git",
		icon: "mdi:git",
		description: "git commit . git push -f"
	}
]

export const projects: Project[] = [
	{
		name: "Magnify",
		url: "https://magnify-co.com/",
		image: "magnify.jpg",
		description: "Hospitality mystery shopping platform"
	},
	{
		name: "Novi Informator",
		url: "https://informator.hr/",
		image: "informator.jpg",
		description: "Pravni portal"
	},
	{
		name: "CIM Repo",
		url: "https://base58.hr/en/products/cim-repo",
		image: "cimrepo.jpg",
		description: "Github za trafo stanice"
	},
	{
		name: "Hrvatske Ceste",
		url: "https://hrvatske-ceste.hr/",
		image: "hrvatske_ceste.jpg",
		description: "Službeni web portal Hrvatskih Cesta"
	},
	{
		name: "Convoworks",
		url: "https://convoworks.com/",
		image: "convoworks.jpg",
		description: "Nisam siguran tbh"
	},
	{
		name: "Country Archer",
		url: "https://www.countryarcher.com/",
		image: "countryarcher.jpg",
		description: "Beef jerky webshop"
	},
	{
		name: "Tržnica Osijek",
		url: "https://trznicaos.hr/",
		image: "trznicaos.jpg",
		description: "Službeni web portal Tržnice Osijek"
	},
	{
		name: "Astrogarden",
		url: "https://astrogarden.fun/",
		image: "astrogarden.jpg",
		description: "Web stranica osječke igraonice"
	},
	{
		name: "Centar za mir Osijek",
		url: "https://centar-za-mir.hr/",
		image: "centarzamir.jpg",
		description: "Službeni stranica Centra za mir Osijek"
	},
	{
		name: "Rezerviraj.me",
		url: "https://rezerviraj.me/",
		image: "rezervirajme.jpg",
		description: "Web stranica za rezervaciju termina u salonima, na sportskim terenima i slično"
	},
	{
		name: "Portanova",
		url: "https://portanova.hr/",
		image: "portanova.jpg",
		description: "Web stranica trgovačkog cetra Portanova u Osijeku"
	}
]

export const reactions: string[] = [
  "Uf",
  "Ajde dosta",
  "Nemoj",
  "Ne",
  "Prestani",
  "Dosta",
  "Ajde prestani",
  "Daj ajde",
  "Nepristojno",
  "Nije u redu",
  "Aaaaa",
  "Užas",
  "Prestani molim te",
  "DOSTA",
  "Nemoj molim te",
  "Joj",
  "Uh",
  "Proklet bio",
  "Aj još jednom",
];


