import React from 'react';


import 'react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalBarSeries} from 'react-vis';

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

                <XYPlot  height={300} width={600}>
                    <VerticalBarSeries
                        data={[
                        {
                            x: 0,
                            y: 10
                        },
                        {
                            x: 1,
                            y: 10.681775986762196
                        },
                        {
                            x: 2,
                            y: 9.635801336632877
                        },
                        {
                            x: 3,
                            y: 9.22793399666694
                        },
                        {
                            x: 4,
                            y: 10.504333029249544
                        },
                        {
                            x: 5,
                            y: 11.592863069205547
                        },
                        {
                            x: 6,
                            y: 9.947023915395198
                        },
                        {
                            x: 7,
                            y: 10.245009550794029
                        },
                        {
                            x: 8,
                            y: 8.334480103894771
                        }
                        ]}
                        style={{}}
                    />
                    <VerticalBarSeries
                        data={[
                        {
                            x: 0,
                            y: 10
                        },
                        {
                            x: 1,
                            y: 10.38669428381387
                        },
                        {
                            x: 2,
                            y: 11.404285514420597
                        },
                        {
                            x: 3,
                            y: 12.729691609298733
                        },
                        {
                            x: 4,
                            y: 13.933558058168769
                        },
                        {
                            x: 5,
                            y: 14.143310190230983
                        },
                        {
                            x: 6,
                            y: 12.83853044612545
                        },
                        {
                            x: 7,
                            y: 13.983493588886663
                        },
                        {
                            x: 8,
                            y: 13.031341803189028
                        }
                        ]}
                        style={{}}
                    />
                    <VerticalBarSeries
                        data={[
                        {
                            x: 0,
                            y: 10
                        },
                        {
                            x: 1,
                            y: 8.448685934192767
                        },
                        {
                            x: 2,
                            y: 7.265749540157546
                        },
                        {
                            x: 3,
                            y: 8.331417285421509
                        },
                        {
                            x: 4,
                            y: 7.067287203427849
                        },
                        {
                            x: 5,
                            y: 6.3110979712322095
                        },
                        {
                            x: 6,
                            y: 7.128270930380114
                        },
                        {
                            x: 7,
                            y: 6.830334438360218
                        },
                        {
                            x: 8,
                            y: 7.3116262131247876
                        }
                        ]}
                        style={{}}
                    />
                </XYPlot>

            </div>
            

        </div>
    );
}     

export default CReactVis;
