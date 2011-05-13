/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Skywriter.
 *
 * The Initial Developer of the Original Code is
 * Mozilla.
 * Portions created by the Initial Developer are Copyright (C) 2009
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *      Joe Walker (jwalker@mozilla.com) (original author)
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

define(function(require, exports, module) {

var t = require('test/assert');

var commands = require('gcli/tests/commands');
var Requisition = require('gcli/cli').Requisition;

exports.setup = function() {
    commands.setup();
};

exports.shutdown = function() {
    commands.shutdown();
};

exports.testSplitSimple = function() {
    var args;
    var requ = new Requisition();

    args = requ._tokenize('s');
    requ._split(args);
    t.verifyEqual(0, args.length);
    t.verifyEqual('s', requ.commandAssignment.getArg().text);
};

exports.testSplitFlatCommand = function() {
    var args;
    var requ = new Requisition();

    args = requ._tokenize('tsv');
    requ._split(args);
    t.verifyEqual([], args);
    t.verifyEqual('tsv', requ.commandAssignment.getValue().name);

    args = requ._tokenize('tsv a b');
    requ._split(args);
    t.verifyEqual('tsv', requ.commandAssignment.getValue().name);
    t.verifyEqual(2, args.length);
    t.verifyEqual('a', args[0].text);
    t.verifyEqual('b', args[1].text);
};

// TODO: add tests for sub commands

});