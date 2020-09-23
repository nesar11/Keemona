const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function() {
  ac.grant("basic")
    .readOwn("profile")
    .updateOwn("profile")

    .readOwn("projects")
    .updateOwn("projects")

    .readOwn("services")
    .updateOwn("services")

    .readOwn("companies")
    .updateOwn("companies")

  ac.grant("supervisor")
    .extend("basic")
    .readAny("profile")

    .readAny("projects")
    .createAny("projects")
    .deleteAny("projects")

    .readAny("services")
    .deleteAny("services")
    
    .readAny("companies")
    .deleteAny("companies")


  ac.grant("admin")
    .extend("basic")
    .extend("supervisor")

    .updateAny("profile")
    .deleteAny("profile")
    .createAny("projects")

    .updateAny("services")
    .deleteAny("services")
    .createAny("services")

    .updateAny("companies")
    .deleteAny("companies")
    .createAny("companies")

  return ac;
})();