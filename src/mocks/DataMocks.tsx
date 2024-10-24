const MOCKDATA_LANGUAGES = [
    { name: "HTML5", value: 50, color: "#ff8200" },
    { name: "CSS", value: 70, color: "#00c3ff" },
    { name: "JavaScript", value: 75, color: "#ffe400" },
    { name: "TypeScript", value: 65, color: "#0168FA" },
];

const MOCKDATA_DEV_TOOLS_FRONTEND = [
    { name: "React", value: 90, color: "#0086ff" },
    { name: "react-router-dom", value: 80, color: "#999999" },
    { name: "React Hooks", value: 75, color: "#00c3ff" },
    { name: "Material-UI", value: 100, color: "#6e07f3" },
    { name: "styled-components", value: 100, color: "#ff0096" },
    { name: "Chart.js", value: 100, color: "#E00000" },
    { name: "Axios", value: 100, color: "#00ff22" },
];

const MOCKDATA_DEV_TOOLS_BACKEND = [
    { name: "Nest.js", value: 80, color: "#df234f" },
    { name: "Nodemon", value: 100, color: "#6aa84f" },
    { name: "Docker", value: 75, color: "#0086ff" },
    { name: "PostgreSQL", value: 50, color: "#ff0096" },
    { name: "Swagger", value: 100, color: "#00ff22" },
    { name: "Railway", value: 80, color: "#674ea7" },
];

const MOCKDATA_OTHERS_TOOLS = [
    { name: "Adobe XD e Figma", value: 20, color: "#ff0096" },
    { name: "Node.js", value: 100, color: "#6aa84f" },
    {
        name: "Git",
        value: 60,
        color: "#999999",
    },
    { name: "Yarn", value: 100, color: "#ff00ff" },
    { name: "Npm", value: 100, color: "#00c3ff" },
    { name: "Insomnia", value: 100, color: "#901bff" },
    { name: "Postman", value: 100, color: "#ff8200" },
    { name: "React Testing Library", value: 60, color: "#ff9f9f" },
    { name: "Jest", value: 60, color: "#fbc51e" },
];

const MOCKDATA_SOFT_SKILLS = [
    { name: "Comunicação", value: 100, },
    { name: "Proatividade", value: 100, },
    { name: "Persistencia", value: 100, },
    { name: "Flexibilidade", value: 95, },
    { name: "determinação", value: 100, },
    { name: "criatividade", value: 90, },
    { name: "Empatia", value: 85, },
    { name: "pontualidade", value: 100, },
    { name: "comprometimento", value: 100, },
];

export {
    MOCKDATA_LANGUAGES,
    MOCKDATA_DEV_TOOLS_FRONTEND,
    MOCKDATA_DEV_TOOLS_BACKEND,
    MOCKDATA_OTHERS_TOOLS,
    MOCKDATA_SOFT_SKILLS
};
