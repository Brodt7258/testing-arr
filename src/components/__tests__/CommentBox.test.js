import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapped;
beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

afterEach(() => {
    wrapped.unmount();
})

it('has a textarea and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

describe('the textarea', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', { target: { value: 'test' } });
        wrapped.update();
    });

    it('has a textarea that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('test');
    });
    
    it('clears the textarea on form submission', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
    
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});
