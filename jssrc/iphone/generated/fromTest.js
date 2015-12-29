//Form JS File
function fromTest_fromTest_init_seq0(eventobject, neworientation) {
    chartScreen.call(this);
};

function fromTest_button12538721982326895_onClick_seq0(eventobject) {
    chartScreen.call(this);
};

function fromTest_hbox4819286832326896_onClick_seq0(eventobject) {
    chartScreeen.call(this);
};

function addWidgetsfromTest() {
    var button12538721982326895 = new kony.ui.Button({
        "id": "button12538721982326895",
        "isVisible": true,
        "text": "old",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": fromTest_button12538721982326895_onClick_seq0
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
    var image24819286832326901 = new kony.ui.Image2({
        "id": "image24819286832326901",
        "isVisible": true,
        "src": "apprequirement.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var hbox4819286832326896 = new kony.ui.Box({
        "id": "hbox4819286832326896",
        "isVisible": true,
        "onClick": fromTest_hbox4819286832326896_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 55,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox4819286832326896.add(
    image24819286832326901);
    fromTest.add(
    button12538721982326895, hbox4819286832326896);
};

function fromTestGlobals() {
    var MenuId = [];
    fromTest = new kony.ui.Form2({
        "id": "fromTest",
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "init": fromTest_fromTest_init_seq0,
        "addWidgets": addWidgetsfromTest
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