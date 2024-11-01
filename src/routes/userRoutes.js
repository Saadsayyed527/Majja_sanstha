const express = require("express");
const router = express.Router();
const {adminController, judgeController, individualParticipantController, groupManagingParticipantController} = require("../controllers/userController.js");
const verifyToken = require("../middlewares/authMiddleware.js")
const roleAuthMiddleware = require("../middlewares/roleMiddleware.js")

// Routes based on user roles

router.get("/admin", verifyToken, roleAuthMiddleware("admin"), adminController);
router.get("/judge", verifyToken, roleAuthMiddleware("admin","judge"), judgeController);
router.get("/participant", verifyToken, roleAuthMiddleware("participant_individual"),individualParticipantController);
router.get("/participant-group-manager", verifyToken, roleAuthMiddleware("participant_group_manager"), groupManagingParticipantController);

module.exports = router;