//Form JS File
function frmTest2_frmTest2_init_seq0(eventobject, neworientation) {
    chartScreeen.call(this);
};

function frmTest2_button4819286832326907_onClick_seq0(eventobject) {
    chartScreeen.call(this);
};

function addWidgetsfrmTest2() {
    var button4819286832326907 = new kony.ui.Button({
        "id": "button4819286832326907",
        "isVisible": true,
        "text": "Button",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmTest2_button4819286832326907_onClick_seq0
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
        "containerWeight": 6
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmTest2.add(
    button4819286832326907);
};

function frmTest2Globals() {
    var MenuId = [];
    frmTest2 = new kony.ui.Form2({
        "id": "frmTest2",
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "init": frmTest2_frmTest2_init_seq0,
        "addWidgets": addWidgetsfrmTest2
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