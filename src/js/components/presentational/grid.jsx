import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import classNames from 'classNames/bind';
import styles from './grid.css';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

class Grid extends Component{

    constructor(props) {
        super(props);
    }
    
    render(){
        const items = this.props.gridItems;
        return (
            items && <div className={cx('grid')} ref="grid">
                {items.map((elementArr,id)=>{
                    return (
                        <div className={cx('column','col-xs-12','col-sm-6','col-md-3','col-lg-3')} key={id}>
                            {elementArr.map((element)=>{
                                return <Well bsSize="small" key={element.id}>
                                            <a href={element.url} target="_blank">
                                                <img src={element.images.downsized.url} />
                                                <span>{element.title}</span>
                                            </a>
                                        </Well>
                            })}
                        </div>)
                    })
                }
            </div>
        )
    }
}

Grid.propTypes = {
    gridItems: PropTypes.array
};

export default Grid;