const passport = require("passport");

module.exports = app => {
  // Whenever a user comes to this route, we
  // want to kick off to passport for Google
  // OAuth and application flow
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/dashboard");
    }
  );

  app.get("/api/logout", (req, res) => {
    // Logout is one of many functions that is
    // attached to the request object by
    // Passport and destroys user object
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
