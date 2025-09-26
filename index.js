import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import ejsLayouts from "express-ejs-layouts";
import IndexController from "./src/controllers/Index.Controller.js";

// Fix __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);

// Create server
const server = express();

// Middleware for parsing form/body
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Serve static files (CSS, JS, images)
server.use(express.static(path.join(__dirname,"public")));

// View engine setup
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "src", "views"));

// EJS Layouts middleware and default layout
server.use(ejsLayouts);
server.set("layout", "layouts/layout"); // uses src/views/layouts/layout.ejs

// Instantiate Controller (if needed)
const indexController = new IndexController();

// Routes
server.get("/", (req, res) => {
  res.render("landing-page", { title: "Home Page" });
});


// Start server
server.listen(3400, () => {
  console.log("Server is running on http://localhost:3400");
});
