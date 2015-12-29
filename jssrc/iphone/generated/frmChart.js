//Form JS File
function frmChart_frmChart_init_seq0(eventobject, neworientation) {
    chartScreeeen.call(this);
};

function frmChart_button4625568632327114_onClick_seq0(eventobject) {
    chartScreeeen.call(this);
};

function addWidgetsfrmChart() {
    var button4625568632327114 = new kony.ui.Button({
        "id": "button4625568632327114",
        "isVisible": true,
        "text": "chart button",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmChart_button4625568632327114_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var hbox4625568632327113 = new kony.ui.Box({
        "id": "hbox4625568632327113",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox4625568632327113.add(
    button4625568632327114);
    frmChart.add(
    hbox4625568632327113);
};

function frmChartGlobals() {
    var MenuId = [];
    frmChart = new kony.ui.Form2({
        "id": "frmChart",
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "init": frmChart_frmChart_init_seq0,
        "addWidgets": addWidgetsfrmChart
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
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
};