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
 * File: assigned-to-selector.directive.coffee
 */

import {Component, Input} from "@angular/core";

@Component({
    selector: "tg-assigned-item",
    template: require("./assigned-item.pug"),
})
export class AssignedItem {
    @Input() member;
    @Input() photoOnly: boolean = false;
}
