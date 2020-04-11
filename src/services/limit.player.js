const HTTP = require("../../common/constants/http");
const LOGGER = require("../utils/logger");
const MissingAuthorizationError = require("../errors/missing.authorization");
const MatchController = require("../match/match.controller");

const limitPlayer = async function(req, res, next) {
    try {
        let match = await MatchController.countPlayersInMatch(req,res);
        next();
    } catch (error) {
        LOGGER.error(error);
        res.status(HTTP.STATUS.UNAUTHORIZED).send({ error: error.message });
    }
};

module.exports = limitPlayer;