
// server/roles.js
const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function() {
ac.grant("basic")
 .readOwn("profile")
 .updateOwn("profile")
 .updateOwn("services")

ac.grant("supervisor")
 .extend("basic")
 .readAny("profile")
 .updateAny("projects")
 .deleteAny("projects")
 .updateAny("services")
 .deleteAny("services")

ac.grant("admin")
 .extend("basic")
 .extend("supervisor")
 .updateAny("profile")
 .deleteAny("profile")
 .updateAny("projects")
 .deleteAny("projects")
 .updateAny("companies")
 .deleteAny("companies")

return ac;
})();
