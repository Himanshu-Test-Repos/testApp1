//Bubblecahrt
function chartScreeen () {
	chart1.show();
}

//creating chart widget...
function kdv_createChartWidget()
{
    var chartObj = kdv_createbubbleChartJSObject();
    
    var chartWidget = new kony.ui.Chart2D3D({
		  "id": "chartid",
		  "isVisible": true
		   }, {
		  "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
		  "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
		  "containerWeight": 100
		  },
		  chartObj);
    chart1.box.add(chartWidget);
}

//creating chart object with chart properties and chart data...
function kdv_createbubbleChartJSObject()
{
    var chartJSObj ={
        "chartProperties":{
            "chartHeight": 50,
            "drawEntities":["axis","bubbleChart"],            
			"bubbleChart":{
				"columnId": [0, 1],
				"animations": {
					"onInitAnimation": true,
				},
				"dataAlignToAxis": ["primaryYAxis"],
				"plotMissingValues": "assumeZero",
				"plotPoints": {
					"marker": {
						"type": ["circle"],
						"fillType": "color",
					},
					"color": ["0x2a99ceff"],
					"transparency": [0],
					"size": [8]
				},
				"dataLabels": {
					"visible": true,
					"indicators": ["numberValue"],
					"separator": "space",
					"placement": "top",
					"orientationAngle": 0,
					"font": {
						"size": [14],
						"family": ["Verdana"],
						"style": ["Bold"],
						"color": ["0xaaaaaaff"],
						"transparency": [0]
					},
				}
			}
        },
        "chartData":{
            "columnNames":{
                "values":["col1","col2"]
            },
            "rowNames":{
                "values":["row1","row2","row3","row4"]
            },
            "data":{
                "col1":[200,300,100,400],
                "col2":[250,350,150,450]
            }
        }
    };
    return chartJSObj;
}