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
        }
    },
    // {
    //    slug: "web-based-clinic-appointment-patient-records-multilab-trece-martires",
    //    title: "Designing a Web-Based Clinic Appointment System for Multilab Diagnostic Center",
    //    description: "A capstone project that streamlines clinic appointments, patient records, and daily operations for Multilab Diagnostic and Health Services in Trece Martires City through an integrated web-based system.",
    //    date: "Ongoing"
    // },
];