import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps, ButtonSize, ButtonType } from './button';
 
const defaultProps = {
    onClick: jest.fn()
}

const testProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: 'klass'
}

describe('test Button component', () => {
    it('should render the correct default button', () => {
        const wrapper = render (<Button { ...defaultProps }>Nice</Button>)
        const element = wrapper.getByText('Nice')
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('btn btn-default');
        fireEvent.click(element);
        expect(defaultProps.onClick).toHaveBeenCalled();
    })
    it('should render the correct default base on different props', () => {
        const wrapper = render (<Button { ...testProps }>Nice</Button>)
        const element = wrapper.getByText('Nice')
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('btn-primary btn-lg klass');
    })
    it('should render a link when btnType aquals link and href is provided', () => {
        
    })
    it('should render disable button when disabled set to true', () => {
        
    })
})