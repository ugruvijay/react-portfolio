import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

const resumeData =  {
    name: "Vijay Ugru",
    title: "Software Engineer",
    email: "ugru@usc.edu",
    address: "720 West 27th Street, LA, CA",
    phone: "(213) 255-6193",

    socials: {
        Facebook: {
            link: "https://www.facebook.com/vijay.ugru",
            text: "Vijay",
            icon: <FacebookIcon />
        },
        Twitter: {
            link: "https://twitter.com/vijai_008",
            text: "Vijay",
            icon: <TwitterIcon />
        },
        LinkedIn: {
            link: "https://www.linkedin.com/in/vijay-ugru",
            text: "Vijay",
            icon: <LinkedInIcon />
        },
        GitHub: {
            link: "https://github.com/ugruvijay",
            text: "Vijay",
            icon: <GitHubIcon />
        },
    },

    about: "I am a Computer Science graduate student at the University of Southern California with a focus on Machine Learning, Artificial Intelligence and Natural Language Processing. I have worked for two years as a Software Developer at Robert Bosch Engineering and Business Solutions Pvt. Ltd., India, wherein I developed Windows Desktop Applications using WPF and WCF technologies.\n\nI am currently looking for co-op (January 2021)/full-time (June 2021) opportunities as a Software Engineer.",

    experiences: [
        {
            title: 'Qualcomm Inc.',
            subtitle: 'Interim Software Engineer Intern',
            date: 'May 2020 - Aug 2020',
            description: '•	Developed system tool and automation framework for validation of new positioning technologies like visual aided precise positioning for mobile and automotive platforms.\n•	Reduced the process workflow time by 90% by creating a scalable data processing and visualization pipeline.\n•	Implemented asynchronous task to extract statistical data from log files; utilized Google Charts to generate CDF and Time Series plots to reveal underlying trend and determine the performance of the system. \n•	Designed a rich and interactive dashboard to provide at-a-glance view of KPIs like Horizontal and Cross Track Errors.'
        },
        {
            title: 'Robert Bosch Engineering and Business Solutions',
            subtitle: 'Associate Software Engineer',
            date: 'Aug 2016 - Jul 2018',
            description: '•	Developed and owned 6 new user interfaces for efficient handling and diagnostics of spot welding.\n• Ensured load time to be within 2 seconds using data virtualization and incremental loading on Syncfusion DataGrid.\n• Improved productivity by 10 man-hours by proposing and implementing an automation tool to generate code files.'
        },
        {
            title: 'Global Digital Vision Pty. Ltd.',
            subtitle: 'Software Engineer Intern',
            date: 'Feb 2016 - May 2016',
            description: '•	Developed Android Application for smartwatch; used Bluetooth 4.0 (BLE) for communication between watch and sensors.\n•	Integrated various sensors (BP, SPO2, Thermometer, Weighing Scale and Blood sugar) with smartwatch.\n•	Designed a machine learning model to detect an anomaly in health vitals by classifying patient’s health data as normal or abnormal using k-Nearest Neighbors.\n•	Created an Android Application as test harness to do complete automated system testing.'
        },
    ],

    educations: [
        {
            title: 'University of Southern California',
            subtitle: 'Master of Science in Compputer Science',
            date: 'Aug 2019 - May 2021',
            description: '•	Relevant Courses: Machine Learning, Artificial Intelligence, Natural Language Processing, Data Mining, Web Technologies'
        },
        {
            title: 'B. V. Bhoomaraddi College of Engineering and Technology',
            subtitle: 'Bachelor of Engineering in Computer Science',
            date: 'Sep 2012 - Jun 2016',
            description: '•	Relevant Courses: Operating System, Database Management Systems, Design and Analysis of Algorithms, Theory of Computation'
        }
    ],

    projects: [
        {
            tag: 'Web',
            image: 'http://localhost:3000/assets/images/news-website.png',
            title: 'Project 1',
            caption: 'Caption 1',
            description: 'Sample description',
            links: [
                {
                    link: 'https://www.github.com',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://www.linkedin.com',
                    icon: <LinkedInIcon />
                },
                {
                    link: 'https://www.youtube.com',
                    icon: <YouTubeIcon />
                },
            ],
        },
        {
            tag: 'Web',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
            title: 'Project 2',
            caption: 'Caption 1',
            description: 'Sample description',
            links: [
                {
                    link: 'https://www.github.com',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://www.linkedin.com',
                    icon: <LinkedInIcon />
                },
                {
                    link: 'https://www.youtube.com',
                    icon: <YouTubeIcon />
                },
            ],
        },
        {
            tag: 'Python',
            image: 'https://wallpaperaccess.com/full/1192976.jpg',
            title: 'Autonomous Mars Rover Simulation',
            caption: 'Search for the optimal paths using BFS, UCS and A*',
            description: 'The goal of the project was to simulate a closed Martian Environment where-in a rover tries to search best possible path to the target location on a rocky terrain using both Uninformed and Informed search algorithms such as BFS, UCS and A*. It also involved analysis of running time complexities of these algorithms.',
            links: [
                {
                    link: 'https://github.com/ugruvijay/AI-PathFinder',
                    icon: <GitHubIcon />
                },
            ],
        },
        {
            tag: 'Python',
            image: 'https://i.pinimg.com/originals/76/38/cc/7638cc8bdd51639f09e596e73382c70a.jpg',
            title: 'Halma: AI game playing agent',
            caption: 'Adversarial game also called as Chinese Checkers',
            description: 'The goal of the project was to simulate a closed Martian Environment where-in a rover tries to search best possible path to the target location on a rocky terrain using both Uninformed and Informed search algorithms such as BFS, UCS and A*. It also involved analysis of running time complexities of these algorithms.',
            links: [
                {
                    link: 'https://github.com/ugruvijay/AI-Halma',
                    icon: <GitHubIcon />
                },
            ],
        },
        {
            tag: 'Java',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
            title: 'Java Project 1',
            caption: 'Caption 1',
            description: 'Sample description',
            links: [
                {
                    link: 'https://www.github.com',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://www.linkedin.com',
                    icon: <LinkedInIcon />
                },
                {
                    link: 'https://www.youtube.com',
                    icon: <YouTubeIcon />
                },
            ],
        },
    ]
}

export default resumeData;