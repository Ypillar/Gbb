

require.config({
    paths: {
        //echarts: 'http://echarts.baidu.com/build/dist'  百度在线地址  
        echarts: 'dist/'
    }
});

// 使用
require(
    [
        'echarts',
        'echarts/chart/line',

    ],
    function(ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('main'));

        var option = {
            title: {
                text: '折线图堆叠'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['螺纹', '高线', '普中板', 'H型钢', '焊管']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['26日', '27日', '28日', '29日', '30日', '6日', '9日']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: '螺纹',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            }, {
                name: '高线',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            }, {
                name: '普中板',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            }, {
                name: 'H型钢',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320]
            }, 
            {
                name: '焊管',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320]
            }]
        };




        // 为echarts对象加载数据 
        myChart.setOption(option);
    }
   

);

