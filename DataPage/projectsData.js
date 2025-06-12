const projectsData =[
    {
        
        title:'Seren',
        image:new URL ('../assets/projects/seren.png',import.meta.url).href,
        description: "I am the lead programmer where we are developing a 2D Narrative / Adventure game in Unity using C#.",
        date:'2 July 2023 - Actual',
        'skills': ["Unity", "C#", "Github"]
    },
    {
        
        title:'React portfolio',
        image:new URL ('../assets/projects/PortfolioIcon.png',import.meta.url).href,
        description:'Full Responsive Website using ReactJs Html and Css to show it as portfolio of my work experience and personal projects.',
        date:'November 2024',
        'skills': ["React", "JavaScript"]
    },
    {
        
        title:'3D WebSite',
        image:new URL ('../assets/projects/CatPage.png',import.meta.url).href,
        description:'WebSite with Highlite Section of videos, 3D models, using ReactJS, useGSAP for animations and Sentry for data tracking full responsive',
        date:'May 2025',
        'skills': ["ReactViteJS", "TailwindCSS", 'Sentry'],
        source: 'https://catpresentation.netlify.app/'
    },
    {
        title:'Movie Catalog Website',
        image:new URL ('../assets/projects/MovieLoopy.png',import.meta.url).href,
        description:'WebSite created to use the information from the The moviedb API, full responsive, to show as portfolio for FrontEnd developer',
        date:'June 2025',
        'skills': ["ReactViteJS", "TailwindCSS", 'API'],
        source: 'https://moviesloopy.netlify.app'
    },
    {
        
        title:'Bubble Run',
        image:new URL ('../assets/projects/BubbleRun.png',import.meta.url).href,
        description:'I was the main programmer in this Endless Runner Game, developed in Unity using C#.',
        date:'1 July 2022 - 1 September 2022',
        'skills': ["Unity", "C#", "Github"],
        demo: "https://drive.google.com/file/d/1qY-aUQtQGqO_UR6zBWlS04628CzQ5Jnc/view?usp=drive_link"
    },
   
    {
        
        title:'MarsKeeper',
        image:new URL ('../assets/projects/MarsKeeper.jpg',import.meta.url).href,
        description:'VR survival Videogame about a mecha pilot surviving enemy waves developed with Unity using C# ',
        date:'May 2022',
        'skills': ["Unity", "C#", "Github"],
        demo:"https://drive.google.com/file/d/110X3M957klv781ZgEMiVe6IGji39aZPl/view?usp=sharing"
    },
    {
        
        title:'Star Scavenger',
        image:new URL ('../assets/projects/StarScavenger.png',import.meta.url).href,
        description:'Programmer and Level designer in this Adventure / Horror videogame developed with Unity using C# ',
        date:'May 2021',
        'skills': ["Unity", "C#", "Github"],
        demo: "https://drive.google.com/file/d/1PsY8xnYLxc40cXbi8w3rjIhzRn6IcFEc/view?usp=sharing"
    },
    {
        
        title:'MyBuddy',
        image:new URL ('../assets/projects/MyBuddyrecorted.png',import.meta.url).href,
        description:'Mobile App where you can loggin, upload files and other functions, developed with Android Studio and Flutter',
        date:'May 2021',
        'skills': ["Android Studio", "Flutter"]
    },
    
    
]

export const modalProjectsData =[
    {
        "id":0,
        "title": "Seren: A Soul's Melody",
        "date": "May 2022 - Actual",
        "projectDescription": "I can't show as much as a would like to, but i can tell you about it. Seren is an Adventure / Narrative videogame where the main character use the music to pass through the game. The main mechanics that i developed consist in: Play music, Deploy dialogues, An Anxiety Mechanic, Input Player, Sound & Ilumination",
        "toolsUsed": "Unity, Visual Studio & Github",
        "video":new URL ('../assets/videos/serenvideo.mp4',import.meta.url).href,
        "colaborators": "Gerardo Santos, Erick Gomez, America Colón, Luis Castañeda, Mauricio Martinez"
    },
    {
        "id":1,
        "title": "Bubble Run",
        "date": "July 1 - September 1 2022",
        "projectDescription": "This is a casual Endless Runner game developed for movile devices, the game is a bubble running trying to updgrade his highscore avoiding obstacles and obtainig power ups, it has beatiful models and music too. You can download the APK here",
        "toolsUsed": "Unity & Visual Studio",
        projectlink: "https://drive.google.com/file/d/1qY-aUQtQGqO_UR6zBWlS04628CzQ5Jnc/view?usp=drive_link",
        "video":new URL ('../assets/videos/bubbleRunDemo.mp4',import.meta.url).href,
        "colaborators": "Gerardo Santos, Erick Gomez, Mauricio Martinez"
    },
    {
        "id":2,
        "title": "MarsKeeper",
        "date": "May 2022",
        "projectDescription": "This is a survival VR Videogame developed in Unity, In this game you are a mecha pilot trying to survive enemy waves with your artilllery, my work was to do the enemy's machine state, their attributes and functions, in total there are 3 types of enemys. You can download it here",
        "toolsUsed": "Unity, Visual Studio & Github",
        projectlink:"https://drive.google.com/file/d/110X3M957klv781ZgEMiVe6IGji39aZPl/view?usp=sharing",
        "video":new URL ('../assets/videos/MarsKeeperGameplay.mp4',import.meta.url).href,
        "colaborators": "Alex Martinez, Joan Pato, Gerardo Santos, Elisabeth Mateu"
    },
    {
        "id":3,
        "title": "Star Scavenger",
        "date": "May 2021",
        "projectDescription": "This is a Horror / Survival game where the player has to face creatures, limited oxygen and use the enviroment to reach the goal, in this game i was in charge of the player controller, level design and build the level. You can download it here and give it a try",
        "toolsUsed": "Unity, Visual Studio, Maya & Github",
        projectlink: "https://drive.google.com/file/d/1PsY8xnYLxc40cXbi8w3rjIhzRn6IcFEc/view?usp=sharing",
        "video":new URL ('../assets/videos/starscavengervideo.mp4',import.meta.url).href,
        "colaborators": "Alan Peñafiel, Ixchel Barunch, Gerardo Santos, Gabriel Aranda"
    },
    {
        "id":4,
        "title": "My Buddy",
        "date": "May 2021",
        "projectDescription": "This is an App where the user register his pet and has a daily missions to do with his pet, recording time date and how many times, so you can have a register of the activities of your buddy",
        "toolsUsed": "Android Studio, Flutter, Ilustrador",
        "img":new URL ('../assets/projects/MyBuddyrecorted.png',import.meta.url).href,
        "colaborators": "Gerardo Santos"
    },
    {
        "id":5,
        "title": "This Page",
        "date": "Actual",
        "projectDescription": "I'm expaning my horizons and learning about the web design, i made this page with my knowledge and still going to add more features to this so the users can have a more grateful experience, thank you for reading!",
        "toolsUsed": "React, Visual Studio Code",
        "colaborators": "Gerardo Santos"
    },
]

export default projectsData;