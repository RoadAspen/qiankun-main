const baseContainer = "#micro_site_container";

const hostname = "127.0.0.1";

export const microApps = [
  {
    name: "reactApp1",
    entry: `http://${hostname}:3001/micro/react`,
    container: baseContainer,
    activeRule: "/app-react",
  },
  {
    name: "vueApp1",
    entry: `http://${hostname}:8080/micro/vue`,
    container: baseContainer,
    activeRule: "/app-vue",
  },
];

export default {};
