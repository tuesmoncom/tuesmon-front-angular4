/*
 * Copyright (C) 2014-2015 Tuesmon Agile LLC <tuesmon@tuesmon.com>
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
 * File: discover-search.controller.coffee
 */

import {Component, Input, Output, EventEmitter} from "@angular/core";
import * as Immutable from "immutable";

@Component({
    selector: "tg-discover-search-results",
    template: require("./discover-search-results.pug"),
})
export class DiscoverSearchResults {
    @Input() projects: Immutable.List<any>;
    @Input() order: string;
    @Output() orderChange: EventEmitter<string>;

    constructor() {
        this.orderChange = new EventEmitter();
    }
}
