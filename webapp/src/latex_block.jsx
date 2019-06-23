import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import katex from 'katex';

export default class LatexBlock extends React.PureComponent {
    static propTypes = {
        content: PropTypes.string.isRequired,
    };

    render() {
        try {
            const html = katex.renderToString(this.props.content, {throwOnError: false, displayMode: true});

            return (
                <div
                    className='post-body--code tex'
                    dangerouslySetInnerHTML={{__html: html}}
                />
            );
        } catch (e) {
            return (
                <div
                    className='post-body--code tex'
                >
                    <FormattedMessage
                        id='katex.error'
                        defaultMessage="Couldn't compile your Latex code. Please review the syntax and try again."
                    />
                </div>
            );
        }
    }
}
