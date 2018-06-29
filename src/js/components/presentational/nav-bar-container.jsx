import React, { Component } from 'react';
import classNames from 'classNames/bind';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import styles from './nav-bar-container.css';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

class NavBarContainer extends Component{

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {searchString: ''};
    }

    handleChange(event) {
        this.setState({searchString: event.target.value});
    }
    
    onFormSubmit(e) {
        e.preventDefault();
        this.props.onSearch(this.state.searchString);
    }

    render(){
        return (
        <div className={cx('nav-bar')}>
            <div className={cx('logo','col-md-3')}><span className={cx('pull-right')}>GIPHYUR</span></div>
            <form onSubmit={this.onFormSubmit} className={cx('col-md-6')}>
                <FormGroup>
                    <InputGroup>
                        <FormControl type="text" value={this.state.searchString} onChange={this.handleChange} />
                        <InputGroup.Button>
                            <Button type="submit">
                                <i className={cx('glyphicon','glyphicon-search')}></i>
                            </Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </form>
        </div>
        )
    }
}

NavBarContainer.propTypes = {
    onSearch: PropTypes.func
};

export default NavBarContainer;