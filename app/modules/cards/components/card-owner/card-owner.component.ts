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
 * File: card.controller.coffee
 */

import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {Store} from "@ngrx/store";
import * as Immutable from "immutable";
import {OpenLightboxAction} from "../../../../app.actions";
import {IState} from "../../../../app.store";

@Component({
    selector: "tg-card-owner",
    template: require("./card-owner.pug"),
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardOwner {
    @Input() item: Immutable.Map<string, any> = null;
    @Input() zoom: any;
    @Input() project: any;

    constructor(private store: Store<IState>) {}

    onClickAssignTo() {
        this.store.dispatch(new OpenLightboxAction("kanban.assign-to"));
    }

    onClickEdit() {
        this.store.dispatch(new OpenLightboxAction("kanban.edit"));
    }
}
