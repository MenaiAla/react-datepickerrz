import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Arrow extends Component {
    render() {
        const { left, fill, double } = this.props
        return (
            <React.Fragment>
                {
                    double ?
                        <svg fill={fill} x="0px" y="0px" viewBox="0 0 480 480" style={left ? { transform: 'rotate(180deg)' } : {}}> 
                            <g>
                                <g>
                                    <path d="M475.922,229.325l-144-160c-3.072-3.392-7.36-5.312-11.904-5.312h-96c-6.304,0-12.032,3.712-14.624,9.472
                                        c-2.56,5.792-1.504,12.544,2.72,17.216l134.368,149.312l-134.368,149.28c-4.224,4.704-5.312,11.456-2.72,17.216
                                        c2.592,5.792,8.32,9.504,14.624,9.504h96c4.544,0,8.832-1.952,11.904-5.28l144-160
                                        C481.394,244.653,481.394,235.373,475.922,229.325z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path d="M267.922,229.325l-144-160c-3.072-3.392-7.36-5.312-11.904-5.312h-96c-6.304,0-12.032,3.712-14.624,9.472
                                        c-2.56,5.792-1.504,12.544,2.72,17.216l134.368,149.312L4.114,389.293c-4.224,4.704-5.312,11.456-2.72,17.216
                                        c2.592,5.792,8.32,9.504,14.624,9.504h96c4.544,0,8.832-1.952,11.904-5.28l144-160
                                        C273.394,244.653,273.394,235.373,267.922,229.325z"/>
                                </g>
                            </g>
                        </svg>
                        :
                        <svg fill={fill} x="0px" y="0px" viewBox="0 0 240 480" style={left ? { transform: 'rotate(180deg)' } : {}}>
                            <g>
                                <path d="M267.922,229.325l-144-160c-3.072-3.392-7.36-5.312-11.904-5.312h-96c-6.304,0-12.032,3.712-14.624,9.472
                                    c-2.56,5.792-1.504,12.544,2.72,17.216l134.368,149.312L4.114,389.293c-4.224,4.704-5.312,11.456-2.72,17.216
                                    c2.592,5.792,8.32,9.504,14.624,9.504h96c4.544,0,8.832-1.952,11.904-5.28l144-160
                                    C273.394,244.653,273.394,235.373,267.922,229.325z"/>
                            </g>
                        </svg>
                }
            </React.Fragment>
        )
    }
}

Arrow.defaultProps = {
    left: false,
    fill: "#212121",
    double: false,
}

Arrow.propTypes = {
    left: PropTypes.bool,
    fill: PropTypes.string,
    double: PropTypes.bool,
}
  
export default Arrow
