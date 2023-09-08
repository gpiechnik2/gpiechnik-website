type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "grzegorz.piechnik99@gmail.com",
  title: "Hi, I’m Grzegorz Piechnik 👋",
  profile: "/grzegorz-piechnik-photo.webp",
  description:
    "Hi, I am a *Performance Engineer* with years of experience in application testing and a *k6 Champion*. I help companies improve the performance of their applications, *educate*, create content on *youtube*, write on my *blog* and *create opensource* tools. After hours, I am involved in cybersecurity.",
  socials: [
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/grpiechnik/",
    },
    {
      label: "Github",
      link: "https://github.com/gpiechnik2",
    },
    {
      label: "Youtube",
      link: "https://www.youtube.com/@bugspace/featured",
    },
    {
      label: "Medium",
      link: "https://medium.com/@gpiechnik",
    },
  ],
};

export default presentation;
