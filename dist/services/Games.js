"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class Games extends base_1.default {
    constructor(data) {
        super();
        if (data) {
            const updatedBase = new base_1.default(data);
            this.v1 = updatedBase.v1;
            this.v2 = updatedBase.v2;
        }
    }
    async getInfo(gameId) {
        const info = await this.v1.get('/game/' + gameId + '/info');
        return info.data;
    }
    async getGameThumbnail(gameId) {
        const info = await this.v1.get('/game/' + gameId + '/thumbnail');
        return info.data;
    }
    async getMapContent(gameId) {
        const map = await this.v1.get('/game/edit-mode/' + gameId + '/map');
        return map.data;
    }
    async getAllGameScripts(gameId) {
        const map = await this.v1.get('/game/edit-mode/' + gameId + '/scripts');
        return map.data;
    }
    async decodeGameAuthCode(code) {
        const data = await this.v1.get('/game/auth/client/decode?code=' + encodeURIComponent(code));
        return data.data;
    }
    async generateGameAuthCode() {
        const data = await this.v1.get('/game/auth/client/generate');
        return data.data;
    }
}
exports.default = Games;
//# sourceMappingURL=Games.js.map