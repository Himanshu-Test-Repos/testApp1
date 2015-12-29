//Form JS File
function frmVchart_frmVchart_init_seq0(eventobject) {
    kdv_createChartWidgettt.call(this);
};

function frmVchart_frmVchart_postshow_seq0(eventobject) {
    animation90.call(this);
};

function addWidgetsfrmVchart() {
    var flexChart = new kony.ui.FlexContainer({
        "id": "flexChart",
        "top": "1dp",
        "left": "2dp",
        "width": "100%",
        "height": "378dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[2,1]",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexChart.setDefaultUnit(kony.flex.DP)
    flexChart.add();
    frmVchart.add(
    flexChart);
};

function frmVchartGlobals() {
    var MenuId = [];
    frmVchart = new kony.ui.Form2({
        "id": "frmVchart",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "init": frmVchart_frmVchart_init_seq0,
        "postShow": frmVchart_frmVchart_postshow_seq0,
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmVchart
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
    frmVchart.setDefaultUnit(kony.flex.DP);
};