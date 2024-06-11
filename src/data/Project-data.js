import Bookstore_img from "../assets/resources/project-images/book-store.jpeg";
import Signin_signup_img from "../assets/resources/project-images/signin-signup.png";
import Eshop_img from "../assets/resources/project-images/eshop.png";
import Pitzo_img from "../assets/resources/project-images/pitzo.png";
import Redwingstaxi_img from "../assets/resources/project-images/redwings-taxi.png";

export const projects = [
  {
    id: "1",
    title: "Book-Store webapplication",
    description:
      "I developed this using MERN stack. There are CRUD operations in this application, they are Create a new book, Edit the existing books, Read all the books & Delete books.",
    image: `${Bookstore_img}`,
    tags: ["React", "Node js", "Express js", "Javascript", "MongoDB"],
    url: "https://github.com/achiradimuthu/Book-Store-webapplication",
  },
  {
    id: "2",
    title: "User signin & signup",
    description: "User Login & Register form design using react",
    image: `${Signin_signup_img}`,
    tags: ["React", "Javascript", "html", "css"],
    url: "https://github.com/achiradimuthu/user-signin-signup-form-design-react",
  },
  {
    id: "3",
    title: "E-commerce webapplication",
    description:
      "This is an online shopping web application. I developed this one for the university project. I have used html, css, javascript, bootstrap, php for this.",
    image: `${Eshop_img}`,
    tags: ["html", "css", "Javascript", "php", "Bootstrap"],
    url: "https://github.com/achiradimuthu/eShop",
  },
  {
    id: "4",
    title: "Restaurant website design",
    description:
      "This is a restaurant website design. I designed this using html, css, javascript, bootstrap, jquery.",
    image: `${Pitzo_img}`,
    tags: ["html", "css", "Javascript", "Bootstrap", "jQuery"],
    url: "https://github.com/achiradimuthu/Restaurant_website_design",
  },
  {
    id: "5",
    title: "Redwings Taxi",
    description: "This is a real client project for tourism industry. This website gives taxi service for foreigners.",
    image: `${Redwingstaxi_img}`,
    tags: ["Wordpress", "php"],
    url: "https://redwingstaxi.com/",
  },
];
