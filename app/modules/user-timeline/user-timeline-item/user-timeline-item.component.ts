/*
 * Copyright (C) 2014-2017 Tuesmon Agile LLC <tuesmon@tuesmon.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 * File: user-timeline-item.component.ts
 */

import {Component, Input} from "@angular/core";
import * as Immutable from "immutable";

@Component({
    selector: "tg-user-timeline-item",
    template: require("./user-timeline-item.pug"),
})
export class UserTimelineItem {
    @Input() item: Immutable.Map<string, any>
}
