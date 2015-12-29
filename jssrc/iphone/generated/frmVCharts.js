//Form JS File
function frmVCharts_frmVCharts_init_seq0(eventobject) {
    animation90H.call(this);
};

function frmVCharts_frmVCharts_postshow_seq0(eventobject) {};

function addWidgetsfrmVCharts() {
    var flexChart1 = new kony.ui.FlexContainer({
        "id": "flexChart1",
        "top": "0dp",
        "left": "2dp",
        "width": "98.89%",
        "height": "449dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[2,0]",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexChart1.setDefaultUnit(kony.flex.DP)
    flexChart1.add();
    frmVCharts.add(
    flexChart1);
};

function frmVChartsGlobals() {
    var MenuId = [];
    frmVCharts = new kony.ui.Form2({
        "id": "frmVCharts",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "init": frmVCharts_frmVCharts_init_seq0,
        "postShow": frmVCharts_frmVCharts_postshow_seq0,
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmVCharts
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
    frmVCharts.setDefaultUnit(kony.flex.DP);
};