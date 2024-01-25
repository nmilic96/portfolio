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
	tooltip?: string;
}

export const SITE_TITLE: string = 'Nikola Milić';
export const SITE_DESCRIPTION: string = 'Frontend web developer iz Đakova.';

export const BASE_URL = import.meta.env.BASE_URL;

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
		description: "Odradio sam par aplikacija u React Nativeu"
	},
	{
		name: "Astro",
		icon: "astro",
		description: "Ovaj web je napravljen u Astro-u"
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
		description: "Za još bolji CSS"
	},
	{
		name: "Tailwind CSS",
		icon: "mdi:tailwind",
		description: "Dobro dođe za brzinska stiliziranja"
	},
	{
		name: "Shopify",
		icon: "shopify",
		description: "Shopify teme, aplikacije, sve može"
	},
	{
		name: "Git",
		icon: "mdi:git",
		description: "git commit . && git push -f"
	}
]

export const projects: Project[] = [
	{
		name: "Magnify",
		url: "https://magnify-co.com/",
		image: "magnify.jpg",
		description: "Mystery shopping platforma za ugostitelje bazirane u UAE",
		tooltip: "Najveći projekt na kojem sam radio. Ima par različitih, dosta složenih dashboarda"
	},
	{
		name: "Novi Informator",
		url: "https://informator.hr/",
		image: "informator.jpg",
		description: "Pravni portal",
		tooltip: "Jedan od ranijih projekata na kojem sam radio. Radio sam ga u suradnji s drugim frontendašima"
	},
	{
		name: "CIM Repo",
		url: "https://base58.hr/en/products/cim-repo",
		image: "cimrepo.jpg",
		description: "Github za trafo stanice",
		tooltip: "Moj najdraži React projekt. Uglavnom se u tablicama prikazuju podaci dohvaćeni preko API-ja"
	},
	{
		name: "Hrvatske Ceste",
		url: "https://hrvatske-ceste.hr/",
		image: "hrvatske_ceste.jpg",
		description: "Službeni web portal Hrvatskih Cesta",
		tooltip: "Nisam baš ponosan kako je ovaj projekt ispao, trenutno radim na redizajnu koji će biti puno bolji"
	},
	{
		name: "Convoworks",
		url: "https://convoworks.com/",
		image: "convoworks.jpg",
		description: "Nisam siguran tbh",
		tooltip: "Radio sam par React komponenti za projekt koje su u njega dodane preko NPM-a"
	},
	{
		name: "Country Archer",
		url: "https://www.countryarcher.com/",
		image: "countryarcher.jpg",
		description: "Beef jerky webshop",
		tooltip: "Shopify webshop za kupovinu beef jerkya, ima subscription preko Rechargea"
	},
	{
		name: "Tržnica Osijek",
		url: "https://trznicaos.hr/",
		image: "trznicaos.jpg",
		description: "Službeni web portal Tržnice Osijek",
		tooltip: "Jedn od jednostavnijih webova koje sam radio"
	},
	{
		name: "Astrogarden",
		url: "https://astrogarden.fun/",
		image: "astrogarden.jpg",
		description: "Web stranica osječke igraonice",
		tooltip: "Isto jedan jednostavniji"
	},
	{
		name: "Centar za mir Osijek",
		url: "https://centar-za-mir.hr/",
		image: "centarzamir.jpg",
		description: "Službeni stranica Centra za mir Osijek",
		tooltip: "...iiii još jedan jednostavni"
	},
	{
		name: "Rezerviraj.me",
		url: "https://rezerviraj.me/",
		image: "rezervirajme.jpg",
		description: "Web stranica za rezervaciju termina u salonima, na sportskim terenima i slično",
		tooltip: "Jedan od prvih projekata na kojima sam radio"
	},
	{
		name: "Portanova",
		url: "https://portanova.hr/",
		image: "portanova.jpg",
		description: "Web stranica trgovačkog cetra Portanova u Osijeku",
		tooltip: "Ovdje sam uglavnom radio na interaktivnoj SVG mapi trgovina"
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

export const socials: { name: string; icon: string; url: string }[] = [
	{
		name: "Linkedin",
		icon: "mdi:linkedin",
		url: "https://www.linkedin.com/in/nikola-mili%C4%87-9736a6167/"
	},
	{
		name: "Github",
		icon: "mdi:github",
		url: "https://github.com/nmilic96"
	}
]