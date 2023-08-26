import {about, aboutActive, home, homeActive, search, searchActive} from "../assets";

export const menuItems = [
    {
        id: 'home',
        title: 'Home',
        activeIcon: homeActive,
        inactiveIcon: home,
    },
    {
        id: 'search',
        title: 'Search',
        activeIcon: searchActive,
        inactiveIcon: search,
    },
    {
        id: 'about',
        title: 'About',
        activeIcon: aboutActive,
        inactiveIcon: about,
    }
]

export const postExamples = [
    {
        id: 1,
        creator: 'John Doe',
        message: 'Environmental research has resulted in significant advancements that have resulted in the protection of human and ecosystem health.\n' +
            'In the industrialized world, voluntary environmental agreements are a must.',
        tags: 'research, world,protection',
        createdAt: Date.now()
    },
    {
        id: 2,
        creator: 'Chris Evans',
        message: 'A brilliant strategy for finally making nature conservation and sustainability relevant in elections by supporting ' +
            'green candidates in all possible efforts. Let’s make that happen with our mechanisms.',
        tags: 'strategy,nature, green',
        createdAt: Date.now()
    },
    {
        id: 3,
        creator: 'Liza Kudrow',
        message: 'Human degradation of nature is the greatest challenge of the twenty-first century, yet it barely registers ' +
            'as a political issue. Environment solutions often create jobs & economic opportunities.\n',
        tags: 'degradation, nature, challenge',
        createdAt: Date.now()
    },
]
