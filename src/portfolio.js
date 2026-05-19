/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Devesh Talsania",
  title: "Hi, I'm Devesh",
  subTitle: emoji(
    "A passionate Software Developer 🚀 with experience building scalable web applications using React.js, Vue.js, TypeScript and Node.js. Currently pursuing M.Sc. in Computer Science at University of Stuttgart."
  ),
  resumeLink: "", // we'll add this later when we upload your PDF
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Devesh0129",
  linkedin: "https://www.linkedin.com/in/deveshtalsania33/",
  gmail: "talsaniadevesh29@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "SOFTWARE DEVELOPER WHO LOVES BUILDING SCALABLE WEB APPLICATIONS AND EXPLORING NEW TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Build highly interactive and responsive UI for web and mobile applications"
    ),
    emoji("⚡ Design and develop REST APIs and full-stack applications"),
    emoji(
      "⚡ Containerize and deploy applications using Docker and GitHub Actions"
    )
  ],

  softwareSkills: [
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt"},
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "TypeScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "React.js", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Vue.js", fontAwesomeClassname: "fab fa-vuejs"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {
      skillName: "SQL-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "GitHub Actions", fontAwesomeClassname: "fab fa-github"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "npm", fontAwesomeClassname: "fab fa-npm"}
  ],
  display: true
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Stuttgartt",
      // logo: require("./assets/images/stuttgartLogo.png"),
      subHeader: "M.Sc. in Computer Science, Major: Autonomous Systems",
      duration: "September 2024 - Present",
      desc: "Focusing on Autonomous Systems and expanding knowledge in AI, distributed systems and software engineering.",
      descBullets: [
        "Relevant coursework: Autonomous Systems, Machine Learning, Distributed Systems",
        "Actively improving German language skills alongside technical studies"
      ]
    },
    {
      schoolName: "Gujarat Technological University",
      // logo: require("./assets/images/gtuLogo.png"),
      subHeader: "B.E. in Computer Engineering",
      duration: "August 2018 - May 2022",
      desc: "Studied core computer engineering with focus on software development and web technologies.",
      descBullets: [
        "Graduated with hands-on experience in full-stack development",
        "Active participant in cultural and technical events on campus"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Frontend Development", progressPercentage: "85%"},
    {Stack: "Backend & APIs", progressPercentage: "70%"},
    {Stack: "DevOps & Tools", progressPercentage: "75%"},
    {Stack: "Programming", progressPercentage: "80%"}
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Student Assistant (HIWI)",
      company: "IPVS - University of Stuttgart",
      // companylogo: require("./assets/images/stuttgartLogo.png"), // we'll handle logos later
      date: "March 2026 – Present",
      desc: "Working on an open-source JSON Schema editor used at research scale.",
      descBullets: [
        "Developed and maintained UI features like word wrap, search and schema diagram enhancements",
        "Diagnosed and resolved frontend defects improving system stability and usability",
        "Collaborated via GitHub with structured issue tracking and version control in an international team"
      ]
    },
    {
      role: "Software Engineer",
      company: "Octanics",
      // companylogo: require("./assets/images/octanicsLogo.png"),
      date: "Aug 2023 – Jul 2024",
      desc: "Designed and implemented data-driven dashboards and operational tools for TurboBusiness platform.",
      descBullets: [
        "Reduced web application load times by up to 60% through targeted performance optimization",
        "Improved CI/CD workflows to streamline deployments and release cycles"
      ]
    },
    {
      role: "Front-End Engineer",
      company: "Jetbro Pvt. Ltd.",
      // companylogo: require("./assets/images/jetbroLogo.png"),
      date: "Jun 2022 – Jul 2023",
      desc: "Maintained and enhanced 15+ production web applications across various frontend technologies.",
      descBullets: [
        "Containerized applications using Docker, reducing environment setup time by 70%",
        "Built a reusable company-wide component library reducing integration overhead"
      ]
    }
  ]
};
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
