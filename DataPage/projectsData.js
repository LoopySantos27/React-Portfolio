import {
    unityIcon,
    githubIcon,
    vsIcon,
    vsCodeIcon,
    cSharpIcon,
    jsIcon,
    htmlIcon,
    cssIcon,
    reactIcon,
    nodeIcon,
    jiraIcon,
    slackIcon,
    figmaIcon,
    trelloIcon,
    sentryIcon,
    gsapIcon,
    catsVideoModal,
    movieLoopyModal
} from './experienceData'

const projectsData =[
    {
        id: 0,
        title:'Seren',
        fullTitle: `Seren: A Soul's Melody`,

        image:new URL ('../assets/projects/seren.png',import.meta.url).href,
        description: "Lead programmer of a 2D Narrative, Musical, Adventure game developed in Unity using C#.",
        fullDescription: `Seren is a story-driven adventure game developed in Unity, centered around a teenage girl navigating life with social anxiety. Her journey unfolds through her passion for music, combining emotional storytelling with interactive gameplay.
        As the lead developer, I was responsible for designing and implementing key gameplay systems, including;
        A custom dialogue system, the level progression mechanics, music-based interaction features and so on.

        I also developed automated tools and reusable code to streamline development, improve testing efficiency, 
        and increase scalability across the project.`,
        
        date:'2 July 2023 - Actual',
        video:new URL ('../assets/videos/serenvideo.mp4',import.meta.url).href,
        colaborators: "Gerardo Santos, Erick Gomez, America Colón, Luis Castañeda, Mauricio Martinez",
        tag: 'Videogames',

        toolsUsed:[unityIcon,cSharpIcon, vsIcon, githubIcon,trelloIcon]
    },
    {
        id: 1,
        title:'React portfolio',
        fullTitle: `React Portfolio`,

        image:new URL ('../assets/projects/PortfolioIcon.png',import.meta.url).href,
        description:'Full Responsive Website using ReactJs Html and Css to expose it as my personal portfolio',
        fullDescription: `This is my firs React project, developed With React Native, using Vite for compilation and 
        CSS for styling. It's full responsive and is a practice to use the React Hooks, props management and Web Design `,

        source: 'https://gerardosantos.netlify.app',
        date:'November 2024',
        tag: 'Web',
        github: 'https://github.com/LoopySantos27/React-Portfolio',
        toolsUsed: [reactIcon,nodeIcon, jsIcon,htmlIcon,cssIcon,figmaIcon, gsapIcon],
    },
    {
        id: 2,
        title:'3D WebSite',
        fullTitle:'3D WebSite',

        image:new URL ('../assets/projects/CatPage.png',import.meta.url).href,
        description:'Full responsiveWebSite with Highlite Section of videos, 3D models, and data tracking ',
        fullDescription: `This page was developed as a Landing Page to show a product, in this case I used it to present
        Cats, in a History, a Model and some sections just to get Fun. It was styled with Tailwind v4 and used Sentry
        for error data tracking. Also The page contains animations and smooth transitions created from the GSAP library`,

        date:'May 2025',
        video: catsVideoModal,
        source: 'https://catpresentation.netlify.app/',
        tag: 'Web',
        github: 'https://github.com/LoopySantos27/CatsPresentation',
        toolsUsed: [reactIcon,jsIcon,htmlIcon, vsCodeIcon,gsapIcon, sentryIcon],
    },
    {
        id: 3,
        title:'Movie Catalog',
        fullTitle:'Movie Catalog',

        image:new URL ('../assets/projects/MovieLoopy.png',import.meta.url).href,
        description:'Full responsive WebSite created as a movie catalog using data from the The moviedb API.',
        fullDescription: `This is a full responsive Website developed to fetch the data from an API, in this case
        Themodiedb, using real data without the necesity of update it when the catalog changes. The movies are separated by
        categories, it can be filtered by rating and ordering by ascendant or descendant. I use Tailwind for stylish and responsive design.`,
        date:'June 2025',

        video: movieLoopyModal,
        source: 'https://moviesloopy.netlify.app',
        tag: 'Web',
        github: 'https://github.com/LoopySantos27/MovieLoopy',
        toolsUsed: [reactIcon,vsCodeIcon,jsIcon,htmlIcon],
    },
    {
        id: 4,
        title:'Bubble Run',
        fullTitle: 'Bubble Run',
        
        date:'1 July 2022 - 1 September 2022',
        image:new URL ('../assets/projects/BubbleRun.png',import.meta.url).href,
        description:'Main programmer in this Endless Runner Game, developed in Unity using C#.',
        fullDescription: 'This is a casual Endless Runner game developed for movile devices, the game is a bubble running trying to updgrade his highscore avoiding obstacles and obtainig power ups, it has beatiful models and music too. You can download the APK here',
        video:new URL ('../assets/videos/bubbleRunDemo.mp4',import.meta.url).href,

        colaborators: "Gerardo Santos, Erick Gomez, Mauricio Martinez",
        demo: "https://drive.google.com/file/d/1qY-aUQtQGqO_UR6zBWlS04628CzQ5Jnc/view?usp=drive_link",
        tag: 'Videogames',
        toolsUsed: [unityIcon, cSharpIcon,githubIcon, vsIcon,],
    },
   
    {
        id: 5,
        title:'MarsKeeper',
        fullTitle: 'MarsKeeper',
        
        date:'May 2022',
        image:new URL ('../assets/projects/MarsKeeper.jpg',import.meta.url).href,
        description:'VR survival Videogame about a mecha pilot surviving enemy waves developed with Unity using C#',
        fullDescription: `This is a survival VR Videogame developed in Unity, In this game you are a mecha pilot trying to survive enemy waves with your artilllery, my work was to do the enemy's machine state, their attributes and functions, in total there are 3 types of enemys. You can download it here`,
        
        demo:"https://drive.google.com/file/d/110X3M957klv781ZgEMiVe6IGji39aZPl/view?usp=sharing",
        video:new URL ('../assets/videos/MarsKeeperGameplay.mp4',import.meta.url).href,
        colaborators: "Alex Martinez, Joan Pato, Gerardo Santos, Elisabeth Mateu",
        tag: 'Videogames',

        toolsUsed:[unityIcon,cSharpIcon, githubIcon, figmaIcon],
    },
    {
        id: 6,
        title:'Star Scavenger',
        fullTitle:'Star Scavenger',
        
        image:new URL ('../assets/projects/StarScavenger.png',import.meta.url).href,
        description:'Programmer and Level designer in this Adventure / Horror videogame developed with Unity using C#',
        fullDescription: 'This is a Horror / Survival game where the player has to face creatures, limited oxygen and use the enviroment to reach the goal, in this game i was in charge of the player controller, level design and build the level. You can download it here and give it a try',
        date:'May 2021',

        demo: "https://drive.google.com/file/d/1PsY8xnYLxc40cXbi8w3rjIhzRn6IcFEc/view?usp=sharing",
        video:new URL ('../assets/videos/starscavengervideo.mp4',import.meta.url).href,
        colaborators: "Gerardo Santos, Alan Peñafiel, Ixchel Barunch, Gabriel Aranda",
        tag: 'Videogames',

        toolsUsed: [unityIcon, cSharpIcon, trelloIcon, vsIcon],
    },
    {
        id: 7,
        title:'MyBuddy',
        fullTitle:'MyBuddy',

        image:new URL ('../assets/projects/MyBuddyrecorted.png',import.meta.url).href,
        description:'Mobile App based on social app for pets, developed with Android Studio and Flutter',
        fullDescription: "This is an App where the user register his pet and has a daily missions to do with his pet, recording time date and how many times, so you can have a register of the activities of your buddy",
        date:'May 2021',
        
        toolsUsed: [figmaIcon],
    },
    
    
]

export const headersProjects =[
    {
        header: 'All',
        isActive: true,
    },
    {
        header: 'Videogames',
        isActive: false,
    },
    {
        header: 'Web',
        isActive: false,
    }
]

export default projectsData;