import unity from '../assets/skills/Unity.png'
import github from '../assets/skills/github.png'
import vs from '../assets/skills/VS.png'
import vscode from '../assets/skills/VSCode.png'
import CSharp from '../assets/skills/Csharp.png'
import JavaScript from '../assets/skills/JS.png'
import HTML from '../assets/skills/html.png'
import CSS from '../assets/skills/css.png'
import React from '../assets/skills/react.png'
import node from '../assets/skills/node.png'
import Jira from '../assets/skills/jira.png'
import Slack from '../assets/skills/slack.png'
import Figma from '../assets/skills/figma.png'
import Trello from '../assets/skills/trello.png'
import Sentry from '../assets/skills/Sentry.png'
import GSAP from '../assets/skills/gsap.png'

export const unityIcon =unity;
export const githubIcon = github;
export const vsIcon = vs;
export const vsCodeIcon = vscode;
export const cSharpIcon = CSharp;
export const jsIcon = JavaScript;
export const htmlIcon = HTML;
export const cssIcon = CSS;
export const reactIcon = React;
export const nodeIcon = node;
export const jiraIcon = Jira;
export const slackIcon = Slack;
export const figmaIcon = Figma;
export const trelloIcon = Trello;
export const sentryIcon = Sentry;
export const gsapIcon = GSAP;


const experienceData =[
    {
      title: 'Unity',
      imageSrc:unityIcon
    },
    {
      title :'Github',
      imageSrc: githubIcon
    },
    {
      title :'Visual Studio',
      imageSrc: vsIcon
    },
    {
      title :'VS code',
      imageSrc: vsCodeIcon
    },
    {
      title :'C#',
      imageSrc: cSharpIcon
    },
    {
      title :'Java Script',
      imageSrc: jsIcon
    },
    {
        title: "HTML",
        imageSrc: htmlIcon
      },
      {
        title: "CSS",
        imageSrc: cssIcon
      },
      {
        title: "React",
        imageSrc: reactIcon
      },
      {
        title: "Node",
        imageSrc: nodeIcon
      },
      {
        title: "Jira",
        imageSrc: jiraIcon
      },
      {
        title: "Slack Overflow",
        imageSrc: slackIcon
      },
      {
        title: "Figma",
        imageSrc: figmaIcon
      },
      {
        title: "Trello",
        imageSrc: trelloIcon
      },
      {
        title: 'GSAP',
        imageSrc: gsapIcon,
      },
      {
        title: 'Sentry',
        imageSrc: sentryIcon
      }


]

export const HistoryExperience =[
  {
    "role": "Software Engineer",
    "organisation": "Grupo Joal",
    "startDate": "Jun. 2022",
    "endDate": "Sep. 2024",
    "experiences": ['Led development as the main Unity programmer for multiple interactive projects.',
      "Designed and implemented gameplay mechanics to enhance user engagement.",
      "Built automated scripts to streamline repetitive tasks and increase development efficiency.",
      'Improved test scalability, enabling faster iteration and more reliable QA workflows.'],
    "imageSrc": new URL ('../assets/skills/Joal.png',import.meta.url).href
  },
  
]



export default experienceData;