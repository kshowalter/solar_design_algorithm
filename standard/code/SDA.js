var settings_constants = require('./settings/settings_constants.js');
var tables = require('./tables.js');
var f = require('functions');
var math = require('mathjs');
var sf = require('spreadsheet_functions');

var PI = function(){
  return math.pi;
};

var SDA = function(system_settings){
  var notes = system_settings.state.notes;

  var array = system_settings.state.system.array;
  var module = system_settings.state.system.module;
  var source = system_settings.state.system.source;
  var system = system_settings.state.system.module;
  var inverter = system_settings.state.system.inverter;
  var interconnection = system_settings.state.system.interconnection;
  var circuits = system_settings.state.system.circuits;
  var error_check = system_settings.state.system.error_check;

  var report_error = function(error_message){
    notes.errors.push(error_message);
  };

  ///////////////////////////////////////////
  /// calculations from standard document ///
  ///////////////////////////////////////////
  array.max_temp = 36;
  array.min_temp = -9;
  array.code_limit_max_voltage = 600;
  array.voltage_correction_factor = 1.14;

  ///////////////////////////////////////////////
  /// end calculations from standard document ///
  ///////////////////////////////////////////////

  return system_settings;
};

module.exports = SDA;
