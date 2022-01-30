import React from 'react';


import 'react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalBarSeries, XAxis, YAxis, RadialChart} from 'react-vis';

const CReactVis = () => {

    const data = [
        {x: 0, y: 8},
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 9},
        {x: 4, y: 1},
        {x: 5, y: 7},
        {x: 6, y: 6},
        {x: 7, y: 3},
        {x: 8, y: 2},
        {x: 9, y: 0}
    ];
    return (
        <div className='reactvis_wrapper'>
            <div className='reactvis'>

                <XYPlot height={300} width={300}>
                <LineSeries data={data} />
                </XYPlot>

                <XYPlot  
                    height={300} 
                    width={600}
                    colorRange={[
                        '#e50f63',
                        '#DDB27C',
                        '#88572C'
                    ]}
                    colorScale="category"
                >
                    <XAxis/><YAxis/>
                    <VerticalBarSeries
                        data={
                            [
                                {
                                    x: 0,
                                    y: 10,
                                    color: 1,
                                },
                                {
                                    x: 1,
                                    y: 10,
                                    color: 1,
                                },
                                {
                                    x: 2,
                                    y: 11,
                                    color: 1,
                                },
                                {
                                    x: 3,
                                    y: 12,
                                    color: 1,
                                },
                                {
                                    x: 4,
                                    y: 14,
                                    color: 1,
                                },
                                {
                                    x: 5,
                                    y: 15,
                                    color: 1,
                                },
                                {
                                    x: 6,
                                    y: 13,
                                    color: 1,
                                },
                                {
                                    x: 7,
                                    y: 14,
                                    color: 1,
                                },
                                {
                                    x: 8,
                                    y: 13,
                                    color: 1,
                                }
                            ]
                        }
                        style={{}}
                    />
                    <VerticalBarSeries
                        data={[
                        {
                            x: 0,
                            y: 10,
                            color: 3,
                        },
                        {
                            x: 1,
                            y: 8.448685934192767,
                            color: 3,
                        },
                        {
                            x: 2,
                            y: 7.265749540157546,
                            color: 3,
                        },
                        {
                            x: 3,
                            y: 8.331417285421509,
                            color: 3,
                        },
                        {
                            x: 4,
                            y: 7.067287203427849,
                            color: 3,
                        },
                        {
                            x: 5,
                            y: 6.3110979712322095,
                            color: 3,
                        },
                        {
                            x: 6,
                            y: 7.128270930380114,
                            color: 3,
                        },
                        {
                            x: 7,
                            y: 6.830334438360218,
                            color: 3,
                        },
                        {
                            x: 8,
                            y: 7.3116262131247876,
                            color: 3,
                        }
                        ]}
                        style={{}}
                    />
                </XYPlot>

                <RadialChart  height={300} width={300}
                    data={[
                        {
                        angle: 16,
                        label: 'deck.gl'
                        },
                        {
                        angle: 17,
                        label: 'math.gl'
                        },
                        {
                        angle: 27,
                        label: 'probe.gl'
                        },
                        {
                        angle: 12,
                        label: 'vis.gl'
                        },
                        {
                        angle: 17,
                        label: 'react-map-gl'
                        }
                    ]}
                    labelsRadiusMultiplier={1.1}
                    labelsStyle={{
                        fontSize: 12
                    }}
                    showLabels
                />

            </div>
            

        </div>
    );
}     

export default CReactVis;
