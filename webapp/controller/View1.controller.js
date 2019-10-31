sap.ui.define([
	"sap/m/MessageToast" ,
	"sap/ui/core/mvc/Controller"
], function (MessageToast , Controller) {
	"use strict";
	return Controller.extend("verticallay.months.controller.View1", {
           	onShowHello: function (evt) {
			MessageToast.show(evt.getSource().getText() + " Pressed");
		}
		});
		
});