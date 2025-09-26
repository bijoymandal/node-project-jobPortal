export default class IndexController {
  index(req, res) {
    res.render("pages/main", { title: "Home Page" });
  }
//   res.render("pages/dashboard", {
//       title: "Dashboard",
//       activePage: "dashboard",
//     });
}