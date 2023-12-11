// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Site, SocialMediaObjects } from "./types";

export const SITE: Site = {
    siteUrl: "https:/astro-lane.chrstnl.com/", // Always put "/" at the end of the URL
    author: "lyntamental",
    desc: "A personal blog and sketch portfolio for lyntamental.",
    title: "Lyn's Mental.",
    ogImage: "images/cherry_soda.jpg",
    keywords:
        "Personal portfolio, landing page, page template, developer portfoliom designer portfolio",
    postPerPage: 3
};

// The site uses iconify - you can find icons on https://iconify.design/.

export const SOCIALS: SocialMediaObjects = [
    {
        name: "Github",
        href: "https://github.com/lyntamental",
        icon: "ph:github-logo-duotone",
        title: `Follow ${SITE.author} on Github`,
        active: true
    },
    {
        name: "Facebook",
        href: "https://i.pinimg.com/564x/30/a4/ca/30a4ca798d4c0d7f8d656bcfe6db613f.jpg",
        icon: "ph:facebook-logo-duotone",
        title: `Follow ${SITE.title} on Facebook`,
        active: true
    },
    {
        name: "Instagram",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "ph:instagram-logo-duotone",
        title: `Follow ${SITE.author} on Instagram`,
        active: false
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/lyn-dickinson-125002173/",
        icon: "ph:linkedin-logo-duotone",
        title: `Follow ${SITE.title} on LinkedIn`,
        active: true
    },
    {
        name: "Mail",
        href: "mailto:lyntamental@gmail.com",
        title: `Send an email to ${SITE.title}`,
        icon: "",
        active: false
    },
    {
        name: "Twitter",
        href: "https://twitter.com/lyntamental",
        icon: "ph:twitter-logo-duotone",
        title: `Follow ${SITE.author} on Twitter`,
        active: false
    },
    {
        name: "YouTube",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "",
        title: `${SITE.title} on YouTube`,
        active: false
    },
    {
        name: "WhatsApp",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "",
        title: `${SITE.title} on WhatsApp`,
        active: false
    },
    {
        name: "Snapchat",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "",
        title: `${SITE.title} on Snapchat`,
        active: false
    },
    {
        name: "CodePen",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "",
        title: `${SITE.title} on CodePen`,
        active: false
    },
    {
        name: "Discord",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "",
        title: `${SITE.title} on Discord`,
        active: false
    }
];
