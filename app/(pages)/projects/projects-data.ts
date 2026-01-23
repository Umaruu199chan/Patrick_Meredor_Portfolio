import { desc } from "motion/react-client";

export const projects = [
    {
        slug: "philhealth-homepage-redesign",
        title: "Redesigning the PhilHealth Homepage to help Filipinos Find Health Benefits Faster",
        description: "A UX case study on improving discoverability and trust for Philippine healthcare users.",
        date: "2026",
        platform: "Website",
        role: "UI & UX Designer",
        introduction: "PhilHealth is a government health insurance provider in the Philippines, serving millions of Filipinos  who rely on the website to access information about health benefits, coverage, and services. However, the existing homepage presents usability  and visual challenges that make it difficult for users to quickly find relevant information.This redesign project focuses on improving the clarity, usability, and visual hierarchy of the PhilHealth homepage to help users navigate health-related information more efficiently and with less confusion.",
        problems: {
            problem1: "Poor Navigation Clarity",
            problem2: "Visual Clutter and Weak Hierarchy",
            problem3: "Overcrowded Footer"
          },
        probDetails: {
            desc1: "The current PhilHealth homepage contains an oversized navigation bar with too many links, making it difficult for users to quickly scan and locate important pages.",
            example1: "Users are presented with numerous navigation options at once, causing essential services such as membership and benefits information to be buried among less critical links.",
            impact1: "This increases cognitive load and forces users to spend more time searching for information, leading to frustration and inefficient task completion.",
            desc2: "The homepage layout lacks clear visual hierarchy. A clickable image is followed by a carousel, with no visual distinction between primary and secondary content.",
            example2: "Navigation links and content sections use similar font weights and styles, making it hard for users to distinguish between primary and secondary information.",
            impact2: "Users struggle to scan the page effectively, reducing readability and increasing the likelihood of missing important content.",
            desc3: "The footer contains an excessive number of links and elements, overwhelming users with information. Fixed copyright notices and duplicate navigation create visual clutter.",
            example3:"Instead of grouping related links, all items are displayed at once without clear categorization.",
            impact3:"Information overload at the footer discourages users from exploring additional resources.",
        },
        images: {
            prob1: "/Image1.png",
            prob2: {
                image1: "/Image2.png",
                image2: "/Image3.png"
            },
            prob3: "/Image4.png"
        },
        goals: {
            goal1: {
                title: "Improve access to essential health insurance services",
                desc: "Ensure that users can immediately find and access critical PhilHealth services, such as contribution checks, benefits information, and membership details, directly from the homepage."
            },
            goal2: {
                title: "Reduce confusion caused by information overload",
                desc: "Streamline homepage content to present only the most relevant information, minimizing unnecessary links and visual clutter."
            }
        },
        uxGoals: {
            goal1: {
                title: "Enable faster task completion",
                desc:  "Help users complete their intended task with minimal navigation by prioritizing high-usage services and clear calls to action."
            },
            goal2: {
                title: "Improve readability and accessibility",
                desc: "Enhance text hierarchy, spacing, and contrast to support senior citizens and users with limited technical experience."
            },
            goal3: {
                title: "Provide a clear and predictable navigation experience",
                desc: "Ensure users understand where to go next by using consistent labeling, hierarchy, and layout patterns."
            }
        },
        users: {
                desc: "Before starting the redesign, I analyzed the existing PhilHealth homepage and reviewed common user needs based on publicly available information and informal observations. The goal was to understand how different Filipinos use the website and what challenges they face when accessing health insurance information.",
                desc2: "Rather than focusing on visual preferences alone, I focused on identifying the primary tasks users visit the PhilHealth website to complete.",
                desc3: "Based on these insights, I defined three core user archetypes and mapped them to their respective jobs-to-be-done.",
            user1: {
                title: "The Working Member",
                desc: "Working professional who occasionally checks PhilHealth status but struggles with overwhelming navigation and dense homepage content.",
                needs: "Quickly check my PhilHealth contributions and benefits to confirm eligibility without spending too much time navigating the site.",
                img: "/user1.png"
            },
            user2: {
                title: "The First-Time User",
                desc: "New PhilHealth member unfamiliar with government sites, using mobile. Struggles to understand where to begin due to buried information.",
                needs: "Clearly understand PhilHealth offerings and next steps from the homepage.",
                img: "/user2.png"
            },
            user3: {
                title: "The Senior User",
                desc: "Senior citizen or family-assisted user needing clear, readable content. Overwhelmed by small text, low contrast, and complex navigation.",
                needs: "When I access the website, I want information to be easy to read and simple to navigate so I don’t feel overwhelmed.",
                img: "/user3.png"
            },
        },

        process: {
            title: "Content Prioritization & Structure",
            desc:  "To support the defined UX goals, the homepage content was reorganized to prioritize essential services and reduce cognitive load. High-frequency user actions such as checking contributions, benefits, and membership information were placed prominently on the homepage, while secondary and informational content was grouped and moved lower in the layout.",
            desc2: "Navigation and footer links were simplified to improve scanability and help users quickly understand where to go next. The structure was designed with a mobile-first approach to ensure key services remain accessible across different devices."
        },

        uiDecision: {
            decision1: {
                title: "Visual Hierarchy",
                desc: "Primary actions such as checking contributions and benefits are visually emphasized through size, contrast, and placement to help users quickly identify key services."
            },
            decision2: {
                title: "Navigation & Clarity",
                desc: "Navigation was simplified to highlight the most frequently used links, with secondary items grouped under dropdown menus to reduce cognitive load."
            },
            decision3: {
                title: "Accessibility & Readability",
                desc: "Larger text sizes, improved contrast, and clear spacing were applied to support senior users and first-time visitors."
            },
            decision4: {
                title: "Consistency",
                desc: "Repeating layout patterns and consistent card styles were used to create a predictable and scannable browsing experience."
            }
        },

        learning: {
            learning1: "This project reinforced the importance of designing for clarity, especially for government websites that serve a wide range of users. Simplifying navigation and prioritizing high-frequency tasks significantly improves usability and reduces cognitive load.",
            learning2: "I also learned how defining clear UX goals early helped guide design decisions, from content hierarchy to visual emphasis, ensuring the final interface stayed user-focused rather than feature-heavy."
        },

        challenges: {
            challenge1: "the main challenges was balancing the need to provide comprehensive information with the goal of keeping the homepage simple and easy to navigate. Removing or hiding secondary content required careful consideration to ensure important information remained accessible without overwhelming users.",
            challenge2: "Another challenge was designing for diverse users, including working professionals, first-time users, and senior citizens, each with different needs and levels of digital familiarity."
        },

        future: {
            future1: "If given more time, I would conduct usability testing with real users to validate navigation decisions and identify friction points. I would also explore accessibility improvements in more depth, such as screen reader optimization and clearer focus states for keyboard navigation.",
            future2: "Additionally, expanding the redesign beyond the homepage to key service pages would help ensure a more consistent end-to-end user experience."
        }
    },
    // {
    //    slug: "web-based-clinic-appointment-patient-records-multilab-trece-martires",
    //    title: "Designing a Web-Based Clinic Appointment System for Multilab Diagnostic Center",
    //    description: "A capstone project that streamlines clinic appointments, patient records, and daily operations for Multilab Diagnostic and Health Services in Trece Martires City through an integrated web-based system.",
    //    date: "Ongoing"
    // },
];