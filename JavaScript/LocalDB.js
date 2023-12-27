export const greeting = "Greetings! I'm Cesar, and I'm thrilled to have you here. This digital space is a curated collection of my professional journey and personal projects, providing a glimpse into my world of creativity and expertise."

const skills = [
  {
    id: 1,
    skillName: "Android",
    skillUsageDescription: [
      {
        title : "Innovative Android App Development at Gensco Inc",
        description : "At Gensco Inc, our dedication is deeply rooted in harnessing the power and versatility of Android Studio to craft outstanding mobile applications. Our journey with Android Studio is more than just a pathway; it's the foundation of our development process. This commitment enables us to consistently deliver high-quality, user-centric, and performance-driven applications tailored for the Android platform."
      },
      {
        title : "Mastery of Android Studio Tools:",
        description : "We leverage the full spectrum of Android Studio's capabilities, from its advanced debugging tools to its efficient network inspector. Our approach is meticulous, ensuring every aspect of the app is fine-tuned for optimal performance. Using the debugger, we meticulously inspect and rectify issues, enhancing app stability and user experience. Simultaneously, our adept use of the network inspector allows us to optimize network calls for speed and reliability."
      }
    ]
  },
  {
    id: 2,
    skillName: "Play Store",
    skillUsageDescription: [
      {
        title: "Adhering to Google's Play Store Guidelines",
        description: "In my role at Gensco Inc, I ensure strict adherence to the latest guidelines set by Google for app deployment. This meticulous approach is crucial for the smooth submission and approval process of our apps, ensuring they meet the high standards expected in the Play Store. By staying updated with Google's ever-evolving guidelines, we maintain a strong presence in the app market, keeping our applications both compliant and competitive."
      },
      {
        title: "Efficient Deployment and Version Management",
        description: "I manage the deployment of both test and production versions of our applications through the Play Store. This process involves careful planning and execution of version releases, ensuring that each update meets our quality benchmarks before reaching our users. By utilizing the Play Store's robust version control and staged rollout features, I ensure a seamless update experience for users, minimizing disruptions and maximizing satisfaction."
      },
      {
        title: "Leveraging Google Analytics for Enhanced App Performance",
        description: "Utilizing Google Analytics, I actively monitor and analyze app performance, user engagement, and crash reports. This data-driven approach allows me to identify and swiftly address any bugs or errors. By interpreting the insights from Google Analytics, we make informed decisions to enhance app functionality, leading to improved user experience and increased app reliability."
      }
    ]
  },
  {
    id: 3,
    skillName: "Kotlin",
    skillUsageDescription: [
      {
        title: "Embracing Modern App Development with Kotlin",
        description: "My experience with Kotlin at Gensco Inc has been transformative, embracing the cutting-edge capabilities of modern app development. I have delved deep into utilizing Kotlin Flows for reactive programming, appreciating its efficiency in managing complex data streams. The integration of these advanced features ensures that our applications are not just functional, but also reactive and robust, staying ahead in the dynamic world of app development."
      },
      {
        title: "Leveraging Kotlin's Safety Features and Concise Syntax",
        description: "Kotlin's null safety syntax stands as a cornerstone in our coding practices, significantly reducing the likelihood of crashes due to null pointer exceptions. This safety feature, combined with Kotlin's concise syntax, has dramatically improved our code quality, making it more readable and maintainable. The clarity and succinctness of Kotlin not only make programming enjoyable but also enhance our development efficiency and application reliability."
      },
      {
      title: "Innovating UI with Jetpack Compose",
      description: "Using Jetpack Compose, I have transformed the way we build UIs, creating composable functions that are both efficient and elegant. This declarative UI toolkit has allowed us to build rich, interactive interfaces purely in Kotlin, significantly speeding up the development process. The ability to create composable functions that are reusable and easy to manage aligns perfectly with our goals of delivering high-quality, user-friendly applications."
      },
      {
        title: "The Joy of Programming in Kotlin",
        description: "Kotlin's modern architecture and concise syntax not only enhance our productivity but also make programming a delightful experience. Its intuitive and expressive nature allows us to implement complex functionalities with less code, making it a preferred language for our Android app development. The joy and ease of coding in Kotlin have fueled our creativity, enabling us to innovate and push the boundaries of what we can achieve in app development."
      }
    ]
  }
  
  
]


function createAndroidElement() {
  // Create a new div element
  var androidElement = document.createElement('div');

  // Set the innerHTML of the div to your SVG markup
  androidElement.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 48 48">
      <path fill="#37474f" d="M18.125,7L18,15H5c0,0,0-2.567,0-4.5S6.567,7,8.5,7S18.125,7,18.125,7z"></path>
      <path fill="#00e676" d="M30.009,5.627l1.85-3.117c0.282-0.475,0.125-1.089-0.349-1.371c-0.475-0.283-1.088-0.125-1.371,0.349l-1.945,3.276C26.889,4.276,25.478,4,24,4s-2.889,0.276-4.195,0.765L17.86,1.489c-0.282-0.474-0.895-0.632-1.371-0.349c-0.475,0.282-0.631,0.896-0.349,1.371l1.85,3.117c-3.301,1.92-5.608,5.362-5.94,9.373H35.95C35.618,10.989,33.311,7.547,30.009,5.627z"></path>
      <circle cx="19" cy="10" r="1" fill="#fff"></circle>
      <circle cx="29" cy="10" r="1" fill="#fff"></circle>
      <path fill="#448aff" d="M39.5,14c-0.494,0-30.14,0-31,0C6.567,14,5,12.433,5,10.5c0,0.001,0,25.067,0,27S6.567,41,8.5,41C9.36,41,43,41,43,41s0-21.567,0-23.5S41.433,14,39.5,14z"></path>
      <path fill="#37474f" d="M39.5,21c-0.342,0-0.871,0-1.5,0v25.875c0.629,0,1.158,0,1.5,0c1.933,0,3.5-1.567,3.5-3.5S43,17.5,43,17.5C43,19.433,41.433,21,39.5,21z"></path>
      <path fill="#37474f" d="M33.768,44.061l-7.444-15.819C27.335,27.515,28,26.337,28,25c0-1.858-1.28-3.411-3-3.858V19c0-0.552-0.448-1-1-1s-1,0.448-1,1v2.142c-1.72,0.447-3,2-3,3.858c0,1.337,0.665,2.515,1.676,3.242l-7.44,15.811c-0.424,0.901-0.201,2.025,0.62,2.588c1.047,0.718,2.437,0.309,2.954-0.79l4.643-9.866c0.616-1.309,2.479-1.309,3.095,0l4.643,9.866C30.531,46.576,31.25,47,32.001,47c0.411,0,0.832-0.128,1.203-0.402C33.982,46.024,34.18,44.936,33.768,44.061z M24,23c1.103,0,2,0.897,2,2s-0.897,2-2,2s-2-0.897-2-2S22.897,23,24,23z"></path>
    </svg>
  `;

  // Append the div to the body or another container
  document.body.appendChild(androidElement);
}