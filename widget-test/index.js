"use strict";

function App() {
    var viewModel = {
        env: ko.observable(),
        envVersion: ko.observable(),
        chatWidgetGuid: ko.observable(),
        customHeader: ko.observable(),
        cloud: ko.observable()
    };

    this.getViewModel = () => viewModel;

    this.startChat = function () {
        var path = viewModel.env() === 'staging' ? `https://cdn.newvoicemedia.com/native-omnichannel-widget/staging/${viewModel.envVersion()}/index.html` : `https://cdn.newvoicemedia.com/native-omnichannel-widget/v${viewModel.envVersion()}/index.html`
		var src = `${path}?chatWidgetId=${viewModel.chatWidgetGuid()}&cloud=${viewModel.cloud()}&header=${viewModel.customHeader()}`
		$('#chat-root').html(`<iframe id='vonage-chat-id' src=${src} allowtransparency="true" id="vonage-chat-widget" name="vonage-chat-widget" title="Vonage chat widget" scrolling="no" style="width: 100%; height: 100%; min-height: 0px; min-width: 0px; margin: 0px; padding: 0px; background-image: none; background-color: rgba(0, 0, 0, 0); border-width: 0px; float: none; position: absolute; transition: none 0s ease 0s !important;"></iframe>`);
    };
}

var app = new App();

$(function () {
    ko.applyBindings(app.getViewModel());
});
