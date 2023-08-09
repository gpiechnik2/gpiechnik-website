export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "xk6-httpagg",
    techs: ["k6", "xk6", "Go", "Javascript", "HTML"],
    link: "https://github.com/gpiechnik2/xk6-httpagg",
  },
  {
    title: "xk6-anomaly",
    techs: ["k6", "xk6", "Go", "Javascript", "AI (Artificial Intelligence)", "Machine Learning"],
    link: "https://github.com/gpiechnik2/xk6-anomaly",
  },
  {
    title: "xk6-smtp",
    techs: ["k6", "xk6", "Go", "Javascript", "SMTP"],
    link: "https://github.com/gpiechnik2/xk6-smtp",
  },
  {
    title: "k6-boilerplate",
    techs: ["k6", "Javascript", "Docker", "Docker-compose", "Grafana", "InfluxDB"],
    link: "https://github.com/gpiechnik2/k6-boilerplate",
  },
  {
    title: "k6-errors-reporter",
    techs: ["k6", "Javascript", "Webpack"],
    link: "https://github.com/gpiechnik2/k6-errors-reporter",
  },
];

export default projects;
