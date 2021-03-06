/*
 * Copyright (C) 2014-2017 Andrey Antukh <niwi@niwi.nz>
 * Copyright (C) 2014-2017 Jesús Espino Garcia <jespinog@gmail.com>
 * Copyright (C) 2014-2017 David Barragán Merino <bameda@dbarragan.com>
 * Copyright (C) 2014-2017 Alejandro Alonso <alejandro.alonso@kaleidos.net>
 * Copyright (C) 2014-2017 Juan Francisco Alcántara <juanfran.alcantara@kaleidos.net>
 * Copyright (C) 2014-2017 Xavi Julian <xavier.julian@kaleidos.net>
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
 * File: modules/user-settings/main.coffee
 */

import {Component} from "@angular/core";
import {Store} from "@ngrx/store";
import {IState} from "../../app.store";
import {Observable} from "rxjs";
import * as Immutable from "immutable";
import * as actions from "./user-settings.actions";

@Component({
    template: require("./mail-notifications.pug"),
})
export class MailNotificationsPage {
    notifyPolicies: Observable<Immutable.List<any>>;

    constructor(private store: Store<IState>) {
        this.notifyPolicies = this.store.select((state) => state.getIn(["user-settings", "notify-policies"]))
        this.store.dispatch(new actions.FetchNotifyPoliciesAction());
    }

    onPolicyChanged(policy, level) {
        this.store.dispatch(new actions.UpdateNotifyPolicyLevelAction(policy.get('id'), level));
    }
}
