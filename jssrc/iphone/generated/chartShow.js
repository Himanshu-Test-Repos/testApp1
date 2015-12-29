//Form JS File
function chartShow_btnChart_onClick_seq0(eventobject) {
    chartsView.call(this);
};

function addWidgetschartShow() {
    var btnChart = new kony.ui.Button({
        "id": "btnChart",
        "top": "192dp",
        "left": "98dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Button",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": chartShow_btnChart_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    chartShow.add(
    btnChart);
};

function chartShowGlobals() {
    var MenuId = [];
    chartShow = new kony.ui.Form2({
        "id": "chartShow",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetschartShow
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
    chartShow.setDefaultUnit(kony.flex.DP);
};