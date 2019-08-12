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
 * File: modules.coffee
 */

import {Injectable} from "@angular/core";
import {HttpService} from "../base/http";
import {UrlsService} from "../base/urls";

@Injectable()
export class ModulesResource {
    constructor(private http: HttpService,
                private urls: UrlsService) {}

    list(projectId, module) {
        const url = this.urls.resolve("project-modules", projectId)
        return this.http.get(url).map((response) => {
            response.data = response.data.get(module);
            return response;
        });
    }

    store(projectId, module, data) {
        const url = this.urls.resolve("project-modules", projectId)
        let newData = {}
        newData[module] = data;
        return this.http.patch(url, newData);
    }
}
