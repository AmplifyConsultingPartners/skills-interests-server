import { DataPoint, Person } from "./types";
import { compose, map, filter } from 'ramda';

const colorFills = [
  "red",
  "orange",
  "green",
  "darkgreen",
  "blue",
  "steelblue",
  "purple",
  "brown",
];

const randomColor = () => colorFills[randomNum(0, colorFills.length - 1)];

const filterType = (types: string[]) => (tech: DataPoint) => {
  return types.includes(tech.type);
};
const randomNum = (min: number, max: number) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomizeData = (tech: any): DataPoint => {
  return {
    ...tech,
    skill: randomNum(-10, 10),
    interest: randomNum(-10, 10),
    fill: randomColor(),
  }
};

export const roles = [
  { _id: "1", role: "Software Development Engineer" },
  { _id: "2", role: "Data Visualization",},
  { _id: "3", role: "Project Manager",},
  { _id: "4", role: "Data Scientist",},
  { _id: "5", role: "Intern"},
];

export const techList = [
  { tag: "AWS",          type: "tool" },
  { tag: "Azure",        type: "tool" },
  { tag: "C++",          type: "language" },
  // { tag: "Cassandra",    type: "data" },
  { tag: "Angular",      type: "framework" },
  { tag: "C",            type: "language" },
  { tag: "C#",           type: "language" },
  // { tag: "Clojure",      type: "language" },
  // { tag: "DB2",          type: "data" },
  { tag: "Dotnet",       type: "framework" },
  { tag: "Elasticsearch",type: "database" },
  { tag: "Electron.js",  type: "framework" },
  // { tag: "Elm",          type: "language" },
  { tag: "Express",      type: "framework" },
  { tag: "F#",           type: "language" },
  { tag: "Flask",        type: "framework" },
  { tag: "Git",          type: "tool" },
  // { tag: "Lisp",         type: "language" },
  { tag: "Hadoop",       type: "data" },
  { tag: "Haskell",      type: "language" },
  { tag: "JavaScript",   type: "language" },
  // { tag: "MariaDB",      type: "data" },
  { tag: "MongoDB",      type: "data" },
  { tag: "MSSQL",        type: "data" },
  { tag: "MySql",        type: "data" },
  { tag: "Node.js",      type: "framework" },
  // { tag: "Oracle",       type: "data" },
  // { tag: "PostgreSQL",   type: "data" },
  { tag: "PowerBI",      type: "framework" },
  { tag: "Python",       type: "language" },
  { tag: "PyTorch",      type: "data" },
  { tag: "Pandas",       type: "data" },
  { tag: "R",            type: "language" },
  // { tag: "Rails",        type: "framework" },
  { tag: "React",        type: "framework" },
  { tag: "Redis",        type: "data" },
  // { tag: "Ruby",         type: "language" },
  { tag: "Rust",         type: "language" },
  { tag: "Sass",         type: "language" },
  { tag: "Scala",        type: "language" },
  // { tag: "Scikit-learn", type: "data" },
  // { tag: "Spark",        type: "data" },
  { tag: "SQLite",       type: "data" },
  { tag: "Swift",        type: "language" },
  { tag: "Tableau",      type: "data" },
  { tag: "TensorFlow",   type: "data" },
  { tag: "TypeScript",   type: "language" },
  { tag: "Vim",          type: "tool" },
  // { tag: "Vue",          type: "framework" },
];

export const dummyPersons = (): Person[] => [
  {
    _id: "1",
    firstName: "Bob",
    lastName: "Ross",
    role: "eng",
    title: "Software Development Enginner",
    data: compose(
      filter(filterType(['language', 'tool'])),
      map(randomizeData)
    )(techList)
  },
  {
    _id: "2",
    firstName: "Furry",
    lastName: "Dinosaur",
    role: "eng",
    title: "Software Development Enginner",
    data: compose(
      filter(filterType([ 'framework', 'tool' ])),
      map(randomizeData)
    )(techList)
  },
  {
    _id: "3",
    firstName: "Flippant",
    lastName: "Flamingo",
    role: "data",
    title: "Data Visualization",
    data: compose(
      filter(filterType([ 'data' ])),
      map(randomizeData)
    )(techList)
  }

]

/* tech list initial
 *
export const techList = [
  { tag: "Assembly",     type: "language" },
  { tag: "AWS",          type: "tool" },
  { tag: "Azure",        type: "tool" },
  { tag: "C++",          type: "language" },
  { tag: "Cassandra",    type: "data" },
  { tag: "Angular",      type: "framework" },
  { tag: "Apache",       type: "framework" },
  { tag: "C",            type: "language" },
  { tag: "C#",           type: "language" },
  { tag: "Clojure",      type: "language" },
  { tag: "Django",       type: "framework" },
  { tag: "DB2",          type: "data" },
  { tag: "Dotnet",       type: "framework" },
  { tag: "Drupal",       type: "framework" },
  { tag: "Elasticsearch",type: "database" },
  { tag: "Electron.js",  type: "framework" },
  { tag: "Elm",          type: "language" },
  { tag: "Emacs",        type: "tool" },
  { tag: "Express",      type: "framework" },
  { tag: "F#",           type: "language" },
  { tag: "Flask",        type: "framework" },
  { tag: "Fortran",      type: "language" },
  { tag: "Git",          type: "tool" },
  { tag: "GitHub",       type: "tool" },
  { tag: "Go",           type: "language" },
  { tag: "Linux",        type: "tool" },
  { tag: "Lisp",         type: "language" },
  { tag: "Hadoop",       type: "data" },
  { tag: "Haskell",      type: "language" },
  { tag: "Java",         type: "language" },
  { tag: "JavaScript",   type: "language" },
  { tag: "JQuery",       type: "framework" },
  { tag: "MariaDB",      type: "data" },
  { tag: "MongoDB",      type: "data" },
  { tag: "MSSQL",        type: "data" },
  { tag: "MySql",        type: "data" },
  { tag: "Next.js",      type: "framework" },
  { tag: "Node.js",      type: "framework" },
  { tag: "Oracle",       type: "data" },
  { tag: "PHP",          type: "language" },
  { tag: "PostgreSQL",   type: "data" },
  { tag: "PowerBI",      type: "framework" },
  { tag: "Python",       type: "language" },
  { tag: "PyTorch",      type: "data" },
  { tag: "Pandas",       type: "data" },
  { tag: "R",            type: "language" },
  { tag: "Rails",        type: "framework" },
  { tag: "React",        type: "framework" },
  { tag: "React Native", type: "framework" },
  { tag: "Redis",        type: "data" },
  { tag: "Ruby",         type: "language" },
  { tag: "Rust",         type: "language" },
  { tag: "Sass",         type: "language" },
  { tag: "Scala",        type: "language" },
  { tag: "Scikit-learn", type: "data" },
  { tag: "Shell (Bash)", type: "tool" },
  { tag: "Spark",        type: "data" },
  { tag: "SQLite",       type: "data" },
  { tag: "Swift",        type: "language" },
  { tag: "Tableau",      type: "data" },
  { tag: "TensorFlow",   type: "data" },
  { tag: "TypeScript",   type: "language" },
  { tag: "Vim",          type: "tool" },
  { tag: "Vue",          type: "framework" },
  { tag: "Wordpress",    type: "framework" },
]; 

 */
