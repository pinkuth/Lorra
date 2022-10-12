/**
 * Watchdog is an open source discord.js bot.
 * Copyright (C) 2022  OoP1nk
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 */
import BaseCommand from "./BaseCommand";
import Lorra from "../../../client";
import { 
    ApplicationCommandType, 
    MessageInteraction, 
    RESTPostAPIApplicationCommandsJSONBody 
} from "discord.js";

export default abstract class MessageCommand extends BaseCommand {
    constructor(command: RESTPostAPIApplicationCommandsJSONBody, global: boolean) {
        super(command, global);
    }
    get type() { return ApplicationCommandType.Message; }
    async exec(client: Lorra, interaction: MessageInteraction): Promise<void> { }
}