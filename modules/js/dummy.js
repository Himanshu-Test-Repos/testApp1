function kdv_createChartWidget()
{
    var chartObj = kdv_createBarChartJSObject();
    
    var chartWidget = new kony.ui.Chart2D3D({
		  "id": "chartid",
		  "isVisible": true
		   }, {
		  "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
		  "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
		  "containerWeight": 100
		  },
		  chartObj);
    return chartWidget;
}

//creating chart object with chart properties and chart data...
function kdv_createBarChartJSObject () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 45,
            "title": {
                "text": "Bill History",
                "font": {
                    "size": [20],
                    "family": ["Verdana"],
                    "style": ["bold"],
                    "color": ["0xffffffff"]
                },
                "containerWt": 12,
                "background": {
                    "fillType": "gradient",
                    "color": ["0x070707ff", "0x323232FF"]
                }
            },
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "color": ["0x070707ff", "0x323232FF"]
                }
            },
            "axis": {
                "xAxis": {
                    "title": {
                        "text": "Bill Amount ($)",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["bold"],
                            "color": ["0xffffffff"]
                        },
                        "margin": [0, 0, 10, 0]
                    },
                    "scale": {
                        "minValue": 0,
                        "maxValue": 1000,
                        "majorInterval": 100
                    },
                    "axisLine": {
                        "visible": false
                    },
                    "labels": {
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xffffffff"]
                        }
                    }
                },
                "yAxis": {
                    "title": {
                        "text": "Monthly Bills",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["bold"],
                            "color": ["0xffffffff"]
                        }
                    },
                    "axisLine": {
                        "visible": false
                    },
                    "labels": {
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xffffffff"]
                        }
                    }
                }
            },
            "grid": {
                "type": ["xAxisMajorGrid", "xAxisMinorGrid"],
                "xAxisMajorGrid": {
                    "visible": false
                },
                "xAxisMinorGrid": {
                    "visible": false
                },
                "background": {
                    "fillType": "alternateColor",
                    "alternateColorPattern": "xMajorMinor",
                    "transparency": 80,
                    "color": ["0x323232FF", "0x070707FF"]
                }
            },
            "drawEntities": ["axis", "grid", "barChart"],
            "barChart": {
                "animations": {
                    "onInitAnimation": true
                },
                "bar": {
                    "width": [400],
                    "fillType": ["gradient"],
                    "gradientRatios": [
                                       [0, 40, 41, 60, 61, 100]
                                       ],
                    "color": [
                              ["0x9ab93eff", "0x9ab93eff", "0x98b83dff", "0x7aa629ff", "0x76a326ff", "0x76a326ff"]
                              ]
                },
                "border": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                },
                "dataLabels": {
                    "placement": "right",
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0xffffffff"]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Nov '12", "Dec '12", "Jan '13", "Feb '13", "Mar '13", "Apr '13", "May '13", "Jun '13", "July '13"]
            },
            "columnNames": {
                "values": ["c1"]
            },
            "data": {
                "c1": [500, 700, 350, 400, 650, 800, 750, 950, 650]
            }
        }
    };
    return chartInfo;
};