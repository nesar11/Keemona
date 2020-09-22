const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function() {
  ac.grant("basic")
    .readOwn("profile")
    .updateOwn("profile")
    .readOwn("projects")
    .updateOwn("projects")

  ac.grant("supervisor")
    .extend("basic")
    .readAny("profile")
    .readAny("projects")
    .deleteAny("projects")

  ac.grant("admin")
    .extend("basic")
    .extend("supervisor")
    .updateAny("profile")
    .deleteAny("profile")
    .updateAny("projects")
    .deleteAny("projects")

  return ac;
})();